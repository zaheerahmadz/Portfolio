// Contact.jsx
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-300">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's Bring Your <span className="text-indigo-500">Vision</span> to
            Life
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Drop us a message — we're excited to hear
            about it and explore how we can help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="text-white font-medium">+92 333 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-white font-medium">hello@zaheer.dev</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white font-medium">
                      Islamabad, Pakistan
                      <br />
                      {/* Add full address if needed */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500 mb-4">Follow Us</p>
                <div className="flex gap-5">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaLinkedinIn size={22} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaFacebookF size={22} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Optional small map card */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden h-64">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26599.999999999996!2d73.029!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbd1f6e!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <form className="bg-gray-900/70 backdrop-blur-md border border-gray-800/50 rounded-2xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                Send us a Message
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-600 text-white placeholder-gray-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-600 text-white placeholder-gray-500 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-5 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-600 text-white placeholder-gray-500 transition-colors"
                  placeholder="Project Discussion / Collaboration / Quote"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-5 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-600 text-white placeholder-gray-500 transition-colors resize-none"
                  placeholder="Tell us about your project, timeline, budget range, or anything else you'd like to share..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-8 w-full md:w-auto px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-900/30 transform hover:-translate-y-0.5"
              >
                Send Message →
              </button>

              <p className="mt-4 text-sm text-gray-500 text-center md:text-left">
                We'll get back to you within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Optional CTA bottom */}
      <div className="border-t border-gray-800/50 py-16 text-center">
        <p className="text-gray-400 text-lg">
          Prefer a quick chat? Reach out on WhatsApp or book a call directly.
        </p>
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <a
            href="https://wa.me/923334567890"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600/90 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
          >
            Chat on WhatsApp
          </a>
          <a
            href="mailto:hello@zaheer.dev"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium border border-gray-700"
          >
            Email Us Directly
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
