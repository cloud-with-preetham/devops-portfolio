"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaAws, FaDocker, FaGitAlt, FaPython } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiJenkins, SiPrometheus } from "react-icons/si";
import { useState, useEffect } from "react";

export default function FloatingTechCards() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    { name: "AWS", icon: FaAws, color: "from-orange-500 to-orange-600", position: { x: -200, y: -100 }, rotation: -15, depth: 1 },
    { name: "Kubernetes", icon: SiKubernetes, color: "from-blue-500 to-blue-600", position: { x: 200, y: -80 }, rotation: 12, depth: 2 },
    { name: "Docker", icon: FaDocker, color: "from-cyan-500 to-cyan-600", position: { x: -150, y: 100 }, rotation: 8, depth: 3 },
    { name: "Terraform", icon: SiTerraform, color: "from-purple-500 to-purple-600", position: { x: 150, y: 120 }, rotation: -10, depth: 1.5 },
    { name: "Jenkins", icon: SiJenkins, color: "from-red-500 to-red-600", position: { x: 0, y: -150 }, rotation: 5, depth: 2.5 },
    { name: "Python", icon: FaPython, color: "from-yellow-500 to-blue-500", position: { x: -250, y: 50 }, rotation: -8, depth: 2 },
    { name: "Git", icon: FaGitAlt, color: "from-orange-600 to-red-600", position: { x: 250, y: 80 }, rotation: 15, depth: 1.8 },
    { name: "Prometheus", icon: SiPrometheus, color: "from-orange-500 to-red-500", position: { x: 0, y: 150 }, rotation: -12, depth: 2.2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      }}></div>

      {/* Center Content */}
      <div className="relative z-10 text-center mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-black text-white mb-4"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Move your mouse to interact
        </motion.p>
      </div>

      {/* Floating 3D Cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          const parallaxX = mousePosition.x * (20 * tech.depth);
          const parallaxY = mousePosition.y * (20 * tech.depth);

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0, rotateY: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: tech.position.x + parallaxX,
                y: tech.position.y + parallaxY,
              }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
                damping: 20
              }}
              whileHover={{
                scale: 1.2,
                rotateY: 180,
                z: 100,
                transition: { duration: 0.6 }
              }}
              className="absolute w-32 h-32 cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Card Front */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br ${tech.color} rounded-2xl shadow-2xl flex items-center justify-center border border-white/10`}
                style={{
                  backfaceVisibility: "hidden",
                  transform: `rotateZ(${tech.rotation}deg)`,
                }}
              >
                <Icon className="text-6xl text-white drop-shadow-lg" />
              </motion.div>

              {/* Card Back */}
              <motion.div
                className="absolute inset-0 bg-slate-800 rounded-2xl shadow-2xl flex items-center justify-center border border-white/20"
                style={{
                  backfaceVisibility: "hidden",
                  transform: `rotateY(180deg) rotateZ(${tech.rotation}deg)`,
                }}
              >
                <p className="text-white font-bold text-lg">{tech.name}</p>
              </motion.div>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${tech.color} rounded-2xl blur-xl opacity-50`}
                style={{ transform: `translateZ(-20px) rotateZ(${tech.rotation}deg)` }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Hover cards to flip</p>
        <div className="flex gap-2 justify-center">
          {techStack.map((tech) => (
            <div key={tech.name} className={`w-2 h-2 rounded-full bg-linear-to-r ${tech.color}`}></div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
