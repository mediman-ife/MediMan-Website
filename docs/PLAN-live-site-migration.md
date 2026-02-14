# PLAN: Live Site Content Migration

## Goal
Update the newly built Next.js application to mirror the content, imagery, and structure of the live `mediman.life` website, ensuring a seamless transition for users while retaining the improved performance and SEO of the new build.

## Context
- **Current State:** Basic "lorem ipsum" / placeholder content in Next.js.
- **Target State:** Pixel-perfect content match with live site, using downloaded assets (`public/images/`) and extracted copy.
- **Assets:** Already downloaded to `public/images`.

## Task Breakdown

### Phase 1: Header & Footer Update
- [ ] **Header:**
    - Replace text logo with `logo.svg`.
    - Update nav links to match live site exactly.
- [ ] **Footer:**
    - Ensure all social links and support details match `site-analysis.md`.

### Phase 2: Home Page Migration
- [ ] **Hero Section:**
    - Replace placeholder text with: "Healthcare. Anytime. Anywhere."
    - Implement `hero-mockup.webp` using `next/image`.
    - Add `google-play.png` and `app-store.png` buttons.
- [ ] **Features Section:**
    - Create a "Why MediMan?" section.
    - Use `features-doctors.webp` as the illustrative image.
    - Copy icons/text for "Book in Minutes", "Reports", "Family Care".

### Phase 3: Content Polish
- [ ] **About Page:** Update mission statement to match live site.
- [ ] **FAQ Page:** Verify questions list against live site (currently matches well).
- [ ] **Global:** Ensure brand colors (`#CC0052`, `#1751C2`) are applied consistently to buttons and highlights.

## Verification
- [ ] **Visual Check:** Compare `localhost:3000` side-by-side with `mediman.life`.
- [ ] **Asset Check:** All images load correctly without distortion.
- [ ] **Mobile Check:** Responsive behavior matches or exceeds live site.
