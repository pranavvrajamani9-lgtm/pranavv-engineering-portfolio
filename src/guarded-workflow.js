/**
 * A small, dependency-free reference implementation of a guarded workflow.
 *
 * It demonstrates four recurring product concerns: explicit state transitions,
 * authorization, idempotency, and an append-only audit trail. The values are
 * synthetic; this module is not copied from a private application.
 */

const transitions = {
  drafted: new Set(["approved", "archived"]),
  approved: new Set(["sent", "archived"]),
  sent: new Set(["completed", "needs_review"]),
  needs_review: new Set(["approved", "archived"]),
  completed: new Set(),
  archived: new Set(),
};

export class WorkflowError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export function createWorkflow({ id, ownerId, now = () => new Date().toISOString() }) {
  if (!id || !ownerId) throw new WorkflowError("invalid_input", "id and ownerId are required");

  return {
    id,
    ownerId,
    status: "drafted",
    processedRequestIds: new Set(),
    audit: [{ type: "workflow.created", at: now(), by: ownerId }],
  };
}

export function transition(workflow, { actorId, requestId, to, now = () => new Date().toISOString() }) {
  if (!actorId || !requestId || !to) {
    throw new WorkflowError("invalid_input", "actorId, requestId, and to are required");
  }
  if (workflow.ownerId !== actorId) {
    throw new WorkflowError("forbidden", "Only the workflow owner may change its status");
  }
  if (workflow.processedRequestIds.has(requestId)) {
    return { workflow, applied: false, reason: "duplicate_request" };
  }
  if (!transitions[workflow.status]?.has(to)) {
    throw new WorkflowError("invalid_transition", `Cannot move from ${workflow.status} to ${to}`);
  }

  const next = {
    ...workflow,
    status: to,
    processedRequestIds: new Set([...workflow.processedRequestIds, requestId]),
    audit: [...workflow.audit, { type: "workflow.transitioned", from: workflow.status, to, at: now(), by: actorId, requestId }],
  };

  return { workflow: next, applied: true };
}
