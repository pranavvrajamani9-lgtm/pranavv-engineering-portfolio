# SignalDesk — Evidence-first research workspace

## Product problem

Research teams need to turn fragmented public information into a clear point of view without hiding uncertainty or treating weak sources as established facts.

## System design

- Research workspace structured around source provenance, counterarguments, scenario assumptions, and reviewable conclusions.
- Provider and quota awareness designed to surface partial results rather than fabricate completion.
- Clear differentiation between source evidence, analyst interpretation, and unresolved questions.

## Engineering emphasis

The central technical concern is source integrity: preserve what was observed, make retrieval failures legible, and keep the interface from overstating confidence. System checks cover provider outage, quota, recovery, and source-quality conditions.

## Public boundary

Research datasets, client workspaces, source snapshots, and application source remain private.
