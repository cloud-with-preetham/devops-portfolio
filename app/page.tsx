import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import FloatingTechCards from "@/components/FloatingTechCards";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import AnimatedPipelineUnique from "@/components/AnimatedPipelineUnique";
import Architecture from "@/components/Architecture";
import Contact from "@/components/Contact";
import GithubActivity from "@/components/GithubActivity";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <ResponsiveNavbar />

      <main className="w-full">
        <Hero />
        <FloatingTechCards />
        <About />
        <Achievements />
        <Experience />
        <Certifications />
        <Skills />
        <Projects />
        <Blog />
        <Testimonials />
        <AnimatedPipelineUnique />
        <Architecture />
        <GithubActivity />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
