// Footer.jsx
import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                Z
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Zaheer
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Creating beautiful digital experiences with modern technologies.
              Let's turn your ideas into reality.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Important</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7E2EEF] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7E2EEF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7E2EEF] transition-colors">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7E2EEF] transition-colors">
                  Social Work
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contacts</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-indigo-500 mt-1" />
                <span>+923105499944</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-indigo-500 mt-1" />
                <span>zaheerahmedjudg@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-indigo-500 mt-1" />
                <span>
                  Islamabad, Pakistan
                  <br />
                  {/* 6391 Elgin St. Celina, Delaware (you can remove or update) */}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-center md:flex md:justify-between md:items-center text-sm">
          <p>© {new Date().getFullYear()} Zaheer. All Rights Reserved.</p>

          <div className="mt-3 md:mt-0 flex justify-center gap-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
