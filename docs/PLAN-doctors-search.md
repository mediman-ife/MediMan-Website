# PLAN: Doctors List & Search with Powerful SEO

## Goal
Build a high-performance "Doctors List" page (`/doctors`) where users can filter by `specialty` and `location`. The page must be SEO-optimized (generate unique URLs for filters like "Cardiologists in Jaffna") and match the MediMan brand identity.

## Context
- **Backend:** Existing API provides doctor list and profiles.
- **Tech Stack:** Next.js App Router (Server Components).
- **SEO Strategy:** URL-driven state (`?specialty=x&location=y`) for indexable landing pages.
- **Brand Colors:**
    - Primary: `#CC0052` (Red/Pink), `#1751C2` (Blue)
    - Alternate: `#7E57C2` (Purple)

## Task Breakdown

### Phase 1: Data Layer & Types
- [ ] **Define Interfaces** (`/types/doctor.ts`)
    - `Doctor` interface matching backend response (id, name, specialty, location, image, etc.).
- [ ] **Create Server Action** (`/actions/getDoctors.ts`)
    - Function to fetch data from backend.
    - Accepts filter params (`specialty`, `location`, `query`).
    - *Verification:* `console.log` data in a server component to confirm fetch works.

### Phase 2: UI Components (Shadcn/UI + Brand Colors)
- [ ] **Doctor Card Component**
    - Display: Photo, Name, Specialty, Location, "Book Now" button.
    - Styling: Use primary blue (`#1751C2`) for accents, white background, shadow on hover.
    - *Verification:* Renders correctly with mock data.
- [ ] **Filter Sidebar / Top Bar**
    - Inputs: Search bar, Specialty dropdown, location dropdown.
    - Logic: Updates URL search params on change.
    - *Verification:* Changing a filter updates the URL (`/doctors?location=Jaffna`).

### Phase 3: The Doctors Page (`/app/doctors/page.tsx`)
- [ ] **Server Rendering Strategy**
    - Page receives `searchParams`.
    - Fetches filtered data on the server (SEO friendly).
    - Passes data to `DoctorList` (Client Component) or renders directly.
    - Handles "Empty State" (no doctors found).
    - *Verification:* Visiting `/doctors?specialty=Dentist` shows only dentists.

### Phase 4: SEO & Performance
- [ ] **Metadata Generation**
    - Dynamic title/description based on filters (e.g., "Best Dentists in Jaffna | MediMan").
- [ ] **Structured Data (JSON-LD)**
    - Inject `Physician` or `MedicalOrganization` schema for Google Rich Results.
- [ ] **Performance Polish**
    - Use `next/image` for optimized doctor photos.
    - Implement loading skeletons during transitions.

## Done When
- [ ] Search query "Cardiologist in Jaffna" lands on a pre-filtered, server-rendered page.
- [ ] "Book Now" buttons are visible and styled with brand colors.
- [ ] Google Rich Results test confirms valid schema markup.
