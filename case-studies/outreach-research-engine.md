# Outreach Research Engine — Preventing weak research from becoming outreach

## Situation

Outbound preparation can become a volume exercise: discover a company, generate a message, and send it. That shortcut produces weak relevance and can turn incomplete public evidence into confident claims. The product needed a workflow that preserved research quality while still helping an operator move efficiently toward a useful discovery call.

## My role

I designed and implemented the research-to-preparation workflow, including its evidence gates, safe data movement, browser experience, and delivery checks.

## Constraints

- Public information is inconsistent and should not automatically become a send-ready claim.
- Operators need a clear distinction between a research draft and a reviewed outreach preparation.
- Imports and exports need to be resilient to malformed or unsafe content.
- The product needed a lightweight, deployable architecture.

## Technical approach

I built a Cloudflare Workers-based application for company discovery and public-evidence review. The workflow uses structured readiness criteria before a record can move to prepared status. It also includes import/export safety, browser-storage resilience, static-output checks, and security headers.

## Decisions that mattered

1. **Use evidence gates instead of a simple status dropdown.** A lead cannot silently become outreach-ready without the required supporting information.
2. **Preserve human judgment.** The system prepares structured discovery-call drafts; it does not represent unverified research as approved messaging.
3. **Verify the delivery surface.** Browser tests cover evidence states, import/export handling, static output integrity, and security headers.

## Outcome and status

The result is a controlled research-preparation system that helps improve outbound quality without automating the trust decision. Prospect data, research records, campaign content, and the underlying source stay private.
