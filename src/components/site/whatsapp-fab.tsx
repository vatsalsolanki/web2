"use client";

import { CONTACT_DETAILS } from "@/lib/site-data";

/**
 * WhatsAppFab — floating action button, bottom-right.
 * Uses WhatsApp-green as the primary fill with a gold accent ring
 * so it sits coherently with the brand palette.
 */
export function WhatsAppFab() {
  return (
    <a
      href={CONTACT_DETAILS.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-[0_12px_30px_-8px_rgba(11,31,58,0.5)] ring-2 ring-gold/40 transition-all hover:scale-105 hover:ring-gold sm:bottom-6 sm:right-6"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.003 3.2c-7.05 0-12.8 5.74-12.8 12.8 0 2.27.6 4.41 1.65 6.28L3.2 28.8l6.71-1.75a12.71 12.71 0 0 0 6.1 1.55h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.64-3.75-9.06A12.72 12.72 0 0 0 16 3.2zm0 23.04h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.98 1.04 1.06-3.88-.25-.4a10.55 10.55 0 0 1-1.62-5.65c0-5.86 4.77-10.62 10.63-10.62 2.84 0 5.51 1.11 7.52 3.12a10.55 10.55 0 0 1 3.11 7.51c0 5.86-4.77 10.62-10.62 10.62zm5.83-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.28 3.26.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.79.66.75.24 1.43.21 1.97.13.6-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z" />
      </svg>
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded bg-navy px-3 py-2 font-sans text-xs text-white shadow-md sm:group-hover:block">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
