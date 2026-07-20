# SignalDesk — Designing research software that preserves uncertainty

## Situation

Investment and market research often collapses disparate public signals into a confident-looking conclusion without preserving source quality, missing context, or counterarguments. The goal was to create a workspace where research could become decision-ready without presenting unsupported claims as fact.

## My role

I worked across product framing and implementation, with a particular focus on research-state modeling, source integrity, provider reliability, and the user experience around incomplete evidence.

## Constraints

- Inputs may be incomplete, stale, rate-limited, or contradictory.
- A provider failure must not look like a negative finding or a completed analysis.
- The interface needs to distinguish direct evidence from an analyst interpretation.
- Research output should be reviewable rather than a black-box answer.

## Technical approach

The workspace organizes source provenance, counterarguments, scenario assumptions, and reviewable conclusions as separate but connected concepts. Provider and quota-aware states surface partial work directly. The system avoids converting a missing source or failed retrieval into fabricated certainty.

## Decisions that mattered

1. **Model confidence and uncertainty explicitly.** A partial result is a real product state, not an error to hide.
2. **Keep source and interpretation distinct.** Readers can trace a conclusion back to the evidence and identify where judgment begins.
3. **Test operational failure paths.** The verification approach includes source-integrity, quota, recovery, and provider-outage cases.

## Outcome and status

SignalDesk provides an evidence-first foundation for research workflows where clarity about what is known is more valuable than a polished but ungrounded answer. Source snapshots, workspace data, and application code remain private.
