"use client";

import { motion } from "framer-motion";
import MyProjects from "../components/MyProjects";

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
          <MyProjects />
        </div>
      </div>
    </section>
  );
}
export default Projects;
