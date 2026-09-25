import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import ScienceContext from "@/components/ui/ScienceContext";
import ParadoxExplorer from "@/components/ParadoxExplorer";

export const metadata: Metadata = { title: "Paradoxes | TTTS", description: "Learn what a time travel paradox is by imagining a trip that prevents its own time machine from being built." };

export default function ParadoxesPage() {
  return <>
    <SectionHeader eyebrow="06 / CHANGING THE PAST" title="What is a time travel paradox?" description="A paradox is a puzzle in which seemingly reasonable ideas lead to a contradiction: two things that cannot both be true. Imagine going back in time and stopping your time machine from being built. If the machine never existed, how did you go back? Explore that puzzle in the story below." />
    <ParadoxExplorer />
    <ScienceContext established="What has been tested: motion and gravity can make different amounts of time pass for different people. That effect is called time dilation. It does not show that a person can go back and change an earlier event." theoretical="What researchers explore: some mathematical descriptions of the universe allow paths that return to an earlier event. Researchers ask whether a traveler on such a path could act without creating a contradiction. We do not know whether people could actually make such a journey." fictional="What we invent here: a working time machine and three rules for what happens when you visit the past. The results show how those rules affect a story. They do not tell us which rule, if any, describes the real universe." />
    <p className="science-note">For a more advanced explanation, see these <a href="https://www.astro.umd.edu/~miller/teaching/astr350/lecture26.pdf">University of Maryland lecture notes about wormholes and time travel (PDF)</a>. You do not need to read them to use this activity.</p>
  </>;
}
