CRITICAL RULES:
1) Do NOT use the Agent tool or sub-agents.
2) Never stop to ask questions.

PROBLEM: The TRST.com homepage is too sparse below the hero section. The template.html has rich content sections that aren't fully rendered on the live site.

TASK:
1. Read template.html completely — it has these major sections:
   - Hero with "The Infrastructure of Confidence" headline
   - "Digital Utility for 2026" section (id="map") — trust category cards with detailed stats
   - Frameworks section (id="frameworks") — with background image, article previews
   - FAQ section (id="faq") — expandable questions
   - Footer with full nav columns

2. Read the current src/pages/index.astro and compare it to the template.

3. Rewrite index.astro to include ALL sections from template.html. Copy the HTML structure, classes, and inline styles faithfully. The homepage must be a near-exact conversion of template.html.

4. Make sure ALL CSS from template.html is in src/styles/global.css (animations, gradients, scroll animations, parallax, etc.)

5. Make sure BaseLayout.astro includes the Tailwind CDN script, Iconify script, and Inter font link from the template.

6. Run npm run build — fix any errors.

7. git add -A && git commit -m "fix: full homepage matching template.html" && git push

DO NOT STOP until pushed.
