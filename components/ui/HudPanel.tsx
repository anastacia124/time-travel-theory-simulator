import type { ReactNode } from "react";
export default function HudPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`hud-panel ${className}`}>{children}</div>;
}
