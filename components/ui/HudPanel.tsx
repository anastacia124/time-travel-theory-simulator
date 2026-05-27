import type { ReactNode } from "react";

type HudPanelProps = {
  children: ReactNode;
  className?: string;
};

export default function HudPanel({ children, className = "" }: HudPanelProps) {
  return (
    <div
      className={`rounded-3xl border border-blue-300/20 bg-black/50 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}