import React from "react";
import { ExternalLink, Github } from "lucide-react";
import projects from "../constant/projectsData";
import { motion } from "framer-motion";

const MyProjects = () => {
  return (
    <>
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
          <a href={project.live} target="_blank">
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </a>

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
    </>
  );
};

export default MyProjects;
