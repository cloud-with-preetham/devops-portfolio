"use client";

import Particles from "@tsparticles/react";
import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(!document.documentElement.classList.contains('light'));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: isDark ? "#ffffff" : "#000000",
          },
          links: {
            color: isDark ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: isDark ? 0.1 : 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
          number: {
            value: 60,
          },
          opacity: {
            value: isDark ? 0.3 : 0.4,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
}
