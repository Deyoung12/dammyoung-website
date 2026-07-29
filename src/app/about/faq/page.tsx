import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function AboutFaqPage() {
  return (
    <section className="pt-36 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-orange-500 font-medium mb-4">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently asked questions about digital growth, headless commerce and Shopify development
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-10">
            Browse the answers brands in our niche ask most often. If you want help with a custom project, we can build your growth system and optimize your website for revenue, speed and search.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is headless commerce, and why does it matter for ranking?</h2>
              <p className="text-gray-600 leading-relaxed">
                Headless commerce separates the storefront from the back-end commerce engine. This lets us build ultra-fast, SEO-friendly user experiences with Next.js while still using Shopify, WooCommerce or a custom commerce API. Fast pages, clean markup and better crawlability all help organic search performance in competitive e-commerce categories.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How does your team improve conversion for Shopify stores?</h2>
              <p className="text-gray-600 leading-relaxed">
                We combine conversion-centered design with technical optimization. That means faster load times, fewer distractions on product pages, structured data for rich results, and checkout flows engineered to reduce friction. Every Shopify project is tested with real conversion goals and performance metrics, not just visual polish.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Can you build a custom e-commerce site for a small or medium brand?</h2>
              <p className="text-gray-600 leading-relaxed">
                Yes. Our process is built for ambitious small and medium brands. We deliver custom storefronts, headless commerce systems, and growth-focused marketing infrastructure without unnecessary complexity. We also keep projects grounded in measurable business value so the investment drives real revenue.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Do you offer ongoing SEO and growth support after launch?</h2>
              <p className="text-gray-600 leading-relaxed">
                Yes. Everything we launch is designed to be maintained and grown. We can support ongoing SEO optimization, content strategy, CRO, conversion tracking, analytics monitoring, and paid / organic growth systems so your site keeps improving after deployment.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What makes DAMMYOUNG different from other digital agencies?</h2>
              <p className="text-gray-600 leading-relaxed">
                We are engineer-led, growth-focused, and focused on performance. Instead of design-first or marketing-first, we build growth systems: websites, launch stacks and commerce platforms that are instrumented for conversion, search, and speed. Our team keeps the delivery lean and senior-led so every client benefits from experienced decision making.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-10 text-center">
            <p className="text-lg text-blue-700 mb-3">Ready to stop chasing generic agencies?</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let’s build the headless commerce experience your brand deserves.</h2>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
              Talk to us
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
