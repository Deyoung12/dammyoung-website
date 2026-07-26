"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Layers, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-orange-500 font-medium mb-4">About DAMMYOUNG</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
              The Young<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                Shall Grow
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              We are a performance-first digital growth engineering hub.  
              Using our EDGE framework — Engineering Growth, Designing Experience —  
              we build systems that turn ambitious brands into measurable revenue machines.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We empower the next generation of creators and entrepreneurs with practical digital solutions.  
                From high-conversion websites and e-commerce infrastructure to automated growth systems,  
                everything we build is engineered to deliver real results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don’t just design pretty websites — we deploy revenue infrastructure that is  
                instrumented, tested, and wired to convert.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="DAMMYOUNG"
                  width={180}
                  height={180}
                  className="drop-shadow-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Headless Commerce Emphasis */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-orange-500 font-medium mb-3">Our Specialty</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Headless Commerce Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build modern, ultra-fast storefronts that are completely separated from the backend.  
              This gives brands total design freedom, superior performance, and higher conversion rates.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers size={28} className="text-orange-500" />,
                title: "True Design Freedom",
                text: "No theme limitations. We create completely custom experiences using Next.js + Shopify / custom backends.",
              },
              {
                icon: <Zap size={28} className="text-orange-500" />,
                title: "Blazing Performance",
                text: "Lightning-fast load times, excellent Core Web Vitals, and higher Google rankings.",
              },
              {
                icon: <Code2 size={28} className="text-orange-500" />,
                title: "Future-Proof Architecture",
                text: "Easily scale, add new sales channels, and integrate any tool without rebuilding the entire store.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-gray-200 bg-white h-full hover:border-orange-300 transition">
                  <div className="mb-5">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values + Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What drives us</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: "Engineer-led", text: "Never outsourced. Every project is handled by our core team." },
              { title: "Conversion-first", text: "Beautiful is not enough. We design and build for measurable results." },
              { title: "Performance budgeted", text: "Speed, SEO and technical excellence from day one." },
              { title: "Transparent growth", text: "Weekly telemetry so you always know the impact." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-gray-200 bg-white h-full">
                  <CheckCircle2 className="text-orange-500 mb-4" size={26} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Simple Team / Expertise */}
          <AnimatedSection>
            <div className="bg-white rounded-3xl border border-gray-200 p-10 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engineer-led Team</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                A focused team of specialists in Shopify, Headless Commerce, Next.js, WordPress, 
                Wix, React, Figma, SEO and growth systems. We stay lean so every client gets senior attention.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Shopify Expert", "Headless Commerce", "Next.js", "WordPress", "React", "Figma", "SEO", "Growth"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Let’s grow together</h2>
            <p className="text-xl text-gray-600 mb-10">
              Ready to engineer your next chapter?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold text-lg hover:opacity-90 transition"
            >
              Start a conversation
              <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}