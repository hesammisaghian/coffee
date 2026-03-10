### ADMIN_CONTENT_PLAN

### 1. Project direction summary

- **Current shape**: This is a **premium coffee brand and product presentation website**, not an ecommerce storefront. It is meant to introduce the brand, explain the production process, and present coffees in a way that feels careful, cinematic, and technical.
- **Primary focus right now**:
  - **Homepage storytelling**: A calm, Apple-style narrative that introduces the brand and frames the fermentation-first approach.
  - **Production / process explanation**: Clear, visual explanation of controlled liquid fermentation, anaerobic positioning, additive-free approach, and quality safeguards.
  - **Coffee product presentation**: A structured way to explore a small set of coffees, with detail pages that expose process, flavor, and functional/quality notes.
  - **Future admin product entry**: The data model and rendering should be structured so that later an admin/CMS can write to the same shape without code changes.
- **Non-goals for now**:
  - No checkout, cart, or payment flow.
  - No heavy CMS integration yet.
  - No dashboards or analytics UI.

---

### 2. Website content architecture

The main content areas we should support are:

- **Homepage**
  - High-level brand and process story.
  - Highlight of key coffees and links into the coffees section.
  - Contact / inquiry entry.

- **Coffees listing page**
  - A concise view of all available coffees.
  - Each item shows a minimal but meaningful summary and links to its detail page.

- **Coffee detail page**
  - Deep, structured information about one coffee:
    - Identity, origin, roast level.
    - Process and fermentation details.
    - Flavor and sensory profile.
    - Functional/quality notes (e.g. digestion, consistency, mold/aflatoxin stance).
    - Brewing suggestions.

- **Contact page**
  - Clear, simple instructions for how to get in touch about:
    - Orders / B2C.
    - Potential collaborations.
    - Wholesale or specialty partnerships.

- **Future admin/product entry page (not built yet)**
  - A private/admin-only interface to:
    - Add/edit coffee products.
    - Upload and manage hero + gallery images.
    - Adjust product fields (process, notes, brew methods, etc.).
    - Publish/unpublish products.

---

### 3. Homepage content plan

The homepage should evolve into a scroll-based, Apple-style narrative composed of a small set of clear sections:

- **Hero**
  - Clean, quiet hero with:
    - Brand placeholder name.
    - One-line statement about controlled liquid fermentation and premium coffee.
    - A subtle call to scroll or explore coffees.

- **Short brand introduction**
  - A section summarizing:
    - Who is behind the brand.
    - Why fermentation and process quality matter.
    - Why the brand exists beyond “better coffee”.

- **What makes this coffee/process different**
  - Focused bullets or short paragraphs about:
    - Controlled liquid fermentation of green beans.
    - Anaerobic process positioning.
    - No chemical additives / no artificial aroma.
    - Use of natural extracts (fruit/plant) in a constrained, transparent way.
    - Mold/aflatoxin awareness and screening.
    - Consistency and stability across batches.

- **Production process story**
  - A series of scroll-based segments (later) describing:
    - Pre-selection and screening of green coffee.
    - The liquid fermentation tank, inputs, and environment.
    - Anaerobic phase and control points (time, temperature, cultures).
    - Drying, storage, and roasting decisions.
    - How these choices show up in the cup (flavor/texture).

- **Featured coffees**
  - A small, curated set of highlighted coffees:
    - Short overview card (name, origin, roast, process hook).
    - Direct links to the detail pages.

- **Contact / inquiry section**
  - A simple, clear “Talk to us” block:
    - Short explanation of what to contact about (orders, collaborations, wholesale).
    - A button or link into the contact page.

---

### 4. Product content model

This section defines the product fields we should keep and expose, grouped for future admin entry. It is aligned with the current `Coffee` type in `src/data/coffees.ts`.

#### Identity fields
- **slug**: URL-safe unique identifier for the coffee.
- **name**: Human-readable product name.
- **shortDescription**: 1–2 sentence description used in lists and hero text.

#### Media fields
- **heroImage**: String path or URL for the primary image used on the detail page and future homepage features.
- **galleryImages**: Array of string paths/URLs for supporting images (process, close-ups, pour shots, etc.).

#### Origin / roast fields
- **origin**: Region or regions (e.g. “Sidama, Ethiopia” or “Guatemala & Mexico”).
- **roastLevel**: Enum-like string (`"light" | "medium" | "dark"`) that can later come from CMS options.

#### Process fields
- **processType**: High-level description of the process (e.g. “anaerobic controlled liquid fermentation”).
- **fermentationStyle**: More detailed description of the tank, timing, and contact style.
- **anaerobic**: Boolean flag for anaerobic positioning.
- **chemicalAdditiveFree**: Boolean indicating whether any synthetic additives are used.
- **artificialAromaFree**: Boolean flag for artificial aroma.
- **extractsUsed?**: Optional array of natural extracts used (e.g. “lemon peel infusion”).
- **microorganism?**: Optional short description of the primary culture(s) used.
- **customizableFermentation?**: Optional boolean flag for profiles that can be tuned further in future runs.

