import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaTiktok,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/zaheerahmad-merndeveloper/",
  },
  { icon: FaFacebookF, href: "https://www.facebook.com/share/1JbRiFaoqK/" },

  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@zeesoft99944?_r=1&_t=ZS-93QlH9GvcEj",
  },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/service" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },

  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0b0f]/90 backdrop-blur-xl border-b border-white/5 shadow-xl"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-[#0f0f17]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-10 flex justify-between items-center text-xs text-gray-400">
          <div className="flex gap-5">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                className="hover:text-[#7E2EEF]"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> +92 310 5499944
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope /> zaheerahmedjudg@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> Islamabad, Pakistan
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7E2EEF] to-[#3648EF]"
        >
          Zaheer
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-5">
          <NavLink
            to="/contact"
            className="hidden sm:flex px-7 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] text-white shadow-lg"
          >
            Let’s Talk
          </NavLink>

          <button
            className="lg:hidden text-2xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#0f0f17]/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="py-4 text-gray-300 hover:text-white"
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 py-4 text-center rounded-full bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] text-white font-semibold"
              >
                Let’s Discuss Your Project
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
