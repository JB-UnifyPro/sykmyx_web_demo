# SykMyx — Migration & Business Plan (Previews-only)
Date: 2025-10-26  
Prepared for: JB-UnifyPro / SykMyx

---

## Executive summary
This document describes a staged path from the current single-file demo to a production-ready SykMyx product that aggregates music previews across platforms (30s previews only — no full-track streaming). It separates costs and timelines for:
- Indie Labels / Artists package (lightweight onboarding and analytics features)
- Full SykMyx app / website (component-based UI, single AudioManager, dashboards, scale)
- Combined migration when both offerings are unified in one product

It includes development timelines, cost ranges, operational expenses, and an optional cost model if hiring developers in the Philippines (USD comparison).

---

## Key assumptions
- Only 30-second preview snippets are played (Apple iTunes previews or other platforms’ preview assets). No hosting or streaming of full tracks.
- Previews are embedded/linked following each platform’s TOS (use public preview URLs or allowed embedding).
- Platform APIs used for metadata and previews are used within their free/standard terms wherever possible. Developer program fees may apply (e.g., Apple Developer).
- Migration will be incremental and backward-compatible: the demo remains live while components are replaced.

---

## Current state
- Working demo in home.html with search and 30s Apple preview playback.
- Runtime errors fixed (ontimeupdate guard + syntax fix).
- Deployed on Vercel with successful previews verified.
- Single-file architecture with global functions; no componentized UI yet.

Completed:
- Console error fixed, verified in deployed preview.
- Vercel deployments OK.

Outstanding:
- Migrate to React/Next (component-based), implement AudioManager (single source of truth).
- Replace DOM-generated controls with AudioPlayer components.
- Add artist/label onboarding and analytics features.

---

## Product & business path (high level)
1. Stabilize demo and docs (1 week)
2. MVP for indie labels/artists (8–12 weeks)
   - Onboarding flow for metadata and artwork.
   - Simple analytics (plays, trends) for artists.
   - Lightweight admin to manage pilot artists.
3. Migrate front-end to React/Next + AudioManager (4–8 weeks)
   - Replace playback controls with components.
   - Media Session API and proper event lifecycle.
4. Pilot with labels/artists and iterate (8–12 weeks)
5. Productize (dashboard, monetization, scaling) (3–6 months)

---

## What we sell to indie labels / artists (pilot package)
- Listing / metadata ingestion for up to N tracks (previews only).
- Analytics dashboard: plays, short-term trends, region breakdown (if available).
- Basic artist dashboard to update artwork/metadata and view plays.
- Optional: promoted placement in results (paid feature later).

Minimum tech scope:
- Artist onboarding form + simple CSV upload.
- Store metadata in lightweight DB (Supabase/Neon).
- Serve artist dashboard in same Next/React app.

Acceptance: artist can view plays for their previews, update metadata, and receive basic export.

---

## Pricing & costs — separated

Notes: numbers are ranges/estimates in USD. Adjust to actual rates and scope.

A) Indie Labels / Artists (Pilot) — Development & First Year
- One-time dev (build lightweight artist onboarding + dashboard + analytics integration)
  - Scope: 120–240 hours
  - US contractor (blend): $50–120/hr → $6,000 – $28,800
  - Philippines contractors (blend): $12–35/hr → $1,440 – $8,400
- Hosting & infra (yearly)
  - Vercel Starter / small production: $0–$240 / year
  - Database (Supabase/Neon small): $0–$240 / year
  - Domain + Apple Developer: $10 + $99 = $109 / year
- Third-party APIs / services (year)
  - Analytics, small image CDN, small ACR (if used): $0–$600/year
- Year 1 total (pilot)
  - US-based build: ≈ $6.2k – $29.7k
  - PH-based build: ≈ $1.6k – $9.4k

B) Full SykMyx App / Website (Componentized, Production)
- One-time dev (migration + core features + dashboard + testing)
  - Scope: 400–1,000 hours (depends on polish, dashboard complexity)
  - US contractors/agency: $50–150/hr → $20,000 – $150,000
  - Philippines hires/contractors: $12–40/hr → $4,800 – $40,000
- Monthly operational costs (approx)
  - Hosting (Vercel Pro, CDN, small serverless): $20–$200 / month
  - Bandwidth (previews): depends on plays (example below)
  - ACR/fingerprint for identification (if used): $20–$500 / month
  - Monitoring/analytics/Sentry: $0–$100 / month
  - Image CDN: $0–$50 / month
- Year 1 total (example mid-size)
  - US-built: ≈ $40k – $200k
  - PH-built: ≈ $10k – $60k

C) Combined migration (if migrating demo + indie features together)
- Efficiencies reduce duplicate work. Estimate: 500–1,200 hours total
  - US: $30k – $150k
  - PH: $6k – $36k

---

## Staffing cost comparison (monthly fully-burdened equivalent — USD)
Table shows sample monthly costs for a small full-time product team (5 roles) if hired as full-time contractors/retainers.

- Roles: Senior Dev, Mid Dev, Designer, QA, PM  
- Hours/month assumed: 160 (full-time)

