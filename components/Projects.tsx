"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaAws, FaDocker, FaRocket, FaUsers, FaClock } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPython, SiJenkins } from "react-icons/si";

export default function Projects() {
  const featuredProject = {
    title: "Cloud-Native Microservices Platform",
    description: "Enterprise-grade microservices platform with automated CI/CD, monitoring, and auto-scaling capabilities. Reduced deployment time by 70% and improved system reliability to 99.9% uptime.",
    tech: [
      { name: "AWS", icon: FaAws, color: "text-orange-400" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
      { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
      { name: "Docker", icon: FaDocker, color: "text-blue-400" },
    ],
    metrics: [
      { label: "Deployment Time", value: "70% Faster" },
      { label: "Uptime", value: "99.9%" },
      { label: "Cost Savings", value: "40%" },
    ],
    status: "Production",
    github: "https://github.com/cloud-with-preetham",
    demo: "#",
  };

  const projects = [
    {
      title: "Automated CI/CD Pipeline",
      description: "Multi-stage pipeline with automated testing, security scanning, and deployment to multiple environments.",
      tech: [{ icon: SiJenkins, color: "text-red-500" }, { icon: FaDocker, color: "text-blue-400" }, { icon: FaAws, color: "text-orange-400" }],
      metrics: { deployments: "500+", time: "5 min" },
      status: "Production",
    },
    {
      title: "Infrastructure as Code",
      description: "Multi-cloud infrastructure automation with Terraform managing 50+ AWS resources across dev, staging, and production.",
      tech: [{ icon: SiTerraform, color: "text-purple-500" }, { icon: FaAws, color: "text-orange-400" }],
      metrics: { resources: "50+", environments: "3" },
      status: "Production",
    },
    {
      title: "Kubernetes Monitoring Stack",
      description: "Complete observability solution with Prometheus, Grafana, and custom dashboards for real-time insights.",
      tech: [{ icon: SiKubernetes, color: "text-blue-500" }, { icon: FaDocker, color: "text-blue-400" }],
      metrics: { metrics: "100+", alerts: "24/7" },
      status: "Active",
    },
    {
      title: "Python DevOps Automation",
      description: "Custom automation scripts and tools for infrastructure management, backup automation, and cost optimization.",
      tech: [{ icon: SiPython, color: "text-blue-400" }, { icon: FaAws, color: "text-orange-400" }],
      metrics: { scripts: "30+", saved: "20hrs/week" },
      status: "Active",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-shimmer">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Real-world DevOps solutions that drive business impact</p>
        </motion.div>

        {/* Featured Project - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition group">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Left - Content */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs text-green-400 font-semibold">
                    {featuredProject.status}
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-xs text-purple-400 font-semibold">
                    Featured
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition">
                  {featuredProject.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {featuredProject.tech.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                        <Icon className={`text-xl ${tech.color}`} />
                        <span className="text-sm text-gray-300">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {featuredProject.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="text-2xl font-bold text-transparent bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text">{metric.value}</p>
                      <p className="text-xs text-gray-400">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={featuredProject.github}
                    className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
                  >
                    <FaGithub /> View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={featuredProject.demo}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-white/20 rounded-xl font-semibold backdrop-blur-xl bg-white/5 hover:border-purple-500/50 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Right - Visual */}
              <div className="flex items-center justify-center">
                <div className="relative w-full h-80 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <FaRocket className="text-8xl text-purple-400 mb-4 mx-auto animate-float" />
                    <p className="text-gray-400 text-sm">Project Architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-3">
                  {project.tech.map((tech, i) => {
                    const Icon = tech.icon;
                    return <Icon key={i} className={`text-3xl ${tech.color}`} />;
                  })}
                </div>
                <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs text-green-400 font-semibold">
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 text-xs">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                    <span className="text-purple-400 font-semibold">{value}</span>
                    <span className="text-gray-500 ml-1">{key}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-4 text-gray-400">
                <motion.a whileHover={{ scale: 1.2, color: "#a78bfa" }} href="#" className="transition">
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, color: "#a78bfa" }} href="#" className="transition">
                  <FaExternalLinkAlt className="text-xl" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/cloud-with-preetham"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 rounded-full font-semibold backdrop-blur-xl bg-white/5 hover:border-purple-500/50 transition text-white"
          >
            <FaGithub /> View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
