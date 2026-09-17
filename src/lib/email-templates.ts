// lib/email-templates.ts
//
// HTML email templates used by app/api/contact/route.ts
// The logo is referenced as an absolute URL (public/logo.png served by Next.js),
// so it renders correctly inside email clients (Gmail, Outlook, etc. cannot load
// relative paths like "/logo.png").

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gurur.in";
const LOGO_URL = `${SITE_URL}/logo.png`;

const NAVY = "#0b1f3a";
const GOLD = "#c9a24b";

function emailShell(bodyHtml: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Gurur Consultancy</title>
    </head>
    <body style="margin:0;padding:0;background-color:#f5f3ee;font-family:Arial, Helvetica, sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ee;padding:32px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #e5e1d8;max-width:600px;width:100%;">
              <!-- Header -->
              <tr>
                <td style="background-color:${NAVY};padding:24px 32px;text-align:left;">
                  <img src="${LOGO_URL}" alt="Gurur Consultancy" height="36" style="display:block;height:36px;width:auto;" />
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="padding:32px;">
                  ${bodyHtml}
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="background-color:${NAVY};padding:20px 32px;text-align:center;">
                  <p style="margin:0;color:#ffffffb3;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;">
                    Gurur Consultancy Services LLP &middot; www.gurur.in
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #efece4;font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:#8a8577;width:120px;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:8px 0;border-bottom:1px solid #efece4;font-size:14px;color:${NAVY};vertical-align:top;">
        ${value}
      </td>
    </tr>
  `;
}

/** Email sent to info@gurur.in whenever someone submits the contact form */
export function adminNotificationTemplate(data: ContactFormData) {
  const body = `
    <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:${GOLD};font-weight:bold;">
      New Enquiry
    </p>
    <h1 style="margin:0 0 20px;font-size:22px;color:${NAVY};font-family:Georgia, 'Times New Roman', serif;">
      You've received a new enquiry
    </h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
      ${row("Name", data.name)}
      ${row("Email", data.email)}
      ${row("Phone", data.phone)}
      ${row("Company", data.company)}
      ${row("Service", data.service)}
    </table>
    <p style="margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:#8a8577;">
      Message
    </p>
    <p style="margin:0;font-size:14px;line-height:1.6;color:${NAVY};white-space:pre-wrap;">
      ${data.message}
    </p>
  `;
  return emailShell(body);
}

/** Auto-reply sent to the person who filled in the form */
export function userAutoReplyTemplate(data: ContactFormData) {
  const body = `
    <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:${GOLD};font-weight:bold;">
      Thank You
    </p>
    <h1 style="margin:0 0 16px;font-size:22px;color:${NAVY};font-family:Georgia, 'Times New Roman', serif;">
      We've received your enquiry, ${data.name.split(" ")[0]}
    </h1>
    <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:${NAVY};">
      Thank you for reaching out to Gurur Consultancy Services LLP. Our team has received
      your message and will get back to you within one business day.
    </p>
    <p style="margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:#8a8577;">
      Your message
    </p>
    <p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:${NAVY};white-space:pre-wrap;background:#f9f7f2;padding:12px 16px;border:1px solid #efece4;">
      ${data.message}
    </p>
    <p style="margin:0;font-size:14px;line-height:1.6;color:${NAVY};">
      In the meantime, feel free to reply directly to this email if there's anything
      else you'd like to add.
    </p>
  `;
  return emailShell(body);
}