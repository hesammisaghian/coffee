# Homepage Content Structure v1

## Purpose
This document defines the **content logic, text hierarchy, media slots, and implementation mapping** for the homepage.  
The wireframe in `docs/homepage-wireframe-v1.md` remains the **structural source of truth** (page flow, section types, approximate heights, and interaction style).  
Implementation work must use **both** documents together: the wireframe for layout/flow, and this file for **what goes into each section** and how it should be wired into the codebase.

## Locked rules
- **Section order is locked**:  
  1) Hero  
  2) Brand Statement  
  3) Difference / Comparison  
  4) Process Story (sticky)  
  5) Science / Quality  
  6) Sustainability  
  7) Featured Coffees  
  8) Final CTA  
  This order must **not change** without an explicit, documented decision.
- **Brand-first homepage**: Phase 1 homepage must stay **brand- and process-first**, not a product grid or store landing.
- **Replaceable media**: All media (images, video) must be **swap‑able later without changing component structure** or layout contracts.
- **Process Story as main spine**: The Process Story section is the **primary sticky storytelling spine** of the page and must remain central.
- **Featured Coffees is optional**: The Featured Coffees section is **optional in phase 1**; the rest of the structure must work without it.
- **No backend dependency in phase 1**: The homepage structure and content must be fully **local / static** in phase 1 (no CMS, DB, or API required to render).
- **Short, strong text**: Copy must stay **concise, premium, and clear**, avoiding long marketing paragraphs.
- **Not a product catalog**: The homepage must **not** become product-grid-first; detailed product exploration belongs to `/coffees` and detail pages.

## Section-by-section content structure

For each section below, the terms follow `docs/homepage-wireframe-v1.md` exactly. Do **not** add, remove, or reorder sections without updating that file first.

---

### 1. Hero

#### A. Section purpose
- **Introduce the core idea in one glance**: controlled liquid fermentation–driven coffee process.
- **Set tone**: premium, calm, scientific, cinematic.
- **Invite scroll** without explaining the whole process here.

#### B. Text hierarchy
- **Eyebrow**: 1 short line giving context (e.g. process/approach label).  
  - Max: ~8–10 words.
- **Headline**: 1–2 strong lines stating the core proposition.  
  - Max: ~18–22 words total across both lines.
- **Supporting text**: 0–2 short lines to clarify without going into step‑by‑step detail.  
  - Max: ~30–40 words.
- **Optional microcopy**: Very small note near scroll cue, optional; max 5–7 words.
- **Max recommended text length**: Entire hero text block should comfortably fit within ~90–110 words **total**, preferably less.

#### C. Media slots
- **Slot count**: 1 primary media slot.
- **Preferred type**:  
  - Phase 1: **image or short looping video**; image is acceptable if video is not ready.  
  - Later: hero video can replace image without structural change.
- **Placeholder acceptability**:  
  - Placeholder media is acceptable (e.g. temporary coffee/process still, neutral motion) as long as aspect ratio and focal area are stable.
- **Ideal media content**:  
  - Macro coffee / process visuals, lab‑like environment, or abstract fermentation visual that supports **process + precision** rather than lifestyle.

#### D. Layout behavior
- **Scroll behavior**: Normal scroll hero occupying ~90–100vh, as per wireframe.
- **Text/media relationship**:  
  - Full‑bleed background media.  
  - Text block overlaid top-left or center-left with sufficient contrast.
- **Interaction**: Simple scroll cue; no advanced animation required for phase 1.

#### E. Implementation note
- Can evolve from the existing `HeroSection` component into a **media‑aware cinematic hero**:
  - Add support for a background media container (image/video) with overlay text.
  - Keep props/data structure minimal for phase 1.

#### F. Priority level
- **Build now** (phase 1).

---

### 2. Brand Statement

#### A. Section purpose
- Explain **what this project/brand is** and its mindset toward green coffee and fermentation.
- Clarify that this is **not just another coffee product**, but a **process‑driven approach**.

#### B. Text hierarchy
- **Eyebrow**: optional; small label like “Yaklaşımımız” or “Marka yaklaşımı”.  
  - Max: ~3–4 words.
- **Headline**: one main statement summarizing the brand’s philosophy.  
  - Max: ~16–20 words.
- **Supporting text**: 2–3 short paragraphs expanding the mindset.  
  - Each paragraph: ~25–40 words.  
  - Total section: ~80–120 words.
- **Optional microcopy**: one short line that can hint that details come in the following sections; max 10–12 words.
- **Max recommended text length**: **≤150 words** total.

#### C. Media slots
- **Slot count**: 0–1 media slot.
- **Preferred type**: still image or subtle texture.  
  - If used, should live on the right side as per wireframe.
