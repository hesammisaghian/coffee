# Homepage Implementation Plan v1

## Purpose

This file defines the **practical execution sequence** for implementing the phase 1 homepage. It is based on two locked reference documents: the wireframe (structure and flow) and the content structure (content logic and component mapping). Implementation work must follow this plan so that phase 1 is delivered in a stable order with minimal rework and no drift from the agreed architecture.

---

## Locked references

- **`docs/homepage-wireframe-v1.md`** is the **structural source of truth**.  
  Section order, section types, heights, scroll behavior (e.g. sticky Process Story), and layout wireframes are defined there. No structural change is allowed without updating that document first.

- **`docs/homepage-content-structure-v1.md`** is the **content and component mapping source of truth**.  
  Text hierarchy, media slots, section-by-section content rules, mapping to current components, and proposed component plan live there. Content and component decisions must align with that document.

- **This implementation plan** must **obey both** documents.  
  It does not override or reinterpret them; it only defines **in what order** to implement and **what “done” means** for each step in phase 1.

---

## Phase 1 scope

### Included in phase 1

- **Hero** — cinematic intro with full-bleed media slot and short overlay text.
- **Brand Statement** — mindset and approach; left text, optional right media.
- **Difference / Comparison** — two-column comparison (conventional vs this process).
- **Process Story (sticky)** — main storytelling spine with step list and sticky media panel.
- **Science / Quality** — trust section with proof blocks (e.g. 3 blocks).
- **Sustainability** — short breathing-room section.
- **Final CTA** — closing section with primary CTA to `/contact`.

### Optional in phase 1

- **Featured Coffees** — may be included or omitted; if included, it sits after Sustainability and before Final CTA. The rest of the homepage must work correctly with or without it.

### Excluded from phase 1

- Backend integration (API, database).
- CMS or content management integration.
- Admin panel integration with the homepage.
- Final media production (professional photography/video); placeholder or current assets only.
- Advanced animation systems beyond what is needed for basic sticky behavior and light motion (e.g. no GSAP, no Lenis, no complex scroll-driven animation).
- Major design system work (new design tokens, full component library); reuse existing Tailwind and minimal patterns.

---

## Required code changes

Based on the mapping in `docs/homepage-content-structure-v1.md`, the following files are expected to be involved. This list is for planning only; actual edits are done during implementation.

### Files likely to be updated

- **`src/app/page.tsx`** — recompose sections in locked order; add `DifferenceSection`; replace or merge Process sections with `ProcessStoryStickySection`; optionally include `FeaturedCoffeesSection`; ensure wrapper/layout supports full-bleed hero and sticky section.
- **`src/components/home/HeroSection.tsx`** — add background media slot (image/video), overlay layout, ~90–100vh height, scroll cue; keep or refine existing copy within content-structure limits.
- **`src/components/home/BrandIntroSection.tsx`** — refine copy; optionally add right-column media slot and two-column layout per wireframe.
- **`src/components/home/ProcessStorySection.tsx`** — either refactored into or replaced by the sticky section; copy and step list used as source for `ProcessStoryStickySection`.
- **`src/components/home/ProcessDiagramSection.tsx`** — content (step labels) used by `ProcessStoryStickySection`; component may be removed from page composition when sticky section is in place, or kept temporarily for reference.
- **`src/components/home/QualitySafetySection.tsx`** — restructure into 3 proof blocks; keep content focus on safety, control, consistency; optional supporting visual.
- **`src/components/home/SustainabilitySection.tsx`** — minor copy refinement if needed; no structural change required.
- **`src/components/home/ContactCtaSection.tsx`** — minor copy refinement to match Final CTA role; keep `/contact` link and CTA styling.

### Files likely to be newly created

