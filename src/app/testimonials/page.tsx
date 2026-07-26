"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Amelia Carter",
    role: "Founder, Aurelia Skin",
    quote: "DammyYoung transformed our entire digital presence. Sales tripled in six months and the storefront feels like a luxury boutique online.",
  },
  {
    name: "Marcus Adeyemi",
    role: "CEO, Halcyon Studio",
    quote: "An obsessive eye for detail. The site became a recruiting tool — every candidate mentions it.",
  },
  {
    name: "Sofia Lindqvist",
    role: "CMO, Velora Capital",
    quote: "Strategic, fast, and beautifully executed. They feel like an extension of our team.",
  },
  {
    name: "Daniel Okafor",
    role: "Owner, Maison Noir",
    quote: "From brand to web to socials — one cohesive vision. Best decision we made this year.",
  },
  {
    name: "Priya Nair",
    role: "Director, Lumen Health",
    quote: "They handled our compliance needs flawlessly. The result is both gorgeous and rigorous.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Love</h1>
          <p className="text-xl text-gray-600">What founders and teams say about working with us</p>
        </AnimatedSection>

        <div className="grid gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">“{t.quote}”</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}