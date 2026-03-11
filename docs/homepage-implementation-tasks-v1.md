# Homepage Implementation Tasks v1

## Purpose

This file breaks the phase 1 homepage work from `docs/homepage-implementation-plan-v1.md` into **concrete, executable tasks**. Each task can be implemented one by one, with clear scope, files, dependencies, and acceptance criteria. The task list obeys the wireframe, content structure, and implementation plan; execution should not drift from those references.

---

## Locked references

- **`docs/homepage-wireframe-v1.md`** defines **page structure and flow**: section order, heights, scroll behavior (including sticky Process Story), and layout wireframes. No structural change is allowed without updating that document.

- **`docs/homepage-content-structure-v1.md`** defines **content logic and component mapping**: text hierarchy, media slots, section-by-section content rules, mapping to current components, and proposed component plan. Content and component decisions must align with that document.

- **`docs/homepage-implementation-plan-v1.md`** defines **execution order and guardrails**: which sections are in/out of phase 1, recommended implementation order, sticky strategy, media and Framer Motion approach, and definition of done for phase 1.

- **This task file** must **follow all three**. Tasks are derived from the implementation plan; any change to scope or order should be reflected in the plan and, if structural, in the wireframe and/or content-structure docs.

---

## Task list overview

1. **Task 1** — Recompose homepage structure in `src/app/page.tsx`
2. **Task 2** — Upgrade `src/components/home/HeroSection.tsx`
3. **Task 3** — Upgrade `src/components/home/BrandIntroSection.tsx`
4. **Task 4** — Create `src/components/home/DifferenceSection.tsx`
5. **Task 5** — Create `src/components/home/ProcessStoryStickySection.tsx`
6. **Task 6** — Replace old process composition in `src/app/page.tsx`
7. **Task 7** — Rewrite `src/components/home/QualitySafetySection.tsx`
8. **Task 8** — Refine `src/components/home/SustainabilitySection.tsx`
9. **Task 9** — Refine `src/components/home/ContactCtaSection.tsx`
10. **Task 10** — Decide on and optionally compose `FeaturedCoffeesSection` in `src/app/page.tsx`
11. **Task 11** — Final homepage pass for copy/media consistency

---

## Detailed task breakdown

---

### Task 1 — Recompose homepage structure in `src/app/page.tsx`

- **Task ID:** 1  
- **Task title:** Recompose homepage structure in `src/app/page.tsx`  
- **Goal:** Establish the locked section order and layout structure so the hero can be full-bleed and the rest of the page (including the future sticky section) has a clear wrapper. No new section components yet; only structure and placeholders or existing components in the correct order.  
- **Files involved:** `src/app/page.tsx`  
- **Dependencies:** None. First task.  
- **What must be done:**  
  - Reorder and compose sections so the flow is: Hero → Brand Statement → (slot for Difference) → (slot for Process Story sticky) → Science / Quality → Sustainability → (optional slot for Featured Coffees) → Final CTA.  
  - Ensure the hero is not constrained by the same max-width as the rest of the content (e.g. hero full-bleed, remaining sections inside a container).  
  - Use existing components where they already exist (HeroSection, BrandIntroSection, QualitySafetySection, SustainabilitySection, ContactCtaSection); use temporary placeholders or comments for Difference and Process Story if their components do not exist yet.  
  - Keep the page runnable and valid (no broken imports).  
- **What must not be changed:**  
  - Do not change section order from the wireframe.  
  - Do not modify the internals of existing home components in this task; only `page.tsx` composition and layout wrapper.  
  - Do not add backend, CMS, or auth.  
- **Acceptance criteria:**  
  - Section order in `page.tsx` matches wireframe.  
  - Hero area is full-bleed (or clearly prepared for it); other sections sit in a content container.  
  - App builds and homepage renders without errors.  
- **Risk level:** Low  

---

### Task 2 — Upgrade `src/components/home/HeroSection.tsx`

- **Task ID:** 2  
- **Task title:** Upgrade HeroSection  
- **Goal:** Turn the hero into a full-viewport (~90–100vh) section with a background media slot (image or video) and overlay text (eyebrow, headline, short supporting line, scroll cue) per wireframe and content-structure.  
- **Files involved:** `src/components/home/HeroSection.tsx`  
- **Dependencies:** Task 1 (page structure and hero placement).  
- **What must be done:**  
  - Add a single background media slot (accept URL/path for image or video); use placeholder or existing asset if needed.  
  - Set section height to ~90–100vh; ensure text overlays the media with readable contrast.  
  - Keep or refine copy to match content-structure: eyebrow (~8–10 words), headline (~18–22 words), supporting text (~30–40 words max).  
  - Add a small scroll cue (e.g. text or icon) at the bottom.  
  - Preserve aspect ratio / avoid layout shift (e.g. fixed aspect or min-height for media container).  
