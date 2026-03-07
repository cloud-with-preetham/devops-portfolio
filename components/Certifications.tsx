"use client";

import { motion } from "framer-motion";
import { FaAws, FaDocker, FaCheckCircle, FaExternalLinkAlt, FaCalendarAlt, FaMicrosoft } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiGooglecloud } from "react-icons/si";

export default function Certifications() {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      icon: FaAws,
      color: "from-orange-500 to-yellow-500",
      iconColor: "text-orange-400",
      issued: "Jan 2024",
      expires: "Jan 2027",
      credentialId: "AWS-PSA-12345",
      verified: true,
      skills: ["AWS", "Cloud Architecture", "Security", "Cost Optimization"],
      verifyUrl: "https://aws.amazon.com/verification"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      icon: SiKubernetes,
      color: "from-blue-500 to-purple-500",
      iconColor: "text-blue-500",
      issued: "Mar 2024",
      expires: "Mar 2027",
      credentialId: "CKA-67890",
      verified: true,
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management"],
      verifyUrl: "https://training.linuxfoundation.org/certification/verify"
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      icon: SiTerraform,
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
      issued: "Jun 2023",
      expires: "Jun 2025",
      credentialId: "TF-ASSOC-54321",
      verified: true,
      skills: ["Terraform", "IaC", "Cloud Provisioning"],
      verifyUrl: "https://hashicorp.com/certification/verify"
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker Inc",
      icon: FaDocker,
      color: "from-blue-400 to-cyan-400",
      iconColor: "text-blue-400",
      issued: "Sep 2023",
      expires: "Sep 2025",
      credentialId: "DCA-98765",
      verified: true,
      skills: ["Docker", "Containerization", "DevOps"],
      verifyUrl: "https://docker.com/certification/verify"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      icon: SiGooglecloud,
      color: "from-blue-500 to-green-500",
      iconColor: "text-blue-400",
      issued: "Nov 2023",
      expires: "Nov 2025",
      credentialId: "GCP-PCA-11223",
      verified: true,
      skills: ["GCP", "Cloud Architecture", "Migration"],
      verifyUrl: "https://cloud.google.com/certification/verify"
    },
    {
      name: "Microsoft Certified: Azure Administrator",
      issuer: "Microsoft",
      icon: FaMicrosoft,
      color: "from-blue-600 to-cyan-500",
      iconColor: "text-blue-500",
      issued: "Dec 2023",
      expires: "Dec 2025",
      credentialId: "AZ-104-44556",
      verified: true,
      skills: ["Azure", "Cloud Administration", "Identity Management"],
      verifyUrl: "https://learn.microsoft.com/en-us/certifications/verify"
    }
  ];

  return (
    <section id="certifications" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-shimmer">Certifications & Credentials</h2>
          <p className="text-gray-400 text-lg">Industry-recognized professional certifications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                {/* Verified badge */}
                {cert.verified && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <FaCheckCircle className="text-green-400 text-xs" />
                    <span className="text-xs text-green-400 font-medium">Verified</span>
                  </div>
                )}

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} p-0.5`}
                  >
                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                      <Icon className={`text-3xl ${cert.iconColor}`} />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.name}</h3>
                  <p className="text-sm text-purple-400 mb-3">{cert.issuer}</p>

                  {/* Dates */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-blue-400" />
                      <span>Issued: {cert.issued}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-orange-400" />
                      <span>Expires: {cert.expires}</span>
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="mb-3 p-2 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-xs text-gray-500">Credential ID</p>
                    <p className="text-sm text-white font-mono">{cert.credentialId}</p>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verify button */}
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
                  >
                    <span>Verify Credential</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </motion.div>
            );
          })}
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
              <p className="text-4xl font-bold text-blue-400 mb-2">6</p>
              <p className="text-gray-400 text-sm">Active Certifications</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">100%</p>
              <p className="text-gray-400 text-sm">Verified</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">3</p>
              <p className="text-gray-400 text-sm">Cloud Providers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-pink-400 mb-2">2024</p>
              <p className="text-gray-400 text-sm">Latest Certification</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
