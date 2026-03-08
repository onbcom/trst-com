# Design Guidelines: TRST.com

## Visual Identity
The design must evoke "Invisible Infrastructure." It should feel technical, high-security, and authoritative but highly accessible—like a modern banking terminal meets a sleek developer tool.

## Color Palette
- **Primary**: Midnight Blue (#0A0E17) - Representing depth and stability.
- **Accent**: Cyber Mint (#A2FFD6) - Representing "Go" / Validated / Secure.
- **Secondary**: Slate Grey (#1E293B) - Text and borders.
- **Highlight**: Phosphor White (#F8FAFC) - High contrast for readability.

## Typography
- **Headings**: 'Inter', Sans-serif - Bold weight, tight tracking (letter-spacing: -0.02em).
- **Body**: 'JetBrains Mono' or 'Roboto Mono' for data points; 'Inter' for standard prose to maintain a technical edge.

## Layout Patterns
- **Header**: Minimalist. Sticky glassmorphism effect (backdrop-filter: blur).
- **Hero Section**: 16:9 high-quality generated image with descriptive technical overlays.
- **Grid System**: Use a strict 12-column grid. Sections should be clearly delineated by subtle borders rather than heavy colors (1px solid #334155).
- **The "Trust Map"**: Use a node-link visual style or card-based masonry layout for the pSEO infrastructure categories.

## Image Generation Rules
- **Hero Images**: Use `bytedance/seedream-3`. Prompt style: "Futuristic digital infrastructure, glowing fiber optic nodes connecting in a void, cinematic lighting, 8k, professional photography."
- **Infographics**: Use `ideogram-ai/ideogram-v3-quality`. Prompt: "Minimalist diagram of a digital trust stack: Identity, Authentication, Reputation, Enforcement layers, clean typography, flat vector style."

## Responsive Design
- Mobile: Single column with a focus on large, readable "Trust Scorecard" buttons.
- Desktop: Multi-column layouts with sidebar navigation for technical documentation/frameworks.
