# Space Portfolio (GitHub Pages / Jekyll)

This repo is a minimalistic, space-themed ISM portfolio built as a **Jekyll** site so all pages are **Markdown (.md)**.

## Deploy on GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` and folder: `/ (root)`

## Edit content
- Pages live in the repo root (`index.md`, `about.md`, etc.)
- Weekly posts live in `_posts/`
- Images: `assets/img/`
- Resume PDF: `assets/docs/resume.pdf`
- Blog + Research lists are driven by JSON in `assets/data/`

## Add a weekly post
Option A (recommended): add a new Markdown file in `_posts/` named `YYYY-MM-DD-title.md`.

Option B: keep using `assets/data/blog.json` and link to external docs.
