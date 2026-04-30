"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Time Dilation",
    description:
      "Calculate how time changes when a traveler moves close to the speed of light.",
  },
  {
    title: "Wormholes",
    description:
      "Explore the idea of shortcuts through spacetime and what remains theoretical.",
  },
  {
    title: "Paradoxes",
    description:
      "Study the logic problems that appear when time travel touches the past.",
  },
  {
    title: "The Temporal Oracle",
    description:
      "Ask AI-guided questions about relativity, black holes, aliens, and time theory.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-screen px-6 py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        <motion.div
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col">
          <nav className="flex items-center justify-between py-4">
            <a href="/" className="text-sm font-semibold tracking-[0.3em]">
              TT SIMULATOR
            </a>

            <div className="hidden gap-6 text-sm text-gray-300 sm:flex">
              <a href="/calculator" className="hover:text-white">
                Calculator
              </a>
              <a href="/theories" className="hover:text-white">
                Theories
              </a>
            </div>
          </nav>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-5 text-sm uppercase tracking-[0.4em] text-blue-300">
                Time Travel Theory Simulator
              </p>

              <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
                Can time travel exist?
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                Explore relativity, wormholes, paradoxes, and the speed of light
                through interactive simulations and AI-guided explanations.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/calculator"
                  className="rounded-full bg-white px-6 py-3 text-center font-medium text-black transition hover:bg-blue-200"
                >
                  Launch Simulator
                </a>

                <a
                  href="/theories"
                  className="rounded-full border border-white/30 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
                >
                  Explore Theories
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-[2rem] border border-blue-300/20 bg-white/5 p-6 shadow-2xl backdrop-blur"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
                Active Modules
              </p>

              <div className="mt-6 space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl border border-white/10 bg-black/30 p-5"
                  >
                    <h2 className="text-lg font-semibold">{feature.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}