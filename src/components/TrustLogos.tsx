"use client";

import Image from "next/image";

const logos = [
  { name: "TechCrunch", src: "/logos/techcrunch.svg" },
  { name: "Satterley", src: "/logos/satterley.svg" },
  { name: "PayTo", src: "/logos/payto.svg" },
  { name: "Trails WA", src: "/logos/trailswa.svg" },
  { name: "Cancer Council WA", src: "/logos/cancer_council_wa.svg" },
  { name: "Sussex", src: "/logos/sussex.svg" },
  { name: "Hospital Research Foundation Group", src: "/logos/hospital_research_foundation_group.svg" },
  { name: "AgriFutures", src: "/logos/agrifutures.svg" },
  { name: "Argyle Diamonds", src: "/logos/argyle_diamonds.svg" },
  { name: "Curtin University", src: "/logos/curtin_university.svg" },
  { name: "Deloitte", src: "/logos/deloitte.svg" },
  { name: "Fremantle Arts Centre", src: "/logos/fremantle_arts_centre.svg" },
  { name: "Macquarie University", src: "/logos/macquarie_university.svg" },
  { name: "Rychiger", src: "/logos/rychiger.svg" },
  { name: "Pentanet", src: "/logos/pentanet.svg" },
  { name: "Seven West Media", src: "/logos/seven_west_media.svg" },
  { name: "National Breast Cancer Foundation", src: "/logos/national_breast_cancer_foundation.svg" },
  { name: "Bonfire", src: "/logos/bonfire.svg" },
  { name: "Webby", src: "/logos/webby.svg" },
  { name: "Awwwards", src: "/logos/awwards.svg" },
  { name: "AWA", src: "/logos/awa.svg" },
  { name: "Children's Hospital Foundation", src: "/logos/children_s_hospital_foundation.svg" },
  { name: "Cocos Keeling Islands", src: "/logos/cocos_keeling_islands.svg" },
  { name: "FWA", src: "/logos/fwa.svg" },
  { name: "Good Design", src: "/logos/good_design.svg" },
];

export function TrustLogos() {
  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          Trusted by forward-thinking brands
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* First set */}
        <div className="flex animate-marquee items-center">
          {logos.map((logo, i) => (
            <div
              key={`first-${i}`}
              className="mx-8 flex items-center justify-center min-w-[140px] h-12 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={130}
                height={40}
                className="object-contain h-8 w-auto max-w-[130px]"
              />
            </div>
          ))}
        </div>

        {/* Second set for seamless loop */}
        <div className="flex animate-marquee items-center" aria-hidden="true">
          {logos.map((logo, i) => (
            <div
              key={`second-${i}`}
              className="mx-8 flex items-center justify-center min-w-[140px] h-12 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={130}
                height={40}
                className="object-contain h-8 w-auto max-w-[130px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}