import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AnimatedPipeline from "@/components/AnimatedPipeline";
import Architecture from "@/components/Architecture";
import Terminal from "@/components/Terminal";
import GithubStats from "@/components/GithubStats";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />

      {/* Full width navbar */}
      <Navbar />

      {/* Centered content */}
      <main className="max-w-6xl mx-auto px-6">

        <Hero />
        <Skills />
        <Projects />
        <AnimatedPipeline />
        <Architecture />
        <Terminal />
        <GithubStats />

      </main>

      {/* Full width footer */}
      <Footer />
    </>
  );
}
