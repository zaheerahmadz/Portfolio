import React from "react";
import { motion } from "framer-motion";
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
    title: "Understand Needs",
    desc: "Analyze business goals, target users, technical constraints, and define success metrics.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Create Design",
    desc: "Design modern, accessible, and user-focused interfaces with strong UX principles.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Build Website",
    desc: "Develop clean, scalable, and high-performance frontend using React & Tailwind CSS.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Test & Improve",
    desc: "Optimize performance, responsiveness, accessibility, and cross-browser compatibility.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Get Feedback",
    desc: "Collect user and stakeholder feedback to refine UI and improve usability.",
    icon: MessageSquare,
  },
  {
    number: "06",
    title: "Launch & Support",
    desc: "Deploy smoothly, monitor performance, and provide ongoing support and updates.",
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
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

export default function WorkProcess() {
  return (
    <section className="bg-[#0b0b0f] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-indigo-400 tracking-widest uppercase text-sm mb-4">
            Development Workflow
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            My{" "}
            <span className="bg-linear-to-r from-[#7E2EEF] to-[#3648EF] bg-clip-text text-transparent">
              Work Process
            </span>
          </motion.h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            A structured and proven workflow focused on performance, usability,
            scalability, and modern frontend standards.
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
                {/* Step Number */}
                <div
                  className="
                    absolute top-0 left-1/2 -translate-x-1/2 z-20
                    w-16 h-16 rounded-full
                    bg-linear-to-br from-[#7E2EEF] to-[#3648EF]
                    flex items-center justify-center
                    text-white font-bold text-xl
                    shadow-xl shadow-indigo-700/40
                    ring-1 ring-indigo-400/40
                    transition-all duration-300
                    group-hover:scale-110 group-hover:rotate-3
                  "
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="
                    relative bg-linear-to-b from-[#111118] to-[#0d0d14]
                    border border-gray-800 rounded-2xl
                    p-8 pt-14
                    transition-all duration-300
                    hover:-translate-y-3
                    hover:border-indigo-500/50
                    hover:shadow-2xl hover:shadow-indigo-500/10
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute inset-0 rounded-2xl opacity-0
                      group-hover:opacity-100 transition-opacity duration-500
                      bg-linear-to-tr from-indigo-500/10 via-purple-500/10 to-transparent
                      blur-xl pointer-events-none
                    "
                  />

                  {/* Content */}
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
  );
}
