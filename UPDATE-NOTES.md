# TTTS reliability update

## Apply on Windows
1. Stop the development server in VS Code with Ctrl+C.
2. Make a backup copy of your current project folder.
3. Extract TTTS.zip into a separate folder.
4. Copy the extracted files and folders into your existing project folder. Choose Replace for matching files. Copy the contents, not the enclosing folder.
5. Keep your existing .env.local, .git, and node_modules. They are deliberately absent from this archive. No dependency versions changed.
6. In the VS Code terminal at the project root, run npm test, npm run lint, and npm run dev.
7. Open /calculator. Calculate, change an input, and check that old results retain their original inputs until you calculate again.
8. Open /oracle and ask a question. “AI response · Gemini” means the request returned a live answer. “Preset explanation” means live AI was unavailable. Do not share your API key.

## What changed and why
- Oracle reads each request once, rejects invalid/blank/overlong questions, and preserves the question for fallback handling.
- Provider initialization is deferred until a valid question with an available key; provider requests have a 15-second timeout, browser requests 20 seconds.
- Provider errors are not printed to avoid exposing request or credential details.
- UI labels Gemini vs preset answers, announces responses, and associates input labels with their controls.
- Calculator stores the submitted inputs with the results; new inputs display a reminder to recalculate.
- Physics functions reject nonfinite values and overflow; zero speed correctly returns unchanged elapsed time.
- Internal links use next/link.
- npm test runs regression tests using Node's built-in runner. Use Node 24 (or a compatible Node version with TypeScript stripping).

## Validation and limits
- Four automated test groups cover reference math, invalid inputs, request validation, provider success, missing provider, empty responses, and provider failure.
- Production build and lint pass.
- Gemini model defaults to the existing gemini-3-flash-preview. Optional server-only GEMINI_MODEL can override it. Model availability and live credentials have not been verified.
- No original Git history was supplied; no commits were created on your behalf. Review changes in VS Code Source Control before committing.
- Shared design rollout, missing pages, and full README are future steps. This update preserves the current visual design.

Browser automation could not run because its browser download timed out. The interaction checks above should be completed locally.

# Shared HUD update

## Changes
- Root layout wraps all four pages in SimulationShell so navigation and footer stay consistent.
- Mobile navigation remains visible; active page uses aria-current.
- Shared HudPanel, SectionHeader, DataStatCard, and StatusBadge components replace repeated interface markup.
- Home has a CSS portal animation, three linked investigation modules, and accurate science labels instead of invented live measurements.
- Pause motion control and reduced-motion preference support; keyboard skip link and focus outlines.
- Calculator and Oracle state, math, API requests, and answer-source labels are preserved.
- Browser title and description now identify TTTS.

## Apply this version
Stop npm run dev, extract the downloaded ZIP into a separate folder, and copy its contents into your original project folder, replacing matching files. Preserve your local .env.local and .git. No dependencies were added. Run npm test, npm run lint, then npm run dev.

## Manual acceptance check
Visit Command, Calculator, Theories, and Oracle. Check that the selected navigation item changes. Narrow the browser to a phone-sized width: all four navigation links should remain visible. Pause motion on Home and check the portal stops. Repeat the calculator input-change check and one Oracle question. Live Gemini requires your local key.

## Scope
This is the shared visual layer for the four existing routes. Wormholes, Paradoxes, FAQ, and About remain future pages. Original Git history is on your computer; review and commit after checking this update. Browser visual verification could not be performed in this environment because Chromium was unavailable.

# Interactive exploration pages and beginner-friendly explanations - 2026-09-25

This update supersedes the earlier scope note that listed Wormholes, Paradoxes, FAQ, and About as future pages.

## Changes
- Added /wormholes with three conceptual journeys, an explanatory diagram, plain-language definitions, and clearly labeled invented dates.
- Added /paradoxes with three story rules, two actions, reset controls, and explanations that distinguish a consistent story from a physical prediction.
- Added /faq with beginner definitions, Calculator examples, Oracle answer-source explanations, and keyboard/motion guidance.
- Added /about with project scope, learning links, and Anastacia Webster's creator introduction and motivation.
- Extended the shared navigation to all eight pages with desktop and mobile layouts.
- Reused the shared HUD components and added reusable science-context panels. New animation respects pause-motion and reduced-motion settings.
- Simplified the shared subtitle and homepage summaries. Existing Calculator, Oracle, and physics logic remains unchanged.
- Added two automated test groups for paradox outcomes.

## Validation
- Final production build passed, including TypeScript checks and generation of all eight page routes.
- All six automated tests passed; full lint passed.
- The user reviewed the updated pages and wording before this save.
- Browser automation and a new live Gemini request were not run as part of this final validation.
- Node reports an existing module-type warning during tests; it does not prevent the tests from passing.

## Repository scope
Only the reviewed source, styles, tests, and these notes are included in this update. TTTS.zip, environment files, dependencies, and generated build files are excluded. No dependencies were added.
