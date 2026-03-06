"use client";

import { motion } from "framer-motion";

export default function AnimatedPipeline() {

  const pipeline = [
    "👨‍💻 Developer",
    "📦 GitHub",
    "⚙️ CI/CD",
    "🐳 Docker Build",
    "☁️ AWS Deploy",
    "🌐 NGINX",
    "🚀 Application"
  ];

  return (
    <section className="py-32">

      <h2 className="text-3xl font-bold text-center mb-16">
        CI/CD Deployment Pipeline
      </h2>

      <div className="relative max-w-6xl mx-auto">

        {/* Horizontal Pipeline */}
        <div className="flex justify-between items-center">

          {pipeline.map((step, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* Gradient Border */}
              <div className="p-px rounded-xl bg-linear-to-r from-gray-700 via-gray-400 to-gray-700">

                <div className="px-6 py-3 rounded-xl bg-black border border-white/10 text-sm">
                  {step}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Animated Deployment Indicator */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.9)]"
          initial={{ left: "0%" }}
          animate={{ left: "100%" }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />

      </div>

    </section>
  );
}
