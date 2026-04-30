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

const systemStatus = [
  ["Temporal Drive", "Online"],
  ["Chrono Field", "Stable"],
  ["Reality Anchor", "82%"],
];

const simulationLog = [
  "Chrono field stabilized",
  "Timeline scan initialized",
  "Paradox risk nominal",
  "Temporal Oracle online",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-screen px-6 py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-8 rounded-full border border-purple-300/20" />
          <div className="absolute inset-16 rounded-full border border-blue-200/20" />
          <div className="absolute inset-24 rounded-full border border-cyan-300/20" />
          <div className="absolute left-1/2 top-0 h-24 w-1 -translate-x-1/2 rounded-full bg-blue-300/40 blur-sm" />
          <div className="absolute bottom-0 left-1/2 h-24 w-1 -translate-x-1/2 rounded-full bg-purple-300/40 blur-sm" />
          <div className="absolute left-0 top-1/2 h-1 w-24 -translate-y-1/2 rounded-full bg-cyan-300/40 blur-sm" />
          <div className="absolute right-0 top-1/2 h-1 w-24 -translate-y-1/2 rounded-full bg-blue-300/40 blur-sm" />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_90deg,_transparent,_rgba(59,130,246,0.25),_rgba(168,85,247,0.3),_transparent,_rgba(34,211,238,0.2),_transparent)] blur-sm"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/30 blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 bg-black/45" />

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
              <a href="/oracle" className="hover:text-white">
                Oracle
              </a>
            </div>
          </nav>

          <div className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[0.75fr_1.2fr_0.75fr]">
            <motion.aside
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden space-y-5 lg:block"
            >
              <div className="rounded-3xl border border-blue-300/20 bg-black/45 p-5 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
                  System Status
                </p>

                <div className="mt-5 space-y-3">
                  {systemStatus.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-white/10 pb-2 text-sm"
                    >
                      <span className="text-gray-400">{label}</span>
                      <span className="font-semibold text-cyan-300">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-blue-300/20 bg-black/45 p-5 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
                  Timeline Scanner
                </p>

                <div className="mt-6">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>1980</span>
                    <span>2026</span>
                    <span>2100</span>
                  </div>

                  <div className="relative mt-3 h-1 rounded-full bg-white/15">
                    <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 shadow-[0_0_24px_rgba(147,197,253,0.9)]" />
                  </div>
                </div>
              </div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <p className="mb-5 text-sm uppercase tracking-[0.4em] text-blue-300">
                Time Travel Theory Simulator
              </p>

              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Can time travel exist?
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl lg:mx-0">
                Explore relativity, wormholes, paradoxes, and the speed of light
                through interactive simulations and AI-guided explanations.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="/calculator"
                  className="rounded-full bg-white px-6 py-3 text-center font-medium text-black transition hover:bg-blue-200"
                >
                  Initiate Simulation
                </a>

                <a
                  href="/theories"
                  className="rounded-full border border-white/30 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
                >
                  Explore Theories
                </a>

                <a
                  href="/oracle"
                  className="rounded-full border border-blue-300/40 px-6 py-3 text-center font-medium text-blue-100 transition hover:bg-blue-300/10"
                >
                  Ask the Oracle
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="hidden space-y-5 lg:block"
            >
              <div className="rounded-3xl border border-red-300/20 bg-black/45 p-5 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
                  Paradox Analysis
                </p>

                <p className="mt-5 text-4xl font-bold text-red-300">23%</p>
                <p className="mt-2 text-sm text-gray-400">
                  Current paradox risk: controlled
                </p>
              </div>

              <div className="rounded-3xl border border-blue-300/20 bg-black/45 p-5 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
                  Simulation Log
                </p>

                <div className="mt-5 space-y-3 text-sm text-gray-300">
                  {simulationLog.map((item, index) => (
                    <p key={item}>
                      <span className="mr-3 text-cyan-300">
                        23:0{index + 4}
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid gap-4 pb-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-black/45 p-5 shadow-2xl backdrop-blur"
              >
                <h2 className="text-lg font-semibold">{feature.title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}