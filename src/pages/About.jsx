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
    <section id="about" className="relative bg-[#0b0b0f] py-32 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-medium">
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Zaheer Ahmad — Frontend Developer
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            I’m a professional frontend developer focused on building fast,
            responsive, and SEO-friendly web interfaces using modern
            technologies like React and Tailwind CSS. I help businesses create
            digital experiences that convert and scale.
          </p>

          {/* SEO-only content */}
          <p className="sr-only">
            Zaheer Ahmad is a frontend developer specializing in React, Tailwind
            CSS, JavaScript, and modern UI development. He builds responsive,
            high-performance, SEO-optimized websites for clients worldwide.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-gray-300 leading-relaxed space-y-6"
          >
            <p>
              I’ve been working as a freelancer on Fiverr for over{" "}
              <span className="text-white font-semibold">3 years</span>,
              delivering clean, scalable, and reliable frontend solutions for
              clients around the world.
            </p>

            <p>
              I completed my{" "}
              <span className="text-white font-semibold">MERN Stack</span>{" "}
              training from{" "}
              <span className="text-white font-semibold">
                PNY Training Institute
              </span>
              , strengthening my expertise in component-based architecture and
              modern JavaScript practices.
            </p>

            <p>
              I completed my intermediate education from{" "}
              <span className="text-white font-semibold">
                Punjab College Bhalwal
              </span>{" "}
              and achieved{" "}
              <span className="text-white font-semibold">
                board topper position in my 10th examination
              </span>
              , reflecting discipline, consistency, and attention to detail.
            </p>

            <p>
              I communicate fluently in{" "}
              <span className="text-white font-semibold">English</span> and{" "}
              <span className="text-white font-semibold">Urdu</span>, ensuring
              clear and professional collaboration.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
              value="MERN Stack (PNY)"
            />
            <InfoCard
              icon={Award}
              title="Achievement"
              value="10th Board Topper"
            />
            <InfoCard
              icon={Layers}
              title="Core Focus"
              value="Frontend & UI Engineering"
            />
          </motion.div>
        </div>

        {/* How I Work */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <h3 className="text-3xl font-bold text-white mb-10">
            How I Work With Clients
          </h3>

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
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <TrustCard title="Clean & Scalable Code" />
          <TrustCard title="Clear Communication" />
          <TrustCard title="On-Time Delivery" />
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-white/10 bg-[#0f0f14]/80 backdrop-blur-xl p-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
            <span className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-400" />
              zaheerahmedjudg@gmail.com
            </span>
            <span className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-400" />
              +92 310 5499944
            </span>
          </div>

          <a
            href="https://www.linkedin.com/in/zaheer-ahmad-352148329/"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#7E2EEF] to-[#3648EF] text-white font-semibold hover:opacity-90 transition"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* Components */

function InfoCard({ icon: Icon, title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f0f14]/80 p-6">
      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#7E2EEF] to-[#3648EF] flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{value}</p>
    </div>
  );
}

function ProcessCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f0f14]/80 p-6">
      <Icon className="w-8 h-8 text-indigo-400 mb-4" />
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
}

function TrustCard({ title }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f0f14]/80 p-6 text-center">
      <p className="text-white font-semibold">{title}</p>
      <p className="text-gray-400 text-sm mt-2">
        Professional standards followed on every project.
      </p>
    </div>
  );
}

export default About;
