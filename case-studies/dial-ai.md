# Dial AI — Sales conversation coaching

## Product problem

Sales practice tools often stop at generic prompts. A useful system needs a clear conversation workflow, realistic integration boundaries, and a stable path from local development to a production-ready service.

## System design

- Next.js application with AI-assisted conversation and coaching flows.
- Isolated integration boundaries for authentication, billing, AI, and external data providers.
- Documented environment contract and CI checks for lint and production build validation.

## Engineering emphasis

The maintenance work focused on making the project easier to evaluate and safer to extend: dependency hygiene, a reproducible local setup, static checks, build verification, and explicit separation between demo fallbacks and real provider configuration.

## Public boundary

Production credentials, billing configuration, third-party integration details, and product source remain private.
