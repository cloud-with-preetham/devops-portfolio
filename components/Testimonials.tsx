"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Working with this DevOps engineer transformed our infrastructure. The CI/CD pipelines reduced our deployment time by 70% and the monitoring solutions have been game-changing.",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Michael Chen",
      role: "Engineering Manager",
      company: "CloudScale Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Exceptional expertise in Kubernetes and AWS. The infrastructure automation saved us countless hours and significantly reduced our cloud costs. Highly recommended!",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Engineering",
      company: "DataFlow Systems",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "Outstanding work on our microservices migration. The Docker containerization and orchestration setup was flawless. A true professional with deep technical knowledge.",
      linkedin: "https://linkedin.com"
    },
    {
      name: "David Park",
      role: "Lead Developer",
      company: "InnovateTech",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
      text: "The Terraform infrastructure as code implementation was brilliant. Our team can now deploy environments in minutes instead of days. Excellent communication throughout.",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Lisa Anderson",
      role: "Product Director",
      company: "StartupHub",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      rating: 5,
      text: "Implemented a robust monitoring and alerting system with Prometheus and Grafana. The 99.9% uptime we've achieved is a testament to the quality of work delivered.",
      linkedin: "https://linkedin.com"
    },
    {
      name: "James Wilson",
      role: "DevOps Lead",
      company: "Enterprise Solutions",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5,
      text: "Incredible problem-solving skills and deep understanding of cloud architecture. The security improvements and cost optimizations exceeded our expectations.",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-shimmer">What People Say</h2>
          <p className="text-gray-400 text-lg">Testimonials from colleagues and clients I've worked with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition relative group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-4xl text-purple-500/20 group-hover:text-purple-500/40 transition">
                <FaQuoteLeft />
              </div>

              {/* Profile section */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/50 group-hover:border-purple-500 transition">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  {/* Online indicator */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-purple-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>

                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Verified badge */}
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-green-400 font-medium">Verified Review</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">50+</p>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">100%</p>
              <p className="text-gray-400 text-sm">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">5.0</p>
              <p className="text-gray-400 text-sm">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-pink-400 mb-2">200+</p>
              <p className="text-gray-400 text-sm">Projects Delivered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
