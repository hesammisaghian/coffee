### PROJECT_TRACKER

### Project status
- **Current project name**: `coffee`
- **Current status**: Early setup and structure phase

---

### Completed tasks (based on current state)
- [x] Initialize Next.js project using pnpm.
- [x] Set up TypeScript and basic configuration files.
- [x] Run the project locally to verify it boots.
- [x] Initialize Git repository and connect to GitHub.
- [x] Clean up default Next.js public assets that are not needed.
- [x] Set up base application structure:
  - `src/app`
  - `src/components`
  - `src/data`
  - `src/lib`
- [x] Confirm the project runs after initial cleanup and structure setup.
- [x] Replace the default Next.js homepage with a simple custom homepage skeleton for the coffee website.
 - [x] Introduce a simple global layout with reusable Header and Footer components wired through `layout.tsx`.
 - [x] Create minimal placeholder pages for `/coffees` and `/contact` that match the current layout and design direction.
 - [x] Refactor the homepage into small reusable section components under `src/components/home`.
 - [x] Refine homepage copy and replace the fake contact button with a real link to the `/contact` page.
 - [x] Add a simple local coffee data structure and render it as a basic list on the `/coffees` page.
 - [x] Add dynamic coffee detail pages backed by the local coffee data and link the `/coffees` list to them.
 - [x] Extract small coffee data helpers and use them in the coffee detail route with static params and a back link to the list.
 - [x] Refine the coffee data model and product pages to be CMS-ready while still using local data.
 - [x] Document a practical content/admin architecture plan in `ADMIN_CONTENT_PLAN.md` to prepare for a future lightweight admin interface.
 - [x] Replace the homepage process and products placeholders with a first real production story and featured coffees section.
 - [x] Refine the homepage into a Turkish brand and süreç odaklı anlatım, and remove featured coffees from the homepage.
  - [x] Align the coffees data model and coffees pages with real ürün listesi and rewrite them in Turkish.
 - [x] Refine the contact page into a minimal, Türkçe marka iletişim sayfası aligned with the homepage direction.
 - [x] Align the global header navigation labels and marka metni with the Turkish site direction.
 - [x] Align the global footer metni with the Turkish site direction.
 - [x] Refine the homepage metni in Turkish using süreç ve kalite odaklı kaynak notlar ile dış yapı ilhamını birleştir.
 - [x] Add homepage Quality & Safety section (Kalite ve güvenlik).
 - [x] Add homepage Sustainability section (Sürdürülebilir yaklaşım).
 - [x] Add homepage process diagram section (Süreç akışı).
- [x] Refine the homepage process diagram into a vertical flow aligned with future scroll storytelling.
- [x] Create ADMIN_SCHEMA_PLAN.md for future lightweight admin with fixed and dynamic product fields.
- [x] Refine product schema and detail page for future admin: fixed fields + dynamic text-based fields (label, value, visible, order).
- [x] Align simplified admin-oriented product schema in code (fixed fields + dinamik metin alanları) with ADMIN_SCHEMA_PLAN.md.
- [x] Add admin UI prototype for managing products (local-only, no backend).
- [x] Add admin edit-page prototype for existing products (local-only, no backend).
- [x] Refine admin product form to support tek değer / çoklu değer dinamik alan modları.
- [x] Add local-only mock save flow and basit doğrulama to admin product form.
- [x] Refine admin products list into a daha faydalı yönetim görünümü (yayın, hero, buy link, dinamik alan sayısı).
- [x] Add otomatik slug üretimi (isimden slug, manuel override destekli) to admin product form.
- [x] Add yayın hazırlığı ve eksik alan özeti to admin products overview.
- [x] Show yayın hazırlığı ve eksik bilgi uyarıları doğrudan admin product form içinde.

---

### In progress
- [ ] Define the visual and storytelling direction for the homepage.
- [ ] Plan the structure of the production-story scroll experience.
- [ ] Plan the structure for:
  - Coffee listing section/page.
  - Coffee product detail view.
  - Contact / order section or page.

---

### Next step
- **Next concrete step**: Refine the homepage content and structure, starting with clearer copy and layout for the production process and coffee products sections.

---

### Reminder notes
- **Work step by step**:
  - Make small, focused changes.
  - Finish one clear step before starting the next.
- **Keep the project stable**:
  - Ensure `pnpm dev` runs without errors after each change.
  - Avoid introducing new dependencies unless clearly required.
- **Scope discipline**:
  - Do not add CMS, auth, database, payments, dashboards, or multilingual features yet.
  - Keep edits limited to the files needed for the current step.
- **Documentation**:
  - Keep this tracker and `PROJECT_RULES.md` aligned with the real state of the project.