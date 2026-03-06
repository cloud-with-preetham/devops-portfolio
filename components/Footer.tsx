export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">

      <div className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Preetham Pereira
        </p>

        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="https://github.com/cloud-with-preetham">GitHub</a>
          <a href="https://linkedin.com/in/preetham-pereira">LinkedIn</a>
          <a href="https://x.com/yourcloudguy_">X</a>
        </div>

      </div>

    </footer>
  );
}
