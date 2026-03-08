---
title: "What is DID? The Foundation of Digital Trust"
description: "A deep dive into Decentralized Identifiers (DIDs)—the W3C standard that removes central authorities from the identity equation and gives users a portable, self-sovereign digital passport."
date: "2026-01-15"
author: "TRST Editorial"
category: "Decentralized Identity"
readTime: "8 min read"
---

## The Identity Problem

For three decades, digital identity has operated on a fundamentally broken model: someone else controls who you are online. Whether it's Google, your bank, or a government portal, every time you authenticate, you are renting your identity from a centralized authority. You don't own it. They can revoke it, sell the data, or simply disappear.

The explosion of AI agents in 2025-2026 has made this problem existential. When millions of autonomous agents need to verify each other's identities and permissions, a central authority becomes both a bottleneck and a catastrophic single point of failure.

Decentralized Identifiers (DIDs) are the answer.

## What is a DID?

A DID is a new type of globally unique identifier defined by the W3C DID Core specification. Unlike traditional identifiers (email addresses, usernames, national ID numbers), a DID:

- **Is created and controlled by the identity owner** — no central registration authority required
- **Is cryptographically verifiable** — ownership is proven with a private key, not a password
- **Is persistent** — a DID continues to work even if the original registrar disappears
- **Is resolvable** — it points to a DID Document containing public keys and service endpoints

A DID looks like this:
```
did:web:alice.example.com
did:ethr:0x89a97c691b5F3aaA1B5e0e93aF
did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK
```

The prefix (`web`, `ethr`, `key`) indicates the **DID method**—the specific mechanism for creating, resolving, and updating the DID.

## The DID Document

When you resolve a DID, you get back a **DID Document**—a JSON-LD object containing:

```json
{
  "@context": ["https://www.w3.org/ns/did/v1"],
  "id": "did:web:alice.example.com",
  "verificationMethod": [{
    "id": "did:web:alice.example.com#key-1",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:web:alice.example.com",
    "publicKeyMultibase": "z6MkhaXgBZDvotDkL..."
  }],
  "authentication": ["did:web:alice.example.com#key-1"],
  "service": [{
    "id": "did:web:alice.example.com#linked-domain",
    "type": "LinkedDomains",
    "serviceEndpoint": "https://alice.example.com"
  }]
}
```

This document is the DID subject's public-facing identity profile. It doesn't contain personal data—it contains verification material.

## DID Methods: Where Is the Identity Anchored?

Different DID methods anchor the DID Document in different places:

| Method | Anchor | Tradeoff |
|--------|--------|----------|
| `did:web` | HTTPS domain | Simple, no blockchain, but requires a live web server |
| `did:ethr` | Ethereum | Censorship-resistant, but gas costs and blockchain dependency |
| `did:key` | The key itself | No external anchor, offline use, but not updatable |
| `did:ion` | Bitcoin (via Sidetree) | Highly decentralized, slow resolution |
| `did:jwk` | JSON Web Key | Lightweight, OIDC-compatible |

For enterprise use in 2026, `did:web` is the most pragmatic starting point: it leverages existing DNS infrastructure and integrates easily with OAuth 2.0 and OpenID Connect flows.

## Verifiable Credentials: DIDs in Action

DIDs become powerful when combined with **Verifiable Credentials (VCs)**—the digital equivalent of physical credentials (passports, diplomas, medical records).

A VC is a JSON-LD document signed by an **issuer's DID** and held in the **subject's digital wallet**. When a verifier needs to confirm a claim, they check:

1. Is the VC signature valid? (Cryptographic proof)
2. Is the issuer's DID trustworthy? (Governance)
3. Has the VC been revoked? (Status check)

No phone call to a government office. No database query to a central registry. Pure cryptographic verification.

## The 2026 Context: DID for AI Agents

The most significant emerging use case is AI agent identity. As autonomous agents make purchases, sign contracts, and access APIs on behalf of humans, they need tamper-proof credentials:

- **Agent Identity**: A DID proves an AI agent is what it claims to be
- **Delegation**: VCs can encode exactly what permissions a human has granted an agent
- **Audit Trail**: DID-signed actions create an immutable record of what the agent did

Companies like **Spruce ID** and **Veramo** are building the tooling to make this a reality today.

## Getting Started

If you're building a trust-sensitive application in 2026, the path forward is clear:

1. **Start with `did:web`** for your organization's identity
2. **Issue VCs** to your users/customers using the W3C VC Data Model 2.0
3. **Integrate a VC wallet** (like SpruceKit's Credible) into your user experience
4. **Build toward selective disclosure** using SD-JWT or BBS+ signatures to enable privacy-preserving proofs

The decentralized identity revolution is not theoretical—it's production-ready and running at scale today.
