# SykMyx — MAX■DEPTH Master (All Threads, Date■Synced) — v2.0

Includes deep scan of: SykMyx Search Enhancements (1–3), SykMyx Name Conflicts, SykMyx Prototype (1–2), Flow■Chart  
SykMyx, SykMyx Prototype, Indie Labels (service).  
Overrides with latest locked policies · October 10, 2025 · America/Edmonton

---

## Executive Summary (Master Canon)

SykMyx is a neutral discovery and routing layer for music. We unify fragmented versions into a trusted Version Graph and send listeners to the official destination on their platform of choice. 

Non■negotiables:
- Clarity Lock (“We route; platforms host playback”),
- Hybrid Discovery (Official GREEN first; Community YELLOW labeled with disclaimers),
- ACR ON only in Apple/Shazam + Standalone (hidden in all other modes).

This document consolidates purpose, vision, detailed specs, platform policies, business model, and a date■synced thread log with overrides.

---

## 1) Purpose & Vision

### Purpose
Eliminate mis■routes and confusion across platforms by resolving versions into a single, official■first journey.

### Vision
Become the default ‘air■traffic controller’ for music journeys: fast, neutral, policy■clean routing to official releases; transparent treatment of community creativity.

---

## 2) Stakeholder Benefits and Cons (+ Solutions)

### Listeners
- Find correct/official version quickly; fewer dead links.
- One■tap “Open on {Platform}”.
- Community versions clearly labeled; safer discovery.

### Artists & Creators
- Traffic routed to official releases; better attribution.
- Optional “I’m Open to Licensing” for remixers; discovery without hosting.
- Takedown intake with <24h SLA.

### Labels & Publishers
- Version Graph consolidates fragmented links/plays.
- Territory■aware routing precedence aligns with rights.
- Compliance pack + measurement for pilots; monthly reporting (indie tiers).

### Platforms (DSPs)
- Qualified traffic; reduced support confusion and policy risk.
- Clarity Lock keeps playback on-platform; revenue preserved.

### Brands & Partners
- Safer environment around official releases; clear disclaimers.

### Investors
- Defensible wedge: Version Graph + cross■platform routing.
- Capital■efficient architecture; privacy■first data posture; multiple revenue paths.

### Cons / Risks & Solutions
- Policy risk (ACR in partner modes): Keep ACR OFF/hidden in YouTube/Spotify/TikTok/Meta/Amazon; use Apple/Shazam + Standalone only.
- Legal/content risk: No hosting/downloading/convert; conservative labels; Report link; takedown SLA <24h; audit trail.
- Data quality risk: Curator loop; precedence rules; evidence binder; snapshot tests; target error ≤0.5%.
- Competition: Lead with official■first routing + Version Graph; neutrality; publish measurable routing lifts.
- Monetization ramp: Start with Indie Labels Service; affiliate where allowed; later B2B routing/Version Graph API.

---

## 3) Pitch Decks (Global Structure + Investor Snapshot)

### Global Structure
- Cover with Clarity Lock (“We route; platforms host playback.”)
- Problem → Purpose → Vision
- Version Graph & Hybrid Discovery (Official GREEN / Community YELLOW)
- Platform■Specific Benefits (policy■clean value)
- ACR State by Mode (Apple/Shazam + Standalone ON; others OFF/hidden)
- Compliance Bundle (Terms/Brand, quotas/backoff; Privacy & Minimization)
- UX: Error/Fallback, A11y/i18n, localization
- Measurement Spec: KPIs + Success Gates
- Pilot Plan & Decision Tree
- Co■marketing, Support & Ops
- Appendices & Glossary (Acronyms A–Z)

### Investor Deck Outline
- Team & Track (lean, policy/compliance experience)
- Market Gap (fragmented versions; mis■routes; unofficial siphoning)
- Product (Version Graph; routing engine; Hybrid Discovery)
- Moat (policy■clean routing; evidence binder; curator loop)
- GTM (Indie tiers → API pilots)
- Business Model (indie tiers; affiliate; B2B API)
- Traction & KPIs (routing lift %, opens by destination; SLA; error rate)
- Roadmap & Use of Funds
- Risks & Mitigations

---

## 4) Technical Specification (Deep)

### 4.1 Search UX Normalization
- Case/diacritic folding; punctuation & whitespace normalization.
- Token handling: feat./ft., remix/edit/live/demo/radio edit/remaster/acoustic/instrumental/in■studio/session.
- Title cleanup: strip boilerplate (Official Video, Lyrics, Visualizer, Topic); configurable blacklist.
- Artist alias resolution (aka/mononym); primary vs featured parsing.
- Typo tolerance (Levenshtein ≤2) with exact■match shortlist; user hinting when fallback triggers.
- ISRC/UPC detection boosts; verified label/artist canonical boost.

