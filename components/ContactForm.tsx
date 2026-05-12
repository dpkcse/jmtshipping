"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

const initialFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "Agency support",
  message: ""
};

const requiredFields: Array<keyof typeof initialFormState> = ["name", "company", "email", "phone", "service", "message"];
const fieldLabels: Record<keyof typeof initialFormState, string> = {
  name: "name",
  company: "company",
  email: "email address",
  phone: "phone number",
  service: "service",
  message: "message"
};
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const serviceOptions = [
  "Agency support",
  "Logistics / STS",
  "Crew / documentation",
  "Survey / inspection",
  "Marine supplies",
  "Emergency operations"
];

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<FormStatus>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const missingField = requiredFields.find((field) => formData[field].trim().length === 0);

    if (missingField) {
      setStatus({ type: "error", message: `Please provide your ${fieldLabels[missingField]}.` });
      return;
    }

    if (!emailPattern.test(formData.email.trim())) {
      setStatus({ type: "error", message: "Please provide a valid email address." });
      return;
    }

    const subject = `JMT inquiry: ${formData.service}`;
    const body = [
      "New inquiry submitted from the JMT website:",
      "",
      `Name: ${formData.name.trim()}`,
      `Company: ${formData.company.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Service: ${formData.service.trim()}`,
      "",
      "Message:",
      formData.message.trim()
    ].join("\n");
    const mailtoHref = `mailto:${site.emails[1]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus({
      type: "success",
      message: "Your email app is opening with this inquiry. Please review and send the message to JMT operations."
    });
    setIsSubmitting(true);
    window.location.href = mailtoHref;
    window.setTimeout(() => setIsSubmitting(false), 1200);
  };

  return (
    <form className="premium-card p-5 sm:p-8" onSubmit={handleSubmit} aria-busy={isSubmitting} noValidate>
      <div className="mb-7 border-b border-slate-200 pb-6">
        <p className="section-eyebrow">Inquiry details</p>
        <h2 className="text-2xl font-black tracking-tight text-navy">Tell us how JMT can support your operation.</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor="name" className="grid gap-2 text-sm font-black text-navy">
          <span>Name <span className="text-red-600">*</span></span>
          <input
            id="name"
            className="input-field"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            disabled={isSubmitting}
            required
          />
        </label>
        <label htmlFor="company" className="grid gap-2 text-sm font-black text-navy">
          <span>Company <span className="text-red-600">*</span></span>
          <input
            id="company"
            className="input-field"
            name="company"
            placeholder="Company / principal"
            autoComplete="organization"
            value={formData.company}
            onChange={(event) => updateField("company", event.target.value)}
            disabled={isSubmitting}
            required
          />
        </label>
        <label htmlFor="email" className="grid gap-2 text-sm font-black text-navy">
          <span>Email <span className="text-red-600">*</span></span>
          <input
            id="email"
            className="input-field"
            type="email"
            name="email"
            placeholder="name@company.com"
            autoComplete="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            disabled={isSubmitting}
            required
          />
        </label>
        <label htmlFor="phone" className="grid gap-2 text-sm font-black text-navy">
          <span>Phone <span className="text-red-600">*</span></span>
          <input
            id="phone"
            className="input-field"
            type="tel"
            name="phone"
            placeholder="+880 ..."
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            disabled={isSubmitting}
            required
          />
        </label>
        <label htmlFor="service" className="grid gap-2 text-sm font-black text-navy sm:col-span-2">
          <span>Service <span className="text-red-600">*</span></span>
          <select
            id="service"
            className="input-field"
            name="service"
            value={formData.service}
            onChange={(event) => updateField("service", event.target.value)}
            disabled={isSubmitting}
            required
          >
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label htmlFor="message" className="mt-5 grid gap-2 text-sm font-black text-navy">
        <span>Message <span className="text-red-600">*</span></span>
        <textarea
          id="message"
          className="input-field min-h-36"
          name="message"
          placeholder="Share vessel name, ETA, port, service required, and any urgent instructions."
          rows={6}
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          disabled={isSubmitting}
          required
        />
      </label>

      {status ? (
        <p
          className={`mt-5 rounded-2xl px-4 py-3 text-sm font-semibold leading-6 ${
            status.type === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"
          }`}
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </p>
      ) : null}

      <button type="submit" className="btn-primary mt-6 w-full gap-3 sm:w-auto" disabled={isSubmitting} aria-disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy/30 border-t-navy" aria-hidden="true" />
            Opening email app...
          </>
        ) : (
          "Send Inquiry"
        )}
      </button>
      <p className="mt-4 rounded-2xl bg-harbor/60 px-4 py-3 text-xs font-semibold leading-6 text-slate-600">
        This static website opens your email app with the inquiry details. For urgent matters, email ops@jmtshipping.com directly.
      </p>
    </form>
  );
}
