# Program Command Center — Acquisition and conversion platform

## Product problem

Programs need a repeatable way to turn interest from campaigns, referrals, and landing pages into parent decisions and measurable outcomes—without forcing directors to operate a complex marketing stack.

## System design

- Next.js and TypeScript multi-tenant application.
- Supabase/Postgres data model with row-level security and tenant-scoped access.
- Lead normalization across forms, referrals, imports, and director-entered records.
- Campaign setup, tracking links, landing pages, parent packages, conversion evidence, reports, and controlled product handoff.

## Engineering emphasis

The critical path is deliberately guarded: mutations are idempotent, evidence is append-only, access fails closed, and any provider-facing action carries an explicit approval boundary. The release included ordered migrations, rollback fixtures, focused containment checks, and a broad browser verification suite.

## Public boundary

No family data, provider secrets, campaign operations, or source implementation is published. The public material describes architecture and delivery practices only.
