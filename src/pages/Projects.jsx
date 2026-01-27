"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Modern Portfolio Website",
    desc: "High-performance portfolio built with React, Tailwind CSS, and Framer Motion.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    title: "Business Website (WordPress)",
    desc: "Custom WordPress website with responsive layout, SEO optimization, and fast loading.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
    tech: ["WordPress", "PHP", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Landing Page UI",
    desc: "Pixel-perfect Figma to HTML/Tailwind conversion with animations.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
    tech: ["HTML", "Tailwind", "JavaScript"],
    live: "#",
    github: "#",
  },

  // 👉 Add more projects easily later (10–15 no problem)
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0b0b0f] py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#7E2EEF]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[#3648EF]/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-medium">
            Projects
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Selected Work
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            A collection of projects showcasing my frontend and WordPress
            development skills, design precision, and attention to detail.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0f0f14]/80 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-indigo-400 hover:text-white transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7E2EEF]/20 to-[#3648EF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
