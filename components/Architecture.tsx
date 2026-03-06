"use client";

import { motion } from "framer-motion";

export default function Architecture() {

const pipeline = [
"👨‍💻 Developer Push",
"📦 GitHub Repository",
"⚙️ GitHub Actions CI/CD",
"🐳 Docker Image Build",
"📚 Docker Registry",
"☁️ AWS EC2 Deployment",
"🌐 NGINX Reverse Proxy",
"🚀 Application Service"
];

return (
<section className="py-32">

<h2 className="text-3xl font-bold text-center mb-20">
DevOps Infrastructure Flow
</h2>

<div className="flex flex-col items-center">

{pipeline.map((step, index) => (
<div key={index} className="flex flex-col items-center">

{/* Gradient Border */}
<div className="p-px rounded-xl bg-linear-to-r from-gray-700 via-gray-400 to-gray-700 hover:from-white hover:via-gray-300 hover:to-white transition duration-500">

<motion.div
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.4 }}
viewport={{ once: true }}
className="px-10 py-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10
shadow-[0_0_20px_rgba(255,255,255,0.05)]
hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
hover:bg-white hover:text-black
transition duration-300"
>

{step}

</motion.div>

</div>

{/* Arrow */}
{index !== pipeline.length - 1 && (
<div className="h-12 flex items-center">
<span className="text-gray-500 text-2xl">↓</span>
</div>
)}

</div>
))}

</div>

</section>
);
}
