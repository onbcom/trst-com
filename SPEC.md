# Site Specification: TRST.com

## Category
Digital Trust & Identity Infrastructure

## Sitemap
1. **Home**: High-level overview of the Trust Stack.
2. **Infrastructure Map (pSEO)**: Directory of trust systems and providers.
3. **Frameworks (CMS)**: In-depth articles on protocols (DID, OIDC, Zero-Knowledge).
4. **Digital Trust Scorecard**: Interactive audit tool.
5. **About**: Our mission to define the trust economy in 2026.
6. **Newsletter**: "The Trust Signal" weekly digest signup.

## pSEO Configuration
- **Entity Type**: Trust Infrastructure Provider
- **Route Option 1**: `/verify/[service-name]` (Action-oriented)
- **Route Option 2**: `/infrastructure/[category]/[provider]` (Hierarchical - SELECTED)
- **Route Option 3**: `/trust-ratings/[company]` (Review-oriented)

**Reasoning for Option 2**: TRST.com aims to define the *landscape*. A hierarchical structure allows us to rank for broad category terms (e.g., "Biometric Authentication Providers") and specific entity terms (e.g., "Okta Identity Cloud") simultaneously.

## Keystatic CMS Setup
- **Collection: Frameworks**: Fields (Title, Slug, Category, Content mdoc, Author, Date).
- **Collection: Providers**: Fields (Company Name, Category, Trust Score (1-100), Tech Stack, Logo Image, Description mdoc).
- **Storage**: GitHub-based markdown storage for 2026 scalability.

## Conversion Specs
- **Primary**: Click-through to "Infrastructure Map."
- **Secondary**: Newsletter signup for "The Trust Signal."
- **Tertiary**: Completion of the "Digital Trust Scorecard" tool.

## Compliance
- **2026 Standard**: GDPR-v3 and CCPA-2026 compliant data handling.
- **Disclaimer**: TRST.com provides technological analysis and is not a legal or security auditing firm.
