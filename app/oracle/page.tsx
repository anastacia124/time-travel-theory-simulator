"use client";

import Link from "next/link";

import { useState } from "react";

export default function OraclePage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [source, setSource] = useState<"gemini" | "fallback" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleAskQuestion() {
    if (isLoading) return;
    setSource(null);
    if (!question.trim()) {
      setResponse("Ask a question first so The Temporal Oracle has something to analyze.");
      return;
    }

    try {
      setIsLoading(true);
      setResponse("");

      const result = await fetch("/api/oracle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: question.trim() }),
        signal: AbortSignal.timeout(20000),
      });

      const data = await result.json();

      if (!result.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      if (typeof data.answer !== "string" || !["gemini", "fallback"].includes(data.source)) {
        throw new Error("The Oracle returned an invalid response. Please retry.");
      }
      setResponse(data.answer);
      setSource(data.source);
    } catch (error) {
      if (error instanceof Error) {
        setResponse(error.message);
      } else {
        setResponse("The Oracle failed to respond. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to Home
        </Link>

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
          <label htmlFor="oracle-question" className="block text-sm font-medium text-gray-300">
            Ask the Oracle
          </label>

          <textarea
            id="oracle-question"
            maxLength={2000}
            disabled={isLoading}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Example: Could wormholes make time travel possible?"
            className="mt-4 min-h-40 w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-300"
          />

          <button
            type="button"
            onClick={handleAskQuestion}
            disabled={isLoading}
            className="mt-5 rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-blue-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Consulting the Oracle..." : "Ask Question"}
          </button>

          {source && (
            <p role="status" className="mt-6 text-sm text-cyan-200">
              {source === "gemini" ? "AI response · Gemini" : "Preset explanation · Live AI unavailable. This is a general reference, not a generated answer."}
            </p>
          )}
          <div aria-live="polite" aria-busy={isLoading} className="mt-8 whitespace-pre-line rounded-2xl border border-white/10 bg-black/30 p-5 leading-7 text-gray-300">
            {response ||
              "The Oracle response will appear here after you ask a question."}
          </div>
        </div>
      </section>
    </main>
  );
}