"use client";

import { motion } from "framer-motion";
import {
  FaDocker,
  FaAws,
  FaLinux,
  FaPython
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiJenkins,
  SiGithubactions,
  SiArgo
} from "react-icons/si";

export default function Skills() {

const skills = [
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Terraform", icon: <SiTerraform /> },
  { name: "Ansible", icon: <SiArgo /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "Prometheus", icon: <SiPrometheus /> },
  { name: "Grafana", icon: <SiGrafana /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Python", icon: <FaPython /> }
];

return (
<section id="skills" className="py-32">

<h2 className="text-3xl font-semibold mb-16 text-center">
Skills & Tools
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

{skills.map((skill) => (

<motion.div
key={skill.name}
whileHover={{ scale: 1.08 }}
className="flex items-center gap-3 p-5 rounded-xl
bg-white/5 border border-white/10
hover:bg-white hover:text-black
transition shadow-lg"
>

<div className="text-2xl">
{skill.icon}
</div>

<p className="font-medium">
{skill.name}
</p>

</motion.div>

))}

</div>

</section>
);
}
