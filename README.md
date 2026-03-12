# Cloud with Preetham - DevOps Portfolio

![CI](https://github.com/cloud-with-preetham/devops-portfolio/actions/workflows/pipeline.yml/badge.svg)
![Deploy](https://github.com/cloud-with-preetham/devops-portfolio/actions/workflows/deploy-to-server.yml/badge.svg)
![CodeQL](https://github.com/cloud-with-preetham/devops-portfolio/actions/workflows/sast-scan.yml/badge.svg)
![Dependency Scan](https://github.com/cloud-with-preetham/devops-portfolio/actions/workflows/dependency-scan.yml/badge.svg)
![Secret Scan](https://github.com/cloud-with-preetham/devops-portfolio/actions/workflows/secret-scan.yml/badge.svg)
![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/cloud-with-preetham/devops-portfolio/badge)

![Stars](https://img.shields.io/github/stars/cloud-with-preetham/devops-portfolio?style=social)
![Forks](https://img.shields.io/github/forks/cloud-with-preetham/devops-portfolio?style=social)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![DevSecOps](https://img.shields.io/badge/DevSecOps-Pipeline-blue)

[![Live Site](https://img.shields.io/badge/Live-Portfolio-success)](https://portfolio.cloud-with-preetham.liveblog365.com)

A modern, responsive DevOps portfolio website built with Next.js, featuring dark/light theme toggle and comprehensive sections showcasing skills, projects, and experience.

🌐 **Live Demo:** [https://cloud-with-preetham.github.io/devops-portfolio](https://cloud-with-preetham.github.io/devops-portfolio)

## ✨ Features

- 🎨 **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Modern Tech Stack** - Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- 🎭 **Smooth Animations** - Engaging transitions and micro-interactions
- 🔧 **Comprehensive Sections:**
  - Hero with profile cutout
  - Floating tech cards with 3D effects
  - About with journey timeline
  - Achievements with animated counters
  - Experience timeline
  - Certifications showcase
  - Skills with 30+ technologies
  - Featured projects
  - Blog articles
  - Testimonials
  - GitHub activity integration
  - Contact form
- 🚀 **Automated Deployment** - GitHub Actions workflow for GitHub Pages
- 🎯 **SEO Optimized** - Meta tags, OpenGraph, Twitter cards

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Particles:** @tsparticles/react
- **Deployment:** GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/cloud-with-preetham/devops-portfolio.git

# Navigate to project directory
cd devops-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push to `main` branch
2. GitHub Actions workflow automatically builds and deploys
3. Site is live at `https://cloud-with-preetham.github.io/devops-portfolio`

### Manual Deployment

```bash
# Build for production
npm run build

# Export static files
npm run export

# Deploy the 'out' folder to GitHub Pages
```

## 📁 Project Structure

```
devops-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles and theme variables
│   └── not-found.tsx       # Custom 404 page
├── components/
│   ├── Hero.tsx            # Hero section with profile
│   ├── ResponsiveNavbar.tsx # Navigation with theme toggle
│   ├── Skills.tsx          # Skills showcase
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Featured projects
│   ├── Blog.tsx            # Blog articles
│   ├── Contact.tsx         # Contact form
│   └── ...                 # Other components
├── public/
│   ├── without-background.png  # Profile cutout image
│   └── .nojekyll          # GitHub Pages configuration
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
└── next.config.ts          # Next.js configuration
```

## 🎨 Customization

### Update Personal Information

1. **Profile Image:** Replace `public/without-background.png`
2. **Content:** Edit component files in `components/` folder
3. **Colors:** Modify Tailwind classes or `globals.css`
4. **GitHub Username:** Update in `GithubActivity.tsx`
5. **Social Links:** Update in `Hero.tsx`, `Footer.tsx`

### Theme Customization

Edit CSS variables in `app/globals.css`:

```css
:root {
  --bg-primary: #000000;
  /* Add your custom colors */
}

.light {
  --bg-primary: #ffffff;
  /* Light theme colors */
}
```

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌟 Key Features Implemented

- ✅ Dark/Light theme with localStorage persistence
- ✅ Responsive navigation with mobile menu
- ✅ Animated scroll progress bar
- ✅ Active section highlighting in navbar
- ✅ Smooth scroll animations with Framer Motion
- ✅ Particle background with theme adaptation
- ✅ Profile cutout with drop shadow
- ✅ Gradient text and buttons
- ✅ Glassmorphism UI elements
- ✅ Custom scrollbar
- ✅ SEO metadata and OpenGraph tags
- ✅ GitHub Pages deployment workflow

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Preetham Pereira (Cloud with Preetham)**

- YouTube: [@cloudwithpreetham](https://youtube.com/@cloudwithpreetham)
- GitHub: [@cloud-with-preetham](https://github.com/cloud-with-preetham)
- LinkedIn: [Preetham Pereira](https://linkedin.com/in/preetham-pereira)
- Twitter: [@yourcloudguy\_](https://x.com/yourcloudguy_)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

⭐ Star this repo if you find it helpful!
