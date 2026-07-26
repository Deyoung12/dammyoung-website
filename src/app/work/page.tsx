"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-orange-500 font-medium mb-4">Selected Work</p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Results that<br />speak for themselves
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A growing collection of projects across branding, websites, e-commerce,
              marketing and digital transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl transition-all duration-500">
                  {/* Media (Image or Video) */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    {project.mediaType === "video" ? (
                      <video
                        src={project.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <Image
                        src={project.media}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-sm text-orange-500 font-medium">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-orange-600 transition">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-sm font-semibold text-orange-500 whitespace-nowrap ml-4">
                        {project.result}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-20 text-center">
            <p className="text-gray-500 mb-6">Want to be featured here?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold hover:opacity-90 transition"
            >
              Start your project
              <ArrowUpRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}