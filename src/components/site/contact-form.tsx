"use client";

import { useState, type FormEvent } from "react";
import { SERVICE_CATEGORIES } from "@/lib/site-data";
import { Check, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm({ className }: { className?: string }) {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  // Distinguishes "please fix the highlighted fields" (client validation)
  // from a real submit failure (network/server), which needs its own message.
  const [serverError, setServerError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, val: FormState[K]) {
    setValues((v) => ({ ...v, [key]: val }));
    if (errors[key]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name";
    if (!values.phone.trim()) e.phone = "Please enter your phone number";
    else if (!/^[+\d][\d\s-]{7,}$/.test(values.phone))
      e.phone = "Please enter a valid phone number";
    if (!values.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Please enter a valid email";
    if (!values.service) e.service = "Please choose a service";
    if (!values.message.trim()) e.message = "Tell us briefly what you need";
    return e;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setValues(EMPTY);
    } catch (err) {
      setErrors({});
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center bg-white p-10 text-center",
          className,
        )}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
          <Check className="h-7 w-7 text-gold-600" strokeWidth={2.5} />
        </div>
        <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
          Enquiry received
        </h3>
        <p className="mt-2 max-w-sm font-sans text-sm text-slatey">
          Thank you for reaching out. Our team will get back to you within one
          business day. For anything urgent, please WhatsApp us using the
          floating button.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-sans text-sm font-semibold uppercase tracking-widest-2 text-navy transition-colors hover:text-gold-700"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full border bg-white px-4 py-3 font-sans text-sm text-navy placeholder:text-slatey/60 transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold";

  const labelClass =
    "block font-mono text-[11px] uppercase tracking-widest-2 text-slatey";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("bg-white p-6 sm:p-8", className)}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name <span className="text-gold-600">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={cn(fieldClass, errors.name ? "border-destructive" : "border-hairline")}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <FieldError msg={errors.name} />}
        </div>

        <div>
          <label htmlFor="cf-company" className={labelClass}>
            Company Name
          </label>
          <input
            id="cf-company"
            type="text"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className={cn(fieldClass, "border-hairline")}
            placeholder="Optional"
          />
        </div>

        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            Phone <span className="text-gold-600">*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={cn(fieldClass, errors.phone ? "border-destructive" : "border-hairline")}
            placeholder="+91 90000 00000"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <FieldError msg={errors.phone} />}
        </div>

        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email <span className="text-gold-600">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={cn(fieldClass, errors.email ? "border-destructive" : "border-hairline")}
            placeholder="you@company.in"
            aria-invalid={!!errors.email}
          />
          {errors.email && <FieldError msg={errors.email} />}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="cf-service" className={labelClass}>
            Service Interested In <span className="text-gold-600">*</span>
          </label>
          <select
            id="cf-service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className={cn(fieldClass, errors.service ? "border-destructive" : "border-hairline")}
            aria-invalid={!!errors.service}
          >
            <option value="">Choose a category…</option>
            {SERVICE_CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
          {errors.service && <FieldError msg={errors.service} />}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={labelClass}>
            Message <span className="text-gold-600">*</span>
          </label>
          <textarea
            id="cf-message"
            rows={5}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(
              fieldClass,
              "resize-y",
              errors.message ? "border-destructive" : "border-hairline",
            )}
            placeholder="Tell us what your business does, where you want to go, and what challenge you are facing."
            aria-invalid={!!errors.message}
          />
          {errors.message && <FieldError msg={errors.message} />}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest-2 text-slatey">
          We reply within 1 business day
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 bg-gold px-7 py-3 font-semibold text-navy transition-all hover:bg-gold-300 hover:shadow-[0_12px_30px_-8px_rgba(201,162,77,0.65)] disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>Send Enquiry</>
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 font-sans text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          {serverError
            ? serverError
            : "Please fix the highlighted fields and try again."}
        </p>
      )}
    </form>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 font-sans text-xs text-destructive">
      <AlertCircle className="h-3 w-3" />
      {msg}
    </p>
  );
}