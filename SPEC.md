# Graphic Designer Portfolio Specification

## Project Overview
- **Project Name**: Hemanshi Ghoghari - Graphic Designer Portfolio
- **Project Type**: Single-page premium portfolio website
- **Core Functionality**: Showcase graphic design services, portfolio work, and contact information for a freelance designer specializing in legal, business, and social media branding
- **Target Users**: Potential clients on Instagram, Behance, and freelance platforms seeking premium branding services

---

## UI/UX Specification

### Layout Structure

**Page Sections (in order)**:
1. Navigation Bar (fixed)
2. Hero Section
3. About Section
4. Services Section
5. Portfolio Showcase Section
6. Pricing Section
7. Why Choose Me Section
8. Brand Feel / Testimonial Section
9. Contact Section
10. Footer

**Responsive Breakpoints**:
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns where applicable)
- Desktop: > 1024px (full multi-column layouts)

---

### Visual Design

**Color Palette**:
- Primary Background: #0a0f1a (Deep dark navy/black)
- Secondary Background: #111827 (Dark charcoal)
- Card Background: #1a2332 (Navy-tinted dark)
- Beige Accent: #d4c4a8 (Warm beige)
- Soft Gray Text: #9ca3af
- Muted Blue: #64748b (Slate blue)
- Accent Blue: #3b82f6 (Bright accent for CTAs)
- White Text: #f8fafc
- Subtle Border: rgba(212, 196, 168, 0.15)

**Typography**:
- Headings: "Playfair Display" (serif, elegant) for luxury feel
- Body/UI: "DM Sans" (modern sans-serif, clean)
- Hero Title: 56px (desktop), 36px (mobile)
- Section Titles: 40px (desktop), 28px (mobile)
- Body Text: 16px
- Small/Labels: 14px

**Spacing System**:
- Section Padding: 100px vertical (desktop), 60px (mobile)
- Container Max Width: 1200px
- Card Padding: 32px
- Grid Gap: 24px
- Element Margins: 16px, 24px, 32px increments

**Visual Effects**:
- Glassmorphism cards: background blur, semi-transparent backgrounds
- Subtle gradient overlays on dark sections
- Soft box shadows: 0 20px 40px rgba(0, 0, 0, 0.3)
- Rounded corners: 16px for cards, 8px for buttons
- Floating animation for portfolio mockups
- Smooth hover transitions (0.3s ease)
- Subtle grain texture overlay on hero

---

### Components

**Navigation**:
- Fixed top, transparent background with blur on scroll
- Logo (designer name) on left
- Nav links on right: Home, About, Services, Portfolio, Pricing, Contact
- Mobile: hamburger menu

**Hero Section**:
- Full viewport height
- Centered content with designer name/logo
- Title: "Graphic Designer & Branding Specialist"
- Tagline: "Professional Social Media, Branding & Business Design Solutions"
- CTA button with glassmorphism effect
- Decorative floating shapes/elements

**About Section**:
- Two-column layout (image placeholder + text)
- Brief intro paragraph
- Specialization bullet points with icons

**Services Section**:
- Grid of 8 cards (4x2 on desktop, 2x4 on tablet, 1x8 on mobile)
- Each card: icon, title, brief description
- Cards with subtle hover lift effect
- Services: Logo Design, Business Card Design, Social Media Posts, Instagram Branding, Banner Design, Flyer Design, Advertisement Creatives, Property & Legal Branding

**Portfolio Showcase**:
- Masonry/grid layout with varying sizes
- Floating phone and laptop mockups using CSS
- Image categories indicated by labels
- Hover zoom effect on images
- Categories: GST registration posts, Property services, Gujarati creatives, Business cards, Logo concepts, Instagram posts

**Pricing Section**:
- 3-column pricing cards (desktop)
- Each card: package name, price, features list, CTA button
- Highlighted "Popular" badge on middle card
- Pricing: Social Media Post Design, Logo Design, Business Card Design, Banner Design, Monthly Packages

**Why Choose Me Section**:
- Feature grid (2x3)
- Icon + title + description
- Modern checkmark style icons

**Brand Feel Section**:
- Large hero-style background
- Overlapping cards showing:
  - Legal document mockups
  - Phone with social media screens
  - Laptop with branding
  - Stationery items

**Contact Section**:
- Centered CTA heading
- Contact methods in row: WhatsApp, Instagram, Email, Phone
- Each with icon and clickable link
- Secondary contact form option

**Footer**:
- Minimal design
- Copyright text
- Social media icons

---

## Functionality Specification

**Core Features**:
- Smooth scroll navigation
- Responsive design across all breakpoints
- Hover interactions on all clickable elements
- Floating animations on portfolio items
- Scroll-triggered fade-in animations for sections

**User Interactions**:
- Click nav links → smooth scroll to section
- Hover cards → subtle lift and glow
- Click contact buttons → open respective app (WhatsApp, email, phone)
- Hover portfolio images → zoom effect

**Data Handling**:
- Static content (no backend)
- Contact links use proper URL schemes (tel:, mailto:, https://)

---

## Acceptance Criteria

1. Page loads without errors
2. All 9 sections are visible and properly styled
3. Navigation links work and scroll smoothly
4. Responsive layout works on mobile, tablet, desktop
5. Color palette matches specified colors exactly
6. Typography uses Playfair Display and DM Sans fonts
7. Glassmorphism effects visible on cards
8. Portfolio mockups display with floating effect
9. Contact buttons open correct apps/links
10. Hover effects work on all interactive elements
11. Animations are smooth and performant
12. Overall aesthetic feels premium, agency-level, and Instagram-ready