"use client";

import { motion } from "framer-motion";
import { FaGithub, FaDocker, FaAws, FaRocket, FaCode } from "react-icons/fa";
import { SiGithubactions, SiNginx, SiPrometheus, SiGrafana, SiTerraform } from "react-icons/si";
import { VscChecklist, VscGitPullRequest } from "react-icons/vsc";
import { MdBuild, MdCloudUpload, MdSettings } from "react-icons/md";

export default function Architecture() {
  const pipeline = [
    { 
      step: "Developer Push", 
      IconComponent: VscGitPullRequest, 
      color: "from-blue-500 to-cyan-500",
      description: "Code commit & push"
    },
    { 
      step: "GitHub Repository", 
      IconComponent: FaGithub, 
      color: "from-gray-400 to-gray-600",
      description: "Version control"
    },
    { 
      step: "GitHub Actions CI/CD", 
      IconComponent: SiGithubactions, 
      color: "from-blue-600 to-purple-600",
      description: "Automated workflow"
    },
    { 
      step: "Run Tests", 
      IconComponent: VscChecklist, 
      color: "from-green-500 to-teal-500",
      description: "Unit & integration tests"
    },
    { 
      step: "Build Application", 
      IconComponent: MdBuild, 
      color: "from-orange-500 to-yellow-500",
      description: "Compile & bundle"
    },
    { 
      step: "Docker Image Build", 
      IconComponent: FaDocker, 
      color: "from-blue-400 to-cyan-400",
      description: "Containerization"
    },
    { 
      step: "Push to Docker Registry", 
      IconComponent: MdCloudUpload, 
      color: "from-purple-500 to-pink-500",
      description: "Image repository"
    },
    { 
      step: "Deploy to AWS EC2", 
      IconComponent: FaAws, 
      color: "from-orange-400 to-yellow-400",
      description: "Cloud deployment"
    },
    { 
      step: "Configure Infrastructure", 
      IconComponent: SiTerraform, 
      color: "from-purple-400 to-pink-400",
      description: "IaC provisioning"
    },
    { 
      step: "NGINX Reverse Proxy", 
      IconComponent: SiNginx, 
      color: "from-green-600 to-teal-600",
      description: "Load balancing"
    },
    { 
      step: "Application Running", 
      IconComponent: FaRocket, 
      color: "from-blue-500 to-purple-500",
      description: "Live production"
    },
    { 
      step: "Monitoring (Prometheus)", 
      IconComponent: SiPrometheus, 
      color: "from-orange-500 to-red-500",
      description: "Metrics collection"
    },
    { 
      step: "Visualization (Grafana)", 
      IconComponent: SiGrafana, 
      color: "from-orange-400 to-yellow-500",
      description: "Dashboard & alerts"
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-4 text-shimmer"
        >
          Complete DevOps CI/CD Pipeline
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          End-to-end automated deployment workflow
        </motion.p>

        <div className="flex flex-col items-center">
          {pipeline.map((item, index) => {
            const Icon = item.IconComponent;
            return (
              <div key={index} className="flex flex-col items-center w-full max-w-2xl">
                {/* Pipeline Step Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="w-full group"
                >
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                    {/* Step Number Badge */}
                    <div className={`absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-linear-to-br ${item.color} flex items-center justify-center text-white font-bold shadow-lg z-10`}>
                      {index + 1}
                    </div>

                    <div className="flex items-center gap-6 pl-8">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="text-3xl text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition">
                          {item.step}
                        </h3>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>

                      {/* Status Indicator */}
                      <div className="flex-shrink-0">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                        />
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                  </div>
                </motion.div>

                {/* Arrow Connector */}
                {index !== pipeline.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="h-8 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-3xl text-purple-400"
                    >
                      ↓
                    </motion.div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pipeline Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-4"
        >
          {[
            { label: "Total Steps", value: "13", icon: VscChecklist },
            { label: "Avg Duration", value: "3m 45s", icon: MdBuild },
            { label: "Success Rate", value: "99.2%", icon: FaRocket },
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={stat.label}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition"
              >
                <div className="flex justify-center mb-2">
                  <StatIcon className="text-2xl text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
