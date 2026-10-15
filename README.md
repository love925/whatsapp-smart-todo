# Focusboard — WhatsApp Smart To-Do (Chunk 1)

**Current status:** Chunk 1 of 8 — foundation and deployment starter. The UI intentionally displays **demo tasks only**. It does not yet store tasks, connect to WhatsApp, send reminders, or authenticate users.

## What's included

- Next.js 16 App Router + React 19 + TypeScript
- Tailwind CSS 4 + responsive dashboard preview
- `/api/health` (a working Node.js API route)
- Structure for future database, tasks, WhatsApp and reminder code
- `.env.example` and `.gitignore` to keep credentials outside Git
- Vercel configuration and deployment instructions

## 1. Requirements

- **Node.js 20.9 or newer** (Node.js 22 LTS or newer recommended)
- npm (comes with Node.js)
- Git (for GitHub deployment)
- A GitHub account and a Vercel account (to deploy online)

Test tools in PowerShell:

```powershell
node --version
npm --version
git --version
```

If commands are missing, install Node.js from https://nodejs.org/ and Git from https://git-scm.com/download/win, then restart the terminal.

## 2. Run the project locally (Windows PowerShell)

1. Extract the downloaded ZIP to a convenient folder.
2. Open the extracted **whatsapp-smart-todo-chunk-1** folder in VS Code.
3. Open **Terminal > New Terminal** (PowerShell).
4. Execute:

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

5. Open http://localhost:3000 in your browser.
6. Test the API at http://localhost:3000/api/health. You should receive JSON like:

```json
{
  "ok": true,
  "service": "whatsapp-smart-todo",
  "completedChunk": 1,
  "databaseConnected": false,
  "whatsappConnected": false
}
```

`false` for database/WhatsApp is **expected** in Chunk 1.

If PowerShell blocks `npm`, try `npm.cmd install` / `npm.cmd run dev` or use Command Prompt.

## 3. Run quality checks

Stop the dev server with `Ctrl+C`, then run:

```powershell
npm run lint
npm run typecheck
npm run build
```

When `npm install` succeeds, it creates `package-lock.json`. **Commit this lockfile** so that deploys use consistent dependency versions.

## 4. Push it to GitHub

Create a new **empty** repository at https://github.com/new named `whatsapp-smart-todo` (do not add an extra README, since this folder already has one).

In PowerShell, from the project's root folder:

```powershell
git init
git branch -M main
git add .
git commit -m "Initialize WhatsApp Smart To-Do - Chunk 1"
git remote add origin https://github.com/YOUR_USERNAME/whatsapp-smart-todo.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. GitHub may request browser-based login / a suitable credential method; account passwords are not accepted as Git passwords.

Verify **no `.env.local` file was committed**. `.gitignore` excludes it.

## 5. Deploy to Vercel

1. Sign in at https://vercel.com and choose **Add New → Project**.
2. Import your `whatsapp-smart-todo` GitHub repository (authorize GitHub integration if prompted).
3. Vercel should detect **Next.js** automatically. Keep the default Root Directory `./`.
4. Optional environment variables for Chunk 1: `NEXT_PUBLIC_APP_NAME=Focusboard`, `APP_TIMEZONE=Asia/Karachi`. No real credentials are needed for the preview. (You can skip both.)
5. Click **Deploy**.
6. Open your assigned `*.vercel.app` URL and verify the preview loads.
7. Open `https://YOUR-PROJECT.vercel.app/api/health` and confirm `ok: true`.

After new commits to `main`, Vercel automatically rebuilds the linked deployment.

**Important:** This Chunk 1 preview is publicly viewable at its URL because login protection is not implemented until Chunk 3. Do not upload or paste personal messages or credentials.

## 6. Environment variables: what goes where

Copy `.env.example` to `.env.local` locally. On Vercel, configure secret variables under **Project → Settings → Environment Variables** when later chunks need them.

| Name | Needed in chunk | Purpose |
|---|---:|---|
| `NEXT_PUBLIC_APP_NAME` | 1 (optional) | Public dashboard name |
| `APP_TIMEZONE` | 6 | Reminder timezone |
| `DATABASE_URL` | 2 | Neon PostgreSQL URL (secret) |
| `SESSION_SECRET` | 3 | Session-signing secret |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH` | 3 | Private login credentials |
| `WHATSAPP_VERIFY_TOKEN`, `WHATSAPP_APP_SECRET` | 4 | Webhook verification / signature secret |
| `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID` | 4 | Official Business Cloud API connection |
| `WHATSAPP_SENDER_ALLOWLIST` | 4 | Allowed inbound senders |
| `WHATSAPP_REMINDER_RECIPIENT` | 6 | Your opted-in reminder phone number |
| `WHATSAPP_TEMPLATE_NAME`, `WHATSAPP_TEMPLATE_LANGUAGE` | 6 | Approved template details |
| `CRON_SECRET` | 6 | Protects scheduled reminder endpoint |

Never place private keys or tokens in any variable whose name begins with `NEXT_PUBLIC_`; those are included in browser-delivered code.

## Project structure

```text
whatsapp-smart-todo-chunk-1/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── health/route.ts      # Real backend test endpoint
│   │   ├── globals.css
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   └── page.tsx                 # Preview dashboard
│   ├── components/
│   │   ├── dashboard-shell.tsx
│   │   └── preview-task-list.tsx
│   ├── lib/config.ts
│   └── types/task.ts               # Future task model contract
├── public/logo-mark.svg
├── docs/architecture.md
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
├── package.json
└── README.md
```

## What is next?

**Chunk 2 — Neon PostgreSQL + Prisma schema / migrations.** We will preserve this starter project and extend it. Chunk 3 will add login + actual task management before any personal data should be stored.

See `docs/architecture.md` for the roadmap and WhatsApp limitations.

## Troubleshooting

- **`npm` not recognized**: reinstall Node.js and restart VS Code, or use `npm.cmd`.
- **Unsupported Node version**: run `node -v`; use Node 20.9+.
- **Port 3000 in use**: Next.js may select another free port; check terminal output.
- **Vercel cannot find `package.json`**: ensure the repository root contains this file; Root Directory should be `./`.
- **CSS missing**: ensure `npm install` succeeded and `postcss.config.mjs` is present.
- **Missing `package-lock.json` initially**: normal for this ZIP; the first `npm install` generates it. Commit it before Vercel deployment.
