import TimeDilationCalculator from "@/components/TimeDilationCalculator";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to Home
        </a>

        <div className="mt-12">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
            Simulation Module
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Time Dilation Calculator
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Enter a speed close to the speed of light and see how time changes
            for a traveler compared to an observer on Earth.
          </p>
        </div>

        <TimeDilationCalculator />
      </section>
    </main>
  );
}