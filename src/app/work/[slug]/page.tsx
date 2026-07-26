import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 mb-10 transition"
        >
          <ArrowLeft size={18} />
          Back to Work
        </Link>

        <div className="mb-8">
          <span className="text-orange-500 font-medium">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">{project.description}</p>
        </div>

        {/* Media */}
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-200 mb-16 bg-gray-100">
          {project.mediaType === "video" ? (
            <video
              src={project.media}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="object-cover w-full h-full"
            />
          ) : (
            <Image
              src={project.media}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        {/* Results & Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Result</h3>
            <p className="text-2xl font-bold text-orange-500">{project.result}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Category</h3>
            <p className="text-lg font-medium text-gray-900">{project.category}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Type</h3>
            <p className="text-lg font-medium text-gray-900">
              {project.mediaType === "video" ? "Case Study Video" : "Case Study"}
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p>
            This project showcases DAMMYOUNG’s ability to engineer high-performance digital systems. 
            We focused on conversion architecture, technical excellence, and measurable growth outcomes.
          </p>
          <p className="mt-4">
            Every decision — from information architecture to final deployment — was guided by data and 
            performance budgets to ensure the final product delivers real business results.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold hover:opacity-90 transition"
          >
            Start a similar project
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}