export interface Provider {
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  trustScore: number;
  techStack: string[];
  description: string;
  longDescription: string;
  founded: string;
  headquarters: string;
  website: string;
  tags: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    name: 'Decentralized Identity',
    slug: 'decentralized-identity',
    description: 'Platforms enabling self-sovereign identity (SSI) and DID-based credential management without central authorities.',
    icon: '🔑',
  },
  {
    name: 'Biometric Authentication',
    slug: 'biometric-authentication',
    description: 'Systems using biological characteristics—facial recognition, liveness detection, fingerprint—to verify human identity.',
    icon: '🪪',
  },
  {
    name: 'Fraud Prevention',
    slug: 'fraud-prevention',
    description: 'AI-powered risk engines and behavioral analytics platforms that detect and prevent fraudulent transactions and account takeovers.',
    icon: '🛡️',
  },
  {
    name: 'Zero Trust Security',
    slug: 'zero-trust-security',
    description: 'Network and access control frameworks operating on the principle of "never trust, always verify" for every request.',
    icon: '🔒',
  },
  {
    name: 'AI Trust Verification',
    slug: 'ai-trust-verification',
    description: 'Emerging protocols and platforms establishing identity and accountability for AI agents interacting in digital ecosystems.',
    icon: '🤖',
  },
];

