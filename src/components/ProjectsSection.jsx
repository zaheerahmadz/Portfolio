"use client";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import MyProjects from "./MyProjects";

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
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Featured{" "}
            <span className="bg-linear-to-r from-[#7E2EEF] to-[#3648EF] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of real-world frontend projects demonstrating my skills
            in building responsive and visually appealing web interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MyProjects />
        </div>

        {/* CTA Button */}
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
