"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m <span className="text-white font-semibold">Preetham Pereira</span>,
            a DevOps engineer focused on building scalable cloud infrastructure
            and automated CI/CD pipelines.
            <br /><br />
            I work with technologies like
            <span className="text-purple-400 font-semibold"> AWS, Docker, Kubernetes, and GitHub Actions</span> to streamline development and deployment workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
