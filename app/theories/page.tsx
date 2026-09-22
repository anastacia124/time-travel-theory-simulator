import SectionHeader from "@/components/ui/SectionHeader";
import HudPanel from "@/components/ui/HudPanel";
import StatusBadge from "@/components/ui/StatusBadge";
const theories = [
  {
    title: "Time Dilation",
    category: "Supported Science",
    status: "Observed",
    description:
      "Time can pass at different rates depending on speed and gravity. This effect is supported by modern physics and has been experimentally confirmed.",
  },
  {
    title: "Wormholes",
    category: "Theoretical Physics",
    status: "Unproven",
    description:
      "A wormhole is a possible shortcut through spacetime. The math allows the idea in some models, but usable wormholes have not been proven to exist.",
  },
  {
    title: "Paradoxes",
    category: "Logic Problem",
    status: "Conceptual",
    description:
      "Time travel to the past creates problems like the grandfather paradox, where changing the past could break cause and effect.",
  },
  {
    title: "Speed of Light",
    category: "Physics Limit",
    status: "Limit",
    description:
      "According to modern physics, objects with mass cannot reach or exceed the speed of light because the energy required would become infinite.",
  },
  {
    title: "Black Holes",
    category: "Extreme Gravity",
    status: "Real",
    description:
      "Black holes bend spacetime so strongly that time near them can pass differently compared to time far away from them.",
  },
  {
    title: "Closed Timelike Curves",
    category: "Advanced Theory",
    status: "Speculative",
    description:
      "A closed timelike curve is a theoretical path through spacetime that loops back on itself, creating a possible mathematical model for traveling into the past.",
  },
];

export default function TheoriesPage() {
  return <><SectionHeader eyebrow="03 / THEORY ARCHIVE" title="Separate possibility from proof." description="Six entry points into the physics of time. Each concept is labeled by what science supports and what remains unresolved." /><div className="theory-grid">{theories.map((theory, index) => <HudPanel key={theory.title}><div className="theory-top"><p className="eyebrow">0{index + 1} / {theory.category}</p><StatusBadge tone={theory.status === "Observed" || theory.status === "Real" ? "green" : theory.status === "Limit" ? "blue" : "purple"}>{theory.status}</StatusBadge></div><h2 className="mt-6 text-2xl font-semibold">{theory.title}</h2><p className="mt-4 leading-7 text-slate-300">{theory.description}</p></HudPanel>)}</div></>;
}