export const providers: Provider[] = [
  // Decentralized Identity
  {
    name: 'Spruce ID',
    slug: 'spruce-id',
    category: 'Decentralized Identity',
    categorySlug: 'decentralized-identity',
    trustScore: 91,
    techStack: ['W3C DID', 'Verifiable Credentials', 'SIWE', 'JSON-LD', 'Rust'],
    description: 'Open-source toolkit for decentralized identity and verifiable credentials, enabling Sign-In with Ethereum and W3C VC issuance.',
    longDescription: `Spruce ID is a leading open-source developer of decentralized identity infrastructure. Their flagship products include SpruceKit (a developer SDK for DID-based authentication), Credible (a mobile wallet for verifiable credentials), and a full suite of W3C-compliant VC issuance and verification tools. Spruce pioneered Sign-In with Ethereum (SIWE), the EIP-4361 standard that lets users authenticate with their blockchain wallet instead of a password. Their work is foundational to the self-sovereign identity ecosystem in 2026.`,
    founded: '2020',
    headquarters: 'New York, USA',
    website: 'https://www.spruceid.com',
    tags: ['open-source', 'SSI', 'blockchain', 'EIP-4361'],
  },
  {
    name: 'Dock Network',
    slug: 'dock-network',
    category: 'Decentralized Identity',
    categorySlug: 'decentralized-identity',
    trustScore: 84,
    techStack: ['W3C DID', 'Verifiable Credentials', 'Substrate', 'Polygon', 'WASM'],
    description: 'Blockchain-anchored credential platform for issuing, managing, and verifying tamper-proof digital credentials at scale.',
    longDescription: `Dock Network provides a purpose-built blockchain infrastructure for verifiable credentials and decentralized identifiers. Organizations use Dock to issue NFT-based certificates, professional credentials, and compliance proofs that are permanently verifiable on-chain. Their Dock Certs platform offers a no-code interface for enterprises, while their SDK enables developer-level customization. Dock's dual-chain architecture (Dock Chain + EVM compatibility) makes it accessible across multiple ecosystems.`,
    founded: '2018',
    headquarters: 'Grand Cayman, Cayman Islands',
    website: 'https://www.dock.io',
    tags: ['blockchain', 'credentials', 'enterprise', 'NFT-certs'],
  },
  {
    name: 'Veramo',
    slug: 'veramo',
    category: 'Decentralized Identity',
    categorySlug: 'decentralized-identity',
    trustScore: 88,
    techStack: ['W3C DID', 'DIDComm', 'JSON-LD', 'TypeScript', 'Node.js'],
    description: 'Modular JavaScript framework for DID and verifiable credential operations, maintained by uPort and the Ethereum community.',
    longDescription: `Veramo is a performant and modular JavaScript framework that makes it easy to use cryptographically verifiable data in applications. Originally developed as DIF-compliant tooling, Veramo supports multiple DID methods (did:ethr, did:web, did:key, did:ion) and W3C Verifiable Credentials out of the box. Its plugin architecture allows developers to compose the exact identity stack they need. Veramo is widely used in enterprise identity pilots and is one of the most-starred open-source DID frameworks.`,
    founded: '2021',
    headquarters: 'Berlin, Germany',
    website: 'https://veramo.io',
    tags: ['open-source', 'JavaScript', 'modular', 'DIF-compliant'],
  },

  // Biometric Authentication
  {
    name: 'iProov',
    slug: 'iproof',
    category: 'Biometric Authentication',
    categorySlug: 'biometric-authentication',
    trustScore: 93,
    techStack: ['Liveness Detection', 'Genuine Presence Assurance', 'Computer Vision', 'Cloud API'],
    description: 'Award-winning biometric identity verification with patented Genuine Presence Assurance technology, trusted by global banks and governments.',
    longDescription: `iProov is the world-leading provider of biometric face authentication, trusted by major financial institutions and government agencies including the UK Home Office, US DHS, and Singapore's NRIC system. Their patented Genuine Presence Assurance (GPA) technology detects injection attacks, deepfakes, and synthetic media at a level far beyond traditional liveness detection. iProov's cloud-based SDK integrates into any onboarding or authentication flow in minutes. In 2026, their anti-spoofing technology is considered the gold standard against AI-generated presentation attacks.`,
    founded: '2012',
    headquarters: 'London, UK',
    website: 'https://www.iproov.com',
    tags: ['government', 'banking', 'anti-deepfake', 'liveness'],
  },
  {
    name: 'Yoti',
    slug: 'yoti',
    category: 'Biometric Authentication',
    categorySlug: 'biometric-authentication',
    trustScore: 87,
    techStack: ['Facial Recognition', 'Document Verification', 'Age Estimation', 'Privacy-by-Design'],
    description: 'Privacy-first digital identity platform offering age verification, document checks, and reusable digital ID for regulated industries.',
    longDescription: `Yoti is a London-based digital identity company with a strong privacy-first philosophy. Their platform enables businesses to verify customer age, identity documents, and professional credentials with minimal data retention. Yoti's age estimation technology can determine if a user is over a certain threshold without collecting their date of birth—a design that has made them a key partner for online age verification compliance in the EU and UK. Their reusable digital ID model means users verify once and share only what's necessary thereafter.`,
    founded: '2014',
    headquarters: 'London, UK',
    website: 'https://www.yoti.com',
    tags: ['age-verification', 'privacy', 'reusable-ID', 'GDPR'],
  },
  {
    name: 'Daon',
    slug: 'daon',
    category: 'Biometric Authentication',
    categorySlug: 'biometric-authentication',
    trustScore: 85,
    techStack: ['Multi-Modal Biometrics', 'Voice AI', 'Face Match', 'iBeta Certified'],
    description: 'Enterprise biometric platform with multi-modal support (face, voice, fingerprint) for financial services and travel sectors.',
    longDescription: `Daon's IdentityX platform is an enterprise-grade biometric authentication solution used by major airlines, banks, and telecoms. Supporting face, voice, and fingerprint modalities, IdentityX enables frictionless FIDO2 passkey enrollment backed by biometric verification. Daon holds NIST certifications and iBeta Presentation Attack Detection (PAD) Level 2 compliance. Their identity orchestration layer allows enterprises to mix biometric and knowledge-based factors based on real-time risk scoring.`,
    founded: '2000',
    headquarters: 'Reston, Virginia, USA',
    website: 'https://www.daon.com',
    tags: ['enterprise', 'FIDO2', 'multi-modal', 'iBeta'],
  },

  // Fraud Prevention
  {
    name: 'Sardine',
    slug: 'sardine',
    category: 'Fraud Prevention',
    categorySlug: 'fraud-prevention',
    trustScore: 90,
    techStack: ['Behavioral Biometrics', 'Device Fingerprinting', 'ML Risk Engine', 'Crypto Compliance'],
    description: 'Real-time fraud and compliance platform built for fintech and crypto, combining behavioral analytics with network-level signals.',
    longDescription: `Sardine is a fraud prevention platform purpose-built for the speed of fintech and crypto. Founded by former Coinbase, Revolut, and Visa executives, Sardine's risk engine analyzes 4,000+ signals per transaction—including typing cadence, device tilt, browser entropy, and network graph analysis—to deliver sub-100ms fraud decisions. Their behavioral biometrics layer detects account takeovers that bypass traditional MFA. Sardine also integrates AML compliance automation, making it a unified trust layer for neobanks and crypto exchanges operating in 2026's regulatory environment.`,
    founded: '2020',
    headquarters: 'San Francisco, USA',
    website: 'https://www.sardine.ai',
    tags: ['fintech', 'crypto', 'behavioral-biometrics', 'AML'],
  },
  {
    name: 'Unit21',
    slug: 'unit21',
    category: 'Fraud Prevention',
    categorySlug: 'fraud-prevention',
    trustScore: 86,
    techStack: ['No-Code Rule Engine', 'Graph Analytics', 'SAR Automation', 'REST API'],
    description: 'Infrastructure platform enabling compliance and fraud teams to build, test, and deploy detection rules without engineering dependencies.',
    longDescription: `Unit21 provides the infrastructure layer for financial crime detection, giving compliance teams a no-code platform to write and test fraud detection rules, run graph-based suspicious activity analysis, and automate Suspicious Activity Report (SAR) filing. Unlike black-box ML solutions, Unit21 is built for explainability—every alert has a full audit trail meeting regulatory requirements. Their data warehouse integration connects to existing data infrastructure, making Unit21 a flexible overlay rather than a rip-and-replace solution. Clients include major neobanks and payment processors.`,
    founded: '2018',
    headquarters: 'San Francisco, USA',
    website: 'https://www.unit21.ai',
    tags: ['compliance', 'AML', 'no-code', 'SAR'],
  },
  {
    name: 'Sift',
    slug: 'sift',
    category: 'Fraud Prevention',
    categorySlug: 'fraud-prevention',
    trustScore: 88,
    techStack: ['Global Data Network', 'ML Scoring', 'Account Defense', 'Dispute Resolution'],
    description: 'Global fraud intelligence network powered by 1 trillion+ events per year, delivering real-time risk scores across the customer lifecycle.',
    longDescription: `Sift's Digital Trust & Safety platform leverages a global data network of over 34,000 sites and apps to deliver fraud intelligence that improves with scale. Their machine learning models process 1 trillion+ events annually, enabling real-time risk scoring for account creation, login, payments, and content. Sift's strength lies in network effects—a fraud signal detected at one merchant immediately informs risk assessments across the entire ecosystem. Their Account Defense suite specifically addresses the 2026 threat of AI-generated synthetic identity fraud.`,
    founded: '2011',
    headquarters: 'San Francisco, USA',
    website: 'https://sift.com',
    tags: ['network-effects', 'e-commerce', 'account-takeover', 'ML'],
  },

  // Zero Trust Security
  {
    name: 'Cloudflare Zero Trust',
    slug: 'cloudflare-zero-trust',
    category: 'Zero Trust Security',
    categorySlug: 'zero-trust-security',
    trustScore: 95,
    techStack: ['SASE', 'Magic WAN', 'Access (ZTNA)', 'Gateway', 'Tunnel'],
    description: 'Enterprise SASE platform providing network-level zero trust access, DNS filtering, and application security at massive global scale.',
    longDescription: `Cloudflare Zero Trust (formerly Cloudflare for Teams) is a Secure Access Service Edge (SASE) platform that replaces traditional VPNs with a globally distributed identity-aware proxy. Cloudflare Access enforces least-privilege access policies for every application request, while Cloudflare Gateway inspects and filters DNS, HTTP, and network traffic. With 300+ Points of Presence worldwide, Cloudflare applies zero trust policies at sub-millisecond latency. Their 2026 AI-powered threat intelligence layer integrates directly into the access layer, blocking adversarial AI agents attempting unauthorized access.`,
    founded: '2009',
    headquarters: 'San Francisco, USA',
    website: 'https://www.cloudflare.com/zero-trust/',
    tags: ['SASE', 'ZTNA', 'enterprise', 'global-network'],
  },
  {
    name: 'Zscaler',
    slug: 'zscaler',
    category: 'Zero Trust Security',
    categorySlug: 'zero-trust-security',
    trustScore: 92,
    techStack: ['ZIA', 'ZPA', 'CASB', 'DLP', 'AI Posture Management'],
    description: 'Cloud-native zero trust exchange processing 400 billion transactions/day, securing access for users, devices, and workloads globally.',
    longDescription: `Zscaler is the pioneer of cloud-native zero trust architecture, operating the world's largest security cloud—the Zscaler Zero Trust Exchange. Their platform connects users directly to applications rather than the network, eliminating lateral movement risk. Zscaler Internet Access (ZIA) provides secure web gateway and CASB capabilities; Zscaler Private Access (ZPA) replaces VPN for application-level access control. In 2026, their AI Security posture management capabilities monitor AI agent workloads for anomalous data access patterns, addressing the unique trust challenges of autonomous AI systems in enterprise environments.`,
    founded: '2007',
    headquarters: 'San Jose, USA',
    website: 'https://www.zscaler.com',
    tags: ['enterprise', 'cloud-native', 'AI-security', 'CASB'],
  },

  // AI Trust Verification
  {
    name: 'Worldcoin',
    slug: 'worldcoin',
    category: 'AI Trust Verification',
    categorySlug: 'ai-trust-verification',
    trustScore: 79,
    techStack: ['Iris Biometrics', 'ZK Proofs', 'World ID Protocol', 'Ethereum', 'Optimism'],
    description: 'Global biometric identity network using iris scanning and zero-knowledge proofs to create "Proof of Personhood" in the age of AI.',
    longDescription: `Worldcoin (now World) is building a global identity and financial network centered on the World ID protocol—a "Proof of Personhood" credential that proves a user is a unique human without revealing personal data. The system uses iris biometrics captured by the custom Orb device to generate a unique IrisHash, then a ZK proof is generated so the credential can be verified without the biometric being revealed. In 2026, World ID is increasingly integrated into platforms that need to distinguish humans from AI bots—a critical use case as AI agents proliferate. Privacy concerns remain a significant critique, though the ZK architecture mitigates central data exposure.`,
    founded: '2020',
    headquarters: 'San Francisco, USA',
    website: 'https://world.org',
    tags: ['proof-of-personhood', 'ZK-proofs', 'iris-biometrics', 'AI-bot-detection'],
  },
  {
    name: 'Anthropic Model Spec',
    slug: 'anthropic-model-spec',
    category: 'AI Trust Verification',
    categorySlug: 'ai-trust-verification',
    trustScore: 88,
    techStack: ['Constitutional AI', 'RLHF', 'Interpretability', 'Model Cards', 'Evals'],
    description: 'Anthropic\'s published safety and trust framework for AI models, establishing behavioral standards and auditability for AI agents.',
    longDescription: `Anthropic's Model Specification represents the formal documentation of behavioral norms, safety properties, and values instilled in Claude AI models. In the context of digital trust infrastructure, the Model Spec is a critical reference document establishing how AI agents can be expected to behave—a prerequisite for integrating AI agents into trust-sensitive workflows. Anthropic's Interpretability research aims to make AI decision-making auditable, directly addressing enterprise requirements for explainable AI in regulated industries. Their Responsible Scaling Policy (RSP) ties deployment decisions to measurable safety thresholds, creating a governance framework other AI labs are adopting.`,
    founded: '2021',
    headquarters: 'San Francisco, USA',
    website: 'https://www.anthropic.com',
    tags: ['AI-safety', 'Constitutional-AI', 'governance', 'interpretability'],
  },
];

export function getProvidersByCategory(categorySlug: string): Provider[] {
  return providers.filter(p => p.categorySlug === categorySlug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getProvider(categorySlug: string, providerSlug: string): Provider | undefined {
  return providers.find(p => p.categorySlug === categorySlug && p.slug === providerSlug);
}
