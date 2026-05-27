const theories = [
  {
    title: "Time Dilation",
    category: "Supported Science",
    status: "Observed",
    description:
      "Time can pass at different rates depending on speed and gravity. This effect is supported by modern physics and has been experimentally confirmed.",
  },
  {
    title: "Wormholes",
    category: "Theoretical Physics",
    status: "Unproven",
    description:
      "A wormhole is a possible shortcut through spacetime. The math allows the idea in some models, but usable wormholes have not been proven to exist.",
  },
  {
    title: "Paradoxes",
    category: "Logic Problem",
    status: "Conceptual",
    description:
      "Time travel to the past creates problems like the grandfather paradox, where changing the past could break cause and effect.",
  },
  {
    title: "Speed of Light",
    category: "Physics Limit",
    status: "Limit",
    description:
      "According to modern physics, objects with mass cannot reach or exceed the speed of light because the energy required would become infinite.",
  },
  {
    title: "Black Holes",
    category: "Extreme Gravity",
    status: "Real",
    description:
      "Black holes bend spacetime so strongly that time near them can pass differently compared to time far away from them.",
  },
  {
    title: "Closed Timelike Curves",
    category: "Advanced Theory",
    status: "Speculative",
    description:
      "A closed timelike curve is a theoretical path through spacetime that loops back on itself, creating a possible mathematical model for traveling into the past.",
  },
];

export default function TheoriesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black px-6 py-12 text-white">
      <section className="relative mx-auto max-w-6xl">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_30%)]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        <a href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to Home
        </a>

        <div className="mt-12 rounded-[2rem] border border-blue-300/20 bg-black/45 p-8 shadow-2xl backdrop-blur">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
            Theory Archive
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Science, theory, and speculation.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Explore the concepts behind time travel while separating what modern
            science supports from what remains theoretical or science fiction.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
                Archive Mode
              </p>
              <p className="mt-2 text-sm text-cyan-300">Classification Active</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
                Topics
              </p>
              <p className="mt-2 text-sm text-gray-300">
                {theories.length} Concepts
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
                Lens
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Physics + Speculation
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {theories.map((theory) => (
            <article
              key={theory.title}
              className="rounded-3xl border border-white/10 bg-black/45 p-6 shadow-2xl backdrop-blur transition hover:border-blue-300/40 hover:bg-blue-300/10"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
                  {theory.category}
                </p>

                <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  {theory.status}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-semibold">{theory.title}</h2>

              <p className="mt-4 leading-7 text-gray-300">
                {theory.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}