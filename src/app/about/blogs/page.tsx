import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function AboutBlogsPage() {
  return (
    <section className="pt-36 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-orange-500 font-medium mb-4">Blogs</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Digital growth, headless commerce and Shopify insights for ambitious brands
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-10">
            Learn how to grow faster with technical SEO, conversion-led e-commerce, and modern digital systems. These articles are written to help brands outrank competitors and build more profitable online experiences.
          </p>
        </AnimatedSection>

        <div className="space-y-10">
          <AnimatedSection delay={0.1}>
            <article className="rounded-3xl border border-gray-200 bg-gray-50 p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why headless commerce is the best growth strategy for modern Shopify stores</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Headless commerce unlocks the fastest, most flexible storefronts for Shopify-based businesses. By decoupling the front-end from Shopify’s legacy theming layer, brands gain superior page speed, better UX, and a clearer path to higher organic rankings.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>Faster page loads mean higher conversions and better SEO.</li>
                <li>Fully custom design removes category and product page constraints.</li>
                <li>Structured data and rich snippets become easier to implement at scale.</li>
                <li>Modern architecture reduces the need for repeated rebuilds as the brand grows.</li>
              </ul>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <article className="rounded-3xl border border-gray-200 bg-gray-50 p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to launch a Shopify website that dominates local search</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Local search is a major opportunity for ambitious brands in Africa and beyond. A local-first Shopify site with fast performance, clear service area pages, and strong review schema can outrank national competitors in your city searches.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We focus on the right mix of local SEO, conversion optimization, and brand storytelling to make your storefront both discoverable and memorable. The result is more qualified traffic from people ready to buy.
              </p>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <article className="rounded-3xl border border-gray-200 bg-gray-50 p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The 2026 checklist for high-performance e-commerce brands</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                A modern e-commerce site needs more than aesthetics. It needs fast core web vitals, reliable analytics, a conversion-first checkout flow, and a growth system that can be measured. This checklist helps brands prepare for launch and stay ahead of their category.
              </p>
              <ol className="list-decimal pl-5 space-y-3 text-gray-600">
                <li>Audit your page speed and eliminate render-blocking resources.</li>
                <li>Implement structured data for products, breadcrumbs, and reviews.</li>
                <li>Use a headless approach for flexible UX and faster product discovery.</li>
                <li>Set up search-tracking analytics and A/B test your highest-value pages.</li>
              </ol>
            </article>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-10 text-center">
            <p className="text-lg text-blue-700 mb-3">Want content that converts and ranks?</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We write growth content and build the systems to make it work.</h2>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
              Start a project
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
