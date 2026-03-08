# Interactive Tool: Digital Trust Scorecard

## Tool Type
Compliance & Readiness Checker

## User Flow
1. **Introduction**: A brief screen explaining that this tool evaluates a company's "Trust Maturity."
2. **Input Phase**:
    - **Sector**: (SaaS / FinTech / Healthcare / AI Agent Platform)
    - **Identity Strategy**: (Centralized / Federated / Self-Sovereign)
    - **Auth Method**: (Passwords / MFA / Passkeys / Biometrics)
    - **Data Control**: (Do users own their data? Yes/No)
    - **AI Transparency**: (Are AI interactions explicitly labeled? Yes/No)
3. **Processing**: Animated "Calculating Trust Integrity..." screen.
4. **Output**:
    - **Overall Score**: 0-100.
    - **Category Grades**: (Privacy, Security, Transparency).
    - **Recommendations**: 3 specific steps to improve the score (e.g., "Migrate to Passkeys to eliminate credential stuffing").
5. **Post-Result CTA**: [Download Full 2026 Trust Framework] or [Consult with a Trust Architect].

## Technical Implementation
- **Framework**: React component embedded in Astro.
- **Logic**: Weighted scoring based on industry standards for 2026.
- **Tracking**: `track_event('tool_completion')` with the final score as a property.

## Keystatic Integration
- The scorecard "Recommendations" should be managed in the CMS so editors can update security advice without changing the code logic.
- **Store in**: `src/content/tool-data/recommendations.mdoc`.
- **Note**: Ensure `git add` and `git commit` are run after any manual content updates to this tool's data.
