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
