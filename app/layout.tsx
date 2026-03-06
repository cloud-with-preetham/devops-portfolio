import "./globals.css";
import { Inter } from "next/font/google";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-linear-to-br from-gray-900 via-black to-gray-900 text-white antialiased`}>
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