- **Placeholder acceptability**:  
  - High. Texture / pattern placeholder is fine in phase 1.
- **Ideal media content**:  
  - Neutral but premium imagery: lab‑like surfaces, close‑up of beans, vessels, or clean studio imagery reinforcing controlled process.

#### D. Layout behavior
- **Scroll behavior**: Normal scroll section at ~60–80vh.
- **Text/media relationship**:  
  - Left column: text block.  
  - Right column: image/texture or blank space.
- **Interaction**: Static.

#### E. Implementation note
- Current `BrandIntroSection` already plays this role and can be evolved:
  - Refine copy and optionally add a right‑side media slot.

#### F. Priority level
- **Build now** (phase 1).

---

### 3. Difference / Comparison

#### A. Section purpose
- Make it immediately clear **how this process differs from conventional coffee processing**.
- Provide a **simple, side‑by‑side comparison**: conventional vs. this process.

#### B. Text hierarchy
- **Eyebrow**: optional; e.g. “Neyi değiştiriyor?”.
- **Headline**: one question or statement about difference.  
  - Max: ~14–18 words.
- **Supporting text**:  
  - 3–4 short bullet‑style points per column (conventional vs this process).  
  - Each point: 1 line, max ~10–14 words.
- **Optional microcopy**: one clarifying line under the comparison, max 15–20 words.
- **Max recommended text length**:  
  - ~6–8 points in total + short heading → roughly ≤150 words.

#### C. Media slots
- **Slot count**: 0–1 optional background/side media.
- **Preferred type**: image or subtle background graphic.
- **Placeholder acceptability**:  
  - Acceptable; can be flat color or texture.
- **Ideal media content**:  
  - Visual that contrasts “lab‑like precision” vs “generic coffee” without becoming a busy infographic.

#### D. Layout behavior
- **Scroll behavior**: Normal scroll, can be made sticky in later phases but **not required** for phase 1.
- **Text/media relationship**: Two text columns (Conventional vs This Process). Optional media behind or below.

#### E. Implementation note
- There is **no dedicated component** yet. Likely needs a new component:
  - `DifferenceSection` (or similar) with a **purely textual comparison** in phase 1, plus optional background media slot.

#### F. Priority level
- **Build now** (phase 1).

---

### 4. Process Story

#### A. Section purpose
- Act as the **main storytelling spine** of the homepage.
- Explain the **step‑by‑step process** from green bean to cup:
  1. Yeşil çekirdek seçimi  
  2. Kontrollü sıvı fermantasyon  
  3. Düşük oksijen / anaerobik faz  
  4. Kurutma  
  5. Kavurma  
  6. Fincan profili

#### B. Text hierarchy
- **Eyebrow**: optional small label, e.g. “Üretim süreci”.
- **Headline**: 1 line summarizing the process focus.  
  - Max: ~14–18 words.
- **Supporting text**:  
  - One short introductory paragraph (30–50 words).  
  - Then **one short title + 1–2 lines** of text for each step.
- **Optional microcopy**: optional note that details may vary by lot; max 1 short sentence.
- **Max recommended text length**:  
  - Intro: ≤50 words.  
  - Each of 6 steps: ≤35–40 words.  
  - Total: roughly ≤300–320 words.

#### C. Media slots
- **Slot count**: 1 main sticky media slot that changes per step (conceptually).
- **Preferred type**:  
  - Phase 1: still images per step or one image that changes subtly.  
  - Later: short looping videos per step are allowed.
- **Placeholder acceptability**:  
  - Yes. Even a single static image reused across steps is acceptable initially, as long as structure is sticky and media slot API is stable.
- **Ideal media content**:  
  - Visual corresponding to each phase (beans, tanks, low‑oxygen vessels, drying beds, roaster, cup).

#### D. Layout behavior
- **Scroll behavior**: **Sticky section** over a long scroll range (200–350vh) as defined in the wireframe.
- **Text/media relationship**:  
  - Left: scrollable step list; active step highlighted.  
  - Right: sticky media panel whose content responds to active step.
- **Interaction**: Step highlight and media change tied to scroll position; initial phase may use a simplified sticky behavior with basic transitions.

#### E. Implementation note
- Current `ProcessStorySection` and `ProcessDiagramSection` together cover **textual story + vertical diagram**, but are **not yet sticky**:
  - For phase 1 sticky implementation, a new or evolved component such as `ProcessStoryStickySection` should be introduced.  
  - Existing `ProcessStorySection` content can provide the **initial copy**; `ProcessDiagramSection` can inform step order and labels.

