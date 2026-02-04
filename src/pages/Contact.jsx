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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconHover = {
  whileHover: { scale: 1.2, color: "#7C3AED" }, // Indigo-600 color from Tailwind
  transition: { type: "spring", stiffness: 300 },
};

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen my-5 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-300"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's Bring Your <span className="text-[#7E2EEF]">Vision</span> to
            Life
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Drop us a message — we're excited to hear
            about it and explore how we can help.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info Column */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            variants={cardAnimation}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
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
            </div>

            {/* Map */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden h-64">
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            variants={cardAnimation}
            initial="hidden"
            animate="visible"
          >
            <form className="bg-gray-900/70 backdrop-blur-md border border-gray-800/50 rounded-2xl p-8 md:p-10 shadow-2xl">
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

              <button
                type="submit"
                className="mt-8 px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg transform hover:-translate-y-0.5"
              >
                Send Message →
              </button>

              <p className="mt-4 text-sm text-gray-500">
                Response within 24–48 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="border-t border-gray-800/50 py-16 text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <p className="text-gray-400 text-lg">
          Prefer a quick chat? Reach out directly.
        </p>
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <motion.a
            href="https://wa.me/+923105499944"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            WhatsApp
          </motion.a>
          <motion.a
            href="mailto:zaheerahmedjudg@gmail.com"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium border border-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Email Directly
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
