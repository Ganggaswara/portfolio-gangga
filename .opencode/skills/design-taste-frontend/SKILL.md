---
name: design-taste-frontend
description: Anti-slop frontend skill for landing pages, portfolios, and redesigns. The agent reads the brief, infers the right design direction, and ships interfaces that do not look templated. Real design systems when applicable, audit-first on redesigns, strict pre-flight check.
---

# design-taste-frontend: Anti-Slop Frontend Skill

> Landing pages, portfolios, and redesigns. Not dashboards, not data tables, not multi-step product UI.
> Every rule below is **contextual**. None of it fires automatically. First read the brief, then pull only what fits.

## How to use this skill

1. Always start with `references/01-brief-dials.md`: output one-line Design Read, set `DESIGN_VARIANCE` / `MOTION_INTENSITY` / `VISUAL_DENSITY`.
2. Load only references the brief needs (lazy loading):
   - `01-brief-dials.md` - Sec 0 Brief Inference, Sec 1 Three Dials, Sec 7 Dial Definitions. Always load.
   - `02-system-architecture.md` - Sec 2 Design System Map, Sec 3 Architecture, Sec 8 Dark Mode Protocol. Load when picking stack/foundation.
   - `03-directives.md` - Sec 4 Design Engineering Directives. Load for all layout/typography/color/image/content work.
   - `04-motion-guardrails-tells.md` - Sec 5 Proactivity + skeletons, Sec 6 Perf/a11y, Sec 9 AI Tells + em-dash ban. Load when adding motion, before ship for tells audit.
   - `05-workflow-library.md` - Sec 10 Vocabulary, Sec 11 Redesign Protocol, Sec 12 Block Library contract, Sec 13 Out of Scope, Sec 14 Pre-Flight Check, Appendices. Load vocabulary/redesign on demand, always run Pre-Flight before outputting code.
3. If brief is dashboard / data table / multi-step wizard / code editor / native mobile / realtime collab: declare out of scope per Sec 13, point to right tool.
4. Before outputting code: run full Pre-Flight Check (Sec 14 in `05-workflow-library.md`). Fail one box = not done.

## Reference index

- `references/01-brief-dials.md`
- `references/02-system-architecture.md`
- `references/03-directives.md`
- `references/04-motion-guardrails-tells.md`
- `references/05-workflow-library.md`
