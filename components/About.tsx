"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt, FaRocket, FaHeart, FaCode, FaLightbulb, FaUsers, FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function About() {
  const [yearsExp, setYearsExp] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 5;
    const duration = 2000;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setYearsExp(end);
        clearInterval(timer);
      } else {
        setYearsExp(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const quickFacts = [
    { icon: FaMapMarkerAlt, label: "Location", value: "Bangalore, India" },
    { icon: FaCalendarAlt, label: "Experience", value: `${yearsExp}+ Years` },
    { icon: FaRocket, label: "Focus", value: "Cloud & DevOps" },
    { icon: FaHeart, label: "Status", value: "Open to Work" },
  ];

  const journey = [
    { year: "2019", title: "Started DevOps Journey", desc: "Began with Linux & scripting" },
    { year: "2021", title: "Cloud Specialist", desc: "Mastered AWS & Kubernetes" },
    { year: "2023", title: "Senior DevOps Engineer", desc: "Led infrastructure automation" },
    { year: "2024", title: "Cloud Architect", desc: "Designing scalable solutions" },
  ];

  const values = [
    { icon: FaCode, title: "Automation First", desc: "Automate everything that can be automated" },
    { icon: FaLightbulb, title: "Continuous Learning", desc: "Stay updated with latest technologies" },
    { icon: FaUsers, title: "Collaboration", desc: "Bridge the gap between Dev and Ops" },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-shimmer">About Me</h2>
          <p className="text-gray-400 text-lg">Get to know the person behind the code</p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Image */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-full animate-pulse-glow"></div>
                <Image
                  src="/profile.jpg"
                  alt="Preetham Pereira"
                  width={192}
                  height={192}
                  className="relative rounded-full border-4 border-white/20 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Preetham Pereira</h3>
              <p className="text-purple-400 font-semibold mb-4">Senior DevOps Engineer</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl font-semibold flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-purple-500/50 transition"
              >
                <FaDownload /> Download Resume
              </motion.button>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition"
                  >
                    <Icon className="text-2xl text-purple-400 mb-2" />
                    <p className="text-xs text-gray-400 mb-1">{fact.label}</p>
                    <p className="text-sm font-semibold text-white">{fact.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hello! I&apos;m Preetham 👋
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m a passionate <span className="text-white font-semibold">DevOps Engineer</span> with {yearsExp}+ years of experience in building and maintaining scalable cloud infrastructure. I specialize in automating deployment pipelines and optimizing system performance.
              </p>
              <p>
                My expertise lies in <span className="text-purple-400 font-semibold">AWS, Kubernetes, Docker, and Terraform</span>, where I&apos;ve successfully deployed and managed production environments serving millions of users.
              </p>
              <p>
                I believe in the power of <span className="text-blue-400 font-semibold">automation and continuous improvement</span>. My goal is to eliminate manual processes, reduce deployment times, and ensure 99.9% uptime for critical applications.
              </p>
              <p>
                When I&apos;m not optimizing infrastructure, you&apos;ll find me exploring new DevOps tools, contributing to open-source projects, or sharing knowledge through technical blogs and community meetups.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Journey
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {journey.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition relative"
              >
                <div className="absolute -top-4 left-6 px-4 py-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full">
                  <span className="text-sm font-bold">{milestone.year}</span>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                  <p className="text-sm text-gray-400">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-400">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Beyond DevOps
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl mb-2">☕</p>
              <p className="text-white font-semibold mb-1">Coffee Enthusiast</p>
              <p className="text-sm text-gray-400">Powered by caffeine</p>
            </div>
            <div>
              <p className="text-4xl mb-2">🎮</p>
              <p className="text-white font-semibold mb-1">Gaming Geek</p>
              <p className="text-sm text-gray-400">Strategy & RPG fan</p>
            </div>
            <div>
              <p className="text-4xl mb-2">📚</p>
              <p className="text-white font-semibold mb-1">Tech Blogger</p>
              <p className="text-sm text-gray-400">Sharing knowledge</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
