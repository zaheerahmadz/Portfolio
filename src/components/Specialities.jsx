"use client";

import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const specialities = [
  {
    title: "Full-Stack MERN Development",
    description:
      "End-to-end web application development using MongoDB, Express, React, and Node.js with scalable architecture and clean code practices.",
    icon: CodeBracketIcon,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "REST APIs & Backend Architecture",
    description:
      "Secure, well-structured RESTful APIs, authentication systems, middleware design, and database integration for production-grade backends.",
    icon: GlobeAltIcon,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Responsive React Frontend",
    description:
      "Modern, component-driven React interfaces with reusable components, hooks, routing, and optimal rendering performance.",
    icon: DevicePhoneMobileIcon,
    color: "from-teal-500 to-emerald-600",
  },
  {
    title: "MongoDB Database Design",
    description:
      "Efficient schema design, indexing strategies, aggregation pipelines, and data modeling for high-performance applications.",
    icon: PaintBrushIcon,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Performance & Scalability",
    description:
      "Optimized applications with caching, lazy loading, code splitting, and best practices to ensure speed and scalability under load.",
    icon: RocketLaunchIcon,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "SEO, Accessibility & Best Practices",
    description:
      "Semantic structure, accessibility compliance, clean architecture, and SEO-friendly implementations for discoverable web applications.",
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
    <>
      <Helmet>
        <title>Zaheer Ahmad - MERN Stack Developer | Expertise</title>
        <meta
          name="description"
          content="Zaheer Ahmad's MERN stack expertise including full-stack development, REST APIs, MongoDB database design, React frontend, performance optimization, and scalable architecture."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Zaheer Ahmad",
            jobTitle: "MERN Stack Developer",
            skills: specialities.map((s) => s.title),
          })}
        </script>
      </Helmet>

      <section className="relative bg-gradient-to-b from-[#0b0b0f] to-[#0f0f17] py-28 md:py-40 overflow-hidden">
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
              <span className="bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] bg-clip-text text-transparent">
                MERN Specialities
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
            >
              A focused full-stack skill set that enables me to build complete,
              scalable, and production-ready web applications from frontend to
              backend.
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
                  <div className="relative bg-[#111118]/80 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 md:p-10 transition-all duration-400 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-transparent overflow-hidden">
                    <div
                      className={`absolute inset-0 rounded-2xl p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.color}`}
                    >
                      <div className="w-full h-full bg-[#0b0b0f] rounded-2xl" />
                    </div>

                    <div className="relative mb-7 flex justify-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white/90 group-hover:text-white transition-all duration-400 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <Icon className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                    </div>

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
    </>
  );
}
