"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Winter Campaign",
    category: "Branding • Marketing",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&auto=format&fit=crop&q=80",
    description:
      "Creative winter marketing campaign with bold seasonal visuals and storytelling",
  },
  {
    id: 2,
    title: "Think. Make. Solve.",
    category: "UI/UX • Product Design",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    description:
      "Exploration of design systems and thoughtful product experience architecture",
  },
  {
    id: 3,
    title: "Skill Boost – Oogx",
    category: "E-learning • Motion Design",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
    description:
      "Interactive learning platform focused on skill development and gamification",
  },
  {
    id: 4,
    title: "Choose Your Look",
    category: "Fashion • Web Experience",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80",
    description: "Personalized fashion discovery and virtual try-on concept",
  },
  {
    id: 5,
    title: "Team Flow",
    category: "SaaS • Collaboration",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
    description:
      "Modern workspace dashboard designed for faster team alignment",
  },
  {
    id: 6,
    title: "Creative Pulse",
    category: "Illustration • Brand Identity",
    image:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&auto=format&fit=crop&q=80",
    description: "Abstract visual language and vibrant brand world-building",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0B14] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            My{" "}
            <span className="bg-linear-to-r from-[#7E2EEF] to-[#3648EF] bg-clip-text text-transparent">
              Completed Projects
            </span>
          </motion.h2>
          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            Carefully crafted projects that reflect my frontend skills and
            design thinking.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-[#121225] border border-white/5 
                         hover:border-[#7E2EEF]/40 transition-all duration-500 
                         hover:shadow-[0_20px_60px_rgba(126,46,239,0.25)] cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t 
                                from-[#0B0B14]/90 via-[#0B0B14]/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Button */}
                <div
                  className="absolute inset-0 flex items-center justify-center 
                                opacity-0 group-hover:opacity-100 transition-all duration-500"
                >
                  <button
                    className="px-8 py-4 rounded-full font-semibold text-white
                                     bg-gradient-to-r from-[#7E2EEF] to-[#3648EF]
                                     shadow-lg shadow-[#7E2EEF]/40
                                     transform scale-95 group-hover:scale-100 transition-all duration-300"
                  >
                    View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-[#7E2EEF] transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full 
                                   bg-white/5 text-gray-300"
                  >
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1.5 
                              bg-gradient-to-b from-[#7E2EEF] to-[#3648EF]
                              transform -translate-x-full group-hover:translate-x-0 
                              transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            className="px-12 py-5 rounded-full text-lg font-semibold text-white
                             bg-gradient-to-r from-[#7E2EEF] to-[#3648EF]
                             shadow-xl shadow-[#7E2EEF]/30
                             hover:scale-105 transition-transform"
          >
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
