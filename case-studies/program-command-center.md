# Program Command Center — Building a guarded conversion system

## Situation

Programs need a dependable path from campaign interest to a parent decision. In practice, leads arrive from forms, referrals, imports, and director-entered records; follow-up is inconsistent; and reporting is difficult to trust. The product needed to turn that fragmented process into a repeatable, founder-operated conversion system without making directors operate an ad-tech dashboard.

## My role

I defined the product boundary, designed the multi-tenant workflows, implemented the application and database release, and established the safety and verification practices for its external-provider edges.

## Constraints

- Parent/guardian contact is primary; direct minor messaging is not the default.
- Every incoming family must normalize into one lead and progress model regardless of acquisition source.
- Tenant isolation has to fail closed.
- Real email, SMS, Meta, payment, app handoff, and campaign publication actions need explicit approval gates.
- The product must be demonstrable with synthetic data before a first client exists.

## Technical approach

I built a Next.js and TypeScript application backed by Supabase/Postgres. The data layer uses tenant-scoped policies, ordered migrations, and explicit concurrency controls. The workflow covers campaign setup, attribution links, landing pages, lead normalization, parent packages, conversion evidence, reporting, creative review, and a guarded handoff to the Hoop Nest app.

## Decisions that mattered

1. **Normalize before fulfilling.** Forms, referrals, spreadsheet imports, walk-ins, and director entries resolve to the same lead and progress workflow.
2. **Make external uncertainty visible.** Provider-facing actions are idempotent, have bounded retries, and record outcomes rather than assuming delivery.
3. **Separate conversion from app access.** A parent package can advance conversion; an app invite is a later, exact-team, eligibility-checked action.
4. **Treat database changes as a release.** The implementation includes ordered migrations, rollback fixtures, append-only evidence, and a large browser verification suite.

## Outcome and status

The full dashboard and its guarded delivery foundation are implemented and locally verified with synthetic data. Live provider execution remains deliberately disabled until a client and the appropriate paid/live approvals exist. No parent data, provider credentials, or proprietary source is public.
