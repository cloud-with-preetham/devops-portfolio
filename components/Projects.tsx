"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "CI/CD Pipeline with GitHub Actions",
      description: "Automated deployment pipeline with testing, building, and deployment stages",
      tech: ["GitHub Actions", "Docker", "AWS"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Kubernetes Cluster Deployment",
      description: "Production-ready K8s cluster with monitoring and auto-scaling",
      tech: ["Kubernetes", "Helm", "Prometheus"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Infrastructure as Code with Terraform",
      description: "Multi-environment AWS infrastructure provisioning and management",
      tech: ["Terraform", "AWS", "Ansible"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "FastAPI AWS Integration",
      description: "RESTful API with AWS services integration and automated deployment",
      tech: ["Python", "FastAPI", "Boto3", "Docker"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition overflow-hidden"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition`}></div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-gray-400">
                <motion.a whileHover={{ scale: 1.1 }} className="hover:text-purple-400 transition">
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} className="hover:text-purple-400 transition">
                  <FaExternalLinkAlt className="text-xl" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
