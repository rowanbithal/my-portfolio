# Personal site & portfolio

A Next.js portfolio + blog. Built with the App Router, MDX for posts, and a
small CSS-variable design system you can re-skin in one place.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + typography plugin for blog posts
- **MDX** posts read from `content/posts` at build time (via `next-mdx-remote`)

## Run it locally

You need Node 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Make it yours

Start with these, in order:

1. **`src/app/layout.tsx`** — set `SITE_NAME` and `SITE_TAGLINE` at the top.
2. **`src/app/page.tsx`** — edit the hero copy (name, role, company).
3. **`src/components/footer.tsx`** — replace the GitHub / LinkedIn / email links.
4. **`src/data/projects.ts`** — swap in your real projects. Mark your best 3–5
   as `featured: true` to show them on the home page.
5. **`src/app/about/page.tsx`** — write your about page.
6. **`content/posts/`** — delete the samples and add your own `.mdx` files.
   Each needs frontmatter: `title`, `date` (YYYY-MM-DD), and `summary`.

### Re-theming

All colors and fonts live as variables at the top of
`src/app/globals.css`. Change `--color-accent` (and the dark-mode block right
below it) to recolor the whole site. Fonts are set in `layout.tsx` via
`next/font` — swap Inter / Fraunces / JetBrains Mono for whatever you like.

## Adding a blog post

Create `content/posts/my-post.mdx`:

```mdx
---
title: "My post title"
date: "2026-06-13"
summary: "One sentence shown in the post list."
---

Your content here. Because it's MDX, you can import and use React components
inline when you want something interactive.
```

The slug comes from the filename, so this becomes `/blog/my-post`.

## Deploying

The easiest path is **Vercel**: push this repo to GitHub, import it at
vercel.com, and it deploys on every push. **Netlify** and **Cloudflare Pages**
work the same way. Add a custom domain in the host's dashboard once you're
happy with it.

## Ideas for next steps

- An RSS feed for the blog
- A dark/light toggle (currently follows the OS setting)
- Syntax highlighting for code blocks (e.g. `rehype-pretty-code`)
- Per-project case-study pages with screenshots
