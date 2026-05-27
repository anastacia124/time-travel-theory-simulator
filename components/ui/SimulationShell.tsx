import type { ReactNode } from "react";

type SimulationShellProps = {
  children: ReactNode;
};

export default function SimulationShell({ children }: SimulationShellProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-black px-6 py-8 text-white">
      <section className="relative mx-auto min-h-[calc(100vh-4rem)] max-w-7xl">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_30%)]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        <div className="absolute inset-0 -z-10 bg-black/35" />

        <nav className="flex items-center justify-between border-b border-blue-300/10 pb-5">
          <a
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100"
          >
            TT Simulator
          </a>

          <div className="hidden items-center gap-6 text-sm text-gray-300 sm:flex">
            <a href="/calculator" className="hover:text-white">
              Calculator
            </a>
            <a href="/theories" className="hover:text-white">
              Theories
            </a>
            <a href="/oracle" className="hover:text-white">
              Oracle
            </a>
          </div>
        </nav>

        <div className="relative z-10">{children}</div>
      </section>
    </main>
  );
}