"use client";

import { motion } from "framer-motion";
import {
  Code2,
  LayoutDashboard,
  Globe,
  Palette,
  Database,
  Server,
  ImageIcon,
  PenTool,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building fast, responsive, and accessible websites using modern HTML, CSS, JavaScript, and performance best practices.",
  },
  {
    icon: LayoutDashboard,
    title: "React Development",
    desc: "Creating scalable single-page applications with React, reusable components, clean architecture, and smooth user experiences.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Designing RESTful APIs and server-side logic using Node.js and Express for scalable, secure, and efficient backend services.",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Implementing robust data storage solutions using MongoDB, ensuring data integrity, performance, and scalability.",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "Custom WordPress websites, themes, and integrations focused on speed, security, SEO, and easy content management.",
  },
  {
    icon: Palette,
    title: "UI Implementation",
    desc: "Pixel-perfect conversion of Figma designs into responsive layouts using Tailwind CSS and Bootstrap.",
  },
  {
    icon: PenTool,
    title: "Logo & Branding Design",
    desc: "Creating unique and memorable logos and brand assets that effectively communicate your business identity.",
  },
  {
    icon: ImageIcon,
    title: "Social Media & Post Design",
    desc: "Designing engaging social media posts, banners, and marketing visuals tailored to your brand’s voice.",
  },
  {
    icon: Layers,
    title: "Graphic Design Services",
    desc: "Providing a variety of graphic design solutions including brochures, flyers, and digital illustrations.",
  },
];

function Service() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#0b0b0f] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#7E2EEF]/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#3648EF]/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-medium">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-4 text-4xl md:text-5xl font-extrabold text-white"
          >
            What I Can Do For You
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            I provide expert frontend, backend, WordPress, and graphic design
            services to deliver high-quality, SEO-friendly digital products and
            creative branding solutions that drive business success.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                tabIndex={0}
                className="group relative rounded-3xl border border-white/10 bg-[#0f0f14]/80 backdrop-blur-xl p-8 hover:border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all"
                aria-label={service.title}
              >
                {/* Gradient Hover Border */}
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7E2EEF] to-[#3648EF] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#7E2EEF] to-[#3648EF] mb-6 shadow-lg"
                  aria-hidden="true"
                >
                  <Icon className="text-white w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Service;
