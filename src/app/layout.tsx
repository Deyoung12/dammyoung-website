import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { CookieConsent } from "@/components/CookiesConsent";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "DAMMYOUNG | EDGE – Engineering Growth Designing Experience",
    template: "%s | DAMMYOUNG",
  },
  description: "Full-service digital agency specializing in e-commerce, headless commerce, branding and growth systems for ambitious international brands.",
  keywords: ["digital agency", "headless commerce", "Shopify", "e-commerce development", "branding", "growth marketing"],
  authors: [{ name: "DAMMYOUNG" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dammyoung.com",
    siteName: "DAMMYOUNG",
    title: "DAMMYOUNG | Engineering Growth Designing Experience",
    description: "We build scalable digital systems that generate measurable revenue.",
    images: [
      {
        url: "/og-image.jpg", // add a 1200x630 image in public/
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAMMYOUNG",
    description: "Engineering Growth. Designing Experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-sans bg-white text-gray-900 antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
        <CookieConsent />
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-169MMLC6C3"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-169MMLC6C3');
  `}
</Script>
        <Script
  defer
  data-domain="dammyoung.com"   // ← change to your real domain later
  src="https://plausible.io/js/script.js"
/>
      </body>
    </html>
  );
}