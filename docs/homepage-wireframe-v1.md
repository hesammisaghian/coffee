# Homepage Wireframe v1

## Goal
Build the homepage now with available photos/videos, using placeholder media where needed, and replace them later with better real or generated assets.

## Core direction
- Brand-first
- Premium + scientific
- Minimal text
- Strong visual rhythm
- Some cinematic feeling without overcomplicating phase 1
- Buildable with current codebase

## Page flow
1. Hero
2. Brand Statement
3. Difference / Comparison
4. Process Story (sticky)
5. Science / Quality
6. Sustainability
7. Featured Coffees
8. Final CTA

---

## 1) HERO
**Type:** Cinematic intro / normal scroll  
**Height:** 90–100vh  
**Media:** Full-width video or large image  
**Text:** Short overlay

**Layout**
- Background: full-bleed media
- Top-left or center-left short eyebrow text
- Large headline
- One short supporting line
- Small scroll cue

**Wireframe**
```text
---------------------------------------------------------
|                                                       |
|             [ full-screen video / image ]             |
|                                                       |
|    Small label                                        |
|    Big headline                                       |
|    Short supporting sentence                          |
|                                                       |
|                           [scroll indicator]          |
---------------------------------------------------------
```
**Content rule**
- Headline: 1 line or max 2 lines
- Supporting text: max 2 short lines
- Do not explain too much here

---

## 2) BRAND STATEMENT
**Type:** Normal scroll  
**Height:** 60–80vh  
**Media:** One strong still image or no image  
**Text:** 2–3 short paragraphs

**Layout**
- Left: text block
- Right: still image or clean empty space

**Wireframe**
```text
---------------------------------------------------------
|  Small section title                                  |
|                                                       |
|  Main statement                    [image / texture]  |
|  Short paragraph                                      |
|  Short paragraph                                      |
|                                                       |
---------------------------------------------------------
```

**Goal**
Explain the mindset behind the coffee, not the full process yet.

---

## 3) WHAT MAKES IT DIFFERENT
**Type:** Comparison section  
**Height:** 70–100vh  
**Scroll:** normal in phase 1, can become sticky later  
**Media:** two visual blocks or one image + text comparison  
**Text:** very short

**Layout**
- Two columns
- Left: conventional approach
- Right: this approach

**Wireframe**
```text
---------------------------------------------------------
|                 What changes here?                    |
|                                                       |
|   Conventional              |   This process          |
|   short point               |   short point           |
|   short point               |   short point           |
|   short point               |   short point           |
|                                                       |
|      [optional supporting image / background]         |
---------------------------------------------------------
```

**Goal**
Make the difference obvious fast.

---

## 4) PROCESS STORY
**Type:** Main storytelling section  
**Height:** Long section, 200–350vh total  
**Scroll:** Sticky  
**Media:** One media area that changes per step  
**Text:** step-based

**Layout**
- Left: step text list
- Right: sticky media panel
- As user scrolls, active step changes

**Wireframe**
```text
---------------------------------------------------------
| Step 01                        |                       |
| Short title                    |   [ sticky image /   |
| 1-2 lines text                 |      short video ]   |
|                                |                       |
| Step 02                        |                       |
| Short title                    |                       |
| 1-2 lines text                 |                       |
|                                |                       |
| Step 03                        |                       |
| ...                            |                       |
---------------------------------------------------------
```

**Suggested steps**
1. Green bean selection
2. Controlled liquid fermentation
3. Anaerobic phase
4. Drying
5. Roasting
6. Cup profile

**Phase 1 rule**
Even if media is temporary, structure this section now.

---

## 5) SCIENCE / QUALITY
**Type:** Trust section  
**Height:** 70–90vh  
**Media:** 1 image or 3 cards/icons-style blocks  
**Text:** very short proof points

**Layout**
- Section title
- 3 horizontal or vertical proof blocks

**Wireframe**
```text
---------------------------------------------------------
|                Quality and control                    |
|                                                       |
|   [Block 1]      [Block 2]      [Block 3]             |
|   short text     short text     short text            |
|                                                       |
|            [optional supporting visual]               |
---------------------------------------------------------
```

**Goal**
Show control, safety, no additive logic, and process discipline.

---

## 6) SUSTAINABILITY
**Type:** Light section / breathing room  
**Height:** 60–75vh  
**Media:** minimal image or subtle background  
**Text:** 2–3 short lines

**Wireframe**
```text
---------------------------------------------------------
|  Sustainability                                       |
|                                                       |
|  One strong sentence                                  |
|  2-3 short supporting lines                           |
|                                                       |
|                        [soft image / texture]         |
---------------------------------------------------------
```

**Goal**
A short pause after the heavier process section.

---

## 7) FEATURED COFFEES
**Type:** Product-assisted section  
**Height:** 80–120vh  
**Media:** product cards / pack shots  
**Text:** minimal

**Layout**
- Title
- 3 cards max

**Wireframe**
```text
---------------------------------------------------------
|                 Featured Coffees                      |
|                                                       |
|   [product]      [product]      [product]             |
|   short text     short text     short text            |
|   link           link           link                  |
---------------------------------------------------------
```

**Decision**
Keep this section small. Homepage should still remain brand-first.

---

## 8) FINAL CTA
**Type:** Closing section  
**Height:** 50–70vh  
**Media:** simple background, no heavy media needed  
**Text:** 1 strong line + 1 action

**Wireframe**
```text
---------------------------------------------------------
|                                                       |
|             One strong closing sentence               |
|             Short supporting line                     |
|             [Contact / Collaboration]                 |
|                                                       |
---------------------------------------------------------
```

---

## Phase 1 media strategy

Use available media now.

If some sections do not have final media yet:
- use current real photos/videos
- use temporary placeholders
- keep aspect ratios fixed
- design the layout so media can be swapped later without changing structure

---

## Phase 1 implementation priority

**Build now**
- Hero
- Brand Statement
- Difference section
- Process sticky section
- Science / Quality
- Sustainability
- CTA

**Optional in phase 1**
- Featured Coffees

---

## Recommended text density
- **Hero:** 10–20 words headline + 1 short line
- **Brand Statement:** 40–80 words
- **Difference section:** 6 short points max
- **Process steps:** 1–2 lines per step
- **Science section:** 3 proof points
- **Sustainability:** 20–40 words
- **CTA:** 1 line + button

---

## Recommended tech for phase 1
- Next.js
- Tailwind
- Framer Motion
- CSS sticky

**Optional later:**
- Lenis for smoother scroll
- GSAP only if phase 2 needs more advanced cinematic control

---

## Important rule

Do not wait for final media before building.

Build the homepage structure now with replaceable media slots.

The architecture should remain stable even when photos/videos are swapped later.
