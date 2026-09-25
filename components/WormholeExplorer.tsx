"use client";

import { useState } from "react";
import HudPanel from "@/components/ui/HudPanel";
import StatusBadge from "@/components/ui/StatusBadge";

const modes = [
  {
    id: "ordinary",
    label: "1. Travel without a wormhole",
    status: "No wormhole needed",
    title: "Take the route through space",
    text: "Imagine a spaceship leaving Earth at A and heading toward a distant star at B. Without a shortcut, it must cross the space between them. The curved line represents that journey; it does not mean a spaceship has to fly along this exact curve.",
    takeaway: "The picture has no distance scale or speed setting, so it cannot tell you how long the trip would take.",
  },
  {
    id: "shortcut",
    label: "2. Imagine a shorter route",
    status: "An unproven idea",
    title: "What if a tunnel connected A and B?",
    text: "Imagine a tunnel with one opening near Earth and the other near the distant star. You enter at A, travel through the tunnel, and leave at B. If the route inside were shorter than the route through ordinary space, the journey could take less time without your ship having to move faster than light.",
    takeaway: "The purple line shows this imagined passage. Physicists call each opening a mouth and the narrow connecting region a throat. These are names for parts of the model, not things we have found or built. We do not know how to make such a passage or keep it open.",
  },
  {
    id: "shift",
    label: "3. Imagine arriving in the past",
    status: "An invented example",
    title: "What if the exit led to an earlier year?",
    text: "For this story, imagine entering A in 2050 and leaving B in 2040. That would mean arriving ten years before you entered, as measured by clocks outside the tunnel. We chose those years to explain the idea; the explorer did not calculate them.",
    takeaway: "Why discuss clocks? Motion and gravity can make different amounts of time pass at two places. Some wormhole models explore whether that could let the openings connect different times. Simply changing a clock's display would not do this. A real time difference alone would not guarantee a trip to the past, either: the wormhole and the whole journey would have to allow it. We do not know whether that is physically possible.",
  },
] as const;

export default function WormholeExplorer() {
  const [selected, setSelected] = useState(0);
  const mode = modes[selected];
  return <div className="exploration-grid">
    <HudPanel>
      <h2 className="text-2xl">Start with two places</h2>
      <p className="exploration-copy">Think of A as Earth and B as a distant star. Choose an option below to compare a normal journey with two imagined alternatives. Read the explanation beside the picture, or below it on a small screen.</p>
      <p className="exploration-copy"><strong>What does spacetime mean?</strong> An event has both a place and a time: for example, a spaceship launches from Earth in 2050. Physicists use the word spacetime to describe space and time together.</p>
      <fieldset className="exploration-options">
        <legend>Choose a journey to explore</legend>
        {modes.map((item, index) => <label key={item.id}>
          <input type="radio" name="connection" checked={selected === index} onChange={() => setSelected(index)} />
          {item.label}
        </label>)}
      </fieldset>
      <button className="secondary-action" onClick={() => setSelected(0)}>Start again</button>
      <p className="science-note">The moving dashes highlight a route. They do not show a real spaceship or its speed. Use Pause motion in the header to stop them.</p>
    </HudPanel>
    <HudPanel>
      <svg className="wormhole-map" viewBox="0 0 480 250" role="img" aria-labelledby="wormhole-map-title wormhole-map-description">
        <title id="wormhole-map-title">{mode.title}</title>
        <desc id="wormhole-map-description">A represents Earth and B a distant star. The curved line is the route through ordinary space. {selected > 0 ? "The purple line is an imagined shorter passage between them." : ""} {selected === 2 ? "In this invented example, you enter A in 2050 and leave B in 2040. These dates are not calculated." : ""} The drawing does not show real distances.</desc>
        <path className={selected === 0 ? "route-path active-route" : "route-path"} d="M65 160 Q240 -70 415 160" />
        {selected > 0 && <path className="route-path active-route shortcut-route" d="M65 160 L415 160" />}
        <circle cx="65" cy="160" r="23" /><circle cx="415" cy="160" r="23" />
        <text x="65" y="166">A</text><text x="415" y="166">B</text>
        <text x="240" y="38">Route through space</text>
        {selected > 0 && <text x="240" y="145">Imagined tunnel</text>}
        <text x="65" y="204">{selected === 2 ? "Enter: 2050" : "Earth"}</text>
        <text x="415" y="204">{selected === 2 ? "Leave: 2040" : "Distant star"}</text>
        <text x="240" y="240">{selected === 2 ? "Made-up dates for this example" : "Drawing does not show real distances"}</text>
      </svg>
      <div aria-live="polite" aria-atomic="true">
        <StatusBadge tone={selected === 0 ? "green" : "purple"}>{mode.status}</StatusBadge>
        <h2 className="mt-5 text-2xl">{mode.title}</h2>
        <p className="exploration-copy">{mode.text}</p>
        <p className="exploration-copy">{mode.takeaway}</p>
      </div>
    </HudPanel>
  </div>;
}