#### F. Priority level
- **Build now** (phase 1), with stickiness implemented at least at a basic level.

---

### 5. Science / Quality

#### A. Section purpose
- Communicate **control, safety, and process discipline**:
  - No chemical additives, no artificial aroma.  
  - Mold/aflatoxin awareness, moisture/storage control.  
  - Consistency and measurement.

#### B. Text hierarchy
- **Eyebrow**: optional; e.g. “Kalite ve güvenlik”.
- **Headline**: 1 line highlighting **quality & control**.  
  - Max: ~14–18 words.
- **Supporting text**:  
  - 3 short proof blocks/cards.  
  - Each block: title (2–4 words) + 1–2 lines of supporting text (≤24–30 words).
- **Optional microcopy**: optional sentence explaining that claims stay within reasonable, non‑medical language; max 1 short line.
- **Max recommended text length**:  
  - Roughly ≤180 words for all blocks combined.

#### C. Media slots
- **Slot count**:  
  - Option A: pure card layout (no separate media).  
  - Option B: 1 optional supporting visual below or behind the cards.
- **Preferred type**: image or simple iconography built with CSS; no heavy graphics required.
- **Placeholder acceptability**:  
  - High; blocks themselves carry most of the meaning.
- **Ideal media content**:  
  - Microscopic textures, lab‑like glassware, or abstract representations of measurement/consistency.

#### D. Layout behavior
- **Scroll behavior**: Normal scroll section.
- **Text/media relationship**:  
  - Title + horizontal or vertical set of 3 proof blocks.  
  - Optional supporting visual below.

#### E. Implementation note
- Current `QualitySafetySection` already covers a large part of this content:
  - It can be evolved into a card/block layout instead of long paragraphs while keeping existing copy as the source for wording.

#### F. Priority level
- **Build now** (phase 1).

---

### 6. Sustainability

#### A. Section purpose
- Provide a **short pause** after heavy process content and explain sustainability direction:
  - Reduced water use goal.  
  - Lower environmental footprint direction.  
  - More careful resource usage.

#### B. Text hierarchy
- **Eyebrow**: optional; e.g. “Sürdürülebilir yaklaşım”.
- **Headline**: 1 strong sentence about sustainability direction.  
  - Max: ~16–20 words.
- **Supporting text**:  
  - 2–3 short lines or paragraphs (total ≤60–80 words).
- **Optional microcopy**: small note clarifying that this is a direction/approach, not certified claims; ≤15 words.
- **Max recommended text length**:  
  - ≤100 words total.

#### C. Media slots
- **Slot count**: 0–1 subtle media slot.
- **Preferred type**: soft background texture, abstract nature signal, or simple image.
- **Placeholder acceptability**:  
  - Very high; a plain background is acceptable in phase 1.
- **Ideal media content**:  
  - Soft, low‑contrast visuals that do not overpower text (e.g. blurred foliage, water surface).

#### D. Layout behavior
- **Scroll behavior**: Normal scroll.
- **Text/media relationship**:  
  - Centered or left‑aligned text with plenty of whitespace, optional right or background image.

#### E. Implementation note
- Current `SustainabilitySection` already exists and should be reused:
  - Can refine copy and, if needed, add a low‑intensity media slot without changing section role.

#### F. Priority level
- **Build now** (phase 1).

---

### 7. Featured Coffees

#### A. Section purpose
- Provide a **small bridge** from brand/process story to concrete products:
  - Highlight at most 3 coffees as examples of the approach.
- Reinforce that **full product exploration** is on `/coffees`.

#### B. Text hierarchy
- **Eyebrow**: optional; e.g. “Öne çıkan kahveler”.
- **Headline**: concise title; max ~8–10 words.
- **Supporting text**:  
  - 1 short paragraph or 1–2 lines describing why these coffees are shown; ≤35–45 words.
- **Card text** (per product):  
  - Name: 1 line.  
  - Short description: 1–2 lines.  
  - Optional: flavor notes + package sizes as single short lines.
- **Optional microcopy**: small note or link text leading to `/coffees`.
- **Max recommended text length**:  
  - Section intro ≤60 words, each card ≤60 words.

#### C. Media slots
- **Slot count**: per‑card optional pack shot image slot (can be added later).
- **Preferred type**: product pack or abstract representation per coffee.
- **Placeholder acceptability**:  
  - In phase 1, cards can be text‑only. Images may be added without changing layout structure.
- **Ideal media content**:  
  - Packshots, simple renders, or neutral photography for each featured coffee.

#### D. Layout behavior
- **Scroll behavior**: Normal scroll grid/list within 80–120vh section.
- **Text/media relationship**:  
  - Title + 3 product cards in one row (responsive to stacked layout on smaller screens).