- **`src/components/home/DifferenceSection.tsx`** — new component: two-column comparison (Conventional vs This Process) with short bullet points; optional background/visual slot.
- **`src/components/home/ProcessStoryStickySection.tsx`** — new component: sticky Process Story with left step list, right sticky media panel, six steps; uses content from `ProcessStorySection` and step labels from `ProcessDiagramSection`.

### Files to be kept unchanged (or only referenced)

- **`src/components/home/FeaturedCoffeesSection.tsx`** — no change required for phase 1; use as-is if Featured Coffees is included in the composition; otherwise do not include it in `page.tsx`.
- All non-homepage files (e.g. `/coffees`, `/contact`, admin, layout, data) — no changes required for phase 1 homepage work unless a shared layout change is needed for full-bleed hero (e.g. main wrapper in `page.tsx` or layout).

---

## Recommended implementation order

Execute in this order to minimize rework and respect dependencies.

| Step | Goal | Files involved | Why this order | Dependency | Risk |
|------|------|----------------|----------------|------------|------|
| **1** | Establish page composition and layout for full-bleed hero + sticky | `src/app/page.tsx` | Define section order and wrapper structure (e.g. hero outside max-width, rest inside) so later sections don’t need structural rework. | None | Low |
| **2** | Hero: add media slot and overlay layout | `HeroSection.tsx` | First visible section; sets viewport height and overlay pattern used elsewhere. | Step 1 | Low |
| **3** | Brand Statement: copy + optional two-column/media | `BrandIntroSection.tsx` | Reuse existing component with content-structure alignment; no dependency on sticky or new components. | Step 1 | Low |
| **4** | Add Difference section (text-only first) | `DifferenceSection.tsx` (new), `page.tsx` | New component; text-only keeps risk low; no media dependency. | Step 1 | Low |
| **5** | Process Story: implement sticky structure and step list | `ProcessStoryStickySection.tsx` (new), `page.tsx` | Core storytelling spine; structure first, then media. Use existing Process copy and diagram labels. | Step 1 | Medium |
| **6** | Process Story: wire step–media behavior and placeholder media | `ProcessStoryStickySection.tsx` | Add active-step logic and single placeholder image (or one per step) so “sticky + steps” is demonstrable. | Step 5 | Medium |
| **7** | Science / Quality: 3-block layout | `QualitySafetySection.tsx` | Reuse content; restructure into blocks; no new components. | Step 1 | Low |
| **8** | Sustainability: copy pass only | `SustainabilitySection.tsx` | Minor edits; already in correct place. | Step 1 | Low |
| **9** | Final CTA: copy pass only | `ContactCtaSection.tsx` | Align headline and body with Final CTA role; keep link. | Step 1 | Low |
| **10** | Optional: add Featured Coffees to composition | `page.tsx`, optionally `FeaturedCoffeesSection.tsx` | Only if phase 1 scope includes it; insert between Sustainability and Final CTA. | Steps 1–9 | Low |
| **11** | Copy and media pass across all sections | All home section components | Bring all copy and placeholder media in line with content-structure and wireframe; no new structure. | Steps 2–10 | Low |

---

## Section implementation plan

For each section: reuse vs rewrite vs replace vs create; media and motion requirements; and what “done” means in phase 1.

### 1. Hero

- **Action:** Reuse and evolve `HeroSection.tsx`.
- **Media:** Add one background media slot (image or video) now; placeholder or current asset is acceptable.
- **Placeholder media:** Yes; one full-bleed image or simple video loop is enough for phase 1.
- **Motion/sticky:** Normal scroll only; optional simple scroll cue (e.g. icon or text). No Framer Motion required for phase 1 hero.
- **Done in phase 1:** Full-viewport (~90–100vh) hero with background media, overlay text (eyebrow, headline, short supporting line), and scroll cue; copy within content-structure length limits.

### 2. Brand Statement

