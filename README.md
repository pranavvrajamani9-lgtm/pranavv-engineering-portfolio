# Engineering Portfolio — Pranavv Rajamani

## Full-stack developer · Product engineer · Founder

This repository is the public technical companion to my private product work. It documents the system boundaries, design decisions, delivery practices, and representative engineering patterns behind products I have built—without publishing client information, credentials, or proprietary application code.

**Visual portfolio:** [pranavv-rajamani-portfolio.pranavvrajamani9.chatgpt.site](https://pranavv-rajamani-portfolio.pranavvrajamani9.chatgpt.site)

## What to review

- [`case-studies/`](./case-studies) — concise technical case studies for each product.
- [`src/guarded-workflow.js`](./src/guarded-workflow.js) — a runnable reference implementation of the guarded state-transition patterns used across workflow products.
- [`tests/guarded-workflow.test.js`](./tests/guarded-workflow.test.js) — executable examples of the safety and correctness guarantees.

## Delivery standards

My work prioritizes more than a polished interface:

- explicit product and tenant boundaries;
- state models that make invalid transitions impossible or visible;
- permission, consent, and provider-delivery safeguards;
- validation, audit evidence, and retry-safe external actions;
- focused automated verification and operational handoff.

## Run the reference implementation

Requires Node.js 20 or later.

```bash
node --test tests/guarded-workflow.test.js
```

## Public-by-design

The underlying products remain private. This is deliberate: production repositories may contain proprietary architecture, security-sensitive implementation details, partner integrations, or client operations. The case studies provide enough technical specificity to evaluate my work while maintaining those boundaries.

