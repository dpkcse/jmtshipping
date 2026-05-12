import { NextResponse } from "next/server";
import net from "node:net";
import tls from "node:tls";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
};

type ValidContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

type SmtpResponse = {
  code: number;
  message: string;
};

const requiredFields: Array<keyof ValidContactPayload> = ["name", "company", "email", "phone", "service", "message"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  const validation = validatePayload(payload);

  if (!validation.ok) {
    return NextResponse.json({ message: validation.message }, { status: 400 });
  }

  const config = getSmtpConfig();

  if (!config) {
    console.error("Contact form email configuration is incomplete.");
    return NextResponse.json(
      { message: "Email service is not configured. Please contact JMT operations directly." },
      { status: 500 }
    );
  }

  try {
    await sendEmail(config, validation.data);
    return NextResponse.json({ message: "Thank you. Your inquiry has been sent to JMT operations." });
  } catch (error) {
    console.error("Contact form email delivery failed:", error);
    return NextResponse.json(
      { message: "Unable to send your inquiry right now. Please email ops@jmtshipping.com directly." },
      { status: 500 }
    );
  }
}

function validatePayload(payload: ContactPayload): { ok: true; data: ValidContactPayload } | { ok: false; message: string } {
  const data = requiredFields.reduce((current, field) => {
    const value = payload[field];
    current[field] = typeof value === "string" ? value.trim() : "";
    return current;
  }, {} as ValidContactPayload);

  const missingField = requiredFields.find((field) => data[field].length === 0);

  if (missingField) {
    return { ok: false, message: `Please provide your ${missingField}.` };
  }

  if (!emailPattern.test(data.email)) {
    return { ok: false, message: "Please provide a valid email address." };
  }

  return { ok: true, data };
}

function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL_TO;
  const port = Number(process.env.SMTP_PORT ?? "587");

  if (!host || !user || !pass || !from || !to || Number.isNaN(port)) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    user,
    pass,
    from,
    to
  };
}

async function sendEmail(config: SmtpConfig, payload: ValidContactPayload) {
  const client = new SmtpClient(config);
  const subject = `JMT website inquiry: ${payload.service}`;
  const text = formatPlainText(payload);
  const html = formatHtml(payload);
  const message = buildMessage({ from: config.from, to: config.to, replyTo: payload.email, subject, text, html });

  try {
    await client.connect();
    await client.sendMail(config.from, config.to, message);
  } finally {
    client.close();
  }
}

