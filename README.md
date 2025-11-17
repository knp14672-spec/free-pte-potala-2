# PTE Practice WebApp

## Run locally
1. npm install
2. npx tailwindcss init -p (if you want to regenerate tailwind files) — but we've included a tailwind.config.cjs and postcss.config.cjs already.
3. npm run dev

## Notes
- Demo uses generateQuestions() for quick testing. Replace with server API to store 2000 questions per module.
- For real AI scoring: create a backend route that accepts text/audio, forwards to your chosen scoring model, and returns scores.
- Add DB (Postgres / Mongo) and storage (S3) for audio.
