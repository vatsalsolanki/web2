// app/api/contact/route.ts
//
// POST /api/contact
// Sends two emails via Resend:
//   1. Notification to info@gurur.in (the business)
//   2. Auto-reply confirmation to the person who filled the form
//
// Requires env vars (see .env.local.example below):
//   RESEND_API_KEY
//   RESEND_FROM_EMAIL      e.g. "Gurur Consultancy <no-reply@gurur.in>"  (must be a verified domain in Resend)
//   CONTACT_NOTIFY_EMAIL   e.g. "info@gurur.in"
//   NEXT_PUBLIC_SITE_URL   e.g. "https://www.gurur.in"  (used to build the logo URL in emails)

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  adminNotificationTemplate,
  userAutoReplyTemplate,
  type ContactFormData,
} from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Gurur Consultancy <no-reply@gurur.in>";
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL || "info@gurur.in";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactFormData>;

    const { name, email, phone, company, service, message } = body;

    // --- Basic server-side validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const data: ContactFormData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      company: company?.trim(),
      service: service?.trim(),
      message: message.trim(),
    };

    // --- Send both emails in parallel ---
    const [adminResult, userResult] = await Promise.allSettled([
      resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        replyTo: data.email,
        subject: `New enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
        html: adminNotificationTemplate(data),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: data.email,
        subject: "We've received your enquiry — Gurur Consultancy",
        html: userAutoReplyTemplate(data),
      }),
    ]);

    // If the admin notification failed, treat the whole request as failed —
    // that's the email that actually matters for follow-up.
    if (adminResult.status === "rejected") {
      console.error("Failed to send admin notification:", adminResult.reason);
      return NextResponse.json(
        { error: "Something went wrong sending your enquiry. Please try again." },
        { status: 502 }
      );
    }

    if (userResult.status === "rejected") {
      // Don't fail the whole request just because the auto-reply didn't go out —
      // the business still received the enquiry. Just log it.
      console.error("Failed to send user auto-reply:", userResult.reason);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}