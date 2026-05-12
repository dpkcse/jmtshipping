"use client";

import { FormEvent, useState } from "react";

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
      setStatus({ type: "error", message: `Please provide your ${missingField}.` });
      return;
    }

    if (!emailPattern.test(formData.email.trim())) {
      setStatus({ type: "error", message: "Please provide a valid email address." });
      return;
    }

    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send your inquiry. Please try again.");
      }

      setFormData(initialFormState);
      setStatus({
        type: "success",
        message: result.message ?? "Thank you. Your inquiry has been sent to JMT operations."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your inquiry. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="premium-card p-5 sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="mb-7 border-b border-slate-200 pb-6">
        <p className="section-eyebrow">Inquiry details</p>
        <h2 className="text-2xl font-black tracking-tight text-navy">Tell us how JMT can support your operation.</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor="name" className="grid gap-2 text-sm font-black text-navy">
          Name
          <input
            id="name"
            className="input-field"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
          />
        </label>
        <label htmlFor="company" className="grid gap-2 text-sm font-black text-navy">
          Company
          <input
            id="company"
            className="input-field"
            name="company"
            placeholder="Company / principal"
            autoComplete="organization"
            value={formData.company}
            onChange={(event) => updateField("company", event.target.value)}
            required
          />
        </label>
        <label htmlFor="email" className="grid gap-2 text-sm font-black text-navy">
          Email
          <input
            id="email"
            className="input-field"
            type="email"
            name="email"
            placeholder="name@company.com"
            autoComplete="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
          />
        </label>
        <label htmlFor="phone" className="grid gap-2 text-sm font-black text-navy">
          Phone
          <input
            id="phone"
            className="input-field"
            type="tel"
            name="phone"
            placeholder="+880 ..."
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            required
          />
        </label>
        <label htmlFor="service" className="grid gap-2 text-sm font-black text-navy sm:col-span-2">
          Service
          <select
            id="service"
            className="input-field"
            name="service"
            value={formData.service}
            onChange={(event) => updateField("service", event.target.value)}
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
        Message
        <textarea
          id="message"
          className="input-field min-h-36"
          name="message"
          placeholder="Share vessel name, ETA, port, service required, and any urgent instructions."
          rows={6}
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
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

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto" disabled={isSubmitting} aria-disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>
      <p className="mt-4 rounded-2xl bg-harbor/60 px-4 py-3 text-xs font-semibold leading-6 text-slate-600">
        Your inquiry is sent securely to JMT operations. For urgent matters, email ops@jmtshipping.com directly.
      </p>
    </form>
  );
}
