"use client";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Arsha Business Solutions Platform",
    category: "Full Stack Business Website",
    image: "/Arsha.jpg",
    description:
      "Developed a responsive business website with modern UI, optimized performance, and structured component architecture, focusing on scalability and clean frontend engineering practices.",
    url: "https://arsha-project-omega.vercel.app/",
  },
  {
    id: 2,
    title: "Industrial & Factory Corporate Website",
    category: "Industrial Web Application",
    image: "/Eng.jpg",
    description:
      "Engineered a professional industrial website tailored for engineering and manufacturing businesses, emphasizing responsive layouts, structured content hierarchy, and optimized user experience.",
    url: "https://nictorys-factory-industrial.vercel.app/",
  },
  {
    id: 3,
    title: "Skill Boost Learning Platform",
    category: "MERN Stack E-Learning Platform",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
    description:
      "A dynamic e-learning platform built with scalable architecture, interactive UI, and structured learning modules designed for performance and user engagement.",
  },
  {
    id: 4,
    title: "Choose Your Look – Fashion Experience",
    category: "Interactive Web Application",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80",
    description:
      "An interactive fashion discovery experience featuring personalized browsing, responsive design, and modern UI patterns for enhanced user interaction.",
  },
  {
    id: 5,
    title: "Team Flow Collaboration Dashboard",
    category: "SaaS Web Application",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
    description:
      "A productivity dashboard designed for teams, focusing on clean interface design, component reusability, and structured layout for collaborative workflows.",
  },
  {
    id: 6,
    title: "Creative Pulse Brand Showcase",
    category: "Brand Identity Website",
    image:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&auto=format&fit=crop&q=80",
    description:
      "A visually engaging brand showcase website built with modern design principles, smooth animations, and attention to user experience and presentation.",
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
            Featured{" "}
            <span className="bg-linear-to-r from-[#7E2EEF] to-[#3648EF] bg-clip-text text-transparent">
              MERN Stack Projects
            </span>
          </motion.h2>
          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of real-world projects demonstrating my expertise in
            building scalable, responsive, and performance-driven web
            applications using the MERN stack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            if (project.url) {
              return (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl overflow-hidden bg-[#121225] border border-white/5 
                             hover:border-[#7E2EEF]/40 transition-all duration-500 
                             hover:shadow-[0_20px_60px_rgba(126,46,239,0.25)] cursor-pointer block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14]/90 via-[#0B0B14]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <button className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] shadow-lg shadow-[#7E2EEF]/40 transform scale-95 group-hover:scale-100 transition-all duration-300">
                        View Project
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-[#7E2EEF] transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-300">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#7E2EEF] to-[#3648EF] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </a>
              );
            }

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-[#121225] border border-white/5 
                           hover:border-[#7E2EEF]/40 transition-all duration-500 
                           hover:shadow-[0_20px_60px_rgba(126,46,239,0.25)] cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14]/90 via-[#0B0B14]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] shadow-lg shadow-[#7E2EEF]/40 transform scale-95 group-hover:scale-100 transition-all duration-300">
                      View Project
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-[#7E2EEF] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-300">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#7E2EEF] to-[#3648EF] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <NavLink to="/projects">
            <button
              className="px-12 py-5 rounded-full text-lg font-semibold text-white
                   bg-gradient-to-r from-[#7E2EEF] to-[#3648EF]
                   shadow-xl shadow-[#7E2EEF]/30
                   hover:scale-105 transition-transform"
              type="button"
            >
              Explore More Projects →
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
