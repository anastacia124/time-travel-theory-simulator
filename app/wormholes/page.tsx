import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ScienceContext from "@/components/ui/ScienceContext";
import WormholeExplorer from "@/components/WormholeExplorer";

export const metadata: Metadata = { title: "Wormholes | TTTS", description: "Learn what a wormhole is with a simple diagram. Compare ordinary space travel, an imagined shortcut, and an example of travel to the past." };

export default function WormholesPage() {
  return <>
    <SectionHeader eyebrow="05 / EXPLORING WORMHOLES" title="What is a wormhole?" description="A wormhole is a possible connection between distant places in the universe, often pictured as a tunnel. If one existed and people could pass through it, it might offer a shorter route. No wormhole has been observed, and we do not know whether one could carry a traveler safely." />
    <WormholeExplorer />
    <ScienceContext established="What has been tested: motion and gravity can change how much time passes for different clocks. Einstein's theory of relativity describes these effects. They do not show that wormholes exist or that we can visit the past." theoretical="What the mathematics suggests: some models allow connections called wormholes. A model is a mathematical description of how something might work. It does not prove that the connection exists in the universe or can stay open for a traveler." fictional="What we invent for this activity: a tunnel that stays open, a safe trip through it, and, in the final example, an exit in an earlier year. Those features help explain an idea; they are not technology we know how to build." />
    <p className="science-note">Want more detail? This <a href="https://arxiv.org/abs/0710.4474">advanced physics review discusses wormhole models</a>. For another beginner-friendly activity, visit <Link href="/paradoxes">Paradoxes</Link> to explore what might go wrong in a story about changing the past.</p>
  </>;
}
