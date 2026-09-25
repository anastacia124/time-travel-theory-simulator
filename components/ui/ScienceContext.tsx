import HudPanel from "./HudPanel";
import StatusBadge from "./StatusBadge";

export default function ScienceContext({ established, theoretical, fictional }: {
  established: string; theoretical: string; fictional: string;
}) {
  const items = [
    { title: "Established science", tone: "green" as const, text: established },
    { title: "Theoretical possibility", tone: "purple" as const, text: theoretical },
    { title: "Fictional assumption", tone: "blue" as const, text: fictional },
  ];
  return <section aria-label="Evidence and assumptions" className="module-grid exploration-context">
    {items.map(item => <HudPanel key={item.title}>
      <StatusBadge tone={item.tone}>{item.title}</StatusBadge>
      <p className="exploration-copy">{item.text}</p>
    </HudPanel>)}
  </section>;
}
