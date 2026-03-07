"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInfoCircle, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Hero() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      <div className="w-full h-full grid lg:grid-cols-2">
        {/* Left Side - Content */}
        <div className="flex items-center px-8 lg:px-16 xl:px-24 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-8xl font-black mb-6 leading-none bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              PREETHAM
              <br />
              PEREIRA
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-transparent bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl mb-3 font-semibold"
            >
              DevOps Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 text-base mb-10 leading-relaxed"
            >
              Automating infrastructure, optimizing pipelines, and ensuring 99.9% uptime for mission-critical applications.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mb-12 pb-8 border-b border-white/10"
            >
              <div>
                <p className="text-4xl font-black bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">5+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Years</p>
              </div>
              <div>
                <p className="text-4xl font-black bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">500+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Deploys</p>
              </div>
              <div>
                <p className="text-4xl font-black bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">99.9%</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Uptime</p>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Preetham_Pereira_Devops_resume.pdf"
                className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full backdrop-blur-xl bg-white/5 hover:border-purple-500/50 transition-all"
              >
                Portfolio
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6"
            >
              <motion.a whileHover={{ y: -5 }} href="https://github.com/cloud-with-preetham" className="text-gray-400 hover:text-white text-2xl transition">
                <FaGithub />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://linkedin.com/in/preetham-pereira" className="text-gray-400 hover:text-white text-2xl transition">
                <FaLinkedin />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://x.com/yourcloudguy_" className="text-gray-400 hover:text-white text-2xl transition">
                <FaTwitter />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="mailto:preetham@example.com" className="text-gray-400 hover:text-white text-2xl transition">
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:flex items-end justify-center overflow-hidden"
        >
          <Image
            src="/without-background.png"
            alt="Preetham Pereira"
            width={900}
            height={1100}
            className="object-contain object-bottom h-full"
            style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) brightness(0.98) contrast(1.05)' }}
            priority
          />

          {/* Info Toggle Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowInfo(!showInfo)}
            className="absolute bottom-12 right-12 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-20 cursor-pointer"
          >
            <FaInfoCircle className="text-2xl" />
          </motion.button>

          {/* Info Card - Toggleable */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ type: "spring", damping: 20 }}
                className="absolute bottom-28 right-12 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 z-20 min-w-75 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowInfo(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
                >
                  <FaTimes />
                </button>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium">Bangalore, India</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Email</p>
                    <p className="text-white font-medium">preetham@example.com</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Specialization</p>
                    <p className="text-white font-medium">Cloud Architecture</p>
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">Status</p>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <p className="text-green-400 font-semibold">Available for Work</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
