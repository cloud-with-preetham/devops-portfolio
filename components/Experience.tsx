"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaAward, FaAws, FaJenkins } from "react-icons/fa";
import { SiKubernetes, SiDocker, SiTerraform, SiPrometheus, SiGrafana, SiGithubactions } from "react-icons/si";

export default function Experience() {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Company",
      location: "Remote",
      period: "2023 - Present",
      type: "Full-time",
      description: "Led infrastructure automation and CI/CD pipeline implementation for microservices architecture serving millions of users.",
      achievements: [
        "Reduced deployment time by 70% using GitHub Actions and automated workflows",
        "Managed AWS infrastructure serving 1M+ users with 99.9% uptime",
        "Implemented comprehensive monitoring with Prometheus & Grafana",
        "Led team of 5 engineers in cloud migration project"
      ],
      techStack: [
        { name: "AWS", icon: FaAws, color: "text-orange-400" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
        { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-400" }
      ],
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Cost Saved", value: "$200K" },
        { label: "Deploy Time", value: "-70%" }
      ]
    },
    {
      title: "DevOps Engineer",
      company: "Startup Inc",
      location: "San Francisco, CA",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Built and maintained cloud infrastructure on AWS with Terraform and Kubernetes for high-traffic applications.",
      achievements: [
        "Migrated 20+ legacy applications to containerized architecture",
        "Achieved 99.9% uptime for production systems",
        "Reduced infrastructure costs by 40% through optimization",
        "Implemented CI/CD pipelines for 15+ microservices"
      ],
      techStack: [
        { name: "Docker", icon: SiDocker, color: "text-blue-400" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
        { name: "Prometheus", icon: SiPrometheus, color: "text-orange-500" },
        { name: "Grafana", icon: SiGrafana, color: "text-orange-400" }
      ],
      metrics: [
        { label: "Apps Migrated", value: "20+" },
        { label: "Cost Reduction", value: "40%" },
        { label: "Uptime", value: "99.9%" }
      ]
    },
    {
      title: "Junior DevOps Engineer",
      company: "Software Solutions",
      location: "New York, NY",
      period: "2020 - 2021",
      type: "Full-time",
      description: "Assisted in automation and deployment processes using Docker and Jenkins for enterprise applications.",
      achievements: [
        "Automated deployment pipelines for 10+ projects",
        "Implemented Docker containerization for legacy apps",
        "Created comprehensive infrastructure documentation",
        "Reduced manual deployment time by 60%"
      ],
      techStack: [
        { name: "Docker", icon: SiDocker, color: "text-blue-400" },
        { name: "Jenkins", icon: FaJenkins, color: "text-red-500" },
        { name: "AWS", icon: FaAws, color: "text-orange-400" },
        { name: "Terraform", icon: SiTerraform, color: "text-purple-500" }
      ],
      metrics: [
        { label: "Pipelines", value: "10+" },
        { label: "Time Saved", value: "60%" },
        { label: "Projects", value: "15+" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-shimmer">Professional Experience</h2>
          <p className="text-gray-400 text-lg">My journey in DevOps and Cloud Engineering</p>
        </motion.div>

        <div className="relative">
          {/* Animated Dotted Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 opacity-50" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(139, 92, 246, 0.8) 10px, rgba(139, 92, 246, 0.8) 20px)',
              animation: 'flow 3s linear infinite'
            }}></div>
          </div>
          <style jsx>{`
            @keyframes flow {
              0% { background-position: 0 0; }
              100% { background-position: 0 40px; }
            }
          `}</style>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}
            >
              {/* Timeline dot with pulse */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute left-6 md:left-1/2 top-8 w-6 h-6 rounded-full bg-linear-to-r from-blue-500 to-purple-500 border-4 border-black transform md:-translate-x-1/2 z-10"
              >
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="ml-16 md:ml-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <FaBriefcase className="text-purple-400" />
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    </div>
                    <p className="text-xl text-purple-400 font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaCalendar className="text-blue-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-green-400" />
                        {exp.location}
                      </span>
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <FaAward className="text-yellow-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
                        >
                          <Icon className={`text-lg ${tech.color}`} />
                          <span className="text-xs text-gray-300">{tech.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {exp.metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center p-3 bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-xl"
                    >
                      <p className="text-xl font-bold text-white mb-1">{metric.value}</p>
                      <p className="text-xs text-gray-400">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">5+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">50+</p>
              <p className="text-gray-400 text-sm">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">99.9%</p>
              <p className="text-gray-400 text-sm">Avg Uptime</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-pink-400 mb-2">3</p>
              <p className="text-gray-400 text-sm">Companies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
