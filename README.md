# Preetham Pereira — Portfolio

Personal portfolio website for Preetham Pereira, a Cloud/DevOps Engineer.

## Live Site

[portfolio.cloudwithpreetham.in](https://portfolio.cloudwithpreetham.in/)
## Stack

- HTML, CSS, JavaScript (vanilla)
- Deployed via GitHub Actions to GitHub Pages

## Structure

```
assets/
  css/style.css       # All styles
  js/scripts.js       # Cursor, scroll animations, tagline effect
  files/              # Resume PDF
  icons/              # Favicon and icons
.github/workflows/
  deploy.yml          # CI/CD pipeline
index.html            # Main page
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