- **What must not be changed:**  
  - Do not add backend or dynamic content loading for hero.  
  - Do not change the section’s position in the page flow (that stays in `page.tsx`).  
  - Do not add heavy animation (e.g. GSAP); optional light fade is acceptable.  
- **Acceptance criteria:**  
  - Hero is ~90–100vh with full-bleed background media and overlay text.  
  - Copy stays within content-structure length limits.  
  - Media slot is replaceable (e.g. prop or constant) without changing component structure.  
  - Scroll cue is present.  
- **Risk level:** Low  

---

### Task 3 — Upgrade `src/components/home/BrandIntroSection.tsx`

- **Task ID:** 3  
- **Task title:** Upgrade BrandIntroSection  
- **Goal:** Align Brand Statement with wireframe and content-structure: two-column layout (left text, right optional image/space), 2–3 short paragraphs, optional eyebrow/headline.  
- **Files involved:** `src/components/home/BrandIntroSection.tsx`  
- **Dependencies:** Task 1.  
- **What must be done:**  
  - Refine or add copy to match content-structure: optional eyebrow, one main statement (~16–20 words), 2–3 short paragraphs (total ≤150 words).  
  - Implement two-column layout: left = text block, right = optional media slot or empty space.  
  - If adding a media slot, make it replaceable (e.g. optional image URL); placeholder is acceptable.  
  - Keep section as normal scroll, static.  
- **What must not be changed:**  
  - Do not change the section’s position in page flow.  
  - Do not add backend or CMS.  
  - Do not add motion beyond static layout.  
- **Acceptance criteria:**  
  - Layout matches wireframe (left text, right image/space).  
  - Copy within content-structure limits.  
  - Any media slot is optional and replaceable.  
- **Risk level:** Low  

---

### Task 4 — Create `src/components/home/DifferenceSection.tsx`

- **Task ID:** 4  
- **Task title:** Create DifferenceSection  
- **Goal:** Add a new section that presents a two-column comparison (Conventional vs This process) with 3–4 short bullet points per column, per wireframe and content-structure.  
- **Files involved:** `src/components/home/DifferenceSection.tsx` (new), `src/app/page.tsx`  
- **Dependencies:** Task 1 (slot for Difference in page).  
- **What must be done:**  
  - Create a new server component (or client if interactivity is added later; phase 1 can be static).  
  - Implement two columns: left = “Conventional” (or equivalent label), right = “This process” (or equivalent).  
  - Add 3–4 short bullet points per column; copy within content-structure limits (~6–8 points total, each point ~10–14 words max).  
  - Optional: one eyebrow/headline (“Neyi değiştiriyor?” or similar).  
  - Optional: one background or side media slot (placeholder or flat color acceptable).  
  - Export the component and use it in `page.tsx` in the Difference slot.  
- **What must not be changed:**  
  - Do not change section order in `page.tsx`.  
  - Do not add backend or complex animation.  
  - Do not expand into more than two columns or long paragraphs.  
- **Acceptance criteria:**  
  - DifferenceSection exists and is used in `page.tsx` between Brand Statement and Process Story.  
  - Two-column comparison is clear; copy within limits.  
  - Page builds and renders without errors.  
- **Risk level:** Low  

---

### Task 5 — Create `src/components/home/ProcessStoryStickySection.tsx`

- **Task ID:** 5  
- **Task title:** Create ProcessStoryStickySection  
- **Goal:** Implement the main Process Story section as a sticky section: long scroll height (e.g. 200–350vh), left column = scrollable step list (6 steps), right column = sticky media panel; active step updates with scroll; media can be one shared image or one per step.  
- **Files involved:** `src/components/home/ProcessStoryStickySection.tsx` (new)  
- **Dependencies:** Task 1. Use copy from `ProcessStorySection` and step labels from `ProcessDiagramSection` as source material; do not modify those files in this task unless necessary for imports.  
- **What must be done:**  
  - Create new component.  
  - Define six steps per wireframe: (1) Yeşil çekirdek seçimi, (2) Kontrollü sıvı fermantasyon, (3) Düşük oksijen / anaerobik faz, (4) Kurutma, (5) Kavurma, (6) Fincan profili.  
  - Layout: left = scrollable list with step title + 1–2 lines of text each; right = sticky panel (CSS `position: sticky`) for media.  
  - Implement active-step detection (e.g. Intersection Observer or scroll position) and highlight the active step; optionally switch right-panel image by step (or use one placeholder for all steps).  
  - Use placeholder or single image for media; slot must be replaceable.  
  - Copy: short intro paragraph + per-step text within content-structure limits.  
  - No Lenis, GSAP, or advanced scroll libraries; CSS sticky + simple JS only.  
