### PROJECT_RULES

### Project overview
- **Project type**: Premium coffee brand marketing website.
- **Temporary name**: `coffee`.
- **Final brand name**: Not decided yet (all copy and structure should be neutral enough to rename later).

### Visual and experience direction
- **Overall feel**: modern, premium, minimal, cinematic.
- **Inspiration**: Apple-style storytelling pages.
- **Storytelling style**:
  - Scroll-based, section-by-section narrative.
  - Strong visual hierarchy with plenty of whitespace.
  - Focused, intentional typography and motion (once added).
  - High-quality imagery and production-focused visuals.

### Main website goals
- **Brand introduction**: Clearly introduce the brand, positioning, and values.
- **Production storytelling**: Show the production process in scroll-based storytelling sections.
- **Product discovery**:
  - List all available coffee products.
  - Provide individual product detail pages.
- **Contact and orders**:
  - Allow users to contact us for orders.
  - Allow users to reach out for more information or wholesale inquiries.

### Tech stack (current)
- **Framework**: Next.js
- **UI library**: React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package manager**: pnpm
- **Version control**: Git + GitHub

### Constraints (do NOT add yet)
- **No animation stack**: Do not add GSAP yet.
- **No content platform**: Do not add a CMS.
- **No user system**: Do not add authentication.
- **No persistence layer**: Do not add a database.
- **No payments**: Do not add payment / checkout.
- **No dashboards**: Do not add an admin or dashboard UI.
- **No multilingual**: Do not add multilingual support yet.

If a feature requires any of the above, it must be explicitly discussed and approved before implementation.

### Code style and architecture
- **Language**: Use TypeScript everywhere.
- **Components**:
  - Prefer **small, composable, reusable** components.
  - Prefer **server components** by default.
  - Use client components only when interactive or browser-only logic is required.
- **Styling**:
  - Use **Tailwind CSS** utility classes.
  - Keep class names readable and consistent.
- **Cleanliness**:
  - No dead code.
  - No unnecessary abstractions or placeholders.
  - No unnecessary dependencies.
  - Avoid fake or over-engineered backend logic.

### Work style and process
- **Pace**: Work **one small step at a time**.
- **Change communication**:
  - Before editing, clearly explain which files will be touched and why.
  - Do not touch unrelated files.
- **Stability**:
  - Keep the app runnable at all times.
  - Prefer small, reversible changes.
- **Documentation of work**:
  - After each change, briefly summarize what was done.
  - Keep `PROJECT_TRACKER.md` in sync with the actual state of the project.

### High-level feature checklist
- **Home page**:
  - Hero and brand introduction.
  - Overview of production story and coffees.
- **Production story**:
  - Scroll-based storytelling about the production process.
- **Coffee products**:
  - Listing of available coffees.
  - Product detail pages with imagery and descriptions.
- **Contact / orders**:
  - Simple way for users to contact us to place orders or request more information.

These rules should guide every change until the brand name is finalized and new requirements are added.