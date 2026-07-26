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
    id: "aurelia-skin",
    title: "Aurelia Skin",
    category: "Shopify • E-commerce",
    result: "+212% conversion",
    description: "Luxury skincare DTC store with custom theme and high-converting checkout funnels.",
    mediaType: "image",
    media: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
  },
  {
    id: "halcyon-studio",
    title: "Halcyon Studio",
    category: "WordPress • Agency",
    result: "Editorial portfolio",
    description: "Architecture portfolio with sophisticated editorial layout and smooth interactions.",
    mediaType: "image",
    media: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
  },
  {
    id: "velora-capital",
    title: "Velora Capital",
    category: "Wix • Finance",
    result: "Investor-grade site",
    description: "Professional marketing site & CMS built for a finance brand.",
    mediaType: "image",
    media: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "maison-noir",
    title: "Maison Noir",
    category: "Branding + Web",
    result: "Full brand system",
    description: "Complete brand identity and digital presence for a premium fragrance house.",
    mediaType: "image",
    media: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
  },
  {
    id: "pulse-fm",
    title: "Pulse FM",
    category: "Social Media Campaign",
    result: "1.4M organic reach",
    description: "Content engine that delivered massive organic reach in just 90 days.",
    mediaType: "image",
    media: "https://images.unsplash.com/photo-1611162617474-5b21e11e480f?w=800&q=80",
  },
  {
    id: "northwind-co",
    title: "Northwind Co.",
    category: "Shopify • Apparel",
    result: "Headless commerce",
    description: "Headless Shopify storefront with custom checkout experience.",
    mediaType: "image",
    media: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
];