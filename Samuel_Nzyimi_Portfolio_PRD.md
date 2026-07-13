# Product Requirements Document
## Samuel Nzyimi — Personal Portfolio Website

**Document purpose:** This PRD is intended as a handoff document for an AI design tool (e.g., Claude Design, Google Stitch) and/or an AI coding tool (e.g., Claude Code, Codex) to generate the design and/or implementation of a personal portfolio website.

---

## 1. Overview

**Product Name:** Samuel Nzyimi — Personal Portfolio Website

**Summary:** A minimal, single-page portfolio website for Samuel Nzyimi, a beginner software developer, designed to showcase his services (Web & App Development, Product & Graphic Design, with supporting skills in Excel Modeling and AI Integration) through a clean, black-on-off-white visual language with purposeful motion design (custom preloader, scroll reveal, split-text, and kinetic typography distortion effects). The site is built with vanilla HTML, CSS, and JavaScript (no frameworks), enhanced with the GSAP animation library (core + ScrollTrigger + SplitText, all free including for commercial use), optimized for modern browsers, fully responsive across mobile/tablet/desktop, and deployed via Netlify or Vercel with a custom domain.

---

## 2. Goals & Objectives

**Primary goal:** Attract freelance clients by presenting a credible, professional, visually polished personal brand.

**Secondary goals:**
- Serve as a strong asset for future job/internship applications.
- Function as a general skill/identity showcase for networking events (conferences, meetups, introductions).

**Product objectives:**
- Communicate services and value proposition within seconds of landing (clear hero headline).
- Build trust through testimonials despite limited technical case-study depth (personality/approach/values-driven framing).
- Demonstrate frontend craft *through the site itself* (the effects/animations act as an implicit skill demonstration, compensating for a currently light project portfolio).
- Provide simple, frictionless contact paths (mailto + socials) without backend complexity.
- Support a downloadable CV for recruiters/networking contacts without cluttering the primary nav.

---

## 3. Target Users

| Segment | Priority | What they care about | Design implication |
|---|---|---|---|
| **Freelance clients** | Primary | Trust, personality, outcomes, ease of contact | Testimonials emphasized; outcome-focused captions on work; simple contact CTA |
| **Recruiters / hiring managers** | Secondary | Role fit, professionalism, CV access | CV available via Contact/footer; clear role labels (Web/App Dev, Product & Graphic Design) |
| **Networking contacts** | Tertiary | Quick identity/skill snapshot, memorability | Strong hero statement; kinetic typography as a memorable first impression |

---

## 4. User Stories / Use Cases

**As a freelance client**, I want to quickly understand what Samuel does and see proof he delivers results, so I can decide whether to reach out.
- I want to read testimonials that speak to his reliability and approach, not just technical jargon.
- I want an easy way to contact him (email/social) without filling out a complicated form.

**As a recruiter**, I want to scan his core skills and download his CV, so I can evaluate fit for a role.

**As a networking contact**, I want a memorable first impression (strong visual/name moment) I can recall later, and quick links to his socials/portfolio.

**As Samuel (site owner)**, I want the site to visually demonstrate frontend craft through motion/interaction design, so the site itself acts as a portfolio piece — even while my project list is still growing.

**As any visitor on mobile/tablet**, I want the layout, animations, and text to remain legible and performant, so the experience doesn't break or feel sluggish on smaller screens.

---

## 5. Functional Requirements

### 5.1 Global / Header
- **FR1:** Sticky/fixed header visible at all times, present on top of all sections.
- **FR2:** Header contains anchor-linked nav items: **Home, About, Works, Contact** (smooth-scroll to section, no page reload).
- **FR3:** Header includes site owner name/logo mark (text-based, e.g., "Samuel Nzyimi" or initials "SN").
- **FR4:** Light/dark mode toggle in header, positioned at the **right end of the nav**, using a sun/moon icon. Defaults to light mode (or system preference) on first visit; user preference persisted (e.g., localStorage) for return visits.
- **FR5:** Active nav item is visually indicated based on scroll position (e.g., underline or weight change).
- **FR6:** Header remains accessible/readable when scrolling over dark image sections (e.g., contrast-safe styling).

