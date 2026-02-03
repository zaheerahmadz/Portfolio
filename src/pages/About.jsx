"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle,
  Layers,
  MessageSquare,
  Clock,
} from "lucide-react";

function About() {
  /* Mouse sunlight glow */
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-[#0b0b0f] py-32 overflow-hidden"
    >
      {/* Mouse sunlight glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            600px at ${mousePos.x}px ${mousePos.y}px,
            rgba(126, 46, 239, 0.18),
            transparent 70%
          )`,
        }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#7E2EEF]/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#3648EF]/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-medium">
            About Me
          </p>

          <h1
            id="about-heading"
            className="mt-4 text-4xl md:text-5xl font-extrabold text-white"
          >
            Zaheer Ahmad — MERN Stack & Frontend Developer
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            I’m a professional MERN stack and frontend developer focused on
            building fast, scalable, responsive, and SEO-friendly web
            applications using MongoDB, Express.js, React, Node.js, and Tailwind
            CSS. I help businesses create modern digital products that deliver
            excellent user experiences and business value.
          </p>

          {/* SEO-only content */}
          <p className="sr-only">
            Zaheer Ahmad is a MERN stack and frontend developer specializing in
            MongoDB, Express, React, Node.js, JavaScript, and Tailwind CSS. He
            builds scalable, responsive, high-performance, SEO-optimized
            full-stack web applications for clients worldwide.
          </p>
        </motion.header>

        {/* Main Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Story */}
          <article
            tabIndex={0}
            className="text-gray-300 leading-relaxed space-y-6"
            aria-label="Personal background and education"
          >
            <p>
              I’ve been working as a freelancer on Fiverr for over{" "}
              <strong>3 years</strong>, delivering clean, scalable, and reliable
              full-stack frontend and backend solutions for clients worldwide.
            </p>

            <p>
              I completed my <strong>MERN Stack training</strong> from{" "}
              <strong>PNY Training Institute</strong>, deepening my expertise in
              building component-based frontend architecture with React, as well
              as backend APIs and databases with Node.js, Express, and MongoDB.
            </p>

            <p>
              I completed my intermediate education from{" "}
              <strong>Punjab College Bhalwal</strong> and achieved{" "}
              <strong>board topper position in my 10th examination</strong>,
              reflecting my discipline, consistency, and attention to detail.
            </p>

            <p>
              I communicate fluently in <strong>English</strong> and{" "}
              <strong>Urdu</strong>, ensuring clear and professional
              collaboration.
            </p>
          </article>

          {/* Info Cards */}
          <section
            aria-label="Professional experience and achievements"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <InfoCard
              icon={Briefcase}
              title="Experience"
              value="3+ Years Freelancing"
            />
            <InfoCard
              icon={GraduationCap}
              title="Education"
              value="MERN Stack (PNY Training Institute)"
            />
            <InfoCard
              icon={Award}
              title="Achievement"
              value="10th Board Topper"
            />
            <InfoCard
              icon={Layers}
              title="Core Focus"
              value="Full-stack MERN & Frontend Development"
            />
          </section>
        </div>

        {/* How I Work */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
          aria-labelledby="work-with-clients"
        >
          <h2
            id="work-with-clients"
            className="text-3xl font-bold text-white mb-10"
          >
            How I Work With Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProcessCard
              icon={MessageSquare}
              title="Understand Requirements"
              text="Clear discussion to align goals, scope, and expectations."
            />
            <ProcessCard
              icon={Layers}
              title="Plan & Design"
              text="Structured planning with scalable architecture."
            />
            <ProcessCard
              icon={CheckCircle}
              title="Build & Optimize"
              text="Clean code, responsive UI, and performance focus."
            />
            <ProcessCard
              icon={Clock}
              title="Deliver On Time"
              text="Reliable delivery with testing and revisions."
            />
          </div>
        </motion.section>

        {/* Trust Signals */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          aria-label="Professional trust signals"
        >
          <TrustCard title="Clean & Scalable Code" />
          <TrustCard title="Clear Communication" />
          <TrustCard title="On-Time Delivery" />
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-white/10 bg-[#0f0f14]/80 backdrop-blur-xl p-8"
          aria-label="Contact information"
        >
          <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
            <span className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-400" aria-hidden="true" />
              <a
                href="mailto:zaheerahmedjudg@gmail.com"
                className="underline hover:text-indigo-400"
              >
                zaheerahmedjudg@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-400" aria-hidden="true" />
              <a
                href="tel:+923105499944"
                className="underline hover:text-indigo-400"
              >
                +92 310 5499944
              </a>
            </span>
          </div>

          <a
            href="https://www.linkedin.com/in/zaheer-ahmad-352148329/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] text-white font-semibold hover:opacity-90 transition"
          >
            <Linkedin className="w-5 h-5" aria-hidden="true" />
            Connect on LinkedIn
          </a>
        </motion.section>
      </div>
    </section>
  );
}

/* Components */

function InfoCard({ icon: Icon, title, value }) {
  return (
    <article
      className="rounded-2xl border border-white/10 bg-[#0f0f14]/80 p-6"
      tabIndex={0}
      aria-label={title}
    >
      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#7E2EEF] to-[#3648EF] flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{value}</p>
    </article>
  );
}

function ProcessCard({ icon: Icon, title, text }) {
  return (
    <article
      className="rounded-2xl border border-white/10 bg-[#0f0f14]/80 p-6"
      tabIndex={0}
      aria-label={title}
    >
      <Icon className="w-8 h-8 text-indigo-400 mb-4" aria-hidden="true" />
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{text}</p>
    </article>
  );
}

function TrustCard({ title }) {
  return (
    <article
      className="rounded-2xl border border-white/10 bg-[#0f0f14]/80 p-6 text-center"
      tabIndex={0}
      aria-label={title}
    >
      <p className="text-white font-semibold">{title}</p>
      <p className="text-gray-400 text-sm mt-2">
        Professional standards followed on every project.
      </p>
    </article>
  );
}

export default About;
