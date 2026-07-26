"use client";

const logos = [
  "TechCrunch", "Deloitte", "Curtin University", "Macquarie University",
  "Cancer Council WA", "TrailsWA", "PayTo", "Sussex", "Argyle Diamonds",
  "Seven-West Media", "National Breast Cancer Foundation", "Bonfire",
  "Hospital Research Foundation", "Agrifutures", "Pentanet", "Rychiger"
];

export function TrustLogos() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          Trusted by forward-thinking brands
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="mx-8 flex items-center justify-center min-w-[160px] h-12 text-gray-400 font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}