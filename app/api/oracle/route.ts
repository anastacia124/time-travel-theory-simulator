import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

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
      return Response.json(
        { error: "Gemini API key is missing." },
        { status: 500 }
      );
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
      answer: result.text || "The Oracle could not generate a response.",
    });
  } catch (error) {
    console.error("Oracle API error:", error);

    return Response.json(
      { error: "The Oracle failed to respond. Try again." },
      { status: 500 }
    );
  }
}