import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gurur Consultancy Services LLP | Business, Compliance & Government Tendering",
    template: "%s | Gurur Consultancy Services LLP",
  },
  description:
    "Gurur Consultancy Services LLP helps Indian businesses with company registration, GST & MSME, GeM & government procurement, ISO certifications, trademarks, NGO/CSR and tender documentation — all under one roof.",
  keywords: [
    "Gurur Consultancy",
    "Business Registration India",
    "GST Registration",
    "MSME Udyam",
    "GeM Registration",
    "Government Tenders India",
    "ISO Certification",
    "Trademark Registration",
    "NGO Registration",
    "CSR Registration",
  ],
  authors: [{ name: "Gurur Consultancy Services LLP" }],
  metadataBase: new URL("https://gurur.in"),
  openGraph: {
    title: "Gurur Consultancy Services LLP",
    description:
      "Your Business. Our Expertise. Your Growth. — Comprehensive business, compliance, certification & government tendering solutions under one roof.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurur Consultancy Services LLP",
    description:
      "Your Business. Our Expertise. Your Growth. — Comprehensive business, compliance, certification & government tendering solutions under one roof.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} antialiased bg-warmwhite text-navy`}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <WhatsAppFab />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
