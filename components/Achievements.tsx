"use client";

import { motion } from "framer-motion";
import { FaRocket, FaServer, FaClock, FaDollarSign, FaUsers, FaChartLine, FaAward, FaTrophy, FaFire, FaShieldAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Achievements() {
  const [counters, setCounters] = useState({ deployments: 0, uptime: 0, speed: 0, cost: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { deployments: 500, uptime: 99.9, speed: 70, cost: 40 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounters({
        deployments: Math.floor((targets.deployments / steps) * step),
        uptime: parseFloat(((targets.uptime / steps) * step).toFixed(1)),
        speed: Math.floor((targets.speed / steps) * step),
        cost: Math.floor((targets.cost / steps) * step)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const mainMetrics = [
    { 
      icon: FaRocket, 
      value: `${counters.deployments}+`, 
      label: "Successful Deployments", 
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400",
      description: "Zero-downtime deployments across production",
      trend: "+25%"
    },
    { 
      icon: FaServer, 
      value: `${counters.uptime}%`, 
      label: "System Uptime", 
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-400",
      description: "Maintained across all critical services",
      trend: "+0.5%"
    },
    { 
      icon: FaClock, 
      value: `${counters.speed}%`, 
      label: "Faster Deployments", 
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400",
      description: "Reduced from 2 hours to 36 minutes",
      trend: "+70%"
    },
    { 
      icon: FaDollarSign, 
      value: `${counters.cost}%`, 
      label: "Cost Reduction", 
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-400",
      description: "Annual infrastructure savings of $200K+",
      trend: "-40%"
    },
  ];

  const achievements = [
    {
      icon: FaTrophy,
      title: "Led Cloud Migration",
      description: "Successfully migrated 50+ microservices to Kubernetes with zero downtime",
      impact: "Improved scalability by 300%",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaFire,
      title: "Automated CI/CD Pipeline",
      description: "Built end-to-end automation reducing manual intervention by 90%",
      impact: "Saved 200+ hours monthly",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaShieldAlt,
      title: "Enhanced Security Posture",
      description: "Implemented security scanning and compliance automation",
      impact: "Zero security incidents in 2 years",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: FaUsers,
      title: "Team Leadership",
      description: "Mentored 5 junior engineers and established DevOps best practices",
      impact: "Improved team velocity by 60%",
      color: "from-green-500 to-teal-500"
    }
  ];

  const additionalMetrics = [
    { label: "Infrastructure as Code", value: "100%", max: 100 },
    { label: "Test Coverage", value: "85%", max: 100 },
    { label: "Automation Rate", value: "92%", max: 100 },
    { label: "Incident Response Time", value: "< 5min", max: 100, current: 95 }
  ];

  return (
    <section id="achievements" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-shimmer">Impact & Achievements</h2>
          <p className="text-gray-400 text-lg">Measurable results and proven track record</p>
        </motion.div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                {/* Trend badge */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                  <span className="text-xs text-green-400 font-bold">{metric.trend}</span>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} p-0.5 mb-4`}
                  >
                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                      <Icon className={`text-2xl ${metric.iconColor}`} />
                    </div>
                  </motion.div>

                  {/* Value */}
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  
                  {/* Label */}
                  <div className="text-sm font-semibold text-gray-300 mb-2">{metric.label}</div>
                  
                  {/* Description */}
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} p-0.5 flex-shrink-0`}>
                      <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                        <Icon className="text-xl text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                      <p className="text-sm text-gray-400 mb-3">{achievement.description}</p>
                      <div className="flex items-center gap-2">
                        <FaChartLine className="text-green-400" />
                        <span className="text-sm text-green-400 font-semibold">{achievement.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Metrics with Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Performance Metrics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300 font-medium">{metric.label}</span>
                  <span className="text-sm text-white font-bold">{metric.value}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.current || parseInt(metric.value)}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full">
            <FaAward className="text-2xl text-yellow-400" />
            <span className="text-white font-semibold">Top Performer Award 2024</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