### 4.2 Ranking, Dedup & Territory
- Precedence: Label territorial canonical → Artist canonical → Distributor canonical → High■confidence ISRC.
- Dedup by audio■equivalence + metadata similarity (thresholds tuned).
- Edge handling: live vs studio; radio edit vs album; remaster vs original—prefer canonical unless query specifies.
- Territory unavailability: show closest canonical with Alt options; mark unavailability explicitly.

### 4.3 Version Graph Schema
- Types: Original, Remaster, Radio Edit, Live, Acoustic, Instrumental, Demo, Remix, Cover, Sample■based, Mashup.
- Edges: is_remaster_of, is_radio_edit_of, is_live_of, is_acoustic_of, is_instrumental_of, is_demo_of, is_remix_of, is_cover_of, samples, mashed_with.
- Signals: ISRC lineage, metadata heuristics, audio fingerprints/embeddings, curator confirmation for edge cases.
- UI: Official (GREEN) first; Community (YELLOW) below with disclaimers + Report + licensing path.

### 4.4 ACR Policy & Identify Flow
- Apple/Shazam mode + Standalone only; hidden elsewhere.
- Mic■based, user■initiated; on■device signatures; no raw audio; headphones caveat.
- Approved flow: Identify → Official match → Open on {Platform}.
- Native apps: community items open on web; web demo can show both.

### 4.5 Performance, Caching & Backoff
- Client debounce ~250–300ms; cancel in■flight requests on new input.
- Server caching for hot queries; normalized keys; TTLs by volatility.
- Backoff for partner quotas; retry jitter; circuit■breaker on errors.
- Snapshot tests for top queries; rank■drift alarms; SLOs defined.

### 4.6 Error & Fallback UX
- No■results: relaxed match option + spelling hints; policy■safe suggestions.
- Missing link: “Try another platform” + official web fallback.
- Partial outages: banner with retry guidance; graceful degradation.
- Offline: cache recent queries locally; clear refresh path.

---

## 5) Compliance & Privacy
- ACR boundary enforced; UI hidden in non■Apple modes.
- No hosting/downloading/convert; brand resources & terms respected.
- Privacy■first: signatures/hashes only; minimal PII; consent dialogs.
- Takedown intake with <24h SLA; audit log; conservative labeling for unreleased/unlicensed.

---

## 6) Business Model
- Indie Labels Service: $149 / $249 / $399 per month (Version Graphs, smart links/QR, routing checks, monthly report, takedown intake).
- Affiliate/partner revenue via official deep links (geo■smart where permitted).
- Future B2B: limited routing/Version Graph API behind strict compliance gates.

---

## 7) Roadmap to Full Version
- Stabilize search + Version Graph; publish ready■to■drop bundles (Vercel/Framer).
- Launch indie tiers; deliver monthly routing lift and takedown SLA; case studies.
- Expand deep■link coverage; per■platform compliance grids.
- Pilot ACR only where allowed; keep hidden elsewhere.
- Expose limited routing API to select partners after compliance hardening.

---

## 8) Deploy & Ops (File■Replacement Standard)
- Deliver versioned ZIPs (v1.0, v1.1, …) with CHANGELOG.md and rollback notes.
- Vercel static hosting + minimal `/api/identify` route; Framer for landing.
- Health checks + error logging; weekly QA passes on top queries.

---

## 9) Competitor Comparison (Outline)
- Odesli/Songlink, Linkfire, Linktree Music Links, Soundiiz, TuneMyMusic, Shazam, SoundHound, MusicBrainz, Discogs, WhoSampled, SecondHandSongs, Chartmetric, Soundcharts.
- Axes: Version Graph depth; official■first routing; compliance posture; ACR stance; analytics; monetization; API access; creator support.
- Hypothesis: SykMyx wins on official■first routing + Version Graph + policy cleanliness.

---

## 10) Acronyms & Glossary (A–Z)

| Acronym | Definition |
|---|---|
| ACR | Automatic Content Recognition; mic■based; on■device signatures; no raw audio. |
| A11y | Accessibility. |
| API | Application Programming Interface. |
| CTA | Call to Action. |
| DSP | Digital Service Provider (streaming platform). |
| GTM | Go■to■Market. |
| ISRC | International Standard Recording Code (recording). |
| ISWC | International Standard Musical Work Code (composition). |
| KPI | Key Performance Indicator. |
| MVP | Minimum Viable Product. |
| NPS | Net Promoter Score. |
| PII | Personally Identifiable Information. |
| QA | Quality Assurance. |
| SLA | Service Level Agreement (e.g., takedown <24h). |
| TOS | Terms of Service. |
| UI/UX | User Interface / User Experience. |
| UPC | Universal Product Code (release). |

---

## 11) Date■Synced Thread Log with Overrides

