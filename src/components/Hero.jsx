"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FloatingDiamond = ({ className = "" }) => (
  <motion.div
    className={`${className} pointer-events-none`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 15, -10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="2"
        ry="2"
        transform="rotate(45 12 12)"
        fill="url(#grad)"
        opacity="0.8"
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7E2EEF" />
          <stop offset="100%" stopColor="#3648EF" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative my-9 bg-[#0b0b0f] overflow-hidden min-h-screen flex items-center justify-center px-6 py-20">
      {/* Subtle animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: 400 + i * 100,
              height: 400 + i * 100,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, #7E2EEF, transparent)"
                  : "radial-gradient(circle, #3648EF, transparent)",
              top: `${20 + i * 15}%`,
              left: i % 2 === 0 ? `${10 + i * 10}%` : "auto",
              right: i % 2 === 1 ? `${10 + i * 10}%` : "auto",
            }}
            animate={{
              y: [0, -60, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-indigo-400 font-medium tracking-[0.3em] uppercase text-sm mb-3"
          >
            This is your
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#7E2EEF] mb-2"
          >
            Frontend Developer
          </motion.h2>

          {/* Name with animated highlight */}
          <motion.h1
            className="relative text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="relative inline-block">
              <motion.span
                className="relative z-10 text-7xl"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "linear-gradient(90deg, #7E2EEF, #3648EF, #7E2EEF)",
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "white",
                }}
              >
                Zaheer Ahmad
              </motion.span>

              {/* Animated glowing underline */}
              <motion.span
                aria-hidden="true"
                className="absolute left-0 -bottom-3 w-full h-6 rounded-full blur-xl opacity-70"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.8 }}
                transition={{ delay: 1, duration: 1.2 }}
                style={{
                  background: "linear-gradient(90deg, #7E2EEF, #3648EF)",
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 max-w-xl text-gray-300 text-lg leading-relaxed"
          >
            I transform ideas into stunning, high-performance web experiences
            using React, TypeScript, and modern design systems. Clean code •
            Pixel-perfect UI • Lightning-fast load times • Obsessed with
            details.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-9 py-4 rounded-full font-semibold text-white overflow-hidden bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] shadow-xl"
            >
              <span className="relative z-10">Discuss Project</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 rounded-full font-medium text-gray-300 hover:text-white transition-all group"
            >
              View My Work
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative flex justify-center"
          style={{
            perspective: "1000px",
          }}
        >
          {/* Main Image with tilt effect */}
          <motion.div
            className="relative group"
            animate={{
              rotateY: mousePosition.x * 20 - 10,
              rotateX: -mousePosition.y * 20 + 10,
            }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src="/my.png"
              alt="Zaheer Ahmad - Frontend Developer"
              className="w-full max-w-lg rounded-3xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 border border-gray-800"
            />

            {/* Gradient glow overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#7E2EEF]/20 to-[#3648EF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.6, type: "spring", stiffness: 100 }}
              className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-gradient-to-br from-[#7E2EEF] to-[#3648EF] p-1 shadow-2xl"
            >
              <div className="w-full h-full rounded-full bg-[#0b0b0f]/95 backdrop-blur-xl flex flex-col items-center justify-center border border-white/10">
                <span className="text-white font-bold text-lg tracking-wider">
                  Frontend
                </span>
                <span className="text-indigo-400 text-sm uppercase tracking-widest font-medium">
                  Master
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Diamonds */}
          <FloatingDiamond className="absolute -top-16 -left-10 w-16 h-16 opacity-70" />
          <FloatingDiamond className="absolute -bottom-20 -right-16 w-20 h-20 opacity-60" />
          <FloatingDiamond className="absolute top-10 right-0 w-12 h-12 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
