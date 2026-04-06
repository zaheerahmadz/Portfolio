"use client";

import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import AnimatedReveal from "./ui/AnimatedReveal";

import MyProjects from "./MyProjects";

export default function ProjectsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0B14] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedReveal
            as="h2"
            animation="fadeInUp"
            duration={0.7}
            delay={0.1}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Featured{" "}
            <span className="bg-linear-to-r from-[#7E2EEF] to-[#3648EF] bg-clip-text text-transparent">
              Projects
            </span>
          </AnimatedReveal>

          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of real-world frontend projects demonstrating my skills
            in building responsive and visually appealing web interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MyProjects />
        </div>

        <div className="mt-20 text-center">
          <NavLink to="/projects">
            <Button variant="primary">
              Explore More Projects →
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
