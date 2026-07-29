"use client";

const logos = [
  "TechCrunch",
  "Satterley",
  "PayTo",
  "Trails WA",
  "Cancer Council WA",
  "Sussex",
  "Hospital Research Foundation Group",
  "AgriFutures Australia",
  "Argyle Pink Diamonds",
  "Curtin University",
  "Deloitte",
  "Fremantle Arts Centre",
  "Macquarie University",
  "Rychiger",
  "Pentanet",
];

export function TrustLogos() {
  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          Trusted by forward-thinking brands
        </p>
      </div>

      {/* Scrolling container */}
      <div className="relative flex overflow-hidden">
        {/* First set */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {logos.map((logo, i) => (
            <div
              key={`first-${i}`}
              className="mx-10 flex items-center justify-center min-w-[180px] h-14 text-gray-600 font-semibold text-lg opacity-80 hover:opacity-100 transition-opacity"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Second set (for seamless loop) */}
        <div className="flex animate-marquee whitespace-nowrap items-center" aria-hidden="true">
          {logos.map((logo, i) => (
            <div
              key={`second-${i}`}
              className="mx-10 flex items-center justify-center min-w-[180px] h-14 text-gray-600 font-semibold text-lg opacity-80 hover:opacity-100 transition-opacity"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}