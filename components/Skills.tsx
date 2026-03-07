"use client";

import { motion } from "framer-motion";
import { FaAws, FaDocker, FaGithub, FaPython, FaLinux, FaJava, FaNodeJs, FaReact, FaJenkins, FaGitAlt, FaMicrosoft, FaCode } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiArgo, SiHelm, SiNginx, SiRedis, SiPostgresql, SiMongodb, SiElasticsearch, SiRabbitmq, SiApachekafka, SiGooglecloud, SiGitlab, SiCircleci, SiDatadog, SiNewrelic, SiVault, SiConsul} from "react-icons/si";
import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Cloud & Infrastructure");

  const skillCategories = {
    "Cloud & Infrastructure": [
      { name: "AWS", icon: FaAws, color: "text-orange-400", level: 95 },
      { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-400", level: 85 },
      { name: "Azure", icon: FaMicrosoft, color: "text-blue-500", level: 80 },
      { name: "Terraform", icon: SiTerraform, color: "text-purple-500", level: 90 },
      { name: "Ansible", icon: SiAnsible, color: "text-red-500", level: 85 },
      { name: "Linux", icon: FaLinux, color: "text-yellow-400", level: 95 },
    ],
    "Containers & Orchestration": [
      { name: "Docker", icon: FaDocker, color: "text-blue-400", level: 95 },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", level: 90 },
      { name: "Helm", icon: SiHelm, color: "text-blue-300", level: 85 },
      { name: "ArgoCD", icon: SiArgo, color: "text-orange-500", level: 80 },
    ],
    "CI/CD & Version Control": [
      { name: "GitHub Actions", icon: FaGithub, color: "text-gray-300", level: 95 },
      { name: "GitLab CI", icon: SiGitlab, color: "text-orange-600", level: 85 },
      { name: "Jenkins", icon: FaJenkins, color: "text-red-500", level: 85 },
      { name: "CircleCI", icon: SiCircleci, color: "text-green-500", level: 75 },
      { name: "Git", icon: FaGitAlt, color: "text-orange-500", level: 95 },
    ],
    "Monitoring & Observability": [
      { name: "Prometheus", icon: SiPrometheus, color: "text-orange-500", level: 90 },
      { name: "Grafana", icon: SiGrafana, color: "text-orange-400", level: 90 },
      { name: "Datadog", icon: SiDatadog, color: "text-purple-500", level: 80 },
      { name: "New Relic", icon: SiNewrelic, color: "text-green-400", level: 75 },
      { name: "Elasticsearch", icon: SiElasticsearch, color: "text-yellow-400", level: 85 },
    ],
    "Databases & Messaging": [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", level: 85 },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500", level: 80 },
      { name: "Redis", icon: SiRedis, color: "text-red-500", level: 85 },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-500", level: 75 },
      { name: "Apache Kafka", icon: SiApachekafka, color: "text-white", level: 80 },
    ],
    "Programming & Scripting": [
      { name: "Python", icon: FaPython, color: "text-blue-400", level: 90 },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500", level: 80 },
      { name: "Java", icon: FaJava, color: "text-red-500", level: 75 },
      { name: "React", icon: FaReact, color: "text-cyan-400", level: 70 },
    ],
    "Security & Tools": [
      { name: "Vault", icon: SiVault, color: "text-yellow-400", level: 80 },
      { name: "Consul", icon: SiConsul, color: "text-pink-500", level: 75 },
      { name: "SonarQube", icon: FaCode, color: "text-blue-400", level: 80 },
      { name: "Nginx", icon: SiNginx, color: "text-green-500", level: 90 },
    ],
  };

  const tabs = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-shimmer">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg">Comprehensive DevOps and Cloud Engineering expertise</p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition ${
                activeTab === tab
                  ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillCategories[activeTab as keyof typeof skillCategories].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>

                {/* Icon */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <Icon className={`text-5xl ${skill.color}`} />
                  </motion.div>

                  {/* Skill Name */}
                  <p className="text-sm font-semibold text-white mb-3 text-center">{skill.name}</p>

                  {/* Proficiency Level */}
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400">Proficiency</span>
                      <span className="text-xs font-bold text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.05 + 0.2, duration: 0.8 }}
                        className="h-full bg-linear-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Experience badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                  <span className="text-xs text-green-400 font-medium">
                    {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">30+</p>
              <p className="text-gray-400 text-sm">Technologies</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">5+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">15+</p>
              <p className="text-gray-400 text-sm">Certifications</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-pink-400 mb-2">100+</p>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