### 5.2 Preloader
- **FR7:** On initial page load only (not on internal nav clicks), display a custom preloader over a full-viewport `#intro-screen`.
- **FR8:** Preloader structure:
  - `h1.main-title`: "Samuel Nzyimi" (site sans-serif font — Neue Montreal/SF Pro, matching the rest of the site).
  - `div.status-row` below title, containing:
    - `span.left-text`: static label "Roles" (or similar fixed word).
    - `div.center-loader`: thin horizontal divider line with `span.percentage` counter beneath it.
    - `span.right-text`: dynamic role word, synced to percentage milestones.
- **FR9:** Percentage counter animates from 0% → 100% over ~2–2.5 seconds.
- **FR10:** Dynamic right-text milestones:
  - 25% → "Web and App Development"
  - 50% → "Excel Models"
  - 75% → "AI Integration"
  - 100% → "Product and Graphic Design"
  - Text swap is a crisp fade or instant swap at each milestone (no jarring layout shift).
- **FR11:** On reaching 100%: `.status-row` fades out (opacity 0, ~0.4s), while `h1.main-title` scales down and translates into its final position as the site's header logo/name — a seamless morph from preloader to live header (cubic-bezier easing, e.g., `cubic-bezier(0.25, 1, 0.5, 1)`).
- **FR12:** Preloader must not block indefinitely if resources are slow — include a max-duration fallback (e.g., force-complete at 3s) so users are never stuck.
- **FR13:** Preloader respects `prefers-reduced-motion`: if set, skip animation and reveal content near-instantly.

### 5.3 Home Section
- **FR14:** Full-viewport (or near-full) hero section, anchor id `#home`.
- **FR15:** Primary headline foregrounds **Web & App Development** and **Product & Graphic Design** as core services.
- **FR16:** Supporting line/tagline may reference Excel Modeling and AI Integration as additional skills (secondary weight vs. headline).
- **FR17:** Includes a primary CTA (e.g., "Get in Touch" or "View Work") linking to Contact or Works section.
- **FR18:** Kinetic typography distortion effect applied to headline text (liquid/wave displacement effect), implemented via GSAP animating an SVG `<feDisplacementMap>` filter.

### 5.4 About Section
- **FR19:** Anchor id `#about`. Contains a personality/approach/values-driven narrative (not deep technical case studies).
- **FR20:** Optional structured sub-blocks (e.g., "Skills," "Approach," "Tools") listing: Web/App Development, Product & Graphic Design, Excel Modeling, AI Integration.
- **FR21:** Scroll-reveal animation (GSAP ScrollTrigger) applied to text blocks as they enter viewport.
- **FR22:** Split-text animation (GSAP SplitText) applied to key headings/statements within this section.

### 5.5 Works Section
- **FR23:** Anchor id `#works`. Displays projects in a **static grid layout** (not modal/detail pages).
- **FR24:** Each grid item includes: project title, tag/category label, and an external link-out (to live site and/or GitHub repo).
- **FR25:** Captions are outcome-focused (e.g., "Reduced client's manual reporting time by X"), not technical breakdowns — content to be supplied by Samuel later; build should treat project content as placeholder-ready.
- **FR26:** Grid items apply scroll-reveal animation on entry; hover state provides subtle visual feedback (no magnetic/cursor-follow effects).

### 5.6 Testimonials
- **FR27:** Dedicated standalone visual block (positioned between About and Works), not tied to its own header nav anchor. Each entry carries name, role/company, and short quote.
- **FR28:** Carousel supports manual navigation (dots or arrows) and works on touch (swipe) for mobile/tablet.
- **FR29:** Design must look complete/balanced even with as few as 2–3 entries (not visually sparse).

### 5.7 Contact Section
- **FR30:** Anchor id `#contact`. Includes, all as **vertical text links** (no icons):
  - Mailto link (direct email CTA).
  - "Connect" group: LinkedIn, Instagram (text links).
  - "CV" group: "Download CV" (text link to PDF).
- **FR31:** No contact form, no backend dependency — purely static links.

