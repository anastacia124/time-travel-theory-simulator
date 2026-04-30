import TimeDilationCalculator from "@/components/TimeDilationCalculator";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black px-6 py-12 text-white">
      <section className="relative mx-auto max-w-6xl">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_30%)]" />

        <a href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to Home
        </a>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
            Simulation Module
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Time Dilation Calculator
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Enter a speed close to the speed of light and see how time changes
            for a traveler compared to an observer on Earth.
          </p>
        </div>

        <TimeDilationCalculator />
      </section>
    </main>
  );
}