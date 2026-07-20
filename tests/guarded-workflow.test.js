import assert from "node:assert/strict";
import test from "node:test";
import { createWorkflow, transition, WorkflowError } from "../src/guarded-workflow.js";

const clock = () => "2026-07-19T12:00:00.000Z";

test("allows a valid, owned transition and writes immutable evidence", () => {
  const workflow = createWorkflow({ id: "lead_01", ownerId: "admin_01", now: clock });
  const result = transition(workflow, { actorId: "admin_01", requestId: "req_01", to: "approved", now: clock });

  assert.equal(result.applied, true);
  assert.equal(result.workflow.status, "approved");
  assert.equal(workflow.status, "drafted");
  assert.equal(result.workflow.audit.at(-1).type, "workflow.transitioned");
});

test("rejects an actor outside the ownership boundary", () => {
  const workflow = createWorkflow({ id: "lead_01", ownerId: "admin_01", now: clock });
  assert.throws(
    () => transition(workflow, { actorId: "admin_02", requestId: "req_01", to: "approved", now: clock }),
    (error) => error instanceof WorkflowError && error.code === "forbidden",
  );
});

test("makes duplicate requests safe to retry", () => {
  const workflow = createWorkflow({ id: "lead_01", ownerId: "admin_01", now: clock });
  const first = transition(workflow, { actorId: "admin_01", requestId: "req_01", to: "approved", now: clock });
  const retry = transition(first.workflow, { actorId: "admin_01", requestId: "req_01", to: "sent", now: clock });

  assert.equal(retry.applied, false);
  assert.equal(retry.reason, "duplicate_request");
  assert.equal(retry.workflow.status, "approved");
});

test("does not permit invalid state changes", () => {
  const workflow = createWorkflow({ id: "lead_01", ownerId: "admin_01", now: clock });
  assert.throws(
    () => transition(workflow, { actorId: "admin_01", requestId: "req_01", to: "completed", now: clock }),
    (error) => error instanceof WorkflowError && error.code === "invalid_transition",
  );
});
