"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiGmail, SiDiscord, SiSlack } from "react-icons/si";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const socials = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/cloud-with-preetham", color: "from-gray-600 to-gray-800", hoverColor: "hover:shadow-gray-500/50" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/preetham-pereira", color: "from-blue-600 to-blue-800", hoverColor: "hover:shadow-blue-500/50" },
    { name: "Twitter", icon: FaTwitter, url: "https://x.com/yourcloudguy_", color: "from-sky-500 to-blue-600", hoverColor: "hover:shadow-sky-500/50" },
    { name: "Gmail", icon: SiGmail, url: "mailto:reachout.preetham@gmail.com", color: "from-red-500 to-red-700", hoverColor: "hover:shadow-red-500/50" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Message sent! I'll get back to you soon.");
    setTimeout(() => setStatus(""), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-shimmer">Let's Connect</h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let's build something amazing together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Available for Opportunities</h3>
              </div>
              <p className="text-gray-400">Open to DevOps, Cloud Engineering, and SRE roles. Remote or hybrid positions preferred.</p>
            </div>

            {/* Contact Details */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              
              <a href="mailto:reachout.preetham@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition">
                  <FaEnvelope className="text-xl text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold">reachout.preetham@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-xl text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold">Remote / Hybrid</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <h3 className="text-xl font-bold text-white mb-6">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br ${social.color} hover:shadow-lg ${social.hoverColor} transition`}
                    >
                      <Icon className="text-2xl text-white" />
                      <span className="font-semibold text-white">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-400">&lt; 24h</p>
                  <p className="text-xs text-gray-400">Response Time</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-400">100%</p>
                  <p className="text-xs text-gray-400">Satisfaction</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400">50+</p>
                  <p className="text-xs text-gray-400">Projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  Send Message
                </motion.button>

                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-400 font-medium"
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