- **What must not be changed:**  
  - Do not change section order in the page (that is Task 6).  
  - Do not add backend.  
  - Do not overengineer (no parallax, no complex scroll-driven animation).  
- **Acceptance criteria:**  
  - ProcessStoryStickySection exists; left list scrolls, right panel sticks.  
  - Active step updates with scroll; six steps match wireframe.  
  - Media slot (one or six) is replaceable.  
  - Copy within content-structure limits.  
- **Risk level:** Medium  

---

### Task 6 — Replace old process composition in `src/app/page.tsx`

- **Task ID:** 6  
- **Task title:** Replace old process composition in page  
- **Goal:** Remove the old Process Story and Process Diagram from the homepage composition and use only `ProcessStoryStickySection` in the Process Story slot, preserving locked section order.  
- **Files involved:** `src/app/page.tsx`  
- **Dependencies:** Task 5 (ProcessStoryStickySection exists).  
- **What must be done:**  
  - In `page.tsx`, remove `ProcessStorySection` and `ProcessDiagramSection` from the composition.  
  - Insert `ProcessStoryStickySection` in the Process Story position (after Difference, before Science / Quality).  
  - Ensure imports are updated (add ProcessStoryStickySection, remove or keep unused imports for ProcessStorySection/ProcessDiagramSection if they are no longer used).  
  - Verify full section order: Hero → Brand Statement → Difference → Process Story (sticky) → Science / Quality → Sustainability → (optional Featured Coffees) → Final CTA.  
- **What must not be changed:**  
  - Do not change the order of sections.  
  - Do not remove or refactor ProcessStorySection.tsx or ProcessDiagramSection.tsx as files (they can remain in codebase for reference); only remove them from the homepage composition.  
  - Do not add or remove any other sections.  
- **Acceptance criteria:**  
  - Homepage shows exactly one Process section, the sticky one, in the correct position.  
  - No duplicate process sections; page builds and runs.  
- **Risk level:** Low  

---

### Task 7 — Rewrite `src/components/home/QualitySafetySection.tsx`

- **Task ID:** 7  
- **Task title:** Rewrite QualitySafetySection  
- **Goal:** Restructure Science / Quality into a section with a title and three proof blocks (e.g. safety/control, no additives, consistency) per wireframe and content-structure; keep content focus on quality, safety, and process discipline.  
- **Files involved:** `src/components/home/QualitySafetySection.tsx`  
- **Dependencies:** Task 1.  
- **What must be done:**  
  - Replace long paragraphs with a section title plus three horizontal or vertical “proof” blocks.  
  - Each block: short title (2–4 words) + 1–2 lines of supporting text (≤24–30 words per block).  
  - Use existing QualitySafetySection copy as source; redistribute into the three blocks (e.g. lot/safety, no chemical/aroma, measurement/consistency).  
  - Optional: one supporting image below or behind the blocks; if added, keep it replaceable.  
  - Keep section static, normal scroll.  
- **What must not be changed:**  
  - Do not change section position in page.  
  - Do not add backend or heavy animation.  
  - Do not add more than three main blocks for phase 1.  
- **Acceptance criteria:**  
  - Section has one title and three clear proof blocks.  
  - Copy within content-structure limits (~180 words total for blocks).  
  - Page builds and section renders correctly.  
- **Risk level:** Low  

---

### Task 8 — Refine `src/components/home/SustainabilitySection.tsx`

- **Task ID:** 8  
- **Task title:** Refine SustainabilitySection  
- **Goal:** Minor copy refinement so the section matches the content-structure role (short sustainability statement, 2–3 supporting lines, breathing room after Science / Quality); no structural or layout change required.  
- **Files involved:** `src/components/home/SustainabilitySection.tsx`  
- **Dependencies:** Task 1.  
- **What must be done:**  
  - Review and, if needed, shorten or adjust copy to fit content-structure (e.g. one strong sentence, 2–3 short lines; total ≤100 words).  
  - Keep existing layout and semantics (section title, paragraphs).  
  - Optionally add a very subtle background or texture slot (replaceable); not required for phase 1.  
