"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

const routes = [["/", "Command"], ["/calculator", "Calculator"], ["/theories", "Theories"], ["/oracle", "Oracle"]];

export default function SimulationShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [paused, setPaused] = useState(false);
  return (
    <div className={`simulation-shell ${paused ? "motion-paused" : ""}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="cosmic-grid" aria-hidden="true" />
      <header className="site-header">
        <Link href="/" className="brand"><span className="brand-mark" aria-hidden="true">◈</span><span>TTTS<small>TEMPORAL RESEARCH INTERFACE</small></span></Link>
        <nav aria-label="Main navigation">
          {routes.map(([href, title], i) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}><span className="nav-number">0{i + 1}</span>{title}</Link>)}
        </nav>
        <button className="motion-control" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Resume motion" : "Pause motion"}</button>
      </header>
      <div className="workspace">
        <div className="system-strip"><span>TTTS / RESEARCH CONSOLE</span><span>SCIENCE · THEORY · SPECULATION</span></div>
        <main id="main-content" tabIndex={-1}>{children}</main>
        <footer className="site-footer"><span>TIME TRAVEL THEORY SIMULATOR</span><span>Explore the possibilities. Question the assumptions.</span><span>V0.1 / EXPERIMENTAL</span></footer>
      </div>
    </div>
  );
}
