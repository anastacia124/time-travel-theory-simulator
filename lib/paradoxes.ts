export type TimelineRule = "consistent" | "branch" | "rewrite";
export type Intervention = "observe" | "prevent";

export function paradoxOutcome(rule: TimelineRule, action: Intervention) {
  if (action === "observe") return {
    title: "The machine is built, so you can make the trip",
    steps: ["2040: You use the machine to visit 2030.", "2030: You watch the instructions reach the builder and change nothing.", "2040: The builder has completed the machine, so your trip is still possible."],
    explanation: "You have not removed anything needed for the trip. The builder gets the instructions, makes the machine, and you can use it. All three story rules allow this result because you leave the events unchanged. That makes the story fit together; it does not prove that visiting the past is possible.",
  };
  switch (rule) {
    case "consistent": return {
      title: "A spare copy means the machine still gets built",
      steps: ["2040: You use the machine to visit 2030.", "2030: You destroy the delivered instructions, but the builder has a spare copy.", "2040: The builder uses the spare copy to finish the machine, so you can still make the original trip."],
      explanation: "This rule requires the past to fit the trip you already made. In our example, you destroy one copy but fail to stop the machine from being built. We invented the spare copy to show how the events could fit together. It is not a prediction that the universe creates backups or always prevents interference. Physicists call the requirement that events fit together self-consistency.",
    };
    case "branch": return {
      title: "One history has a machine; the other does not",
      steps: ["History A, 2040: You leave in the machine. A is the original version of events.", "History B, 2030: Your change creates a different version of events. You destroy the only instructions in this version.", "History B, 2040: No machine is built here. But the machine you left in still belongs to history A."],
      explanation: "Think of two stories with the same beginning but different endings. In A, the builder makes the machine. In B, you stop that from happening. Your trip begins in A, so the missing machine in B does not erase it. This is called branching because the histories split like branches on a tree. It is a fictional rule here, not evidence that people can create or move between different histories.",
    };
    case "rewrite": return {
      title: "Without the machine, how did you destroy the instructions?",
      steps: ["2040: You use the machine to visit 2030.", "2030: You destroy the only instructions, preventing the machine from being built.", "2040: There is no machine, so the trip you needed to destroy the instructions cannot happen."],
      explanation: "Here is the contradiction: destroying the instructions requires a trip, but destroying them also prevents that same trip. Both claims cannot hold together in this single history. These rules give no consistent outcome, meaning no ending fits all the events. A movie might make the traveler disappear or reset time, but that would add another invented rule. Physics has not established such an ending.",
    };
  }
}
