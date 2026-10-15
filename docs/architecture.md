# Architecture and implementation order

This project is built **incrementally**. Chunk 1 is a public, nonfunctional frontend preview with an operational health-check API.

## Planned stack

| Component | Choice | Chunk |
|---|---|---|
| App/UI | Next.js 16 App Router, TypeScript, Tailwind CSS 4 | 1 |
| Git + hosting | GitHub + Vercel (Node.js serverless routes) | 1 |
| Database | Neon managed PostgreSQL with Prisma | 2 |
| Auth | Private single-user session; secure cookie; login protection | 3 |
| Tasks | Create, list, update, complete and delete | 3 |
| Incoming messages | Official WhatsApp Business Cloud API + verified webhook signatures | 4 |
| Task parsing | Rule-based detection, context capture, review queue | 5 |
| Reminders | Approved WhatsApp template messages + Vercel Cron | 6 |
| Enhancements | Search, recurring tasks, reporting, optional AI | 7 |
| Release | Security, reliability and production verification | 8 |

## Data flow after Chunk 6

```
Incoming WhatsApp Business message
             |
             v
POST /api/whatsapp/webhook  [Meta X-Hub-Signature-256 verification]
             |
             v
store sender/message ID (deduplication)
             |
             v
parse task candidate + contextual metadata
             |
             v
Needs review -> user approves/edits -> Active task
             |
             v
Scheduled check (GET /api/cron/reminders, authenticated)
             |
             v
WhatsApp Business Cloud API (approved reminder template)
```

## Security boundaries

- Chunk 1 includes **no working login**, stores **no real tasks**, and receives **no WhatsApp messages**.
- The preview is public if deployed; never paste real private information into it.
- Secret tokens are server-side variables; no `NEXT_PUBLIC_` prefix for database or WhatsApp secrets.
- Chunk 3 will protect every task route on the server (not merely hide UI elements).
- Chunk 4 will verify Meta signatures, restrict allowed senders, and ensure webhook retries do not duplicate tasks.
- Chunk 6 will authenticate the cron endpoint; all reminder sends require authorized task state.

## WhatsApp limitations

The official WhatsApp Business Cloud API handles supported incoming messages **sent to the configured business number**; it does not provide universal access to an ordinary personal WhatsApp account's existing chats or groups. Outside the customer-service window, proactive WhatsApp reminders need Meta-approved message templates. Account setup and messaging may involve charges.

## Folder plan

`src/app/api/health/route.ts` works in Chunk 1. API routes for task management, webhook and reminders will be added when those features exist, rather than exposing empty or insecure endpoints now.