#### E. Implementation note
- Existing `FeaturedCoffeesSection` already matches this pattern:
  - Should be treated as **optional** in the main homepage composition order.  
  - When used, the component should align with the section’s position in the wireframe (after Sustainability and before Final CTA).

#### F. Priority level
- **Optional in phase 1**; can be added in a later iteration once brand/process sections are solid.

---

### 8. Final CTA

#### A. Section purpose
- Close the page with a **clear, calm invitation**:
  - Contact for orders, collaboration, wholesale, and questions.

#### B. Text hierarchy
- **Eyebrow**: optional; e.g. “İletişim”.
- **Headline**: 1 strong closing sentence.  
  - Max: ~14–18 words.
- **Supporting text**:  
  - 1 short line clarifying what kind of contact is welcome; ≤25–35 words.
- **Call-to-action**:  
  - One primary CTA button/link to `/contact`.
- **Optional microcopy**: small note that requests are handled manually for now; ≤20 words.
- **Max recommended text length**:  
  - ≤100 words total.

#### C. Media slots
- **Slot count**: 0–1 subtle background.
- **Preferred type**: solid or gradient background; no heavy media required.
- **Placeholder acceptability**:  
  - N/A — simple background is sufficient.
- **Ideal media content**:  
  - If used, very subtle texture only.

#### D. Layout behavior
- **Scroll behavior**: Normal scroll closing section (~50–70vh).
- **Text/media relationship**:  
  - Centered or left‑aligned text block + primary CTA.

#### E. Implementation note
- The existing `ContactCtaSection` effectively fills this role:
  - Keep `/contact` link as the primary CTA.  
  - Ensure copy aligns with the final homepage tone and this document.

#### F. Priority level
- **Build now** (phase 1).

---

## Mapping to current codebase

Based on the current implementation and the homepage wireframe, the target sections map to code as follows:

- **Hero**
  - **Current component**: `src/components/home/HeroSection.tsx`
  - **Mapping**: *Reuse but evolve*  
    - Reuse as the hero text container.  
    - Extend to support background media (image/video) per this document and the wireframe.

- **Brand Statement**
  - **Current component**: `src/components/home/BrandIntroSection.tsx`
  - **Mapping**: *Reuse but rewrite content/layout*  
    - Keep as Brand Statement section.  
    - Refine copy and optionally add right‑side media slot in layout.

- **Difference / Comparison**
  - **Current component**: none dedicated.
  - **Mapping**: *Replace with a new component*  
    - Introduce a new `DifferenceSection` (or similar) implementing the two‑column comparison from the wireframe.  
    - No current section needs to be removed for this; it would be inserted in the specified order.

- **Process Story (sticky)**
  - **Current components**:  
    - `src/components/home/ProcessStorySection.tsx` (rich textual explanation)  
    - `src/components/home/ProcessDiagramSection.tsx` (vertical, non‑sticky diagram)
  - **Mapping**: *Reuse content, evolve into new sticky component*  
    - Create a new `ProcessStoryStickySection` that implements the sticky behavior and step‑linked media as per the wireframe.  
    - Use `ProcessStorySection` copy and `ProcessDiagramSection` step labels as source material.  
    - Existing non‑sticky sections can remain for now or be refactored into the new component.

- **Science / Quality**
  - **Current component**: `src/components/home/QualitySafetySection.tsx`
  - **Mapping**: *Reuse but rewrite content/layout*  
    - Convert to a 3‑block proof section (or similar) guided by the existing paragraphs.  
    - Keep role focused on safety, control, and consistency.

- **Sustainability**
  - **Current component**: `src/components/home/SustainabilitySection.tsx`
  - **Mapping**: *Reuse current component as‑is, with possible minor copy refinement*  
    - Already aligned with sustainability direction; refine text if needed without changing its role.

- **Featured Coffees**
  - **Current component**: `src/components/home/FeaturedCoffeesSection.tsx`
  - **Mapping**: *Reuse as optional section*  
    - Keep component implementation for later use.  
    - In the homepage composition, treat it as **optional** and place it according to the wireframe when enabled.

- **Final CTA**
  - **Current component**: `src/components/home/ContactCtaSection.tsx`
  - **Mapping**: *Reuse current component with minor copy refinement*  
    - Already links to `/contact`.  
    - Ensure headline and body align with the “Final CTA” role.

**Note:** `src/app/page.tsx` currently composes:  
`HeroSection` → `BrandIntroSection` → `ProcessStorySection` → `ProcessDiagramSection` → `QualitySafetySection` → `SustainabilitySection` → `ContactCtaSection`.  
Future homepage updates must keep the **wireframe order** and the **roles** defined here, even if implementation details evolve.