### 5.8 Effects Summary (cross-cutting)
- **FR32: Custom preloader** — specified above (5.2), built with a GSAP timeline sequencing the percentage counter, role-word swaps, and exit morph.
- **FR33: Scroll-reveal** — GSAP ScrollTrigger applied to About, Works, and Testimonials content blocks as they enter viewport (fade+translate, consistent easing/timing across site, one-time trigger via `once: true`).
- **FR34: Split-text animation** — GSAP SplitText applied to key headings (Home headline, About section headers) on load/scroll-in.
- **FR35: Kinetic typography distortion** — liquid/wave text distortion effect (SVG `<feDisplacementMap>` animated via GSAP) applied primarily to the Home headline (optionally section headers).
- **FR36:** No cursor-follow or magnetic button effects (explicitly excluded).
- **FR37:** All effects must degrade gracefully — reduced-motion users get static/instant equivalents (ties to FR13).

---

## 6. Non-Functional Requirements

### 6.1 Performance
- **NFR1:** Initial page load (excluding preloader animation time) should target **under 2.5s** on a standard broadband connection; total JS payload kept lean given vanilla stack (no framework overhead).
- **NFR2:** Animations must run at a stable **60fps** on modern mid-range devices — prefer CSS transitions/transforms and GSAP's optimized engine over layout-triggering properties.
- **NFR3:** Images (project thumbnails, hero visuals) must be optimized/compressed and served in modern formats (e.g., WebP) with appropriate sizing for responsive breakpoints.
- **NFR4:** Preloader's max-duration fallback (FR12) ensures perceived performance never blocks real usability.

### 6.2 Responsiveness
- **NFR5:** Fully responsive across **mobile, tablet, and desktop** breakpoints (e.g., ~375px, ~768px, ~1024px, ~1440px as reference widths).
- **NFR6:** Kinetic typography and split-text effects must have simplified or scaled-down variants on mobile (avoid overflow/clipping on smaller viewports).
- **NFR7:** Touch targets (nav links, CTA buttons, carousel controls) meet minimum tap-friendly sizing (~44x44px).

### 6.3 Browser Support
- **NFR8:** Prioritize latest 2 versions of modern evergreen browsers (Chrome, Firefox, Safari, Edge). No legacy IE support required.
- **NFR9:** Graceful feature detection for advanced CSS/JS (e.g., SVG filters for distortion effect) — fallback to a simpler static state if unsupported, rather than breaking layout.

### 6.4 Accessibility
- **NFR10:** Respect `prefers-reduced-motion` across all effects (ties to FR13/FR37).
- **NFR11:** Sufficient color contrast maintained in both light and dark mode (WCAG AA minimum for text).
- **NFR12:** All interactive elements (nav, CTA, carousel, dark-mode toggle) keyboard-navigable and screen-reader labeled (semantic HTML, ARIA where needed). Split-text elements must use `aria-label` on the container and `aria-hidden` on individual split units so screen readers announce full text, not fragmented characters.
- **NFR13:** Alt text required for all project/testimonial images.

