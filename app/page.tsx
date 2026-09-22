import Link from "next/link";
import HudPanel from "@/components/ui/HudPanel";
import PortalVisual from "@/components/ui/PortalVisual";
import StatusBadge from "@/components/ui/StatusBadge";

const modules = [
  { number: "01", title: "Time dilation", text: "Set your velocity. Compare the time experienced by a traveler and an Earth observer.", href: "/calculator", label: "Run a calculation", status: "Interactive" },
  { number: "02", title: "Theory archive", text: "Navigate six concepts, from observed relativity to speculative paths through spacetime.", href: "/theories", label: "Explore theories", status: "6 concepts" },
  { number: "03", title: "Temporal Oracle", text: "Ask a question. Explore an explanation that separates science from speculation.", href: "/oracle", label: "Ask the Oracle", status: "AI + reference" },
];
export default function Home() {
  return <>
    <section className="command-hero">
      <div className="hero-copy"><p className="eyebrow">01 / COMMAND CENTER</p><h1>Beyond the<br />present<span className="accent">.</span></h1><p className="hero-description">Time is not as absolute as it feels. Investigate its limits through relativity, theoretical physics, and the questions still unanswered.</p><div className="hero-actions"><Link className="primary-action" href="/calculator">Initiate simulation <span aria-hidden="true">↗</span></Link><Link className="secondary-action" href="/theories">Open theory archive →</Link></div><p className="hero-note">An interactive exploration of time. Grounded in curiosity.</p></div>
      <PortalVisual />
    </section>
    <div className="dashboard-rail"><div><span className="eyebrow">FRAMEWORK</span><strong>Special relativity</strong></div><div><span className="eyebrow">TRAVEL TO THE FUTURE</span><strong>Time dilation observed</strong></div><div><span className="eyebrow">TRAVEL TO THE PAST</span><strong>Unproven</strong></div></div>
    <section aria-labelledby="modules-heading" className="modules-section"><div className="section-line"><h2 id="modules-heading">Choose your investigation</h2><span className="eyebrow">03 ACTIVE MODULES</span></div><div className="module-grid">{modules.map(module => <HudPanel key={module.number} className="module-card"><div className="module-top"><span className="module-number">{module.number}</span><StatusBadge tone="cyan">{module.status}</StatusBadge></div><h3>{module.title}</h3><p>{module.text}</p><Link href={module.href}>{module.label} <span aria-hidden="true">↗</span></Link></HudPanel>)}</div></section>
    <p className="science-note">The portal is an artistic visualization. TTTS does not measure paradox risk or demonstrate a working time machine.</p>
  </>;
}