---

## Proposed component plan

Target component set for the homepage (names illustrative but recommended to keep close to this list):

- **`HeroSection`**
  - **Origin**: evolve from existing `HeroSection`.
  - **Responsibility**: render hero eyebrow, headline, short supporting text, and handle a single background media slot (image/video) with overlay layout.

- **`BrandStatementSection`**
  - **Origin**: evolve from existing `BrandIntroSection` (can be renamed or wrapped, but structure should follow the wireframe).
  - **Responsibility**: explain brand mindset and approach to green coffee and fermentation with 2–3 short paragraphs, optional right‑side media.

- **`DifferenceSection`**
  - **Origin**: **new component**.
  - **Responsibility**: implement two‑column comparison (Conventional vs This Process) with short bullet points and optional background visual.

- **`ProcessStoryStickySection`**
  - **Origin**: **new component**, informed by `ProcessStorySection` + `ProcessDiagramSection`.
  - **Responsibility**: implement sticky Process Story with a step list and media panel, mapping the six steps defined in the wireframe.

- **`ScienceQualitySection`**
  - **Origin**: evolve from `QualitySafetySection` (can be renamed or wrapped).
  - **Responsibility**: present 3 short proof blocks for quality, safety, and measurement/consistency; optional supporting image.

- **`SustainabilitySection`**
  - **Origin**: reuse existing `SustainabilitySection`.
  - **Responsibility**: communicate sustainability direction in a short, calm section that acts as breathing room.

- **`FeaturedCoffeesSection`**
  - **Origin**: reuse existing `FeaturedCoffeesSection`.
  - **Responsibility**: highlight at most 3 coffees with minimal text and link to `/coffees`, staying small and supportive, not dominant.

- **`FinalCtaSection`**
  - **Origin**: reuse existing `ContactCtaSection` (possibly renamed).
  - **Responsibility**: close the page with a strong line, short supporting text, and a primary CTA link to `/contact`.

Implementation may keep current filenames while adjusting exports/aliases, as long as the **external composition and roles** obey this plan and the wireframe.

---

## Phase 1 copy strategy

- **Provisional copy allowed**:  
  - Text in phase 1 may be **draft‑level** as long as it matches the **structure, tone, and length limits** defined here.
- **Media can be temporary**:  
  - Existing photos, neutral textures, or generated placeholders are acceptable; they must not force structural changes when replaced.
- **Structure must be stable**:  
  - Section order, layout behaviors (hero height, sticky Process Story, etc.), and component responsibilities must remain unchanged when copy/media are refined.
- **Tone guidelines**:  
  - Short, premium, scientific, and clear.  
  - Avoid aggressive marketing language and exaggerated claims.  
  - Avoid heavy technical overload in the hero; deeper technical details belong in Process Story and Science / Quality.
- **Future refinement**:  
  - Copy can be iterated multiple times **without touching layout code** or component hierarchy, as long as length and hierarchy guidelines are respected.

---

## Implementation Guardrails

- **No backend dependency for homepage sections**  
  - All homepage sections must render fully from local/static data in phase 1 (e.g. hardcoded text, simple config objects, or static JSON/TS exports).

- **Do not block on final media**  
  - Implementation must **not** wait for final photos/videos. Build media slots and structure now, then drop in better media later.

- **Homepage is not a product catalog**  
  - Do not expand Featured Coffees or other elements into a large product grid. `/coffees` and detail routes handle product exploration.

- **Do not break the locked page flow**  
  - Keep section order exactly: Hero → Brand Statement → Difference / Comparison → Process Story → Science / Quality → Sustainability → (optional) Featured Coffees → Final CTA.

- **Defer animation complexity until structure is stable**  
  - First implement clean static / sticky behavior.  
  - Only after structure is proven, selectively add motion (e.g. with Framer Motion or simple CSS transitions) where it clearly supports storytelling.  
  - Process Story stickiness should rely on **CSS sticky and straightforward logic** before considering more advanced scroll libraries.

- **Keep sections modular and swappable**  
  - Each section should be a **separate, focused component** with a clear responsibility and minimal props.  
  - It should be possible to temporarily disable sections like Featured Coffees without breaking the rest of the page.

- **Respect content length constraints**  
  - During implementation, enforce approximate max lengths to keep the page readable and visually balanced.

- **Wireframe remains the primary structural reference**  
  - Any structural deviation (layout, heights, scroll behavior) must be checked against `docs/homepage-wireframe-v1.md` and explicitly justified.

