"use client";

import Particles from "@tsparticles/react";

export default function ParticleBackground() {

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
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
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
            value: 0.3,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
}
