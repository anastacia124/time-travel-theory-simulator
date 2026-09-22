"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import HudPanel from "@/components/ui/HudPanel";

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
    <>
      <SectionHeader eyebrow="04 / AI RESEARCH TERMINAL" title="The Temporal Oracle" description="Ask about relativity, wormholes, black holes, or the boundary between science and science fiction." />
      <HudPanel className="oracle-terminal">
        <div className="terminal-bar"><span>ORACLE / QUESTION INTERFACE</span><span>{isLoading ? "PROCESSING" : "AWAITING QUESTION"}</span></div>
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
            className="primary-action mt-5"
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
      </HudPanel>
      <p className="science-note">AI explanations can contain errors. Check important claims against reliable scientific sources.</p>
    </>
  );
}