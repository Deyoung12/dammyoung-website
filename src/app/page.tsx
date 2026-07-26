"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TrustLogos } from "@/components/TrustLogos";

const projects = [
  {
    title: "Aurelia Skin",
    category: "Shopify • E-commerce",
    result: "+212% conversion",
    description: "Luxury skincare DTC store with custom theme and high-converting checkout.",
  },
  {
    title: "Halcyon Studio",
    category: "WordPress • Agency",
    result: "Editorial portfolio",
    description: "Architecture portfolio with sophisticated editorial layout and smooth interactions.",
  },
  {
    title: "Velora Capital",
    category: "Wix • Finance",
    result: "Investor-grade site",
    description: "Professional marketing site & CMS for a finance brand.",
  },
  {
    title: "Maison Noir",
    category: "Branding + Web",
    result: "Full brand system",
    description: "Complete brand identity and digital presence for a premium fragrance house.",
  },
  {
    title: "Pulse FM",
    category: "Social + Campaign",
    result: "1.4M organic reach",
    description: "Content engine that delivered massive organic reach in 90 days.",
  },
  {
    title: "Northwind Co.",
    category: "Shopify • Apparel",
    result: "Headless commerce",
    description: "Headless Shopify storefront with custom checkout experience.",
  },
];

const processSteps = [
  { number: "01", title: "System Audit", text: "We map your brand, audience and growth gaps through technical workshops." },
  { number: "02", title: "Architecture", text: "Information architecture, funnel mapping and conversion engineering." },
  { number: "03", title: "Design", text: "High-fidelity UI engineered for verified conversion paths." },
  { number: "04", title: "Engineering", text: "Production builds — performance budgeted and SEO instrumented." },
  { number: "05", title: "Deployment", text: "Multi-device QA, smooth migration and zero-downtime go-live." },
  { number: "06", title: "Optimization", text: "Telemetry, iteration and continuous funnel optimization." },
];

const testimonials = [
  {
    quote: "DammyYoung transformed our entire digital presence. Sales tripled in six months.",
    name: "Amelia Carter",
    role: "Founder, Aurelia Skin",
  },
  {
    quote: "An obsessive eye for detail. The site became a recruiting tool — every candidate mentions it.",
    name: "Marcus Adeyemi",
    role: "CEO, Halcyon Studio",
  },
  {
    quote: "Strategic, fast, and beautifully executed. They feel like an extension of our team.",
    name: "Sofia Lindqvist",
    role: "CMO, Velora Capital",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ====================== HERO ====================== */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-white">
        {/* Soft gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Global Growth Engineering Hub
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
            >
              We Don’t Just Market.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                We Engineer Success.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              DAMMYOUNG builds scalable e-commerce infrastructure and automated growth systems that generate measurable global revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition"
              >
                Start a Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 rounded-full border border-gray-300 font-semibold text-lg hover:bg-gray-50 transition"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {[
                { value: "240+", label: "Systems Deployed" },
                { value: "98%", label: "Client Retention" },
                { value: "12+", label: "Industry Awards" },
                { value: "7x", label: "Avg. ROI" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <TrustLogos />

      {/* ====================== SERVICES PREVIEW ====================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-orange-500 font-medium mb-3">What we engineer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Full-stack growth systems
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Shopify Infrastructure", desc: "High-conversion storefronts with custom themes and verified checkout funnels." },
              { title: "WordPress Engineering", desc: "Headless or classic builds with performance budgets and custom ACF." },
              { title: "Wix System Builds", desc: "Animation-rich, mobile-verified, fully instrumented production sites." },
              { title: "E-commerce Infrastructure", desc: "Full-stack commerce from product architecture to checkout optimization." },
              { title: "Organic Growth Systems", desc: "Automated content + paid funnels that convert audiences into revenue." },
              { title: "SEO Engineering", desc: "Technical, on-page and content SEO engineered to rank and verified." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="group h-full p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="text-sm font-medium text-orange-500 mb-4">0{i + 1}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-orange-500">
                    Learn more <ArrowUpRight size={16} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FEATURED WORK ====================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-orange-500 font-medium mb-3">Featured Work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Recent projects</h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 font-medium">
              View all projects <ArrowUpRight size={18} />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <Link href="/work" className="group block">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200 overflow-hidden mb-5 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 font-medium">{project.title}</span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{project.category}</p>
                    </div>
                    <span className="text-sm font-medium text-orange-500">{project.result}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PROCESS ====================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-orange-500 font-medium mb-3">How we work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">A proven six-step process</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.08}>
                <div className="relative p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition">
                  <div className="text-5xl font-bold text-gray-100 absolute top-6 right-6">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">{step.title}</h3>
                  <p className="text-gray-600 relative z-10">{step.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== TESTIMONIALS PREVIEW ====================== */}
      <section className="py-24 bg-gray-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-orange-500 font-medium mb-3">Client Love</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What founders say</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="h-full bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed mb-6">“{t.quote}”</p>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 font-medium"
            >
              View all testimonials <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== FINAL CTA ====================== */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready when you are
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Initialize a 30-minute system audit. No pressure — just a technical brief on your growth gaps.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold text-lg hover:opacity-90 transition"
            >
              Book a free audit
              <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}