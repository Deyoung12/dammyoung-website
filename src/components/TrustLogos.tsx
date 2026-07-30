"use client";

import Image from "next/image";

const logos = [
  { name: "TechCrunch", src: "/logos/techcrunch.png" },
  { name: "Satterley", src: "/logos/satterley.png" },
  { name: "PayTo", src: "/logos/payto.png" },
  { name: "Trails WA", src: "/logos/trailswa.png" },
  { name: "Cancer Council WA", src: "/logos/cancer_council_wa.png" },
  { name: "Sussex", src: "/logos/sussex.png" },
  { name: "Hospital Research Foundation Group", src: "/logos/hospital_research_foundation_group.png" },
  { name: "AgriFutures", src: "/logos/agrifutures.png" },
  { name: "Argyle Diamonds", src: "/logos/argyle_diamonds.png" },
  { name: "Curtin University", src: "/logos/curtin_university.png" },
  { name: "Deloitte", src: "/logos/deloitte.png" },
  { name: "Fremantle Arts Centre", src: "/logos/fremantle_arts_centre.png" },
  { name: "Macquarie University", src: "/logos/macquarie_university.png" },
  { name: "Rychiger", src: "/logos/rychiger.png" },
  { name: "Pentanet", src: "/logos/pentanet.png" },
  { name: "Seven West Media", src: "/logos/seven_west_media.png" },
  { name: "National Breast Cancer Foundation", src: "/logos/national_breast_cancer_foundation.png" },
  { name: "Bonfire", src: "/logos/bonfire.png" },
  { name: "Webby", src: "/logos/webby.png" },
  { name: "Awwwards", src: "/logos/awwards.png" },
  { name: "AWA", src: "/logos/awa.png" },
  { name: "Children's Hospital Foundation", src: "/logos/children_s_hospital_foundation.png" },
  { name: "Cocos Keeling Islands", src: "/logos/cocos_keeling_islands.png" },
  { name: "FWA", src: "/logos/fwa.png" },
  { name: "Good Design", src: "/logos/good_design.png" },
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