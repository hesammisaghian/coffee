# ADMIN_SCHEMA_PLAN

Planning document for a future **lightweight** admin page. One person will manage the admin, so we keep the model simple: fixed product fields plus dynamic text-based fields. **Do not implement the admin UI yet**—this file defines the schema and interaction plan.

---

## 1. Admin goal

The future admin page should let us **create and edit products without changing code**. Goals:

- Add and edit products from a simple form.
- Set a small set of **fixed** fields (name, slug, hero image, gallery, buy link, publish state).
- Add **dynamic** fields per product (e.g. Menşei, Tat notları, Özel not) with label, value, visibility, and order.
- Publish or unpublish products so they appear or disappear on the site.
- Avoid redeploys when product copy or structure changes.

The public site reads from the same data the admin writes to. The detail page renders fixed fields and then renders dynamic fields in a generic way (label + value, or list of values).

---

## 2. Two-layer product model

| Layer | Description |
|-------|-------------|
| **Fixed fields** | Always exist for every product. Defined in the schema. Used for routing, listing, layout, and core actions (e.g. buy link, images). |
| **Dynamic fields** | Admin-defined attributes per product. Mainly text-based. Add/remove/reorder without code. Each has: label, value, visible, order. |

- **Fixed** = stable core (slug, name, hero image, gallery, buy link, publish).
- **Dynamic** = everything else (origin, flavor notes, brewing method, aroma, special notes, etc.). No complex field-type system; values are string or string array.

This keeps the schema simple and allows future product types (e.g. coffee, syrup, capsules) without redesign: same fixed fields, different dynamic labels/values per product.

---

## 3. Fixed fields

These fields always exist. The admin form has one dedicated input per field.

| Field | Purpose |
|-------|---------|
| **name** | Display name (e.g. "Espresso", "Türk Kahvesi"). |
| **slug** | URL-safe unique id for routing (e.g. `/coffees/[slug]`). |
| **heroImage** | Main product image (path or URL). |
| **galleryImages** | Additional images (array of paths or URLs). |
| **buyLink** | Link for purchase or inquiry (URL string). |
| **isPublished** | If false, product is hidden from list and detail. |

Images and buy link stay **fixed**, not dynamic. Dynamic fields are text-based only.

---

## 4. Dynamic fields

Dynamic fields are **mainly text-based**. No separate field-type system for now. Each dynamic field has:

| Property | Purpose |
|----------|---------|
| **label** | Display label on the detail page (e.g. "Menşei", "Demleme Yöntemi"). |
| **value** | Either a **string** or **string[]**. Single text or list of values (e.g. tags, options). |
| **visible** | If true, show on the product detail page. |
| **order** | Number for sort order when rendering. |

Optional: **id** (e.g. unique per field) for editing/deleting in the admin.

### Value shape

- **string** – Single line or paragraph. Rendered as text.
- **string[]** – Multiple values (e.g. Tat notları, Demleme yöntemi). Rendered as list or chips.

No image type in dynamic fields; images stay in fixed hero + gallery.

### Admin interaction (future)

- Add field → set label, enter value (text or list), set visible, set order.
- Reorder, edit, or remove fields. No code change when adding new kinds of attributes.

---

## 5. Example dynamic product fields

Examples of what the admin can add as dynamic fields (labels and values only). Not hard-coded in the schema.

| Label (Turkish) | Example value |
|-----------------|---------------|
| Menşei | "Ethiopia, Sidama" |
| Demleme Yöntemi | ["V60", "Türk kahvesi", "Espresso"] |
| Tat Notları | ["Çilek", "Kakao", "Fındık"] |
| Aroma | "Meyvemsi, çikolata" |
| Roast Seviyesi | "Orta" |
| Gövde | "Orta–yoğun" |
| Asidite | "Parlak" |
| Fermantasyon Bilgisi | "Kontrollü sıvı fermantasyon, 48 saat." |
| Özel Not | "Sınırlı seri." |

New labels (e.g. Paket Bilgisi, Sertifikalar) are added by creating a new dynamic field in the admin.

---

## 6. Frontend rendering logic

The product detail page loads one product (fixed fields + `dynamicFields` array).

### Fixed fields

- Render product name, slug-based routing, hero image, gallery, buy link.
- Show product only if `isPublished` is true (list and detail).

### Dynamic fields

- After fixed sections, iterate over `product.dynamicFields` **sorted by `order`**.
- For each field where **`visible === true`**:
  - **Section/row title**: `field.label`
  - **Body**:  
    - If `value` is **string**: render as text.  
    - If `value` is **string[]**: render as list or chips (same style as existing tags).
- Reuse existing Tailwind and semantic HTML (border-t, spacing, typography). No new layout framework.

### Data source

- **Today**: Products from local data (e.g. `src/data/coffees.ts`).
- **Later**: Same shape from API or DB. Page still receives one product object; dynamic rendering stays “loop and display by value type (string vs array)”.

---

## 7. Immediate next engineering step

After this plan:

- Ensure the **product type in code** includes optional fixed fields (heroImage, galleryImages, buyLink, isPublished) and optional **dynamicFields** array with shape: `{ id?, label, value: string | string[], visible, order }`.
- Add a few **example** dynamic fields to one or two products in local data so the detail page can render them. No admin UI yet.

This keeps the codebase aligned with the simple two-layer model and makes the future admin a direct implementation of this schema.
