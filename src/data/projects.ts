export type Project = {
  id: string;
  title: string;
  category: string;
  result: string;
  description: string;
  mediaType: "image" | "video";
  media: string; // image URL or video path
};

export const projects: Project[] = [
  {
    id: "gielly-green",
    title: "Gielly Green",
    category: "Luxury Salon • Shopify",
    result: "Premium bookings",
    description: "A luxury salon experience built to elevate appointments and brand prestige.",
    mediaType: "image",
    media: "/projects/giellygreen.png",
  },
  {
    id: "integrated-bio",
    title: "Integrated Bio",
    category: "Biotech • Brand",
    result: "Scientific authority",
    description: "A market-facing platform designed for aging medicine and biotech innovation.",
    mediaType: "video",
    media: "/projects/integratedbio.mp4",
  },
  {
    id: "aave",
    title: "Aave",
    category: "DeFi • Web3",
    result: "Secure finance experience",
    description: "A polished digital presence built for decentralized finance trust and clarity.",
    mediaType: "video",
    media: "/projects/Aave.mp4",
  },
  {
    id: "more-nutrition",
    title: "More Nutrition",
    category: "Health • eCommerce",
    result: "Conversion growth",
    description: "A performance-first wellness storefront optimized for product discovery and sales.",
    mediaType: "image",
    media: "/projects/more-nutrition.png",
  },
  {
    id: "park-photos",
    title: "Park Photos",
    category: "Creative • Membership",
    result: "Immersive discovery",
    description: "A premium photography platform experience designed to convert and inspire.",
    mediaType: "video",
    media: "/projects/park-photos.mp4",
  },
  {
    id: "notom",
    title: "Notom",
    category: "Technology • Product",
    result: "Digital product expansion",
    description: "A modern product experience engineered to scale digital communities and membership growth.",
    mediaType: "video",
    media: "/projects/Notom.mp4",
  },
];
