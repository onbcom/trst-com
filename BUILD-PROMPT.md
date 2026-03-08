CRITICAL RULES:
1) Do NOT use the Agent tool or sub-agents — they are unavailable.
2) Build everything yourself sequentially.
3) Do NOT use Keystatic, React, or Next.js. Pure Astro static + Tailwind CSS only.
4) Never stop to ask questions. Make reasonable decisions and continue.

TASK:
Read SPEC.md, DESIGN.md, CONTENT.md, and TOOLS.md in this directory.

Build TRST.com fully per those specs:

1. Install tailwindcss + @tailwindcss/vite + @astrojs/sitemap. Update astro.config.mjs with Tailwind vite plugin and output: 'static'.
2. Create global CSS, BaseLayout, Header, Footer components.
3. Build ALL pages per SPEC.md:
   - Homepage with hero, problem/solution, features, CTA
   - Trust Map pSEO pages: create data file for providers, dynamic route /infrastructure/[category]/[provider] with getStaticPaths()
   - Frameworks blog: 5 articles in src/content/, listing + detail pages
   - About page
   - Digital Trust Scorecard: interactive tool with client-side JS (script tag, no React)
4. Create at least 10 trust infrastructure provider data entries.
5. Follow DESIGN.md colors, typography, layout patterns exactly.
6. Add SEO meta, og tags, sitemap.

After ALL files are written:
- Run: npm install
- Run: npm run build
- Fix any errors until build passes
- Run: git add -A && git commit -m "build: complete TRST.com" && git push

DO NOT STOP UNTIL THE BUILD PASSES AND CODE IS PUSHED.
