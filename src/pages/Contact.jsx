import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";
import { motion } from "framer-motion";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import AnimatedReveal from "../components/ui/AnimatedReveal";

const iconHover = {
  whileHover: { scale: 1.2, color: "#7C3AED" }, // Indigo-600 color from Tailwind
  transition: { type: "spring", stiffness: 300 },
};

const Contact = () => {
  return (
    <AnimatedReveal
      animation="fadeIn"
      duration={1}
      className="min-h-screen my-5 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-300"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center">
        <AnimatedReveal
          animation="fadeInUp"
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's Bring Your <span className="text-[#7E2EEF]">Vision</span> to
            Life
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Drop us a message — we're excited to hear
            about it and explore how we can help.
          </p>
        </AnimatedReveal>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info Column */}
          <AnimatedReveal
            animation="scaleUp"
            className="lg:col-span-1 space-y-8"
          >
            <Card>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: FaPhoneAlt,
                    label: "Call",
                    info: "+92 3105499944",
                  },
                  {
                    icon: FaEnvelope,
                    label: "Email",
                    info: "zaheerahmedjudg@gmail.com",
                  },
                  {
                    icon: FaMapMarkerAlt,
                    label: "Location",
                    info: "Islamabad, Pakistan",
                  },
                ].map(({ icon: Icon, label, info }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{label}</p>
                      <p className="text-white font-medium">{info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500 mb-4">Follow Me</p>
                <div className="flex gap-5">
                  {[
                    {
                      icon: FaLinkedinIn,
                      target: "_blank",
                      href: "https://www.linkedin.com/in/zaheerahmad-merndeveloper/",
                    },
                    {
                      icon: FaFacebookF,
                      target: "_blank",
                      href: "https://www.facebook.com/share/1JbRiFaoqK/",
                    },
                    {
                      icon: FaTiktok,
                      target: "_blank",
                      href: "https://www.tiktok.com/@zeesoft99944?_r=1&_t=ZS-93QlH9GvcEj",
                    },
                    {
                      icon: FaGithub,
                      target: "_blank",
                      href: "https://github.com/zaheerahmadz",
                    },
                  ].map(({ icon: Icon, href }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                      whileHover={{ scale: 1.2, color: "#7C3AED" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="!p-0 h-64">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26599.999999999996!2d73.029!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbd1f6e!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </AnimatedReveal>

          {/* Contact Form */}
          <AnimatedReveal
            animation="scaleUp"
            className="lg:col-span-2"
          >
            <Card as="form" className="md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                Send a Message
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-600 text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-600 text-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-600 text-white"
                  placeholder="Project Discussion / Collaboration / Quote"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-5 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-600 text-white resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="mt-8"
              >
                Send Message →
              </Button>

              <p className="mt-4 text-sm text-gray-500">
                Response within 24–48 hours.
              </p>
            </Card>
          </AnimatedReveal>
        </div>
      </div>

      {/* Bottom CTA */}
      <AnimatedReveal
        animation="fadeInUp"
        className="border-t border-gray-800/50 py-16 text-center"
      >
        <p className="text-gray-400 text-lg">
          Prefer a quick chat? Reach out directly.
        </p>
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <Button
            href="https://wa.me/+923105499944"
            target="_blank"
            variant="success"
          >
            WhatsApp
          </Button>
          <Button
            href="mailto:zaheerahmedjudg@gmail.com"
            variant="secondary"
          >
            Email Directly
          </Button>
        </div>
      </AnimatedReveal>
    </AnimatedReveal>
  );
};

export default Contact;
