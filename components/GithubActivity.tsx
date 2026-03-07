"use client";

import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaCode, FaJsSquare, FaJava, FaPhp, FaSwift, FaRust, FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaAngular, FaNodeJs, FaDocker } from "react-icons/fa";
import { GoGitCommit, GoGitPullRequest, GoIssueOpened } from "react-icons/go";
import { SiTypescript, SiCplusplus, SiC, SiGo, SiKotlin, SiRuby, SiDart, SiScala, SiPerl, SiLua, SiR, SiElixir, SiHaskell, SiSharp, SiSass, SiMarkdown, SiJson, SiYaml, SiSvelte, SiSolidity, SiAssemblyscript, SiGraphql, SiLatex, SiGnubash, SiPython } from "react-icons/si";
import { useEffect, useState } from "react";
import Image from "next/image";

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: any;
}

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
}

interface RepoLanguages {
  [key: string]: number;
}

interface LanguageData {
  name: string;
  bytes: number;
  percentage: number;
}

export default function GithubActivity() {
  const username = "cloud-with-preetham"; // Replace with your GitHub username
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [languageData, setLanguageData] = useState<LanguageData[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const [totalForks, setTotalForks] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [eventsRes, statsRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}/events/public?per_page=10`),
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);

        if (eventsRes.ok && statsRes.ok && reposRes.ok) {
          setEvents(await eventsRes.json());
          setStats(await statsRes.json());

          const repos = await reposRes.json();
          let stars = 0;
          let forks = 0;
          const langBytes: RepoLanguages = {};

          // Fetch language data for each repo
          const languagePromises = repos.map((repo: any) => {
            stars += repo.stargazers_count;
            forks += repo.forks_count;
            return fetch(repo.languages_url);
          });

          const languageResponses = await Promise.all(languagePromises);
          const languagesData = await Promise.all(
            languageResponses.map(res => res.ok ? res.json() : {})
          );

          // Aggregate language bytes
          languagesData.forEach(repoLangs => {
            Object.entries(repoLangs).forEach(([lang, bytes]) => {
              langBytes[lang] = (langBytes[lang] || 0) + (bytes as number);
            });
          });

          // Calculate percentages
          const totalBytes = Object.values(langBytes).reduce((a, b) => a + b, 0);
          const langArray: LanguageData[] = Object.entries(langBytes)
            .map(([name, bytes]) => ({
              name,
              bytes,
              percentage: (bytes / totalBytes) * 100
            }))
            .sort((a, b) => b.bytes - a.bytes)
            .slice(0, 6);

          setTotalStars(stars);
          setTotalForks(forks);
          setLanguageData(langArray);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const getEventIcon = (type: string) => {
    switch (type) {
      case "PushEvent": return <GoGitCommit className="text-green-400" />;
      case "PullRequestEvent": return <GoGitPullRequest className="text-purple-400" />;
      case "IssuesEvent": return <GoIssueOpened className="text-red-400" />;
      case "ForkEvent": return <FaCodeBranch className="text-blue-400" />;
      case "WatchEvent": return <FaStar className="text-yellow-400" />;
      default: return <FaCode className="text-gray-400" />;
    }
  };

  const getEventDescription = (event: GitHubEvent) => {
    const repo = event.repo.name.split('/')[1];
    switch (event.type) {
      case "PushEvent":
        const commits = event.payload.commits?.length || 0;
        return `Pushed ${commits} commit${commits > 1 ? 's' : ''} to ${repo}`;
      case "PullRequestEvent":
        return `${event.payload.action} pull request in ${repo}`;
      case "IssuesEvent":
        return `${event.payload.action} issue in ${repo}`;
      case "ForkEvent":
        return `Forked ${repo}`;
      case "WatchEvent":
        return `Starred ${repo}`;
      case "CreateEvent":
        return `Created ${event.payload.ref_type} in ${repo}`;
      default:
        return `Activity in ${repo}`;
    }
  };

  const getLanguageIcon = (lang: string) => {
    const iconMap: { [key: string]: { icon: any; color: string } } = {
      JavaScript: { icon: FaJsSquare, color: 'text-yellow-400' },
      TypeScript: { icon: SiTypescript, color: 'text-blue-400' },
      Python: { icon: SiPython, color: 'text-[#3776AB]' },
      Java: { icon: FaJava, color: 'text-red-500' },
      'C++': { icon: SiCplusplus, color: 'text-blue-600' },
      C: { icon: SiC, color: 'text-blue-700' },
      'C#': { icon: SiSharp, color: 'text-purple-600' },
      Go: { icon: SiGo, color: 'text-cyan-400' },
      Rust: { icon: FaRust, color: 'text-orange-600' },
      Ruby: { icon: SiRuby, color: 'text-red-600' },
      PHP: { icon: FaPhp, color: 'text-indigo-400' },
      Swift: { icon: FaSwift, color: 'text-orange-500' },
      Kotlin: { icon: SiKotlin, color: 'text-purple-500' },
      Shell: { icon: SiGnubash, color: 'text-green-400' },
      Dart: { icon: SiDart, color: 'text-blue-400' },
      Scala: { icon: SiScala, color: 'text-red-500' },
      Perl: { icon: SiPerl, color: 'text-blue-300' },
      Lua: { icon: SiLua, color: 'text-blue-600' },
      R: { icon: SiR, color: 'text-blue-500' },
      Elixir: { icon: SiElixir, color: 'text-purple-600' },
      Haskell: { icon: SiHaskell, color: 'text-purple-700' },
      HTML: { icon: FaHtml5, color: 'text-orange-500' },
      CSS: { icon: FaCss3Alt, color: 'text-blue-500' },
      SCSS: { icon: SiSass, color: 'text-pink-500' },
      Sass: { icon: SiSass, color: 'text-pink-500' },
      Vue: { icon: FaVuejs, color: 'text-green-500' },
      React: { icon: FaReact, color: 'text-cyan-400' },
      Angular: { icon: FaAngular, color: 'text-red-600' },
      Svelte: { icon: SiSvelte, color: 'text-orange-600' },
      'Node.js': { icon: FaNodeJs, color: 'text-green-600' },
      Markdown: { icon: SiMarkdown, color: 'text-gray-400' },
      JSON: { icon: SiJson, color: 'text-yellow-500' },
      YAML: { icon: SiYaml, color: 'text-red-400' },
      Dockerfile: { icon: FaDocker, color: 'text-blue-500' },
      Solidity: { icon: SiSolidity, color: 'text-gray-500' },
      GraphQL: { icon: SiGraphql, color: 'text-pink-600' },
      TeX: { icon: SiLatex, color: 'text-blue-400' },
      Assembly: { icon: SiAssemblyscript, color: 'text-red-500' },
    };
    return iconMap[lang] || { icon: FaCode, color: 'text-gray-400' };
  };

  const getTimeAgo = (date: string) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <section id="github-activity" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-4 text-center text-shimmer"
        >
          GitHub Activity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          Real-time contributions and activity
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="flex items-center gap-4 mb-4">
                <FaGithub className="text-4xl text-white" />
                <div>
                  <h3 className="text-xl font-bold text-white">@{username}</h3>
                  <p className="text-sm text-gray-400">GitHub Profile</p>
                </div>
              </div>
              {stats && (
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-400">{stats.public_repos}</p>
                    <p className="text-xs text-gray-400">Repos</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">{stats.followers}</p>
                    <p className="text-xs text-gray-400">Followers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-pink-400">{stats.following}</p>
                    <p className="text-xs text-gray-400">Following</p>
                  </div>
                </div>
              )}
            </div>

            {/* Contribution Graph */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <h3 className="text-lg font-bold text-white mb-4">Contributions</h3>
              <Image
                src={`https://ghchart.rshah.org/409EFF/${username}`}
                alt="GitHub Contributions"
                width={400}
                height={150}
                className="w-full rounded-lg"
                unoptimized
              />
            </div>

            {/* GitHub Stats */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <h3 className="text-lg font-bold text-white mb-4">Stats Overview</h3>
              {stats ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Total Stars</span>
                    <span className="text-yellow-400 font-bold">{totalStars}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Total Forks</span>
                    <span className="text-blue-400 font-bold">{totalForks}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Public Gists</span>
                    <span className="text-purple-400 font-bold">{stats.public_gists}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Repositories</span>
                    <span className="text-green-400 font-bold">{stats.public_repos}</span>
                  </div>
                </div>
              ) : (
                <div className="animate-pulse space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-6 bg-white/10 rounded"></div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Middle: Recent Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Recent Activity</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Live</span>
                </div>
              </div>

              {loading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="animate-pulse flex gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-white/10 rounded w-3/4"></div>
                        <div className="h-3 bg-white/10 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4 max-h-150 overflow-y-auto custom-scrollbar">
                  {events.map((event, index) => (
                    <motion.div
                      key={`${event.type}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-xl shrink-0">
                        {getEventIcon(event.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">
                          {getEventDescription(event)}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          {getTimeAgo(event.created_at)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
              >
                <FaGithub className="text-xl" />
                View Full Profile
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Language Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
            <h3 className="text-xl font-bold text-white mb-6">Most Used Languages</h3>
            {languageData.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {languageData.map((lang, index) => {
                    const { icon: Icon, color } = getLanguageIcon(lang.name);
                    return (
                      <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-linear-to-br from-white/10 to-white/5 flex items-center justify-center">
                          <Icon className={`text-3xl ${color}`} />
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{lang.name}</p>
                        <p className="text-gray-400 text-xs">{lang.percentage.toFixed(1)}%</p>
                        <div className="mt-2 w-full bg-white/10 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full bg-linear-to-r ${color.replace('text-', 'from-')} to-transparent`}
                            style={{ width: `${lang.percentage}%` }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-lg"></div>
                    <div className="h-4 bg-white/10 rounded mb-2"></div>
                    <div className="h-3 bg-white/10 rounded"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
