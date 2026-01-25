"use client"; // if Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import {
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline"; // or use lucide-react equivalents

const specialities = [
  {
    title: "Responsive Web Design",
    description:
      "Fluid, mobile-first layouts that deliver pixel-perfect experiences across every screen size and device.",
    icon: DevicePhoneMobileIcon,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "React.js Development",
    description:
      "Modern, component-driven applications with clean architecture, hooks, and optimal performance.",
    icon: CodeBracketIcon,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "WordPress Customization",
    description:
      "Deep theme & plugin development, custom Gutenberg blocks, and headless WordPress solutions.",
    icon: PaintBrushIcon,
    color: "from-teal-500 to-emerald-600",
  },
  {
    title: "Modern JavaScript / TypeScript",
    description:
      "ESNext + TypeScript codebases — clean, typed, maintainable, and future-proof.",
    icon: CodeBracketIcon,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Performance & Optimization",
    description:
      "Core Web Vitals optimization, lazy loading, code splitting, image optimization, and Lighthouse 95+ scores.",
    icon: RocketLaunchIcon,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "SEO & Accessibility (a11y)",
    description:
      "Semantic HTML, ARIA patterns, WCAG 2.2 compliance, schema markup, and search-engine friendly structure.",
    icon: GlobeAltIcon,
    color: "from-violet-500 to-fuchsia-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 18, stiffness: 100 },
  },
};

export default function Specialities() {
  return (
    <section className="relative bg-linear-to-b from-[#0b0b0f] to-[#0f0f17] py-28 md:py-40 overflow-hidden">
      {/* Subtle floating orbs background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-linear-to-br opacity-20 blur-2xl"
            style={{
              width: `${80 + Math.random() * 140}px`,
              height: `${80 + Math.random() * 140}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(to bottom right, ${
                ["#7E2EEF", "#3648EF", "#a855f7", "#06b6d4"][i % 4]
              }, transparent)`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 10 + Math.random() * 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 z-10">
        {/* Heading */}
        <div className="text-center mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-indigo-400/70 uppercase tracking-[0.3em] text-sm font-medium mb-4"
          >
            Core Expertise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            My{" "}
            <span className="bg-linear-to-r from-[#7E2EEF] to-[#3648EF] bg-clip-text text-transparent">
              Specialities
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Focused skill-set that helps turn ideas into fast, accessible, and
            beautiful digital products.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {specialities.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative"
              >
                <div
                  className={`
                    relative bg-[#111118]/80 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 md:p-10
                    transition-all duration-400 ease-out
                    hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10
                    hover:border-transparent
                    overflow-hidden
                  `}
                >
                  {/* Gradient border on hover */}
                  <div
                    className={`
                      absolute inset-0 rounded-2xl p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-linear-to-br ${item.color}
                    `}
                  >
                    <div className="w-full h-full bg-[#0b0b0f] rounded-2xl" />
                  </div>

                  {/* Icon */}
                  <div className="relative mb-7 flex justify-center">
                    <div
                      className={`
                        inline-flex items-center justify-center w-16 h-16 rounded-2xl
                        bg-linear-to-br ${item.color} bg-opacity-10
                        text-white/90 group-hover:text-white
                        transition-all duration-400 group-hover:scale-110 group-hover:rotate-3
                      `}
                    >
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#7E2EEF] group-hover:to-[#3648EF] transition-all duration-400">
                      {item.title}
                    </h3>

                    <p className="text-gray-400/90 text-base leading-relaxed">
                      {item.description}
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
