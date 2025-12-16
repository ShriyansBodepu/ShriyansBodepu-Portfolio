# Space-Themed ISM Digital Portfolio (GitHub Pages)

This is a **minimalistic space-themed** digital portfolio with 7 required pages:
Home, About Me, About ISM, Weekly Progress (Blog), Research, Mentorship, Projects.

## Quick setup (GitHub Pages)
1. Create a new GitHub repository (example: `yourname-portfolio`).
2. Upload these files (or push via Git).
3. In GitHub: **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` (or `master`) / folder: `/ (root)`
4. Your site will publish at:
   - `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Customize
- Update your name/email/LinkedIn in:
  - `index.html`, `about.html`, and the footer (all pages).
- Add your headshot and mentor photo:
  - `assets/img/profile.jpg`
  - `assets/img/mentor.jpg`
- Replace the resume PDF:
  - `assets/docs/resume.pdf`

## Weekly progress posts
- Add posts to `assets/data/blog.json` (newest date wins).
- Create the corresponding HTML pages in `/posts/`.

## Research sources
- Add items in `assets/data/research.json`
- The Research page includes tabs + search + type filters.
