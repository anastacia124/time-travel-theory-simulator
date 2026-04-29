export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
          Time Travel Theory Simulator
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Can time travel exist?
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
          Explore relativity, wormholes, paradoxes, and the speed of light
          through interactive simulations and AI-guided explanations.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/calculator"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-blue-200"
          >
            Launch Simulator
          </a>

          <a
            href="/theories"
            className="rounded-full border border-white/30 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Explore Theories
          </a>
        </div>
      </section>
    </main>
  );
}