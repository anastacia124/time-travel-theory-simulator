import test from "node:test";
import assert from "node:assert/strict";
import { paradoxOutcome } from "../lib/paradoxes.ts";

test("observing preserves the departure under every timeline rule", () => {
  for (const rule of ["consistent", "branch", "rewrite"]) {
    const result = paradoxOutcome(rule, "observe");
    assert.match(result.steps.at(-1), /trip is still possible/);
  }
});

test("intervention distinguishes consistency, branching, and contradiction", () => {
  const consistent = paradoxOutcome("consistent", "prevent");
  assert.match(consistent.steps.at(-1), /still make the original trip/);
  assert.match(consistent.explanation, /not a prediction/);
  const branch = paradoxOutcome("branch", "prevent");
  assert.match(branch.steps[0], /History A/);
  assert.match(branch.steps.at(-1), /machine you left in still belongs to history A/);
  assert.match(branch.explanation, /fictional/);
  const rewrite = paradoxOutcome("rewrite", "prevent");
  assert.match(rewrite.steps.at(-1), /cannot happen/);
  assert.match(rewrite.explanation, /no consistent outcome/);
});