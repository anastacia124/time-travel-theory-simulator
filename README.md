# Time Travel Theory Simulator (TTTS)

[Live Demo](https://time-travel-theory-simulator.vercel.app/)

**Explore time travel.** TTTS is an educational website created by **Anastacia Webster**, an aspiring software engineer inspired by a lifelong interest in space. It combines a time-dilation calculator, interactive thought experiments, and explanations for readers with no physics background.

The goal is to make unfamiliar ideas approachable while clearly separating measured science, theoretical possibilities, and invented story rules.

## Pages and features

| Page | Route | What you can do |
| --- | --- | --- |
| Home (Command in navigation) | `/` | View the animated portal, science summaries, and links to the Calculator, Theories, and Oracle. |
| Calculator | `/calculator` | Enter a speed and traveler duration to compare traveler time with Earth time. See the Lorentz factor (the multiplier between them), validation messages, and a reminder to recalculate after changing inputs. |
| Theories | `/theories` | Read six introductions: time dilation, wormholes, paradoxes, speed of light, black holes, and closed timelike curves. |
| Oracle | `/oracle` | Ask a question and receive a labeled Gemini answer or a built-in preset explanation. |
| Wormholes | `/wormholes` | Switch between an ordinary journey, an imagined shortcut, and an invented trip to the past. The diagram and explanations change with your selection; Start again resets it. |
| Paradoxes | `/paradoxes` | Watch or destroy a time machine's instructions under three story rules: a past that fits together, a separate history, or a rewritten history. Compare the explained outcomes and reset the activity. |
| FAQ | `/faq` | Expand answers about the science, Calculator inputs and results, Oracle behavior, and site controls. |
| About | `/about` | Learn why Anastacia built TTTS, where to start, and what the project can and cannot demonstrate. |

All eight pages share the HUD-style panels, navigation, and footer. Layouts adapt to desktop and mobile screens. The shared **Pause motion** control pauses decorative CSS animations, and the site respects the device's reduced-motion setting. Keyboard support includes a skip link, focus outlines, labeled controls, and radio-button choices. Changing explorer options does not call an AI service.

## Tech stack

Versions below reflect declarations in [package.json](package.json); [package-lock.json](package-lock.json) records the resolved dependency versions.

- **Next.js 16.2.4**, using the App Router and a server route for Oracle requests.
- **React and React DOM 19.2.4**, with TypeScript 5.
- **Tailwind CSS 4**, its PostCSS plugin, and custom CSS for the shared design and animations.
- **Geist and Geist Mono**, loaded through `next/font/google`.
- **Google Gen AI SDK** (`@google/genai`, declared as `^1.51.0`) for server-side Gemini calls.
- **ESLint 9** with Next.js configuration.
- **Node's built-in test runner**, using TypeScript stripping to import the calculation and request-handling code.

Framer Motion is listed as a dependency (`^12.38.0`), but the current application does not import it. The portal and wormhole route animations use CSS.

## Run locally

### Prerequisites

- **Node.js 24** and npm. This project was checked locally with Node 24.15.0. The test command relies on Node's TypeScript-stripping support; older Node versions may not support it.
- A local checkout or extracted copy of this project.
- Network access to install dependencies. The Google fonts used by `next/font/google` may also require network access during development/build.

From the project folder, install the locked dependencies and start development:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If the terminal reports another port, use that address instead. Stop the server with Ctrl+C.

**No API key is required to explore the site.** Without one, valid Oracle questions receive preset explanations from the application server.

### Optional Gemini configuration

To enable live AI answers, create `.env.local` in the project root, beside `package.json`. Replace the placeholder for the key with your own credential locally:

```dotenv
GEMINI_API_KEY=your_gemini_api_key_here
# Optional: uncomment only to choose a model available to your account.
# GEMINI_MODEL=your_supported_gemini_model_id_here
```

| Variable | Purpose |
| --- | --- |
| `GEMINI_API_KEY` | Server-only credential for Gemini. Leave it unset to use preset responses without contacting Gemini. |
| `GEMINI_MODEL` | Optional server-only model override. If omitted, the route uses its coded default, currently `gemini-3-flash-preview`. Availability depends on the provider and your account. |

Restart the development server after changing these settings. Do not add a `NEXT_PUBLIC_` prefix: the key belongs on the server. Environment files are ignored by Git. Never commit or share real credentials. The example above contains placeholders only.

### Why development uses Webpack

The existing `dev` script is **`next dev --webpack`**. Webpack is the tool that bundles the application for development; the explicit flag selects it instead of Next.js 16's default Turbopack.

Use `npm run dev` to preserve this configuration. Running plain `npx next dev` would select the default bundler instead. The production script is separately configured as **`next build`**, which uses Turbopack by default in this version. There is no custom Webpack configuration in `next.config.ts`.

## Commands

Run these from the project root:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Webpack development server. |
| `npm test` | Run `node --experimental-strip-types --test tests/*.test.mjs`. |
| `npm run lint` | Run ESLint. This is a separate check from the production build. |
| `npm run build` | Compile and type-check the production application and generate its build output. |
| `npm start` | Serve the production build locally; run the build first. |

To check and run the production version:

```bash
npm test
npm run lint
npm run build
npm start
```

Stop the development server first if it is using the same port. These are local instructions, not a deployment or a claim that a public site is running.

## Oracle behavior

The browser sends a JSON question to **`POST /api/oracle`**. The server trims the question and rejects malformed JSON, missing or blank questions, non-string questions, and questions longer than 2,000 characters with an HTTP 400 response.

For a valid question:

1. If a key is configured, the server initializes the Gemini client and requests an answer.
2. A nonempty answer is returned with `source: "gemini"`. The UI displays **AI response · Gemini**.
3. If the key is missing, the provider throws an error, or the answer is empty, the server returns a preset with `source: "fallback"`. The UI displays **Preset explanation · Live AI unavailable**.
4. Presets are selected by keywords: wormholes, time dilation/light speed, or a general explanation. They are previously written text, not newly generated answers.

The provider request is configured with a **15-second timeout**; the browser request has a **20-second timeout**. A browser timeout, network failure, or invalid server response can display an error instead of a preset, because fallback happens on the server.

Provider errors are not logged by the request handler, to avoid exposing request or credential details. Questions sent for live answers go to Gemini; avoid entering sensitive information. A Gemini source label identifies the answer's origin, not its accuracy.

## Tests and manual checks

There are currently six automated tests across [tests/core.test.mjs](tests/core.test.mjs) and [tests/paradoxes.test.mjs](tests/paradoxes.test.mjs). They cover:

- Reference time-dilation results, zero speed, invalid numbers, and overflow.
- Oracle input validation, a simulated successful answer, and preset handling when the provider is absent, fails, or returns empty text.
- Paradox outcomes for observing events and intervening under each story rule.

The tests simulate the AI provider. Passing them does not verify live credentials, provider availability, or browser interactions.

The production build, full lint, and all six tests passed during the September 25, 2026 source-code validation. Node emitted a non-failing module-type warning during tests.

For manual checking, visit all eight pages on desktop and mobile; try each explorer choice and reset; pause animations; open FAQ answers with the keyboard; and change Calculator inputs after calculating. A live Oracle check should explicitly show **AI response · Gemini** rather than a preset label.

## Scientific limits

- **Calculator:** uses the special-relativistic relationship `Earth time = traveler time / sqrt(1 - speedFraction²)`. Speed must be finite and at least 0 but less than 1; traveler time must be finite and positive. For 5 traveler years at 90% of light speed, the result is about 11.47 Earth years. This steady-speed model leaves out gravity, acceleration, turnaround details, and spacecraft engineering.
- **Wormholes:** the diagram explains hypothetical connections. It does not solve gravitational equations, establish that a tunnel exists or stays open, or predict a real arrival date. The 2050/2040 example uses invented dates.
- **Paradoxes:** outcomes follow the selected story rules. They illustrate logical consequences, not proven mechanisms for changing history.
- **Artwork and AI:** portal animations are decorative, and AI explanations can contain errors. The site does not measure the universe or demonstrate a working time machine.

## Code guide

| Location | Responsibility |
| --- | --- |
| `app/` | Eight page routes, root layout, shared CSS, and Oracle API route. |
| `components/ui/` | Shared shell, HUD panels, headings, badges, data cards, and science-context panels. |
| `components/TimeDilationCalculator.tsx` | Calculator controls and submitted-result state. |
| `components/WormholeExplorer.tsx` | Interactive wormhole diagram and explanations. |
| `components/ParadoxExplorer.tsx` | Paradox choices and outcome display. |
| `lib/physics.ts` | Calculation functions and numeric validation. |
| `lib/oracle.ts` | Question validation, response labeling, and presets. |
| `lib/paradoxes.ts` | Story outcomes for each choice. |
| `tests/` | Node regression tests. |
| `UPDATE-NOTES.md` | Update history and validation notes. |

Keep credentials, `node_modules`, and generated `.next` output out of commits. `TTTS.zip` is not needed to run the checked-out project.