function formatPlainText(payload: ValidContactPayload) {
  return [
    "New JMT website inquiry",
    "",
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Service: ${payload.service}`,
    "",
    "Message:",
    payload.message
  ].join("\n");
}

function formatHtml(payload: ValidContactPayload) {
  const rows: Array<[string, string]> = [
    ["Name", payload.name],
    ["Company", payload.company],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Service", payload.service]
  ];

  return `
    <h1>New JMT website inquiry</h1>
    <table cellpadding="8" cellspacing="0" border="0">
      ${rows
        .map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`)
        .join("")}
    </table>
    <h2>Message</h2>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
  `;
}

function buildMessage({
  from,
  to,
  replyTo,
  subject,
  text,
  html
}: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const boundary = `jmt-${Date.now().toString(36)}`;
  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${encodeHeader(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`
  ];

  return [
    ...headers,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    text,
    `--${boundary}`,
    "Content-Type: text/html; charset=utf-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    html,
    `--${boundary}--`,
    ""
  ].join("\r\n");
}

function encodeHeader(value: string) {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

class SmtpClient {
  private socket: net.Socket | tls.TLSSocket | null = null;
  private buffer = "";
  private pendingResponses: SmtpResponse[] = [];
  private responseResolver: ((response: SmtpResponse) => void) | null = null;
  private responseLines: string[] = [];

  constructor(private readonly config: SmtpConfig) {}

  async connect() {
    await this.openSocket();
    await this.expect([220]);
    await this.command(`EHLO ${this.hostname()}`, [250]);

    if (!this.config.secure) {
      await this.command("STARTTLS", [220]);
      await this.upgradeToTls();
      await this.command(`EHLO ${this.hostname()}`, [250]);
    }

    await this.command(`AUTH PLAIN ${Buffer.from(`\0${this.config.user}\0${this.config.pass}`).toString("base64")}`, [235]);
  }

  async sendMail(from: string, to: string, message: string) {
    await this.command(`MAIL FROM:<${extractEmailAddress(from)}>`, [250]);
    await this.command(`RCPT TO:<${extractEmailAddress(to)}>`, [250, 251]);
    await this.command("DATA", [354]);
    await this.command(`${message.replace(/\r?\n\./g, "\r\n..")}\r\n.`, [250]);
    await this.command("QUIT", [221]);
  }

  close() {
    this.socket?.destroy();
    this.socket = null;
  }

  private openSocket() {
    return new Promise<void>((resolve, reject) => {
      const onError = (error: Error) => reject(error);
      const socket = this.config.secure
        ? tls.connect(this.config.port, this.config.host, { servername: this.config.host })
        : net.connect(this.config.port, this.config.host);

      socket.setEncoding("utf8");
      socket.setTimeout(15000, () => socket.destroy(new Error("SMTP connection timed out.")));
      socket.once("error", onError);
      socket.once(this.config.secure ? "secureConnect" : "connect", () => {
        socket.off("error", onError);
        this.attachSocket(socket);
        resolve();
      });
    });
  }

  private upgradeToTls() {
    return new Promise<void>((resolve, reject) => {
      const currentSocket = this.socket;

      if (!currentSocket) {
        reject(new Error("SMTP socket is not connected."));
        return;
      }

      currentSocket.removeAllListeners("data");
      const secureSocket = tls.connect({ socket: currentSocket, servername: this.config.host }, () => {
        this.attachSocket(secureSocket);
        resolve();
      });
      secureSocket.setEncoding("utf8");
      secureSocket.once("error", reject);
    });
  }

  private attachSocket(socket: net.Socket | tls.TLSSocket) {
    this.socket = socket;
    this.buffer = "";
    this.responseLines = [];
    socket.on("data", (chunk: string) => this.handleData(chunk));
  }

  private command(command: string, expectedCodes: number[]) {
    this.socket?.write(`${command}\r\n`);
    return this.expect(expectedCodes);
  }

  private expect(expectedCodes: number[]) {
    return new Promise<SmtpResponse>((resolve, reject) => {
      const handleResponse = (response: SmtpResponse) => {
        if (expectedCodes.includes(response.code)) {
          resolve(response);
        } else {
          reject(new Error(`Unexpected SMTP response ${response.code}: ${response.message}`));
        }
      };

      const queuedResponse = this.pendingResponses.shift();

      if (queuedResponse) {
        handleResponse(queuedResponse);
        return;
      }

      this.responseResolver = handleResponse;
    });
  }

  private handleData(chunk: string) {
    this.buffer += chunk;

    const lines = this.buffer.split(/\r?\n/);
    this.buffer = lines.pop() ?? "";

    for (const line of lines) {
      this.responseLines.push(line);

      if (/^\d{3} /.test(line)) {
        const code = Number(line.slice(0, 3));
        const response = { code, message: this.responseLines.join("\n") };
        this.responseLines = [];

        if (this.responseResolver) {
          const resolver = this.responseResolver;
          this.responseResolver = null;
          resolver(response);
        } else {
          this.pendingResponses.push(response);
        }
      }
    }
  }

  private hostname() {
    return process.env.SMTP_HELO_HOST ?? "jmtshipping.com";
  }
}

function extractEmailAddress(value: string) {
  const match = value.match(/<([^>]+)>/);
  return match?.[1] ?? value;
}
