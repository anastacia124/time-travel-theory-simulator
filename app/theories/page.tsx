const theories = [
  {
    title: "Time Dilation",
    category: "Supported Science",
    description:
      "Time can pass at different rates depending on speed and gravity. This is a real effect supported by modern physics.",
  },
  {
    title: "Wormholes",
    category: "Theoretical Physics",
    description:
      "A wormhole is a possible shortcut through spacetime. Scientists have not proven that usable wormholes exist.",
  },
  {
    title: "Paradoxes",
    category: "Logic Problem",
    description:
      "Time travel to the past creates problems like the grandfather paradox, where changing the past could break cause and effect.",
  },
  {
    title: "Speed of Light",
    category: "Physics Limit",
    description:
      "According to modern physics, objects with mass cannot reach or exceed the speed of light.",
  },
  {
    title: "Black Holes",
    category: "Extreme Gravity",
    description:
      "Black holes bend spacetime so strongly that time near them can move differently compared to faraway observers.",
  },
];

export default function TheoriesPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <a href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to Home
        </a>

        <div className="mt-12">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
            Theory Archive
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Explore the science and speculation behind time travel.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            These theory cards separate what science supports from what remains
            theoretical, speculative, or science fiction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {theories.map((theory) => (
            <article
              key={theory.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur transition hover:border-blue-300/40 hover:bg-blue-300/10"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
                {theory.category}
              </p>

              <h2 className="mt-4 text-2xl font-semibold">{theory.title}</h2>

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