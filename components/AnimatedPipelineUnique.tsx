"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaDocker, FaAws, FaRocket } from "react-icons/fa";
import { SiGithubactions, SiPrometheus, SiGrafana } from "react-icons/si";
import { VscChecklist } from "react-icons/vsc";
import { MdBuild } from "react-icons/md";

export default function AnimatedPipelineUnique() {
  const [activeStep, setActiveStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const stages = [
    { 
      name: "Source", 
      IconComponent: FaGithub,
      steps: ["Git Push", "Webhook Trigger", "Clone Repo"],
      color: "from-blue-500 to-cyan-500",
      status: "success",
      duration: "2s"
    },
    { 
      name: "Build", 
      IconComponent: MdBuild,
      steps: ["Install Dependencies", "Run Unit Tests", "Build Docker Image"],
      color: "from-purple-500 to-pink-500",
      status: "success",
      duration: "45s"
    },
    { 
      name: "Deploy", 
      IconComponent: FaAws,
      steps: ["Push to ECR", "Update ECS Task", "Health Check"],
      color: "from-green-500 to-teal-500",
      status: "running",
      duration: "30s"
    },
    { 
      name: "Monitor", 
      IconComponent: SiPrometheus,
      steps: ["Collect Metrics", "Send Alerts", "Update Dashboard"],
      color: "from-orange-500 to-yellow-500",
      status: "pending",
      duration: "--"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stages.length]);

  useEffect(() => {
    const logMessages = [
      "[INFO] Pipeline started...",
      "[SUCCESS] Tests passed ✓",
      "[INFO] Building image...",
      "[SUCCESS] Deployed to production ✓"
    ];
    const timer = setTimeout(() => {
      setLogs(logMessages);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    { label: "Build Time", value: "1m 17s", IconComponent: VscChecklist },
    { label: "Success Rate", value: "98.5%", IconComponent: FaRocket },
    { label: "Deployments", value: "247", IconComponent: SiGithubactions },
    { label: "Uptime", value: "99.9%", IconComponent: SiGrafana },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-4 text-shimmer"
        >
          Production CI/CD Pipeline
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          Real-time deployment workflow
        </motion.p>

        {/* Pipeline Stages */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stages.map((stage, index) => {
            const Icon = stage.IconComponent;
            return (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className={`backdrop-blur-xl bg-white/5 border-2 ${
                  activeStep === index ? 'border-purple-500 shadow-lg shadow-purple-500/50' : 
                  stage.status === 'success' ? 'border-green-500/30' :
                  stage.status === 'running' ? 'border-yellow-500/30' :
                  'border-white/10'
                } rounded-2xl p-6 transition-all duration-300`}>
                  
                  {/* Status Badge */}
                  <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold ${
                    stage.status === 'success' ? 'bg-green-500 text-white' :
                    stage.status === 'running' ? 'bg-yellow-500 text-black' :
                    'bg-gray-500 text-white'
                  }`}>
                    {stage.status === 'success' ? '✓' : stage.status === 'running' ? '⟳' : '○'}
                  </div>

                  {/* Stage Number */}
                  <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-full bg-linear-to-br ${stage.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-3 text-center flex justify-center">
                    <Icon className={`text-5xl text-white`} />
                  </div>

                  {/* Stage Name */}
                  <h3 className="text-xl font-bold text-white text-center mb-2">{stage.name}</h3>
                  <p className="text-xs text-gray-500 text-center mb-4">Duration: {stage.duration}</p>

                  {/* Steps */}
                  <div className="space-y-2">
                    {stage.steps.map((step, i) => (
                      <div key={step} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          stage.status === 'success' ? 'bg-green-500' :
                          stage.status === 'running' && i === 0 ? 'bg-yellow-500 animate-pulse' :
                          'bg-gray-600'
                        }`}></div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: activeStep === index ? [0, 10, 0] : 0 }}
                      transition={{ duration: 1, repeat: activeStep === index ? Infinity : 0 }}
                      className={`text-3xl ${
                        activeStep === index ? 'text-purple-400' : 'text-gray-600'
                      }`}
                    >
                      →
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Live Logs Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-black/80 border border-green-500/30 rounded-xl p-6 font-mono text-sm mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-gray-400">Pipeline Logs</span>
          </div>
          <div className="space-y-1">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 }}
                className={`${
                  log.includes('SUCCESS') ? 'text-green-400' :
                  log.includes('ERROR') ? 'text-red-400' :
                  'text-gray-400'
                }`}
              >
                {log}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-green-400 ml-1"
            />
          </div>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, i) => {
            const MetricIcon = metric.IconComponent;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition"
              >
                <div className="text-purple-400 mb-2 flex justify-center">
                  <MetricIcon className="text-2xl" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-xs text-gray-400">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