### 2025■07■14 — SykMyx Search Enhancements (Original)
**Key Decisions / Details**
- Recognition to avoid competing with Shazam; Apple/Shazam only.
- Teen■simple identify UX; no internal audio taps.
- Non■Apple modes show search/routing only.
- Appendix/Glossary cadence and acronym rule.

**Overrides**
- 2025■08■24 Hybrid Discovery adopted; 2025■09■29 brand lock as SykMyx.

**Current Canon**
- ACR boundary enforced; Glossary centralization.

**Open Tasks**
- Maintain compliance notes per platform.

---

### 2025■08■24 — Global Appendix — Same■Device ACR (LOCKED)
**Key Decisions / Details**
- Mic■based on■device signatures; headphones caveat; no raw audio.
- ACR OFF in non■Apple modes; ON in Apple/Shazam + Standalone.
- Takedown intake SLA <24h; community labeled.

**Overrides**
- Hybrid Discovery refined with GREEN/YELLOW visual standard.

**Current Canon**
- Apple/Shazam identify path approved; community opens on web in native apps.

**Open Tasks**
- Audit compliance grids per platform.

---

### 2025■08■25 — Separate Platform Decks (LOCKED)
**Key Decisions / Details**
- All platform decks separate; list of locked platforms captured.

**Current Canon**
- Decks remain separate unless explicitly combined by request.

**Open Tasks**
- Keep appendices/glossary consistent across decks.

---

### 2025■08■26 — Commercial One■Pager & Order Forms v1.0 (LOCKED)
**Key Decisions / Details**
- Clarity Lock restated; use as outreach baseline.

**Current Canon**
- One■pager active; platform edits are separate artifacts.

**Open Tasks**
- Maintain version label and change log.

---

### 2025■08■29 — SykMyx 1 (Prototype) + Proposal Defaults
**Key Decisions / Details**
- Ready■to■drop bundles required (no copy■paste).
- Apple/Shazam baseline deck; multi■appendix audit pack.
- Privacy■first multi■branch recognition plan (signatures/embeddings).

**Overrides**
- Rebrand to SykMyx applied later globally.

**Current Canon**
- Deploy via Vercel/Framer; `/api/identify` minimal.

**Open Tasks**
- Publish v1.0/v1.1 ZIPs; snapshot tests.

---

### 2025■08■31 — Flow■Chart SykMyx
**Key Decisions / Details**
- Stakeholder map; benefits; cons & mitigations.
- Hybrid Discovery trade■offs explained.

**Current Canon**
- Flow informs “Who It Helps / Why It Matters.”

**Open Tasks**
- Export printable PDF; add in■app diagram.

---

### 2025■09■03 — SykMyx Name Conflicts → SykMyx
**Key Decisions / Details**
- Chose SykMyx; request competitor comparison deck.

**Overrides**
- 2025■09■29: Enforce SykMyx everywhere; Hybrid policy locked.

**Current Canon**
- SykMyx sole brand moving forward.

**Open Tasks**
- Complete competitor deck with sources.

---

### 2025■09■27 — SykMyx Prototype 3 + ShazamKit Limits
**Key Decisions / Details**
- Literal step■by■step deploy; ready files only.
- Domain/trademark plan (unifypro.net → sykmyx.net).
- Clarifications for indie scope and Workspace leverage.

**Current Canon**
- Continue replacement deploy flow; doc trademark plan separately.

**Open Tasks**
- Prepare registrar/trademark cost table; rollout order.

---

### 2025■09■28 — Spotify Update Patch v1.1
**Key Decisions / Details**
- Merge ‘happy’ earlier file with new edits; preserve structure/format.

**Current Canon**
- Spotify mode with ACR OFF; benefits clarified; separate deck stays locked.

**Open Tasks**
- Ship merged v1.1 package + change log.

---

### 2025■09■29 — Global Sync — SykMyx Everywhere (LOCKED)
**Key Decisions / Details**
- Reaffirm brand; Hybrid toggle; build path (Framer + Vercel + `/api/identify`).
- Indie tiers + KPIs finalized; protection posture reiterated.

**Current Canon**
- Brand, Hybrid, takedown SLA, trade■secret mapping enforced.

**Open Tasks**
- Monthly ops review against KPIs.

---

### 2025■09■30 — Indie Labels / Artists Service — Tools & Limits
**Key Decisions / Details**
- Sleek, fast build; replacement files; name correction to SykMyx.

**Current Canon**
- Use Copilot/Framer/Vercel as helpers; deliver ZIPs; brand SykMyx only.

**Open Tasks**
- Stand up pilot with 10–20 labels; produce case study.

---

## 12) Change Log (This Document)
- v1.1–v1.4: Progressive expansions (purpose/vision; benefits/cons; acronyms; addendums).
- v1.5: Deep Scan Addendum for SykMyx Search Enhancements (override map; VERIFY list).
- v2.0: MAX■DEPTH consolidated master with expanded tech spec, platform policy, date■synced log, and deploy/ops details.

— End —
