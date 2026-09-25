"use client";

import { useState } from "react";
import HudPanel from "@/components/ui/HudPanel";
import { paradoxOutcome, type TimelineRule, type Intervention } from "@/lib/paradoxes";

export default function ParadoxExplorer() {
  const [rule, setRule] = useState<TimelineRule>("consistent");
  const [action, setAction] = useState<Intervention>("observe");
  const outcome = paradoxOutcome(rule, action);
  return <div className="exploration-grid">
    <HudPanel>
      <h2 className="text-2xl">Could you stop your own trip?</h2>
      <p className="exploration-copy">In 2030, a builder receives instructions for making a time machine. By 2040, the machine is ready. You use it to visit 2030, just before those instructions arrive. You can watch the delivery or destroy the instructions.</p>
      <p className="exploration-copy">For this story, the builder needs those instructions and cannot reinvent the machine without them. A timeline means a version of history: the events that happen and their order. Choose how history works, then choose what you do.</p>
      <fieldset className="exploration-options">
        <legend>1. Choose a rule for the story</legend>
        {([
          ["consistent", "The past must still fit together", "Your visit was always part of history. Whatever you do must leave your original trip possible."],
          ["branch", "Create a different version of history", "Your change starts a separate history. The original one, where you left in the machine, still exists in this story."],
          ["rewrite", "Replace the original history", "Your change rewrites the only history. There is no separate version to preserve your original trip."],
        ] as const).map(([value, label, detail]) => <label key={value}>
          <input type="radio" name="timeline-rule" value={value} checked={rule === value} onChange={() => setRule(value)} />
          <span><strong>{label}</strong><small>{detail}</small></span>
        </label>)}
      </fieldset>
      <fieldset className="exploration-options">
        <legend>2. What do you do in 2030?</legend>
        {([["observe", "Watch without changing anything"], ["prevent", "Destroy the instructions"]] as const).map(([value, label]) => <label key={value}>
          <input type="radio" name="intervention" checked={action === value} onChange={() => setAction(value)} />{label}
        </label>)}
      </fieldset>
      <button className="secondary-action" onClick={() => { setRule("consistent"); setAction("observe"); }}>Start again</button>
      <p className="science-note">Try destroying the instructions under each of the three rules. The explanation changes immediately, beside these controls or below them on a small screen.</p>
    </HudPanel>
    <HudPanel>
      <div aria-live="polite" aria-atomic="true">
        <p className="eyebrow">WHAT HAPPENS IN THIS VERSION OF THE STORY?</p>
        <h2 className="mt-4 text-2xl">{outcome.title}</h2>
        <p className="exploration-copy">Read these steps in the order of your journey. They start in 2040, jump back to 2030, then describe what that means for 2040.</p>
        <ol className="scenario-timeline">{outcome.steps.map(step => <li key={step}>{step}</li>)}</ol>
        <p className="exploration-copy">{outcome.explanation}</p>
      </div>
    </HudPanel>
  </div>;
}