- **What must not be changed:**  
  - Do not change section position.  
  - Do not add backend or new sections.  
  - Do not turn into a long-form section.  
- **Acceptance criteria:**  
  - Copy within content-structure limits and tone.  
  - Section still reads as “Sustainability” breathing room.  
- **Risk level:** Low  

---

### Task 9 — Refine `src/components/home/ContactCtaSection.tsx`

- **Task ID:** 9  
- **Task title:** Refine ContactCtaSection (Final CTA)  
- **Goal:** Align Final CTA with content-structure: one strong closing sentence, short supporting line, primary CTA to `/contact`; optional microcopy (e.g. requests handled manually).  
- **Files involved:** `src/components/home/ContactCtaSection.tsx`  
- **Dependencies:** Task 1.  
- **What must be done:**  
  - Refine headline and body copy to match “Final CTA” role (e.g. ~14–18 words headline, ~25–35 words supporting; total ≤100 words).  
  - Keep the primary CTA as a link to `/contact` with clear label (e.g. “İletişim sayfasına git” or similar).  
  - Optionally add one short note that requests are handled manually; keep it brief.  
  - Do not change layout structure (centered or left-aligned block + button/link).  
- **What must not be changed:**  
  - Do not remove or change the `/contact` link.  
  - Do not change section position.  
  - Do not add forms or backend.  
- **Acceptance criteria:**  
  - Copy within content-structure limits.  
  - Primary CTA links to `/contact` and is visible.  
- **Risk level:** Low  

---

### Task 10 — Decide on and optionally compose FeaturedCoffeesSection

- **Task ID:** 10  
- **Task title:** Decide on and optionally compose FeaturedCoffeesSection  
- **Goal:** Make an explicit decision: include or omit Featured Coffees in phase 1; if included, add it to `page.tsx` between Sustainability and Final CTA without changing the component file.  
- **Files involved:** `src/app/page.tsx`; optionally `src/components/home/FeaturedCoffeesSection.tsx` (use as-is, no edits required).  
- **Dependencies:** Tasks 1–9 so that the rest of the page is in place.  
- **What must be done:**  
  - Decide whether phase 1 includes Featured Coffees (document the decision, e.g. in PROJECT_TRACKER or this doc).  
  - If **included:** import `FeaturedCoffeesSection` and render it in `page.tsx` between SustainabilitySection and ContactCtaSection. Do not modify FeaturedCoffeesSection internals.  
  - If **omitted:** do not add FeaturedCoffeesSection to `page.tsx`; ensure the flow remains Hero → … → Sustainability → Final CTA.  
  - In both cases, ensure section order stays locked and the app builds.  
- **What must not be changed:**  
  - Do not change the order of other sections.  
  - Do not expand Featured Coffees into a large product grid.  
  - Do not change FeaturedCoffeesSection.tsx unless a trivial fix is needed (e.g. export).  
- **Acceptance criteria:**  
  - Decision is documented.  
  - If included, Featured Coffees appears between Sustainability and Final CTA.  
  - If omitted, page still runs and order is correct.  
- **Risk level:** Low  

---

### Task 11 — Final homepage pass for copy/media consistency

- **Task ID:** 11  
- **Task title:** Final homepage pass for copy/media consistency  
- **Goal:** Review all homepage sections against the wireframe and content-structure; fix copy length and hierarchy, ensure every media slot has a placeholder or current asset, and confirm no structural drift.  
- **Files involved:** All home section components used on the homepage: `HeroSection`, `BrandIntroSection`, `DifferenceSection`, `ProcessStoryStickySection`, `QualitySafetySection`, `SustainabilitySection`, `ContactCtaSection`, and optionally `FeaturedCoffeesSection`.  
- **Dependencies:** Tasks 1–10 completed.  
- **What must be done:**  
  - Walk through each section and check: eyebrow/headline/supporting text exist and stay within content-structure word limits.  
  - Ensure every defined media slot (hero, Brand Statement right column, Process sticky panel, etc.) has an image or placeholder so nothing is broken or empty.  
  - Confirm section order in `page.tsx` matches wireframe.  
  - Fix any small copy or styling inconsistencies; do not add new sections or change order.  
  - Optionally add light entrance or scroll cues (e.g. Framer Motion) only where the implementation plan allows and only after structure is solid.  
- **What must not be changed:**  
  - Do not change section order or add/remove sections.  
  - Do not add backend or CMS.  
  - Do not introduce heavy animation or new dependencies beyond what’s already planned.  
