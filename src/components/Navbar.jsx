"use client";

import React, { useState, useEffect } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const navItems = [
  "Home",
  "Services",
  "Projects",
  "About",
  "Clients",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0b0f]/90 backdrop-blur-xl shadow-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar - only visible on md+ */}
      <div className="hidden md:block border-b border-white/5 bg-[#0f0f17]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-10 flex items-center justify-between text-xs text-gray-400">
          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-[#7E2EEF] transition-colors duration-200"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 hover:text-[#7E2EEF] transition-colors">
              <FaPhoneAlt className="text-sm" />
              <span>+92 310 5499944</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#7E2EEF] transition-colors">
              <FaEnvelope className="text-sm" />
              <span>zaheerahmedjudg@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#7E2EEF] transition-colors">
              <FaMapMarkerAlt className="text-sm" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] bg-clip-text text-transparent tracking-tight">
            Zaheer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
            >
              {item}
              <span
                className="
                  absolute -bottom-1 left-0 h-0.5 w-0 
                  bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] 
                  transition-all duration-300 
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-5 md:gap-6">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="
              hidden sm:flex items-center justify-center 
              px-7 py-3 rounded-full font-semibold text-sm
              bg-gradient-to-r from-[#7E2EEF] to-[#3648EF]
              text-white shadow-lg shadow-indigo-500/20
              hover:shadow-xl hover:shadow-indigo-500/30
              transition-all duration-300 relative overflow-hidden
            "
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-white hover:text-[#7E2EEF] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0f0f17]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="
                    py-4 px-5 text-gray-300 hover:text-white 
                    hover:bg-white/5 rounded-lg transition-colors
                    text-base font-medium
                  "
                >
                  {item}
                </a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.97 }}
                className="
                  mt-6 mx-5 py-4 px-6 rounded-full text-center
                  bg-gradient-to-r from-[#7E2EEF] to-[#3648EF]
                  text-white font-semibold shadow-lg
                  hover:shadow-indigo-500/30 transition-all
                "
              >
                Let's Discuss Your Project
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
