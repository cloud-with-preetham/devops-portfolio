"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function InteractiveTerminal() {
  const [currentCommand, setCurrentCommand] = useState(0);
  
  const commands = [
    { cmd: "$ aws ec2 describe-instances", output: "✓ Fetching EC2 instances..." },
    { cmd: "$ docker build -t app:latest .", output: "✓ Building Docker image..." },
    { cmd: "$ kubectl get pods", output: "✓ All pods running successfully" },
    { cmd: "$ terraform apply", output: "✓ Infrastructure deployed" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [commands.length]);

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-black/60 border border-green-500/30 rounded-2xl p-8 font-mono shadow-2xl shadow-green-500/10"
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="space-y-4">
            <motion.div
              key={currentCommand}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-green-400"
            >
              <div className="mb-2">{commands[currentCommand].cmd}</div>
              <div className="text-gray-400 text-sm">{commands[currentCommand].output}</div>
            </motion.div>
          </div>
          
          <div className="mt-4 flex items-center">
            <span className="text-green-400 mr-2">$</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block w-2 h-4 bg-green-400"
            ></motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