- **Action:** Reuse and rewrite content/layout in `BrandIntroSection.tsx`.
- **Media:** Optional right-side media slot; can be added in phase 1 with placeholder or omitted.
- **Placeholder media:** Yes; texture or single image is fine.
- **Motion/sticky:** Static; no motion required.
- **Done in phase 1:** Two-column layout (left text, right optional image/space); 2–3 short paragraphs; copy within content-structure limits.

### 3. Difference / Comparison

- **Action:** Create new `DifferenceSection.tsx`.
- **Media:** Optional background or side visual; phase 1 can be text-only.
- **Placeholder media:** Allowed; flat color or texture if any.
- **Motion/sticky:** Static; normal scroll.
- **Done in phase 1:** Two columns (Conventional vs This Process) with 3–4 short bullet points per side; optional media; copy within limits.

### 4. Process Story

- **Action:** Create new `ProcessStoryStickySection.tsx`; reuse copy from `ProcessStorySection` and step labels from `ProcessDiagramSection`. Remove or repurpose old Process sections in `page.tsx` so only the sticky section is in the flow.
- **Media:** One sticky media area; phase 1 can use one shared image or one image per step; placeholders acceptable.
- **Placeholder media:** Yes; single image for all steps is acceptable.
- **Motion/sticky:** Sticky behavior required in phase 1; active step highlight and media change on scroll; CSS sticky + simple scroll/intersection logic first.
- **Done in phase 1:** Sticky section (~200–350vh scroll range), left step list with 6 steps and active state, right sticky media panel (content updates with step); copy within limits; no advanced scroll libraries.

### 5. Science / Quality

- **Action:** Reuse and rewrite layout of `QualitySafetySection.tsx` into 3 proof blocks.
- **Media:** Optional one supporting image; phase 1 can be blocks only.
- **Placeholder media:** Not required; blocks can be text-only.
- **Motion/sticky:** Static.
- **Done in phase 1:** Section title + 3 horizontal or vertical proof blocks (safety, control, consistency); copy within limits.

### 6. Sustainability

- **Action:** Reuse `SustainabilitySection.tsx` with optional copy refinement.
- **Media:** Optional subtle background; can stay text-only in phase 1.
- **Placeholder media:** Allowed.
- **Motion/sticky:** Static.
- **Done in phase 1:** Short sustainability statement and 2–3 supporting lines; copy within limits; no structural change.

### 7. Featured Coffees

- **Action:** Reuse as-is; include in `page.tsx` only if phase 1 scope includes it.
- **Media:** Per-card image optional in phase 1; text-only cards are fine.
- **Placeholder media:** Yes if images are used.
- **Motion/sticky:** Static.
- **Done in phase 1:** If included: title, short intro, up to 3 product cards with link to `/coffees`; if excluded: section not rendered, rest of page unchanged.

### 8. Final CTA

- **Action:** Reuse `ContactCtaSection.tsx` with minor copy refinement.
- **Media:** None or subtle background only.
- **Placeholder media:** N/A.
- **Motion/sticky:** Static.
- **Done in phase 1:** One strong closing line, short supporting text, primary CTA to `/contact`; copy within limits.

---

## Sticky Process Story implementation strategy

### Phase 1 approach

- **Use CSS `position: sticky`** for the right-hand media panel so it stays in view while the left column (step list) scrolls. No scroll library (Lenis, GSAP, etc.) in phase 1.
- **Define a long scroll height** for the section (e.g. 200–350vh) so each step has enough scroll distance to become “active” before the next step takes over.
- **Active step detection:** Use **Intersection Observer** (or scroll position + step thresholds) to determine which step is in view; update a single “active step” index in state. Avoid complex animation timelines.
- **Media per step:** In phase 1, either (a) one image for the whole section, or (b) one image per step and switch by active index. No video required initially.
- **Avoid overengineering:** Do not add parallax, scroll-linked animations, or custom scroll drivers. Sticky + step highlight + optional image swap is enough for phase 1.

### Defer to later

