"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className=" pt-32 pb-40 hero-glow h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-6xl font-bold">
        Preetham Pereira
        </h1>

        <p className="text-gray-400 mt-4">
        AWS • Docker • Kubernetes • Terraform • CI/CD
        </p>

        <p className="mt-6 max-w-xl mx-auto text-gray-500">
        Automating infrastructure and building reliable cloud systems using
        AWS, Docker, Kubernetes, and modern CI/CD practices.
        </p>
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded-lg"
          >
            View Projects
          </a>

          <a
            href="/Preetham_Pereira_Devops_resume.pdf"
            download
            className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white hover:text-black transition"
            >
            Download Resume
          </a>
        </div>
      </motion.div>

    </section>
  );
}