### 6.5 Maintainability
- **NFR14:** Codebase organized in plain, modular HTML/CSS/JS (no build tooling/bundler/framework required). GSAP (core + ScrollTrigger + SplitText) included via CDN `<script>` tag — free for commercial use.
- **NFR15:** Content areas (Works grid items, testimonials, roles list) structured so Samuel can update text/links/images directly in the HTML without needing to touch animation logic.
- **NFR16:** Clear file/folder structure (e.g., `/assets`, `/css`, `/js`) for future scalability as more projects are added.
- **NFR19:** Split-text elements should re-split responsively on resize (e.g., GSAP SplitText's `autoSplit` option) so headline/heading effects don't break when resizing across breakpoints.

### 6.6 Hosting & Deployment
- **NFR17:** Deployable to **Netlify or Vercel**, connected to a custom domain.
- **NFR18:** Static-site only — no server-side/backend requirement (consistent with mailto-only contact approach).

---

## 7. Design Considerations

### 7.1 Visual Style
- Background: off-white/cream (e.g., `#F9F9F9`), text: near-black/charcoal — consistent across all sections.
- Font: Neue Montreal (primary) with SF Pro as fallback/alternative — sans-serif throughout, including the preloader, with weight contrast (e.g., light body text vs. bold/heavy headlines) used for visual hierarchy instead of color or serif contrast.
- Layout: generous whitespace, large confident headline typography, minimal ornamentation.

### 7.2 Dark Mode
- Toggle placed at the right end of the header nav (sun/moon icon).
- Dark mode palette: near-black background, off-white text — mirrored contrast of light mode, not a separate color scheme.
- Toggle state persisted via localStorage; respects system preference (`prefers-color-scheme`) as initial default if no stored preference exists.

### 7.3 Effects Detail (implemented via GSAP)
- **Kinetic typography distortion:** liquid/wave displacement filter (SVG `<feDisplacementMap>`), animated via GSAP, applied to Home headline; intensity subtle enough to remain legible.
- **Split-text animation:** GSAP SplitText, word-by-word or character-by-character reveal (translateY + opacity), staggered timing (~30–50ms per unit); accessibility handling per NFR12.
- **Scroll-reveal:** GSAP ScrollTrigger, consistent fade+translateY (e.g., 20–30px) on viewport entry, one-time trigger (`once: true`).
- **Preloader:** GSAP timeline as detailed in FR7–FR13 / FR32.

### 7.4 Iconography & Imagery
- No social/CV icons — all links (LinkedIn, Instagram, CV) are styled text links in a vertical stack (see Contact layout below).
- Project thumbnails/work grid images should have consistent aspect ratio for grid uniformity.

### 7.5 Contact/Footer Layout
All links are vertical text links, no icons:
```
Contact
[mailto link]

Connect
LinkedIn
Instagram

CV
Download CV
```

---

## 8. Success Metrics

Since the primary goal is attracting freelance clients (with secondary job-application and networking value), metrics should reflect **engagement and conversion**, not just traffic:

| Metric | Target / Signal | Why it matters |
|---|---|---|
| **Contact action rate** | % of visitors who click mailto/social links in Contact section | Direct proxy for freelance lead generation |
| **CV download rate** | % of visitors who download CV | Signals recruiter/networking interest |
| **Average session duration** | Meaningfully above a bounce-level (~10–15s); aim for 45s+ | Suggests visitors are engaging with Works/About, not bouncing immediately |
| **Scroll depth** | % of visitors reaching Works and Contact sections | Confirms the one-page structure is being explored, not just the hero |
| **Bounce rate** | Kept low relative to typical portfolio benchmarks | High bounce may indicate preloader/effects friction or unclear hero messaging |
| **Page load performance** | Core Web Vitals passing (LCP, CLS, INP within "Good" thresholds) | Directly ties to NFR1–NFR2; poor performance undermines the "craft" the site is meant to demonstrate |
| **Cross-device consistency** | No major usability drop-off on mobile vs. desktop (session duration/bounce comparable) | Validates NFR5–NFR7 responsiveness work |
| **Qualitative feedback** | Direct inbound messages referencing the site's design/effects positively | Since this audience is small/early-stage, qualitative signal matters as much as analytics |

*Note: precise numeric conversion targets aren't meaningful yet without baseline traffic — treat the above as **tracked signals** initially (via a lightweight, privacy-respecting analytics tool) rather than hard KPIs, and revisit targets after the first 1–3 months live.*

---

## 9. Open Questions

1. **Project content** — actual project entries (titles, tags, links, outcome captions) are pending; Works section must be built to accept placeholder-ready content per FR25.
2. **Testimonial content** — exact quotes/names/roles for the 2–3 testimonials are pending.
3. **Analytics tool choice** — not yet confirmed (e.g., Plausible, Vercel Analytics, or none for v1).
4. **Domain name** — the specific custom domain to be connected via Netlify/Vercel is not yet specified.
5. **Final hosting choice** — Netlify *or* Vercel was given as an either/or; final pick may affect deployment-specific config (e.g., `netlify.toml` vs. `vercel.json`), though both support static sites equivalently.
6. **CV file** — an actual PDF resume needs to be produced/finalized to link in the Contact/footer.

---

## Appendix: Technical Stack Summary

- **Languages:** HTML, CSS, vanilla JavaScript (no React/frameworks)
- **Animation library:** GSAP (core) + ScrollTrigger + SplitText — all free, including for commercial use
- **Fonts:** Neue Montreal (primary), SF Pro (fallback)
- **Hosting:** Netlify or Vercel, with custom domain
- **Analytics:** TBD (open question)
- **No backend / no contact form** — mailto and static text links only
