"use client";

import { motion } from "framer-motion";
import { FaAws, FaDocker, FaGithub, FaPython, FaLinux } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiPrometheus, SiGrafana, SiArgo } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "AWS", icon: <FaAws />, color: "from-orange-400 to-yellow-400" },
    { name: "Docker", icon: <FaDocker />, color: "from-blue-400 to-cyan-400" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "from-blue-500 to-purple-500" },
    { name: "Terraform", icon: <SiTerraform />, color: "from-purple-400 to-pink-400" },
    { name: "Ansible", icon: <SiAnsible />, color: "from-red-400 to-orange-400" },
    { name: "GitHub Actions", icon: <FaGithub />, color: "from-gray-400 to-gray-600" },
    { name: "Jenkins", icon: <SiJenkins />, color: "from-red-500 to-orange-500" },
    { name: "ArgoCD", icon: <SiArgo />, color: "from-orange-400 to-red-400" },
    { name: "Prometheus", icon: <SiPrometheus />, color: "from-orange-500 to-red-500" },
    { name: "Grafana", icon: <SiGrafana />, color: "from-orange-400 to-yellow-500" },
    { name: "Linux", icon: <FaLinux />, color: "from-yellow-400 to-orange-400" },
    { name: "Python", icon: <FaPython />, color: "from-blue-400 to-yellow-400" },
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition group"
            >
              <div className={`text-4xl mb-3 bg-linear-to-br ${skill.color} bg-clip-text text-transparent`}>
                {skill.icon}
              </div>
              <p className="text-sm text-gray-300 group-hover:text-white transition">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
