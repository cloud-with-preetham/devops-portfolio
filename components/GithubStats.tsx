"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GithubStats() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 text-shimmer"
        >
          GitHub Activity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          My open source contributions
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
          >
            <Image
              src="https://github-readme-stats.vercel.app/api?username=cloud-with-preetham&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&title_color=a78bfa&icon_color=60a5fa&text_color=e5e7eb"
              alt="GitHub Stats"
              width={495}
              height={195}
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
          >
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=cloud-with-preetham&layout=compact&theme=radical&hide_border=true&bg_color=00000000&title_color=a78bfa&text_color=e5e7eb"
              alt="Top Languages"
              width={495}
              height={195}
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
        >
          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=cloud-with-preetham&theme=radical&hide_border=true&background=00000000&ring=a78bfa&fire=60a5fa&currStreakLabel=e5e7eb"
            alt="GitHub Streak"
            width={1000}
            height={200}
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
