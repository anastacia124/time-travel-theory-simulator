import Link from "next/link";
import TimeDilationCalculator from "@/components/TimeDilationCalculator";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black px-6 py-12 text-white">
      <section className="relative mx-auto max-w-6xl">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_30%)]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        <Link href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to Home
        </Link>

        <div className="mt-12 rounded-[2rem] border border-blue-300/20 bg-black/45 p-8 shadow-2xl backdrop-blur">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
            Simulation Module
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Time Dilation Calculator
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Enter a speed close to the speed of light and compare how time
            passes for the traveler versus an observer on Earth.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
                Theory
              </p>
              <p className="mt-2 text-sm text-gray-300">Special Relativity</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
                Formula
              </p>
              <p className="mt-2 text-sm text-gray-300">Lorentz Factor</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
                Status
              </p>
              <p className="mt-2 text-sm text-cyan-300">Simulation Ready</p>
            </div>
          </div>
        </div>

        <TimeDilationCalculator />
      </section>
    </main>
  );
}