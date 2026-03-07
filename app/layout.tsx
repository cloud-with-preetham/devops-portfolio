import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Preetham Pereira | DevOps Engineer & Cloud Architect",
  description: "DevOps Engineer specializing in AWS, Kubernetes, Docker, Terraform, and CI/CD automation. Building scalable cloud infrastructure with 99.9% uptime.",
  keywords: ["DevOps Engineer", "Cloud Architect", "AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "GitHub Actions", "Infrastructure as Code", "Bangalore"],
  authors: [{ name: "Preetham Pereira" }],
  creator: "Preetham Pereira",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cloud-with-preetham.github.io",
    title: "Preetham Pereira | DevOps Engineer & Cloud Architect",
    description: "Building scalable cloud infrastructure and automating deployment pipelines with AWS, Docker, Kubernetes, and modern CI/CD practices.",
    siteName: "Preetham Pereira Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preetham Pereira | DevOps Engineer",
    description: "DevOps Engineer specializing in cloud infrastructure and automation",
    creator: "@yourcloudguy_",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