| Role         | US hourly (typ) | US monthly | PH hourly (typ) | PH monthly |
|--------------|------------------:|-----------:|------------------:|-----------:|
| Senior Dev   | $80 – $150        | $12,800 – $24,000 | $20 – $40         | $3,200 – $6,400 |
| Mid Dev      | $50 – $90         | $8,000 – $14,400  | $10 – $25         | $1,600 – $4,000 |
| Designer     | $40 – $80         | $6,400 – $12,800  | $8 – $20          | $1,280 – $3,200 |
| QA           | $25 – $50         | $4,000 – $8,000   | $6 – $15          | $960 – $2,400 |
| PM           | $60 – $120        | $9,600 – $19,200  | $15 – $35         | $2,400 – $5,600 |
| **Total**    |                   | **$40,800 – $78,400** |                  | **$9,440 – $21,600** |

Example takeaways:
- Hiring in the Philippines can reduce monthly payroll costs by ~60–80% for comparable roles.
- Use caution: hiring offshore involves management overhead, timezone coordination, local payroll/benefits, and sometimes slower ramp for critical decisions.

---

## Example budgets (concise comparison)

1) Indie Labels Pilot (US contractors)
- Dev (one-time): $6k – $28.8k
- Yearly ops & services: $300 – $1,500
- Year 1 total: ~$6.3k – $30.3k

2) Indie Labels Pilot (PH hires)
- Dev (one-time): $1.4k – $8.4k
- Yearly ops & services: $300 – $1,500
- Year 1 total: ~$1.7k – $9.9k

3) Full SykMyx App (US contractors)
- Dev (one-time): $20k – $150k
- Yearly ops (prod): $600 – $6,000
- Year 1 total: ~$20.6k – $156k

4) Full SykMyx App (PH hires)
- Dev (one-time): $4.8k – $40k
- Yearly ops: $600 – $6,000
- Year 1 total: ~$5.4k – $46k

5) Combined migration (economies)
- US: $30k – $150k total
- PH: $6k – $36k total

---

## Bandwidth example (preview plays)
Estimate per preview: 0.25–1.0 MB (30s preview depends on encoding). Use 0.5 MB as mid value.

- 10,000 plays/month × 0.5 MB = 5 GB / month
- 100,000 plays/month × 0.5 MB = 50 GB / month
- CDN egress cost estimate: $0.02–$0.085 / GB (varies by provider)
  - 50 GB × $0.05/GB = $2.50 / month (negligible at small scale)
  - 1 TB × $0.05/GB = $50 / month

Conclusion: initial bandwidth costs for previews are low; egress becomes relevant at large scale.

---

## Optional costs: ACR / fingerprinting / identification
- If you add fingerprinting/identification (not required for previews), expect $20–$500+/month depending on provider and volume. Use these only for advanced features (e.g., artist recognition or catalog matching).

---

## Migration timeline (detailed iteration)
- Week 0–1: Stabilize current demo, finalize acceptance criteria.
- Weeks 2–4: Scaffold Next.js + AudioManager; basic AudioPlayer component (play/pause/stop/seek) — MVP of componentized playback.
- Weeks 5–8: Migrate search/results to React components; wire artist onboarding endpoints and store.
- Weeks 9–12: Artist dashboard, analytics collection, pilot invites.
- Weeks 13–20: Iterate on feedback, add small features, harden (tests, CI/CD, monitoring).
- Weeks 21–28: Productization tasks (billing, promotions, scale improvements).

Total time to MVP for app + indie pilot: roughly 8–12 weeks for an experienced small team; full product: 4–6 months.

---

## Risks & mitigations (brief)
- Licensing and TOS risk for previews: mitigation — document how previews are used and prefer official preview endpoints; consult legal for ambiguous platforms.
- Platform/API rate limits: mitigation — cache results; obey rate limits; add retry/backoff.
- Offshore hires risk (coordination, quality): mitigation — start with a small paid trial, use clear specs and sprint-based deliverables.
- Scaling costs: mitigation — monitor early, use CDN, optimize cache headers.

---

## Decision checklist (what to decide now)
- Keep previews-only policy? (Yes — already decided)
- Choose stack: Next.js + TypeScript recommended (reply to confirm).
- Staffing model: US contractors, offshore, or hybrid?
- Pilot size and artist recruitment plan (how many artists to onboard for pilot).

---

## Appendix A — Quick technical checklist for AudioManager & components
- Single HTMLAudioElement instance, centralized in AudioManager.
- Use requestAnimationFrame for progress updates to listeners.
- Use addEventListener/removeEventListener (avoid direct .ontimeupdate assignments).
- Use Media Session API for OS-level controls and metadata.
- Unit/smoke tests for playback flows; integration tests for artist dashboard flows.

---

## Appendix B — Links & vendors to evaluate
- Hosting: Vercel / Netlify / Cloudflare Pages
- DB: Supabase / Neon / PlanetScale
- Fingerprint/ACR: ACRCloud / AudD
- Image CDN: Cloudinary / Imgix
- Libraries: Howler.js (optional), Media Session API

---

Prepared by: SykMyx advisor
Notes: All pricing is approximate. Confirm vendor pricing and contractor quotes before committing budgets.