#### Flavor / sensory fields
- **flavorNotes**: Array of short descriptor strings (e.g. “lemon zest”, “milk chocolate”).
- **textureNotes?**: Optional array for mouthfeel / texture descriptors.

#### Quality / functional fields
- **caffeineNote?**: Optional text about perceived intensity or intended use (e.g. evening-friendly vs. high-intensity).
- **antioxidantNote?**: Optional text about approach to stability and acidity.
- **digestionNote?**: Optional note about digestion / perceived gentleness.
- **prebioticNote?**: Optional, only when relevant, describing prebiotic-supporting design.
- **consistencyNote?**: Optional note about batch-to-batch repeatability and control.
- **sustainabilityNotes?**: Optional array of short points about water use, fermentation liquid reuse, energy, etc.
- **moldAflatoxinNote?**: Optional note about screening and storage practices related to mold/aflatoxin.

#### Brewing / display fields
- **brewMethods**: Array of primary brew methods this product is tuned for (e.g. “V60”, “espresso”, “French press”).
- **slug / name / shortDescription** (reused): Provide enough info for cards, filters, and simple navigation components.

These fields should be considered the baseline “contract” between future admin/CMS storage and the frontend. Local TypeScript data today is effectively acting as a typed seed for that model.

---

### 5. Admin page plan (future, not implemented yet)

Later, we want a simple, focused admin experience (either a custom page or backed by a light-weight backend) that matches the content model above.

At a minimum, the **future admin page** should allow:

- **Product listing**
  - See a list of existing coffees with:
    - Name, slug, origin, roast level, published status.

- **Add a new coffee product**
  - Create a new entry by providing:
    - Identity fields (slug, name, shortDescription).
    - Origin/roast fields.
    - Process fields (processType, fermentationStyle, flags, extracts, microorganism).
    - Flavor / sensory fields.
    - Quality / functional notes.
    - Brewing methods.

- **Media management**
  - Upload and assign:
    - **Hero image** (single).
    - **Gallery images** (multiple).
  - Store and serve these as URLs or paths that the frontend can consume via `heroImage` and `galleryImages`.

- **Edit / update product**
  - Change fields if the profile or messaging shifts over time.
  - Update notes and brewing suggestions without requiring code edits.

- **Publish / unpublish**
  - A simple flag to control whether a product appears on:
    - The coffees list page.
    - Any featured coffees modules on the homepage.

Implementation details (framework, storage, auth) are intentionally deferred. The important part is that the **field structure** matches what the frontend already expects.

---

### 6. Data architecture direction

We want a smooth path from hardcoded TypeScript data to an admin-managed data source without breaking the UI.

- **Current state**
  - Product data lives in `src/data/coffees.ts` as a typed array of `Coffee`.
  - Pages (`/coffees` and `/coffees/[slug]`) read from this array via helpers:
    - `getCoffeeBySlug(slug)`
    - `getCoffeeSlugs()`
  - The UI already assumes the structured fields described in the `Coffee` type.

- **Near-term direction**
  - Treat `src/data/coffees.ts` as the **single source of truth** and a proxy for any future persistence layer.
  - Keep all UI code reading from helper functions (e.g. `getCoffeeBySlug`, `getCoffeeSlugs`, `getAllCoffees`) rather than importing the raw array in multiple places.
  - If we need more derived helpers (e.g. “getFeaturedCoffees”), implement them in the data layer, not inside the pages.

- **Future admin-managed source**
  - Introduce a **thin data access layer** that can later be swapped:
    - Today: functions read from the local `coffees` array.
    - Later: the same functions read from:
      - A lightweight backend API, or
      - A small, custom admin panel that writes to a database or headless content store.
  - The frontend (pages and components) should remain unchanged:
    - They do not care *where* the data comes from.
    - They only rely on the `Coffee` type and the helper functions.

- **Minimal path to CMS/admin**
  - When we introduce an admin or headless data store later:
    - Replace the internals of `getCoffeeBySlug`, `getCoffeeSlugs`, `getAllCoffees` with calls to the new source.
    - Optionally keep a local seed file for development or preview content.
  - This avoids a full rewrite or tight coupling to a specific heavy CMS.

---

### 7. Immediate next engineering step

Given the current focus (brand + process + product presentation, no ecommerce, no heavy CMS), the next practical coding step after this document should be:

- **Implement the first version of the production/process storytelling sections on the homepage**, using the existing section structure and content model.

Concretely:
- Replace the `ProcessPlaceholderSection` with a small, scroll-based narrative that:
  - Explains controlled liquid fermentation in 3–4 clear segments (pre-selection, tank phase, drying/roasting, quality checks).
  - Uses the same visual language (Tailwind, minimal layout) and keeps copy aligned with the product model.
- Optionally, add a small “How this shows up in the cup” subsection that ties process to the existing product flavor/quality fields, without introducing any new dependencies or CMS.

This keeps the codebase aligned with the long-term architecture while delivering visible storytelling value on the homepage. 

