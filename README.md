# Engineering Portfolio — Pranavv Rajamani

## Full-stack developer · Product engineer · Founder

This repository is the public technical companion to my private product work. It documents the system boundaries, design decisions, delivery practices, and representative engineering patterns behind products I have built—without publishing client information, credentials, or proprietary application code.

**Visual portfolio:** [pranavv-rajamani-portfolio.pranavvrajamani9.chatgpt.site](https://pranavv-rajamani-portfolio.pranavvrajamani9.chatgpt.site)

**Contact:** [pranavv@prsm360.com](mailto:pranavv@prsm360.com)


## What to review

- [`case-studies/`](./case-studies) — full case studies covering the situation, my role, constraints, technical decisions, verification, and honest outcome for each product.
- [`src/guarded-workflow.js`](./src/guarded-workflow.js) — a runnable reference implementation of the guarded state-transition patterns used across workflow products.
- [`tests/guarded-workflow.test.js`](./tests/guarded-workflow.test.js) — executable examples of the safety and correctness guarantees.
- [`data/resume.json`](./data/resume.json) — a single structured source for my current public resume facts.
- [`scripts/build-resume.js`](./scripts/build-resume.js) and [`site/styles.css`](./site/styles.css) — a zero-dependency build engine and responsive resume theme.
- [`dist/index.html`](./dist/index.html) — the generated, portable HTML resume.

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
npm run verify
```

## Repository anatomy

This is intentionally shaped like a normal resume/portfolio repository:

| Component | Purpose |
| --- | --- |
| `README.md` | Entry point, technical context, and navigation for a reviewer. |
| `data/resume.json` | Plain-text, version-controlled public resume data. |
| `site/` | Responsive website theme. |
| `scripts/` | Build code that turns the data and theme into portable HTML. |
| `dist/` | Generated resume artifact that can be opened locally or served statically. |
| `case-studies/` | Detailed, sanitized project narratives. |
| `src/` and `tests/` | Runnable engineering sample and its verification. |
| `.github/workflows/` | Continuous verification of the tests and resume build on every change. |

## Public-by-design

The underlying products remain private. This is deliberate: production repositories may contain proprietary architecture, security-sensitive implementation details, partner integrations, or client operations. The case studies provide enough technical specificity to evaluate my work while maintaining those boundaries.
