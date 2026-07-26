"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-dammy-orange/40 transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-dammy-blue/10 to-dammy-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <span className="text-sm font-medium text-dammy-orange mb-4 block">
          0{index + 1}
        </span>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-dammy-orange transition-colors"
        >
          Learn more
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}