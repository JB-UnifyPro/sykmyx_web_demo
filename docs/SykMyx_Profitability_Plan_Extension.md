# SykMyx — Profitability Plan Extension
Date: 2025-10-27
Prepared for: JB-UnifyPro / SykMyx

---

## Executive summary
This document is an extension of the SykMyx Migration & Business Plan focused on profitability: concrete expenses, revenue streams, breakeven math, growth scenarios, and an actionable 0–90 day plan that includes the indie labels & artists pilot as an integral part of getting to self‑funding operations.

This file is intended to be a single-source reference for financial planning and early execution.

---

## Key assumptions (baseline used here)
- Previews-only product (30s previews) — no full-track hosting.
- Primary customers: Indie artists (individual acts) and indie labels (manage many artists).
- Pricing: Artist Pro = $9/mo, Label Starter = $39/mo, Promoted placement = $100/mo per slot.
- Contribution margins are high because preview bandwidth costs are low. Payment processing ~3% + $0.30 per transaction.
- Lean ops target monthly fixed costs of $1,200 (can be tuned lower or higher depending on staffing).
- CAC: outreach/manual channels ��� $10–$30; paid ads higher ($75+).
- Churn assumption: 5% monthly (avg lifetime ≈ 20 months).

---

## Everything you must invest (exhaustive list)
One-time (upfront) expenses:
- Product development (MVP + onboarding + analytics)
- UI/UX & branding
- Domain and Apple Developer membership ($99/yr if needed)
- Legal (TOS, pilot agreements, privacy, NDAs)
- Accounting/bookkeeping setup
- Marketing collateral (landing page, demo video, one-pager)
- Outreach infrastructure (Airtable/CRM, email tools, lists)
- Payment gateway setup (Stripe account, verification)
- Contingency (recommended 10% of dev + marketing spend)
- Optional: ACR/fingerprint POC, advanced analytics tooling

Recurring (monthly) expenses:
- Hosting, CDN, and image CDN
- Managed DB (Supabase/Neon) and backups
- Monitoring & error tracking (Sentry) and uptime
- Email/CRM service costs and marketing spend
- Support labor / outsourcing (PH hires for low-cost support)
- Contractor retainers or devops
- Payment processing fees (Stripe fees per transaction)
- Accounting, taxes, and financial services
- Optional: Paid ACR/fingerprint service

Operational overheads and non-obvious items:
- Payroll taxes, contractor fees, recruitment fees
- Travel, conference, and business development costs
- Contingency fund for unexpected legal or API compliance requirements

---

## Detailed cost breakdown (recommended lean baseline)
- Upfront dev (lean, PH contractors): $4,000 – $8,000
- Initial marketing & collateral: $500 – $1,500
- Legal & accounting (initial): $600 – $2,500
- Domain + misc: $50 – $200
- Contingency (10%): $500 – $1,000

Estimated lean upfront total: $5,650 – $13,200

Monthly lean ops (baseline):
- Hosting/CDN: $10 – $50
- DB & storage: $0 – $30
- Email/CRM: $10 – $150
- Support (PH outsourcing): $400 – $1,000
- Monitoring & misc: $50 – $200

Estimated lean monthly: $470 – $1,430 (we use $1,200 target in examples)

---

## Revenue streams (explicit)
Primary:
- Artist Pro subscription — $9/mo
- Label Starter subscription — $39/mo
- Promoted placement (slot) — $100/mo

Secondary / optional:
- Annual billing discounts (e.g., $90/yr for Artist)
- Premium analytics or export reports — $15–$49 one-off or $5–$19/mo add-on
- Affiliate / referral revenue (low initially)
- Data/insights licensing (longer-term)

---

## Unit economics & KPIs
- Artist ARPU: $9/mo → conservative contribution ≈ $8.10/mo after fees and small variable costs.
- Label ARPU: $39/mo → conservative contribution ≈ $35/mo.
- Promoted slot contribution: ≈ $95/mo.

Key KPIs to track:
- MRR, New MRR, Churn, LTV, CAC, Payback period
- Trials → Paid conversion, Active preview plays/day
- Promoted slot utilization and label adoption rate

---

## Breakeven calculations (indie-only focus)
Using monthly fixed costs = $1,200 and contribution per artist = $8.10:
- Artists-only break-even = 1,200 / 8.10 ≈ 148 paying artists.
- With label mix (90% artists, 10% labels): blended contribution ≈ 10 → break-even ≈ 120 accounts.
- Sell 6 promoted slots @ $100: contribution ≈ 570; remaining fixed = 630 → artists required ≈ 78.

Observations: signing a small number of labels or selling several promoted slots greatly reduces artist headcount needed to break-even.

---

## Sensitivity scenarios (brief)
- Lower CAC (outreach, CAC $20) and low churn (5%) → breakeven feasible in 9–12 months.
- Higher CAC (paid ads, CAC $75+) or higher churn → much longer payback and riskier. Avoid until metrics validated.

---

## 0–90 day action plan (executable)
Days 0–7
- Finalize pricing and pilot offer (Artist $9/mo; Label $39/mo; promoted $100/mo).
- Prepare outreach list (600–1,000 targeted contacts) and outreach templates.

Days 7–30
- Build minimal onboarding & payment (lean dev): $2k–$6k (PH contractors).
- Create demo assets: 1-min video, one-pager, landing page.
- Legal templates for pilot participation.
- Launch pilot signup (closed invite).

Days 30–90
- Run outreach and onboard pilots (aim to convert 30–80 pilots to active trials).
- Offer limited-time discounted or annual pricing to early adopters.
- Start selling promoted slots to labels/curators.
- Monitor CAC, conversion, churn — iterate messaging.

---

## Growth levers to prioritize (highest impact)
1. Outreach & partnerships (manual, high conversion) — keep CAC low.
2. Promote placements & label deals — high margin and reduces artist burden.
3. Annual billing & discounts — improve cash flow and retention.
4. Referral incentives and case studies — lower CAC over time.
5. Keep ops lean — shift heavy lifting to PH contractors for dev/support.

---

## Hiring & staffing (Philippines vs US tradeoffs)
- PH contractors: much lower hourly rates (savings 60–80%) — good for dev and support work.
- Keep one senior remote or US-based product/tech lead for architecture and partner negotiations.
- Start with short trials and sprint-based milestones.

---

## Financial targets (concrete)
Short target (within 12 months, lean strategy):
- Acquire 150 paying artists (or equivalent mix of labels + promoted slots).
- Monthly revenue at 150 artists = 150 × $9 = $1,350 (contribution ≈ $1,095) — covers $1,200 ops near break-even.
- Aim to also sell 4–6 promoted slots + 3–10 labels to achieve profitability above break-even.

---

## KPIs for dashboard (what to instrument)
- MRR, New MRR, Churn
- Trials started, Trials → Paid %, CAC (by channel)
- Active preview plays per user, Promotion slot revenue
- Support requests and onboarding completion rates

---

## Next steps (recommended)
1. Confirm pricing and select lean budget (upfront and monthly).
2. Start outreach list construction and message templates.
3. Implement minimal onboarding + Stripe payment flow and pilot dashboard.
4. Execute outreach and pre-sell promoted slots / label spots.
5. Monitor KPIs and iterate until CAC & conversion targets are met.

Prepared by: SykMyx advisor
Notes: All pricing and timelines are estimates. Validate vendor pricing and contractor quotes before committing large budgets.
