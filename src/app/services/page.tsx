"use client";

import { Check, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const packages = [
  {
    id: "brand-launch",
    title: "Brand Launch Package",
    price: "$1,500",
    priceNote: "Starting from",
    description: "Complete branding + website + social setup to launch strong.",
    popular: false,
    paymentLink: "https://flutterwave.com/pay/hotabjk9feog", // ← Paste your real link
    includes: [
      "Brand strategy & positioning",
      "Logo & visual identity system",
      "Custom responsive website",
      "Social media setup + templates",
      "Brand guidelines",
      "Launch content package",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Package",
    price: "$3,000",
    priceNote: "per month",
    description: "SEO, social, paid ads and email that drive real growth.",
    popular: true,
    paymentLink: "https://flutterwave.com/pay/emo82wmkvhk3",
    includes: [
      "SEO strategy & implementation",
      "Social media management",
      "Paid ads management",
      "Email marketing flows",
      "Monthly analytics report",
      "Conversion optimization",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Growth Package",
    price: "$2,450",
    priceNote: "Starting from",
    description: "High-converting store + ads + product systems.",
    popular: false,
    paymentLink: "https://flutterwave.com/pay/2ljo12eujwgy",
    includes: [
      "Custom e-commerce development",
      "Product photography direction",
      "Technical SEO",
      "Paid acquisition setup",
      "Email & cart recovery flows",
      "Performance dashboard",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Digital Presence",
    price: "$8,000",
    priceNote: "Starting from",
    description: "Professional website + brand system for established companies.",
    popular: false,
    paymentLink: "https://flutterwave.com/pay/8u4uxmqbdx1d",
    includes: [
      "Corporate website",
      "Company profile design",
      "Brand refinement",
      "Content strategy",
      "Digital guidelines",
      "3 months support",
    ],
  },
  {
    id: "startup",
    title: "Startup Growth Package",
    price: "$1,150",
    priceNote: "Starting from",
    description: "Branding + MVP website + go-to-market system.",
    popular: false,
    paymentLink: "https://flutterwave.com/pay/endsiku12yfa",
    includes: [
      "Startup branding",
      "MVP website / web app",
      "Go-to-market strategy",
      "Lead generation system",
      "Investor-ready materials",
      "Growth roadmap",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Transformation",
    price: "Custom",
    priceNote: "Talk to us",
    description: "Software, automation, analytics and consulting at scale.",
    popular: false,
    paymentLink: "https://wa.me/2348066945800?text=Hi%20DAMMYOUNG,%20I%20need%20a%20custom%20Enterprise%20quote",
    includes: [
      "Digital transformation roadmap",
      "Custom software & integrations",
      "Process automation",
      "Advanced analytics",
      "Change management",
      "Dedicated partnership",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-orange-500 font-medium mb-4">Services & Pricing</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Clear packages.<br />Real results.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing in USD for international clients.  
              Click “Get Started” to pay securely via Flutterwave.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.id} delay={index * 0.08}>
                <div
                  className={`relative h-full rounded-3xl border p-8 flex flex-col ${
                    pkg.popular
                      ? "border-orange-400 shadow-xl scale-[1.02]"
                      : "border-gray-200"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>

                  <div className="mb-8">
                    <span className="text-sm text-gray-500">{pkg.priceNote}</span>
                    <div className="text-4xl font-bold text-gray-900 mt-1">{pkg.price}</div>
                  </div>

                  <ul className="space-y-3 mb-10 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                        <Check size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={pkg.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-full font-semibold text-center transition flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:opacity-90"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-16 text-gray-500 text-sm">
            All prices are in USD. Secure payments powered by Flutterwave.
          </div>
        </div>
      </section>
    </>
  );
}