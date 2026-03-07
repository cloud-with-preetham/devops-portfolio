"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaCalendar, FaClock, FaEye, FaHeart } from "react-icons/fa";

export default function Blog() {
  const featuredArticle = {
    title: "Complete Guide to Kubernetes Production Deployment",
    excerpt: "Learn how to deploy, secure, and scale Kubernetes clusters in production environments. This comprehensive guide covers everything from cluster setup to monitoring and disaster recovery.",
    date: "Jan 15, 2025",
    readTime: "12 min",
    category: "Kubernetes",
    views: "2.5K",
    likes: "156",
    featured: true,
  };

  const articles = [
    {
      title: "CI/CD Pipeline Optimization Strategies",
      excerpt: "Reduce deployment time by 70% with these proven CI/CD optimization techniques and best practices.",
      date: "Jan 10, 2025",
      readTime: "8 min",
      category: "CI/CD",
      views: "1.8K",
      likes: "98",
    },
    {
      title: "Terraform State Management Best Practices",
      excerpt: "Master Terraform state management with remote backends, locking, and team collaboration strategies.",
      date: "Jan 5, 2025",
      readTime: "6 min",
      category: "IaC",
      views: "1.2K",
      likes: "76",
    },
    {
      title: "AWS Cost Optimization: Save 40% on Cloud Bills",
      excerpt: "Practical tips and automation scripts to reduce AWS costs without compromising performance.",
      date: "Dec 28, 2024",
      readTime: "10 min",
      category: "AWS",
      views: "3.1K",
      likes: "203",
    },
    {
      title: "Docker Multi-Stage Builds for Smaller Images",
      excerpt: "Reduce Docker image sizes by up to 80% using multi-stage builds and optimization techniques.",
      date: "Dec 20, 2024",
      readTime: "5 min",
      category: "Docker",
      views: "1.5K",
      likes: "89",
    },
  ];

  const categoryColors = {
    Kubernetes: "from-blue-500 to-cyan-500",
    "CI/CD": "from-green-500 to-emerald-500",
    IaC: "from-purple-500 to-pink-500",
    AWS: "from-orange-500 to-red-500",
    Docker: "from-blue-400 to-indigo-500",
  };

  return (
    <section id="blog" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-shimmer">Latest Articles</h2>
          <p className="text-gray-400 text-lg">Sharing DevOps knowledge and real-world insights</p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition group cursor-pointer">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-4 py-1 bg-linear-to-r ${categoryColors[featuredArticle.category as keyof typeof categoryColors]} rounded-full text-xs font-semibold`}>
                    {featuredArticle.category}
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-xs text-yellow-400 font-semibold">
                    Featured
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition">
                  {featuredArticle.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-purple-400" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-400" />
                    {featuredArticle.readTime} read
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEye className="text-green-400" />
                    {featuredArticle.views} views
                  </div>
                  <div className="flex items-center gap-2">
                    <FaHeart className="text-red-400" />
                    {featuredArticle.likes} likes
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
                >
                  Read Full Article <FaArrowRight />
                </motion.button>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full h-80 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-gray-400 text-sm">Article Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group cursor-pointer"
            >
              <span className={`inline-block px-3 py-1 bg-linear-to-r ${categoryColors[article.category as keyof typeof categoryColors]} rounded-full text-xs font-semibold mb-4`}>
                {article.category}
              </span>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <FaClock className="text-blue-400" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <FaEye className="text-green-400" />
                  {article.views}
                </div>
              </div>

              <div className="flex items-center text-purple-400 text-sm font-semibold group-hover:gap-2 transition-all">
                Read more <FaArrowRight className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 rounded-full font-semibold backdrop-blur-xl bg-white/5 hover:border-purple-500/50 transition text-white"
          >
            View All Articles <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
