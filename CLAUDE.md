# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**neuralanant** is a Next.js 15 App Router application backed by Supabase.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, Tailwind CSS v4, ESLint)
- **Supabase** (BaaS) — PostgreSQL 17, Auth, Storage, Realtime, Edge Functions
- **@supabase/ssr** — cookie-based auth for server components and middleware
- **Edge Functions** — Deno 2 runtime (port 8083 for debugging)

## Common Commands

```bash
# Next.js development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint

# Start local Supabase environment (API, DB, Studio, Auth, etc.)
supabase start

# Stop local Supabase
supabase stop

# Apply database migrations
supabase db push

# Reset database (runs migrations + seed.sql)
supabase db reset

# Generate migration from local schema changes
supabase db diff -f <migration_name>

# Serve edge functions locally (with hot reload)
supabase functions serve
```

## Architecture

### Supabase Client Setup (utils/supabase/)

Cookie-based auth pattern for Next.js App Router:

- `utils/supabase/client.ts` — browser client via `createBrowserClient` (use in Client Components)
- `utils/supabase/server.ts` — server client via `createServerClient` with cookie access (use in Server Components, Server Actions, Route Handlers)
- `middleware.ts` — refreshes auth tokens on every request via Supabase middleware

### Key Patterns

- Server Components use `await createClient()` from `utils/supabase/server.ts`
- Client Components use `createClient()` from `utils/supabase/client.ts`
- The middleware handles session refresh — server-side `setAll` errors in Server Components are expected and safely ignored

## Local Services (when running)

| Service            | URL/Port                 |
|--------------------|--------------------------|
| Next.js App        | http://localhost:3000     |
| Supabase API       | http://127.0.0.1:54321   |
| PostgreSQL         | localhost:54322           |
| Supabase Studio    | http://127.0.0.1:54323   |
| Email testing      | http://127.0.0.1:54324   |
| Analytics          | localhost:54327           |
| Edge Functions dbg | localhost:8083            |

## Key Configuration Notes

- Environment variables are in `.env.local` (gitignored): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Auth `site_url` in `supabase/config.toml` is `http://127.0.0.1:3000` matching the Next.js dev server
- API exposes `public` and `graphql_public` schemas, max 1000 rows per request
- Storage allows up to 50MiB file uploads with S3 protocol enabled
- DB migrations go in `supabase/migrations/`, edge functions in `supabase/functions/`
