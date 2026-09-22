"use client";

import HudPanel from "@/components/ui/HudPanel";
import StatusBadge from "@/components/ui/StatusBadge";
import { useState } from "react";
import { calculateEarthTime, calculateLorentzFactor } from "@/lib/physics";

export default function TimeDilationCalculator() {
  const [speedFraction, setSpeedFraction] = useState("0.9");
  const [travelerTime, setTravelerTime] = useState("5");
  const [earthTime, setEarthTime] = useState<number | null>(null);
  const [lorentzFactor, setLorentzFactor] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<{ speed: number; time: number } | null>(null);
  const [error, setError] = useState("");

  function handleCalculate() {
    try {
      const speed = Number(speedFraction);
      const time = Number(travelerTime);

      if (!speedFraction.trim() || !travelerTime.trim() || !Number.isFinite(speed) || !Number.isFinite(time)) {
        throw new Error("Please enter valid numbers.");
      }

      const gamma = calculateLorentzFactor(speed);
      const earth = calculateEarthTime(time, speed);

      setSubmitted({ speed, time });
      setLorentzFactor(gamma);
      setEarthTime(earth);
      setError("");
    } catch (err) {
      setSubmitted(null);
      setLorentzFactor(null);
      setEarthTime(null);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    }
  }

  const speedPercent = Number(speedFraction) * 100;

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <HudPanel>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-200">
              Input Console
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Enter Your Simulation
            </h2>
          </div>

          <StatusBadge>Ready</StatusBadge>
        </div>

        <p className="mt-5 text-sm leading-6 text-gray-400">
          Use a value from 0 up to (but not including) 1 for speed. For example, 0.9 means 90% of
          the speed of light.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <label htmlFor="speed" className="mb-2 block text-sm font-medium text-gray-300">
              Speed as fraction of light speed
            </label>

            <input
              id="speed"
              type="number"
              step="0.01"
              min="0"
              max="0.9999"
              value={speedFraction}
              onChange={(event) => setSpeedFraction(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-300"
            />

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-blue-300 transition-all"
                style={{
                  width:
                    speedPercent > 0 && speedPercent < 100
                      ? `${speedPercent}%`
                      : "0%",
                }}
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Current velocity reading:{" "}
              <span className="text-blue-200">
                {Number.isNaN(speedPercent) ? "0" : speedPercent.toFixed(2)}%
              </span>{" "}
              of light speed
            </p>
          </div>

          <div>
            <label htmlFor="traveler-time" className="mb-2 block text-sm font-medium text-gray-300">
              Traveler time in years
            </label>

            <input
              type="number"
              step="0.1"
              min="0"
              id="traveler-time"
              value={travelerTime}
              onChange={(event) => setTravelerTime(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-300"
            />
          </div>

          <button
            type="button"
            onClick={handleCalculate}
            className="primary-action w-full"
          >
            Run Temporal Calculation
          </button>

          {error && (
            <p className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}
        </div>
      </HudPanel>

      <HudPanel>
        <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
          Simulation Result
        </p>

        {earthTime === null || lorentzFactor === null || submitted === null ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-300">
            Enter your values and run the simulation to see the time shift.
          </div>
        ) : (
          <div className="mt-8 space-y-5" aria-live="polite">
            {(Number(speedFraction) !== submitted.speed || Number(travelerTime) !== submitted.time) && (
              <p className="text-sm text-amber-200">Inputs changed. Run the calculation again to update these results.</p>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Lorentz Factor</p>

                <p className="mt-2 text-3xl font-bold text-cyan-200">
                  {lorentzFactor.toFixed(4)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Earth Time</p>

                <p className="mt-2 text-3xl font-bold text-blue-200">
                  {earthTime.toFixed(2)}
                </p>

                <p className="mt-1 text-xs text-gray-500">years</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
                Interpretation
              </p>

              <p className="mt-4 leading-7 text-gray-300">
                The traveler feels {submitted.time} years pass. Because they are
                moving at {(submitted.speed * 100).toFixed(2)}% of light speed, Earth
                experiences {earthTime.toFixed(2)} years during that same trip.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
                Key Idea
              </p>

              <p className="mt-4 leading-7 text-gray-300">
                Time passes slower for the high-speed traveler than it does for
                observers who remain on Earth.
              </p>
            </div>
          </div>
        )}
      </HudPanel>
    </div>
  );
}