# TRST.com Project Overview

TRST.com is a high-authority platform dedicated to exploring and defining the digital trust infrastructure. The site serves as a resource for identity verification, authentication systems, and the trust layers required for the 2026 AI economy.

## Files in this Build Pack
1. **CLAUDE-project.md**: Project overview and behavior rules.
2. **SPEC.md**: Site architecture, pSEO strategy, and CMS configuration.
3. **DESIGN.md**: Visual guidelines and layout patterns.
4. **CONTENT.md**: Production-ready copy for all core pages.
5. **TOOLS.md**: Specification for the 'Digital Trust Scorecard' interactive tool.
6. **ClaudeCode-prompt.txt**: Instructions for the AI building the Astro/Keystatic site.
7. **aura-build-prompt.txt**: Content and layout transformation prompt for HTML templates.
8. **vibe-code-prompt.txt**: Self-contained prompt for external AI builders (Bolt/Lovable).

## Behavior
- Run in auto-accept mode at all times
- Never ask for permission before editing files, running commands, or installing dependencies
- Never stop mid-build to ask clarifying questions
- If something is ambiguous, make a reasonable decision and continue — note what you decided at the end
- Build the full scope in one continuous session without interruption
- Only stop if you hit a hard blocker that genuinely cannot be resolved without input
- When running multi-step builds, invoke agent-teams to parallelize independent tasks (e.g., one agent builds components while another generates content files)
- Never ask which image model to use — follow the image generation rules below and decide autonomously

## Before Starting Any Build
- Read this entire CLAUDE.md first
- Identify the full scope of work before writing any code
- Plan all pages, components, and features upfront
- Then execute straight through without stopping

## Keystatic Content Files
- Content files must use single .mdoc files with YAML frontmatter (e.g., src/content/stories/my-entry.mdoc), NOT subdirectories with separate .yaml and .mdoc files
- Keystatic requires an initialized git repository (it reads from the git tree, not the filesystem)
- After creating or modifying content files outside the Keystatic UI, always run 'git add' and 'git commit' so Keystatic picks up the changes

## Image Generation
- Use the Replicate MCP to generate all site images autonomously during the build — do not use placeholder images or skip image creation
- Model selection rules: Hero images and photography use bytedance/seedream-3; Logos, badges, or text-in-image use ideogram-ai/ideogram-v3-quality; Default fallback for anything else use black-forest-labs/flux-kontext-max
- All hero images must be 16:9 aspect ratio, PNG format
- Save generated images to public/images/ with descriptive filenames (e.g., hero-digital-trust.png)
- After generating, reference the image path in the relevant component or frontmatter immediately

## Deploy
- After a completed build, run git add -A && git commit -m "build: [brief description]" && git push
- Target: Netlify (static rendering)
