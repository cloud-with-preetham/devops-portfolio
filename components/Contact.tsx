"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const socials = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/cloud-with-preetham", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/preetham-pereira", color: "hover:text-sky-400" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://x.com/yourcloudguy_", color: "hover:text-purple-400" },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <p className="text-gray-400 mb-8">
            Interested in working together? Feel free to reach out!
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:reachout.preetham@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition mb-8"
          >
            <FaEnvelope />
            reachout.preetham@gmail.com
          </motion.a>

          <div className="flex justify-center gap-6 mt-8">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.2, y: -5 }}
                href={social.url}
                className={`text-3xl text-gray-400 ${social.color} transition`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
