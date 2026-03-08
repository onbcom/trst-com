CRITICAL RULES:
1) Do NOT use the Agent tool or sub-agents — they are unavailable.
2) Build everything yourself sequentially.
3) Do NOT use Keystatic, React, or Next.js. Pure Astro static + Tailwind CSS only.
4) Never stop to ask questions.

TASK:
You have a `template.html` file in this directory. This is the MASTER DESIGN — a fully designed, premium HTML template with complete styling, animations, and production copy for TRST.com.

YOUR JOB: Convert this template.html into a full Astro site while preserving the EXACT visual design, CSS, animations, and layout.

Steps:
1. Read template.html — understand every section, style, animation, color, font.
2. Extract shared CSS into src/styles/global.css (keep ALL custom CSS, animations, variables).
3. Create BaseLayout.astro with all head tags, fonts, scripts from the template.
4. Create Header/Footer matching template exactly.
5. Homepage must look IDENTICAL to template.html.
6. Build additional pages per SPEC.md and ClaudeCode-prompt.txt — all using same design system.
7. Keep Iconify, CDN scripts, or convert carefully — visual output MUST match.
8. Use CONTENT.md for copy and SPEC.md for routes.
9. Preserve ALL interactive elements via inline scripts.

After ALL files are written:
- npm install && npm run build (fix errors)
- git add -A && git commit -m "rebuild: match template.html design exactly" && git push

DO NOT invent a new design. Match the template. DO NOT STOP until pushed.
