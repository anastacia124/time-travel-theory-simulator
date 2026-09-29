# Docker support and security updates - 2026-09-28

## Changes
- Preserved the uncommitted Docker work on `feat/docker-support`: multi-stage Node 24 image, non-root runtime, secret exclusions, Docker-only standalone output, and beginner README instructions.
- Updated `next` and `eslint-config-next` from 16.2.4 to exactly 16.3.6 after checking npm engine/peer requirements and official security advisories. Node 24 and React/React DOM 19.2.4 remain compatible.
- Next.js 16.3.6 resolves Sharp 0.35.5, above the patched minimum 0.35.4. The rebuilt Linux image contains libheif 1.23.5.
- Applied targeted transitive updates within existing dependency ranges: Babel core 7.29.7, baseline-browser-mapping 2.11.26, brace-expansion 1.1.21 and 5.0.12, Browserslist 4.29.2, js-yaml 4.3.2, nanoid 3.3.19, PostCSS 8.5.23, protobufjs 7.6.6, and ws 8.22.0, plus their required dependency updates.
- No forced audit fix, unrelated major upgrades, dependency overrides, or application behavior changes. Webpack development and normal local/Vercel build configuration are preserved.

## Security references
- [Next.js Windows-hosted RCE, GHSA-p293-qw3h-jr36](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36): patched in Next.js 16.3.3; the Linux container does not meet the Windows filesystem prerequisite.
- [Next.js AVIF image-optimization RCE, GHSA-2xp9-vwfh-vxw4](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4): patched in Next.js 16.3.3.
- [Sharp/libheif vulnerabilities, GHSA-rgj7-g3m4-5g8c](https://github.com/lovell/sharp/security/advisories/GHSA-rgj7-g3m4-5g8c): patched in Sharp 0.35.4; the resolved image uses 0.35.5.

## Validation
- Full `npm audit --json`: zero vulnerabilities, down from 11 affected package entries. Docker's clean `npm ci` also reported zero vulnerabilities.
- All six existing tests passed; ESLint passed. The existing Node module-type warning is non-failing.
- Normal `npm run build` passed with TypeScript checks and all eight page routes; verified standalone output remains disabled for that build. The initial sandboxed attempt could not download Google fonts; the network-enabled retry passed.
- Rebuilt `ttts:local` successfully and replaced only the identity-checked `ttts-local` test container. Verified the running container uses the rebuilt image.
- All eight page routes returned HTTP 200 with main content. All 20 discovered/static test assets, including JS, CSS, fonts, favicon, and public SVGs, returned nonempty HTTP 200 responses.
- All three Oracle preset branches returned HTTP 200 with `source: "fallback"` without a Gemini key.
- Runtime checks confirmed Linux, UID 1000, no Gemini key, no `.env.local`, and localhost-only publication at http://127.0.0.1:3001.

## Limits and repository state
- npm audit covers known npm advisories at check time; this was not an OS-image vulnerability scan or proof of absence of all security defects.
- The project owner confirmed that manual browser checks passed. Live Gemini inside Docker and a Vercel deployment remain untested. The build still requires network access for Google fonts.
- Only Docker configuration, dependency updates, and documentation are included for review on `feat/docker-support`. Environment files, secrets, generated output, and ZIP archives are excluded. No merge or deployment is part of this change.

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
