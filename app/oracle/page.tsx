"use client";

import { useState } from "react";

function getOracleResponse(question: string) {
  const lowerQuestion = question.toLowerCase();

  if (!question.trim()) {
    return "Ask a question first so The Temporal Oracle has something to analyze.";
  }

  if (lowerQuestion.includes("wormhole")) {
    return `Simple Answer:
Wormholes could theoretically act like shortcuts through spacetime, but we have not proven that usable wormholes exist.

Scientific Explanation:
In theory, a wormhole would connect two distant points in spacetime. If one side experienced time differently than the other, it could create time-travel-like effects.

What Is Theoretical:
The math allows wormholes in some models of physics, but keeping one open may require exotic matter that has not been shown to exist in usable amounts.

What Is Science Fiction:
A stable portal people can walk through is still science fiction.

Cinematic Example:
Imagine folding a sheet of paper so two faraway points touch, then punching a tunnel through the fold.`;
  }

  if (
    lowerQuestion.includes("time dilation") ||
    lowerQuestion.includes("light speed") ||
    lowerQuestion.includes("speed of light")
  ) {
    return `Simple Answer:
Time dilation is real. The faster someone moves, the slower time passes for them compared to someone who stays behind.

Scientific Explanation:
According to relativity, as an object moves closer to the speed of light, time slows down from the viewpoint of an outside observer.

What Is Theoretical:
Using this effect for extreme future travel is possible in theory, but humans currently cannot travel anywhere near light speed.

What Is Science Fiction:
Instant light-speed travel or casually jumping through time is science fiction.

Cinematic Example:
A traveler could experience 5 years on a near-light-speed journey while Earth experiences many more years.`;
  }

  if (lowerQuestion.includes("black hole")) {
    return `Simple Answer:
Black holes can affect time because their gravity is extremely strong.

Scientific Explanation:
Near a black hole, gravity bends spacetime so strongly that time can pass more slowly compared to time far away from the black hole.

What Is Theoretical:
Scientists understand gravitational time dilation, but safely using a black hole for time travel is not realistic with current technology.

What Is Science Fiction:
Flying into a black hole and coming out in another time period is science fiction.

Cinematic Example:
Someone orbiting near a black hole could age slower than people far away from it.`;
  }

  if (
    lowerQuestion.includes("paradox") ||
    lowerQuestion.includes("grandfather")
  ) {
    return `Simple Answer:
A paradox is a logic problem created by changing the past.

Scientific Explanation:
If someone traveled to the past and changed an event that caused their own existence, it could create a contradiction.

What Is Theoretical:
Physicists and philosophers debate whether timelines could self-correct, branch, or prevent contradictions.

What Is Science Fiction:
Changing the past freely with no consequences is usually a storytelling device.

Cinematic Example:
If a traveler prevents their grandparents from meeting, the question becomes: how could the traveler exist to go back in time?`;
  }

  if (
    lowerQuestion.includes("alien") ||
    lowerQuestion.includes("aliens") ||
    lowerQuestion.includes("extraterrestrial")
  ) {
    return `Simple Answer:
Alien life is possible, but we do not currently have confirmed public proof of extraterrestrial civilizations.

Scientific Explanation:
The universe is extremely large, and scientists search for signs of life through exoplanets, biosignatures, radio signals, and space missions.

What Is Theoretical:
Advanced alien civilizations could possibly understand physics beyond our current technology.

What Is Science Fiction:
Assuming aliens already use time machines or wormholes is speculation unless evidence supports it.

Cinematic Example:
An advanced civilization might not look magical because they break physics, but because they understand physics better than we do.`;
  }

  return `Simple Answer:
That question connects to time travel theory, but it needs to be separated into science, theory, and science fiction.

Scientific Explanation:
Modern physics supports effects like time dilation, but it does not currently prove that humans can build a machine to travel freely through time.

What Is Theoretical:
Ideas like wormholes, closed timelike curves, and extreme spacetime manipulation are still theoretical.

What Is Science Fiction:
Instant time machines, timeline editing, and faster-than-light travel are not proven technologies.

Cinematic Example:
The real path to time travel may not start with a machine. It may start with understanding how time behaves under speed, gravity, and spacetime curvature.`;
}

export default function OraclePage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  function handleAskQuestion() {
    const answer = getOracleResponse(question);
    setResponse(answer);
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to Home
        </a>

        <div className="mt-12">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
            AI Theory Guide
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            The Temporal Oracle
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Ask questions about time travel, relativity, wormholes, black holes,
            paradoxes, aliens, and the boundary between science and science
            fiction.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-blue-300/20 bg-white/5 p-6 shadow-2xl backdrop-blur">
          <label className="block text-sm font-medium text-gray-300">
            Ask the Oracle
          </label>

          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Example: Could wormholes make time travel possible?"
            className="mt-4 min-h-40 w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-300"
          />

          <button
            type="button"
            onClick={handleAskQuestion}
            className="mt-5 rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-blue-200"
          >
            Ask Question
          </button>

          <div className="mt-8 whitespace-pre-line rounded-2xl border border-white/10 bg-black/30 p-5 leading-7 text-gray-300">
            {response ||
              "The Oracle response will appear here after you ask a question."}
          </div>
        </div>
      </section>
    </main>
  );
}