"use client";

import { useState } from "react";
import { calculateEarthTime, calculateLorentzFactor } from "@/lib/physics";

export default function TimeDilationCalculator() {
  const [speedFraction, setSpeedFraction] = useState("0.9");
  const [travelerTime, setTravelerTime] = useState("5");
  const [earthTime, setEarthTime] = useState<number | null>(null);
  const [lorentzFactor, setLorentzFactor] = useState<number | null>(null);
  const [error, setError] = useState("");

  function handleCalculate() {
    try {
      const speed = Number(speedFraction);
      const time = Number(travelerTime);

      if (Number.isNaN(speed) || Number.isNaN(time)) {
        throw new Error("Please enter valid numbers.");
      }

      const gamma = calculateLorentzFactor(speed);
      const earth = calculateEarthTime(time, speed);

      setLorentzFactor(gamma);
      setEarthTime(earth);
      setError("");
    } catch (err) {
      setLorentzFactor(null);
      setEarthTime(null);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    }
  }

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
        <h2 className="text-2xl font-semibold">Enter Your Simulation</h2>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Use a value between 0 and 1 for speed. For example, 0.9 means 90% of
          the speed of light.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Speed as fraction of light speed
            </label>

            <input
              type="number"
              step="0.01"
              min="0"
              max="0.9999"
              value={speedFraction}
              onChange={(event) => setSpeedFraction(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-blue-300"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Traveler time in years
            </label>

            <input
              type="number"
              step="0.1"
              min="0"
              value={travelerTime}
              onChange={(event) => setTravelerTime(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-blue-300"
            />
          </div>

          <button
            type="button"
            onClick={handleCalculate}
            className="w-full rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-blue-200"
          >
            Calculate Time Shift
          </button>

          {error && (
            <p className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}
        </div>
      </section>

      <section className="rounded-3xl border border-blue-300/20 bg-blue-300/10 p-6 shadow-2xl backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
          Simulation Result
        </p>

        {earthTime === null || lorentzFactor === null ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5 text-gray-300">
            Enter your values and run the simulation to see the time shift.
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm text-gray-400">Lorentz Factor</p>

              <p className="mt-2 text-3xl font-bold">
                {lorentzFactor.toFixed(4)}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm text-gray-400">Time Passed on Earth</p>

              <p className="mt-2 text-3xl font-bold">
                {earthTime.toFixed(2)} years
              </p>
            </div>

            <p className="leading-7 text-gray-300">
              The traveler feels {travelerTime} years pass. Because they are
              moving at {(Number(speedFraction) * 100).toFixed(2)}% of light
              speed, Earth experiences {earthTime.toFixed(2)} years during that
              same trip.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}