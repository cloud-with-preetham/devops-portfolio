"use client";

import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg bg-black/40 border-b border-white/10 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-semibold text-lg">
          Preetham
        </h1>

        <div className="flex gap-8 text-sm">

          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-gray-400 hover:text-white transition"
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-gray-400 hover:text-white transition"
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-gray-400 hover:text-white transition"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-gray-400 hover:text-white transition"
          >
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}