- **Acceptance criteria:**  
  - All sections meet content-structure length and hierarchy guidelines.  
  - All media slots are filled (placeholder or current asset).  
  - Section order is correct; page builds and runs.  
  - Phase 1 definition of done (from implementation plan) is satisfied.  
- **Risk level:** Low  

---

## Task sequencing notes

- **Strict order:**  
  - **Task 1** must be done first (page structure and section order).  
  - **Task 5** must be done before **Task 6** (sticky section must exist before replacing old process composition).  
  - **Task 11** should be last (final pass after all sections are in place).

- **Can run after Task 1 in parallel or in any order among themselves:**  
  Tasks 2, 3, 4, 7, 8, 9 (Hero, Brand Statement, Difference, Science/Quality, Sustainability, Final CTA). Task 5 can also start after Task 1 but is higher risk and may block Task 6.

- **Highest risk:**  
  **Task 5** (ProcessStoryStickySection): only task with Medium risk; involves sticky layout and scroll/intersection logic. Implement in a branch or with extra review if needed.

- **Avoiding structural drift:**  
  - When editing `page.tsx` (Tasks 1, 4, 6, 10), always verify the final section order against `docs/homepage-wireframe-v1.md`.  
  - When adding or changing copy, check `docs/homepage-content-structure-v1.md` for hierarchy and length.  
  - Do not add sections, reorder sections, or change section roles without updating the three reference docs first.

---

## Safe execution rules

- **Implement one task at a time.** Complete and validate one task before starting the next; do not mix multiple tasks in a single change set unless explicitly scoped.

- **Do not modify unrelated files.** Each task touches only the files listed under “Files involved”; do not refactor or “improve” other home or global components unless the task requires it.

- **Do not change the locked section order.** The order is Hero → Brand Statement → Difference → Process Story → Science / Quality → Sustainability → (optional) Featured Coffees → Final CTA. Any reorder must be approved and reflected in the wireframe.

- **Do not add backend logic.** No API calls, database, or CMS for homepage sections in phase 1.

- **Do not wait for final media.** Use placeholder or current assets; media slots must be replaceable later without changing structure.

- **Keep media slots replaceable.** Pass media via props or constants; avoid hardcoding final asset URLs in a way that would require component changes to swap assets.

- **Do not introduce animation complexity early.** Sticky behavior and simple step highlight are enough for phase 1; no GSAP, Lenis, or heavy Framer Motion until structure is done.

- **Preserve modular section boundaries.** Each section is one (or a small set of) component(s); avoid cross-section state or layout hacks that would make sections depend on each other.

---

## Task-by-task definition of done

| Task | Definition of done |
|------|--------------------|
| **1** | `page.tsx` composes sections in wireframe order; hero is full-bleed-ready; app builds and homepage renders. |
| **2** | Hero is ~90–100vh with background media and overlay text (eyebrow, headline, support, scroll cue); copy within limits; media slot replaceable. |
| **3** | Brand Statement has two-column layout (left text, right optional media); copy within limits; media slot optional and replaceable. |
| **4** | DifferenceSection exists, used in page between Brand Statement and Process Story; two-column comparison with 3–4 bullets per side; copy within limits. |
| **5** | ProcessStoryStickySection exists; 6 steps; left list scrolls, right panel sticks; active step updates with scroll; media slot(s) replaceable; copy within limits. |
| **6** | Only ProcessStoryStickySection in Process slot; ProcessStorySection and ProcessDiagramSection removed from composition; section order correct. |
| **7** | QualitySafetySection has title + 3 proof blocks; copy within limits; optional image replaceable. |
| **8** | SustainabilitySection copy within limits; section remains short “breathing room”. |
| **9** | ContactCtaSection copy matches Final CTA role; primary CTA links to `/contact`. |
| **10** | Decision (include/omit Featured Coffees) documented; if included, section in page between Sustainability and Final CTA. |
| **11** | All sections checked for copy length and hierarchy; all media slots filled; order correct; phase 1 definition of done met. |

---

## Final note

After this file is created, the next step is to **execute the tasks one by one**, not all at once. For each task:

1. Read the task description, dependencies, and acceptance criteria.  
2. Implement only what the task requires; do not change unrelated files.  
3. Verify the task against the three reference docs (wireframe, content-structure, implementation plan).  
4. Mark the task complete and move to the next.

If scope or order needs to change, update the implementation plan and, if structure or content is affected, the wireframe and/or content-structure docs first, then adjust this task list accordingly.
