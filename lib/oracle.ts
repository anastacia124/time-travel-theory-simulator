export function getFallbackResponse(question: string) {
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


export type GenerateAnswer = (question: string) => Promise<string | undefined>;

// Read the body once; preserve the question for provider-error recovery.
export async function handleOracleRequest(request: Request, generate?: GenerateAnswer) {
  let body: unknown;
  try { body = await request.json(); }
  catch { return Response.json({ error: "Send a valid JSON request." }, { status: 400 }); }
  const value = body && typeof body === "object" && "question" in body ? body.question : undefined;
  if (typeof value !== "string" || !value.trim()) {
    return Response.json({ error: "A question is required." }, { status: 400 });
  }
  const question = value.trim();
  if (question.length > 2000) {
    return Response.json({ error: "Keep your question under 2,001 characters." }, { status: 400 });
  }
  if (generate) {
    try {
      const answer = (await generate(question))?.trim();
      if (answer) return Response.json({ answer, source: "gemini" });
    } catch {
      // Do not log provider errors: they may contain request or credential details.
    }
  }
  return Response.json({ answer: getFallbackResponse(question), source: "fallback" });
}
