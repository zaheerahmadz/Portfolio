"use client";

import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Lightbulb,
  PencilRuler,
  Code2,
  CheckCircle2,
  MessageSquare,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Requirement Analysis & Planning",
    desc: "Understand business goals, user flows, technical constraints, and define the architecture for a scalable MERN stack application.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "UI/UX & System Design",
    desc: "Design modern, accessible interfaces and plan database schema, API structure, and application flow.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Full-Stack Development",
    desc: "Build the React frontend, develop Node.js & Express APIs, and integrate MongoDB with clean, maintainable code.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing, Optimization & Security",
    desc: "Ensure performance optimization, responsiveness, API security, validation, and cross-browser compatibility.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Feedback & Iteration",
    desc: "Incorporate stakeholder feedback, improve usability, refine features, and enhance overall application experience.",
    icon: MessageSquare,
  },
  {
    number: "06",
    title: "Deployment & Ongoing Support",
    desc: "Deploy to production, monitor performance, manage hosting, and provide long-term maintenance and updates.",
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

export default function WorkProcess() {
  return (
    <>
      <Helmet>
        <title>Zaheer Ahmad | MERN Stack Development Workflow</title>
        <meta
          name="description"
          content="A structured MERN stack development workflow by Zaheer Ahmad including planning, UI/UX design, full-stack development, API integration, testing, deployment, and ongoing support."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Zaheer Ahmad",
            jobTitle: "MERN Stack Developer",
            description:
              "Professional MERN stack developer following a structured workflow for scalable web applications.",
          })}
        </script>
      </Helmet>

      <section className="bg-[#0b0b0f] py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-24">
            <p className="text-indigo-400 tracking-widest uppercase text-sm mb-4">
              MERN Development Workflow
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
            >
              My{" "}
              <span className="bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] bg-clip-text text-transparent">
                Work Process
              </span>
            </motion.h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              A proven, step-by-step process to design, develop, test, and
              deploy scalable MERN stack web applications with performance,
              security, and usability in mind.
            </p>
          </div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-14 md:grid-cols-2 lg:grid-cols-3"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="relative group pt-10 cursor-pointer"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-full bg-gradient-to-br from-[#7E2EEF] to-[#3648EF] flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-indigo-700/40 ring-1 ring-indigo-400/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {step.number}
                  </div>

                  <div className="relative bg-gradient-to-b from-[#111118] to-[#0d0d14] border border-gray-800 rounded-2xl p-8 pt-14 transition-all duration-300 hover:-translate-y-3 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
                    <div className="relative text-center md:text-left">
                      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition">
                        <Icon size={24} />
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition">
                        {step.title}
                      </h3>

                      <p className="text-gray-400 text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
