# Deployment Guide

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

The portfolio is configured for automatic deployment via GitHub Actions.

**Steps:**
1. Push code to `main` branch
2. GitHub Actions automatically triggers
3. Site builds and deploys to GitHub Pages
4. Live at: `https://portfolio.cloud-with-preetham.liveblog365.com`

**Workflow File:** `.github/workflows/deploy.yml`

### Custom Domain Setup

1. **Add CNAME file:** Already configured in `public/CNAME`
2. **GitHub Settings:**
   - Go to repo Settings → Pages
   - Set custom domain: `portfolio.cloud-with-preetham.liveblog365.com`
   - Enable "Enforce HTTPS"
3. **DNS Configuration:**
   - Add CNAME record: `portfolio.cloud-with-preetham.liveblog365.com` → `cloud-with-preetham.github.io`
   - Wait for DNS propagation (5-30 minutes)

### Manual Deployment

```bash
# 1. Build the project
npm run build

# 2. Export static files
npm run export

# 3. The 'out' folder contains your static site
# Deploy this folder to GitHub Pages or any static host
```

## Configuration Files

### next.config.ts
```typescript
output: 'export'           // Enable static export
images: { unoptimized: true }  // Required for static export
// No basePath needed for custom domain
```

### CNAME
- Located in `public/CNAME`
- Contains: `portfolio.cloud-with-preetham.liveblog365.com`
- Required for custom domain on GitHub Pages

### .nojekyll
- Located in `public/.nojekyll`
- Prevents GitHub Pages from using Jekyll
- Ensures `_next/` folder is not ignored

## Environment Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

## Deployment Checklist

- [ ] Update personal information in components
- [ ] Replace profile image (`public/without-background.png`)
- [ ] Update GitHub username in `GithubActivity.tsx`
- [ ] Update social links in `Hero.tsx` and `Footer.tsx`
- [ ] Test dark/light theme toggle
- [ ] Test responsive design on mobile/tablet
- [ ] Verify all links work
- [ ] Check SEO metadata in `app/layout.tsx`
- [ ] Test build locally: `npm run build && npm run start`
- [ ] Push to GitHub and verify deployment

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Clear cache: `rm -rf .next out node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Styles Not Loading
- Ensure `.nojekyll` exists in `public/` folder
- Check custom domain DNS configuration

### Images Not Displaying
- Verify `images: { unoptimized: true }` in `next.config.ts`
- Check image paths start with `/` (e.g., `/profile.jpg`)

### Theme Not Persisting
- Check browser localStorage is enabled
- Verify theme script in `app/layout.tsx`

## Alternative Hosting (Optional)

While this portfolio is optimized for GitHub Pages, you can deploy elsewhere:

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `out`

### Custom Server
```bash
# Build static files
npm run build

# Upload 'out' folder to your server
# Configure web server to serve static files
```

## Performance Optimization

- ✅ Static export for fast loading
- ✅ Image optimization disabled (required for static export)
- ✅ Code splitting with Next.js
- ✅ Lazy loading with Framer Motion
- ✅ Minimal dependencies

## Security

- ✅ No API keys in frontend code
- ✅ Static site (no server vulnerabilities)
- ✅ HTTPS via GitHub Pages
- ✅ No sensitive data exposure

## Monitoring

- GitHub Actions build status badge in README
- Check deployment logs in GitHub Actions tab
- Monitor site performance with Lighthouse

---

**Need Help?** Open an issue on GitHub or contact via social links in portfolio.
