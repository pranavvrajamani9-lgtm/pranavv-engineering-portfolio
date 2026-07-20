# Hoop Nest — Designing a role-aware mobile operating layer

## Situation

Youth programs often run family communication, schedules, attendance, and team updates through disconnected tools. That creates duplicate data entry for staff and a confusing experience for parents. The product needed to bring those recurring interactions into one mobile-first system while preserving the boundary between an organization, its teams, and its families.

## My role

I own product definition and full-stack implementation: I translate the operational workflow into product scope, design the application flows, implement the client and service boundaries, and validate role-specific behavior.

## Constraints

- Directors, coaches, and parents need different views of the same organization.
- The product is used in quick, everyday mobile interactions—not at a desk with training.
- Team and organization boundaries must remain protected as people navigate events, attendance, communication, and media.
- Sensitive family and minor-related information requires a conservative default for access and contact.

## Technical approach

I built the product in React Native/Expo with TypeScript and a Supabase-backed data and identity layer. Rather than treating each feature as isolated, the architecture starts with membership and role relationships. Product areas such as onboarding, event workflows, attendance, feed, chat, media, and family views consume those boundaries instead of reimplementing access rules individually.

## Decisions that mattered

1. **Model the organization before the screens.** Team membership and role-aware access are foundational; interface work follows those constraints.
2. **Keep parent flows task-oriented.** Parent-facing screens emphasize only the information and actions needed for their own teams and family.
3. **Verify complete role paths.** Mobile end-to-end checks cover director, coach, parent, team, event, attendance, feed, and chat routes rather than relying only on rendered components.

## Outcome and status

The result is a cohesive mobile operations platform with a clear path from organization onboarding to daily team activity. It remains a private product; public documentation intentionally excludes schemas, organization records, and security-sensitive implementation.