- Per-step video.
- Smooth scroll (e.g. Lenis).
- Framer Motion or GSAP scroll-triggered animations.
- Fancy step transitions; simple opacity or border highlight is sufficient now.

---

## Framer Motion usage plan

- **Where it’s useful in phase 1 (optional, after structure is solid):**  
  - Light entrance or fade on sections (e.g. on scroll into view).  
  - Optional hero text or scroll-cue fade.  
  - Optional subtle transitions in Process Story (e.g. step highlight or media crossfade).  
  Use only if it improves clarity and does not block shipping.

- **Where not to use it in phase 1:**  
  - Do not drive layout or structure with Framer Motion.  
  - Do not add motion to every section; many sections can stay static.  
  - Do not use it for sticky behavior; that is CSS and scroll/intersection logic.

- **Principle:** Structure and content first; motion is polish. The page must be complete and correct without any Framer Motion; then add minimal motion where it clearly helps.

---

## Media handling strategy

- **Use current or placeholder assets now.** Do not block implementation on final photography or video.
- **Keep every media slot replaceable.** Components should accept a URL or path (or a fixed placeholder path); swapping assets later must not require component or layout changes.
- **Preserve aspect ratios.** Use fixed aspect-ratio containers (e.g. Tailwind or CSS) so layout does not shift when media is replaced.
- **Avoid layout shift.** Reserve space for images/video (e.g. min-height or aspect-ratio) so content does not jump when media loads.
- **Do not couple text or structure to final media.** Copy and section order come from the content-structure and wireframe docs; media is visual support only.

---

## Implementation guardrails

- **Do not wait for final media.** Build with placeholders or existing assets; replace later.
- **Do not add backend dependency.** Homepage sections must render from local/static data only in phase 1.
- **Do not change the locked section order.** Order is: Hero → Brand Statement → Difference → Process Story → Science / Quality → Sustainability → (optional) Featured Coffees → Final CTA.
- **Do not turn the homepage into a product catalog.** Featured Coffees, if present, stays small; product depth lives on `/coffees` and detail pages.
- **Do not add unnecessary animation complexity.** Sticky and simple step/medium behavior first; no GSAP/Lenis/advanced scroll animation in phase 1.
- **Do not break modular section boundaries.** Each section is one component (or a small set); sections must be removable or reorderable only by changing `page.tsx` composition, not by tangling logic across sections.

---

## Definition of done for phase 1

Phase 1 homepage is complete when all of the following are true:

- **Sections exist in locked order:** Hero, Brand Statement, Difference / Comparison, Process Story (sticky), Science / Quality, Sustainability, (optional) Featured Coffees, Final CTA.
- **Copy** follows the hierarchy and approximate length limits in `docs/homepage-content-structure-v1.md`.
- **Placeholder or current media** is used wherever the wireframe/content-structure defines a media slot; no slot is left broken or empty unless the spec says it’s optional and intentionally omitted.
- **Process Story is sticky** in a basic but working way: left column scrolls, right panel sticks, active step updates with scroll, and media (or single image) is present.
- **Page works without backend:** no API or CMS calls required to render the homepage.
- **Sections are modular:** each section is a distinct component; Featured Coffees can be included or omitted without breaking the page.
- **Featured Coffees** is either intentionally included (between Sustainability and Final CTA) or intentionally omitted; the decision is documented (e.g. in tracker or this doc).
- **Structure is ready for later media replacement:** media is passed in or referenced so that swapping assets does not require refactoring layout or components.

---

## Final note

After this file, the next step is **implementation task breakdown or direct code work**. All implementation must respect the three reference documents:

1. **`docs/homepage-wireframe-v1.md`** — structure and flow.  
2. **`docs/homepage-content-structure-v1.md`** — content and component mapping.  
3. **`docs/homepage-implementation-plan-v1.md`** — execution sequence and definition of done.

Any change to section order, section role, or phase 1 scope must be reflected in the wireframe and/or content-structure docs before changing code.
