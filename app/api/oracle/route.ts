import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function getFallbackResponse(question: string) {
  const lowerQuestion = question.toLowerCase();

  if (lowerQuestion.includes("wormhole")) {
    return `Simple Answer:
Wormholes could theoretically act like shortcuts through spacetime, but usable wormholes have not been proven.

Scientific Explanation:
Some equations in physics allow the idea of tunnels connecting distant points in spacetime.

What Is Theoretical:
The existence of stable, usable wormholes is still theoretical.

What Is Science Fiction:
A safe portal that humans can walk through is still science fiction.

Cinematic Example:
Imagine folding a map so two faraway cities touch, then creating a tunnel between them.`;
  }

  if (
    lowerQuestion.includes("time dilation") ||
    lowerQuestion.includes("light speed") ||
    lowerQuestion.includes("speed of light")
  ) {
    return `Simple Answer:
Time dilation is real. Time can pass slower for someone moving very fast compared to someone on Earth.

Scientific Explanation:
Relativity shows that as speed increases toward the speed of light, time slows for the moving traveler from the outside observer's view.

What Is Theoretical:
Using this for extreme future travel is possible in theory, but not practical with current human technology.

What Is Science Fiction:
Instantly jumping through time or casually reaching light speed is not proven.

Cinematic Example:
A traveler may feel 5 years pass while Earth experiences many more years.`;
  }

  return `Simple Answer:
This question connects to time travel theory, but the answer depends on separating real science from speculation.

Scientific Explanation:
Modern physics supports effects like time dilation, but it does not prove that humans can build a machine to freely travel through time.

What Is Theoretical:
Wormholes, closed timelike curves, and spacetime manipulation remain theoretical.

What Is Science Fiction:
Timeline editing, instant time machines, and faster-than-light travel are not proven technologies.

Cinematic Example:
The path to time travel may begin with understanding how time behaves under speed, gravity, and spacetime curvature.`;
}

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question || typeof question !== "string") {
      return Response.json(
        { error: "A question is required." },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return Response.json({
        answer: getFallbackResponse(question),
        source: "fallback",
      });
    }

    const prompt = `
You are The Temporal Oracle, an AI guide inside a Time Travel Theory Simulator.

Your job is to explain time travel, relativity, wormholes, black holes, paradoxes, speed of light travel, alien life theories, and futuristic science in a way that is clear, cinematic, and scientifically grounded.

Always separate your answer into this exact format:

Simple Answer:
Scientific Explanation:
What Is Theoretical:
What Is Science Fiction:
Cinematic Example:

Rules:
- Do not claim time machines are real.
- Do not claim faster-than-light travel is proven.
- Do not claim alien contact is proven.
- Clearly separate real science from theory and science fiction.
- Keep the answer understandable for a curious beginner.

User question:
${question}
`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return Response.json({
      answer: result.text || getFallbackResponse(question),
      source: result.text ? "gemini" : "fallback",
    });
  } catch (error) {
    console.error("Oracle API error:", error);

    try {
      const { question } = await request.json();

      return Response.json({
        answer: getFallbackResponse(question || ""),
        source: "fallback",
      });
    } catch {
      return Response.json(
        { error: "The Oracle failed to respond. Try again." },
        { status: 500 }
      );
    }
  }
}