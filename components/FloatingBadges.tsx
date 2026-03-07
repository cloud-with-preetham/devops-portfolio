"use client";

import { motion } from "framer-motion";

export default function FloatingBadges() {
  const badges = [
    { text: "AWS Certified", color: "from-orange-500 to-yellow-500", delay: 0 },
    { text: "Docker Expert", color: "from-blue-500 to-cyan-500", delay: 0.2 },
    { text: "K8s Pro", color: "from-blue-600 to-purple-600", delay: 0.4 },
    { text: "CI/CD Master", color: "from-green-500 to-teal-500", delay: 0.6 },
    { text: "IaC Specialist", color: "from-purple-500 to-pink-500", delay: 0.8 },
    { text: "Cloud Native", color: "from-red-500 to-orange-500", delay: 1 },
  ];

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ delay: badge.delay }}
              className={`px-6 py-3 rounded-full bg-linear-to-r ${badge.color} font-semibold text-white shadow-lg cursor-pointer`}
            >
              {badge.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
