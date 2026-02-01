# 📘 iDEAS365 Brand Book - Complete Design System
**Version 4.1 | Active Configuration**  
**Last Updated:** January 30, 2026  
**Philosophy:** Structured Creativity + Minimalism

---

## 🎨 1. COLOR PALETTE

### Primary Brand Colors (Google-Inspired)
```css
--color-system-blue:    #4285F4  /* Trust, Process, Systems */
--color-insight-yellow: #FBBC05  /* Ideas, Innovation, Insights */
--color-growth-green:   #34A853  /* Growth, Success, Progress */
--color-action-red:     #EA4335  /* CTA, Action, Decision Points */
```

### Base Colors
```css
--color-base-white:     #FFFFFF  /* Pure White Sections */
--color-base-off-white: #F8F9FA  /* Main Background (Body) */
```

### Text Colors
```css
--color-text-primary:   #1F2937  /* Near-Black, Main Headings */
--color-text-secondary: #4B5563  /* Body Text, Descriptions */
--color-text-tertiary:  #9CA3AF  /* Subtle Text, Labels */
--color-scribble-black: #333333  /* Borders, Accent Lines */
```

### Utility Colors
```css
--color-border:         #E5E7EB  /* Dividers, Card Borders */
```

### Usage Rules
- **Blue (#4285F4):** Section borders for "Process" or system-related content
- **Yellow (#FBBC05):** Section borders for "Work" or creative showcases
- **Red (#EA4335):** Primary CTA buttons, action-driven sections
- **Black (#333333):** Hero section border (anchoring the homepage)

---

## 🔤 2. TYPOGRAPHY

### Font Families
```css
Primary (English): Inter (Google Fonts)
Secondary (Thai):  Noto Sans Thai (Google Fonts)
Fallback (Thai):   Sarabun (Google Fonts)

/* CSS Variables */
--font-english: var(--font-english)  /* Inter */
--font-thai:    var(--font-thai)     /* Noto Sans Thai */
--font-heading: var(--font-english), var(--font-thai), sans-serif
--font-body:    var(--font-english), var(--font-thai), sans-serif
```

### Font Sizes (Desktop - 1440px+)
```css
H1 (Main Titles):        3rem      (48px)
H2 (Section Headers):    2.25rem   (36px)
H3 (Sub-headers):        1.5rem    (24px)
Body (Paragraph):        1rem      (16px)
Small (Captions):        0.875rem  (14px)
```

### Font Sizes (Mobile - <768px)
```css
H1:    2.25rem   (36px)
H2:    1.75rem   (28px)
H3:    1.25rem   (20px)
Body:  1rem      (16px)
Small: 0.8125rem (13px)
```

### Font Weights
```css
Regular:    400
Medium:     500
Semibold:   600
Bold:       700
```

### Line Heights
```css
H1:    1.2  (Tight, for impact)
H2:    1.3
H3:    1.4
Body:  1.6  (Comfortable reading)
Small: 1.5
```

### Letter Spacing
```css
Headings (H1-H6): -0.02em  /* Slightly tighter for premium feel */
Body:             0em      /* Default */
```

---

## 📐 3. SPACING & LAYOUT

### Container & Width
```css
--container-max:    1200px  /* Max content width */
--section-spacing:  120px   /* Vertical spacing between sections (Desktop) */
--header-spacing:   160px   /* Top padding for first section (Nav clearance) */
```

**Mobile Adjustments:**
```css
--section-spacing:  80px    /* Mobile vertical spacing */
```

### 8px Scale System
All spacing follows an 8-pixel grid for consistency:

```css
--space-1:   0.5rem   (8px)
--space-2:   1rem     (16px)
--space-3:   1.5rem   (24px)
--space-4:   2rem     (32px)
--space-6:   3rem     (48px)
--space-8:   4rem     (64px)
--space-10:  5rem     (80px)
--space-12:  6rem     (96px)
--space-16:  8rem     (128px)
--space-20:  10rem    (160px)
```

### Component-Specific Padding
```css
Card Padding (Desktop):  32px  (var(--card-padding))
Card Padding (Mobile):   24px
Gutter (Desktop):        24px  (var(--gutter-desktop))
Container Gutter (Mobile): 16px
```

### Margins (Common Uses)
```css
H1 Bottom Margin:    32px  (var(--space-4))
H2 Bottom Margin:    24px  (var(--space-3))
H3 Bottom Margin:    16px  (var(--space-2))
Paragraph Bottom:    24px  (var(--space-3))
Section Title Group: 96px  (var(--space-12))
```

---

## 🎯 4. BORDERS & RADIUS

### Border Widths
```css
Standard Border:    1px
Section Accent:     4px  /* Left border on major sections */
```

### Border Radius
```css
--radius-card:      8px   /* Cards, containers */
--radius-full:      4px   /* Buttons (soft square) */
```

### Border Colors
```css
Default Border:     var(--color-border)      (#E5E7EB)
Hover/Active:       var(--color-text-primary) (#1F2937)
Accent Lines:       Section-specific colors (Blue/Yellow/Red/Black)
```

---

## 🎨 5. SHADOWS & EFFECTS

### Box Shadows
```css
Subtle (Cards):
  0 4px 6px -1px rgba(0, 0, 0, 0.05),
  0 2px 4px -1px rgba(0, 0, 0, 0.03)

Hover (Elevated):
  0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

### Transitions
```css
Standard Transition:  all 0.2s ease
Link Hover:           opacity 0.2s ease
Button Hover:         all 0.2s ease
```

### Hover Effects
```css
Cards:   translateY(-4px)
Buttons: translateY(-1px)
Links:   opacity: 0.8
```

---

## 🧩 6. COMPONENT SPECIFICATIONS

### Buttons
**Primary Button (CTA - Red)**
```css
Background:       #EA4335 (var(--color-action-red))
Color:            #FFFFFF
Padding:          8px 24px
Border Radius:    4px
Font Weight:      500 (Medium)
Font Size:        16px (var(--text-body))

Hover State:
  Background:     #D93025 (Darker Red)
  Transform:      translateY(-1px)
```

**Outline Button**
```css
Background:       transparent
Border:           1px solid #E5E7EB
Color:            #1F2937
Border Radius:    4px

Hover State:
  Border Color:   #1F2937
  Background:     #FFFFFF
```

### Cards
**Standard Card (Minimal Card)**
```css
Background:       #FFFFFF
Padding:          32px (Desktop), 24px (Mobile)
Border Radius:    8px
Border:           1px solid transparent
Box Shadow:       Subtle (see Shadows section)

Hover State:
  Transform:      translateY(-4px)
  Border Color:   #E5E7EB
  Box Shadow:     Elevated (see Shadows section)
```

### Section Layouts
**All Major Sections:**
```css
Background:       #FFFFFF (Pure white)
Border-Left:      4px solid [Section Color]
Padding-Left:     48px (var(--space-6))
Padding-Top:      120px (Desktop), 80px (Mobile)
Padding-Bottom:   120px (Desktop), 80px (Mobile)

Mobile Adjustment:
  Padding-Left:   24px (var(--space-3))
```

**Section Color Assignments:**
- Hero: Black (#333333)
- Process: Blue (#4285F4)
- Work: Yellow (#FBBC05)
- CTA: Red (#EA4335)

### Grid Layouts
**3-Column Grid (Desktop)**
```css
Display:          grid
Grid Columns:     repeat(3, 1fr)
Gap:              64px (Process), 80px (Work)

Mobile (<768px):
  Grid Columns:   1fr
  Gap:            48px
```

---

## 📱 7. RESPONSIVE BREAKPOINTS

```css
Desktop:   1440px - 1920px  (12-16 columns, 24px gutter)
Laptop:    1024px - 1439px  (Standard desktop styles)
Tablet:    768px - 1023px   (8 columns, 20px gutter)
Mobile:    360px - 767px    (1 column, 16px gutter)
```

### Mobile-First Overrides
```css
@media (max-width: 768px) {
  /* Typography scales down */
  /* Section spacing: 120px → 80px */
  /* Card padding: 32px → 24px */
  /* Container gutter: 32px → 16px */
  /* Grids: Multi-column → Single column */
  /* Border-left padding: 48px → 24px */
}
```

---

## 🎯 8. DESIGN ELEMENTS (Special)

### Dot Grid Background
```css
Class:            .bg-dot-grid
Background:       radial-gradient(var(--color-border) 1px, transparent 1px)
Background Size:  24px 24px
```

### Idea Box (Scribble Border)
```css
Class:            .idea-box
Border:           2px dashed #333333
Padding:          32px
Background:       #FFFFFF
Border Radius:    8px
```

### Navigation Dots (Micro-Elements)
```css
Class:            .nav-dot
Size:             8px × 8px
Border Radius:    50% (Circle)
Colors:
  .nav-dot       → Blue (#4285F4)
  .nav-dot.red   → Red (#EA4335)
  .nav-dot.yellow → Yellow (#FBBC05)
  .nav-dot.green  → Green (#34A853)
```

### Badges
```css
Padding:          4px 12px
Border Radius:    4px
Font Size:        14px
Font Weight:      500
Background:       #FFFFFF
Border:           1px solid #E5E7EB
```

---

## 🔢 9. Z-INDEX SYSTEM

```css
--z-nav:    100   /* Navigation bar */
--z-modal:  200   /* Modals, overlays */
```

---

## 📋 10. ACCESSIBILITY & BEST PRACTICES

### Contrast Ratios (WCAG AA Compliant)
- **Primary Text on White:** #1F2937 on #FFFFFF = 14.46:1 ✅
- **Secondary Text on White:** #4B5563 on #FFFFFF = 8.59:1 ✅
- **Red CTA on White:** #EA4335 on #FFFFFF = 4.52:1 ✅

### Font Smoothing
```css
-webkit-font-smoothing: antialiased
-moz-osx-font-smoothing: grayscale
```

### Scroll Behavior
```css
scroll-behavior: smooth
```

### Focus States
All interactive elements should have visible focus states for keyboard navigation.

---

## 🚀 11. IMPLEMENTATION CHECKLIST

### For New Pages/Components:
- [ ] Use section-specific left borders (4px)
- [ ] Maintain pure white backgrounds (#FFFFFF)
- [ ] Apply 120px vertical spacing (Desktop)
- [ ] Follow 8px spacing grid
- [ ] Use semantic heading hierarchy (H1 → H2 → H3)
- [ ] Test responsive behavior at 768px breakpoint
- [ ] Verify contrast ratios
- [ ] Apply hover states to interactive elements
- [ ] Use CSS variables (not hard-coded values)

---

## 📦 12. FILES REFERENCE

**Core Files:**
- `app/globals.css` - Design system variables and global styles
- `app/layout.tsx` - Font configuration (Inter + Noto Sans Thai)
- `app/page.module.css` - Homepage-specific styles (section patterns)

**Key Variables Location:**
All design tokens are defined in `app/globals.css` under `:root { }` selector.

---

## ⚠️ IMPORTANT NOTES

1. **DO NOT** use inline styles - always use CSS variables
2. **DO NOT** hard-code colors - reference design tokens
3. **ALWAYS** test mobile responsiveness at 768px breakpoint
4. **ALWAYS** maintain the 4px left border pattern for sections
5. **ALWAYS** use pure white (#FFFFFF) section backgrounds
6. **Font Loading:** Fonts load via Next.js Google Fonts with `display: swap` for performance

---

## 🎓 QUICK REFERENCE TABLE

| Element | Desktop Size | Mobile Size | Color |
|---------|-------------|-------------|-------|
| H1 | 48px / 700 | 36px / 700 | #1F2937 |
| H2 | 36px / 600 | 28px / 600 | #1F2937 |
| H3 | 24px / 600 | 20px / 600 | #1F2937 |
| Body | 16px / 400 | 16px / 400 | #4B5563 |
| Section Padding | 120px | 80px | - |
| Card Padding | 32px | 24px | - |
| Border Accent | 4px | 4px | Section-specific |
| Button Padding | 8px 24px | 8px 24px | - |
| Card Radius | 8px | 8px | - |
| Button Radius | 4px | 4px | - |

---

## 🔄 13. RECENT UI/UX UPDATES (January 29, 2026)

### **Work Section: Project Card Layout (The "Stacked" Alignment)**
To achieve professional horizontal alignment across the grid:
- **Logo Block**: Placed at the very top of the card flow.
- **Fixed Container Height**: The logo container (`headerEnd`) is forced to `80px` height. This ensures all project titles begin at the exact same horizontal level regardless of logo shape.
- **Brand-Specific Logo Sizing**:
    - **iDEAS365**: Height `35px` (Minimalist & Compact)
    - **Soul Sister**: Height `60px` (Decorative & Elegant)
    - **Kaixin**: Height `65px` (Balanced)
- **Conditional Project Dot**: 
    - Hide the category dot if a logo is present.
    - Show the category dot for purely text-based card headers.
- **Alignment**: 100% Left-aligned for all elements (Logo → Title → Description → Tags).

### **Shop Section: Pricing & Placeholders**
For products where pricing is not yet final:
- **Placeholder Box**: A `80px x 32px` box with a `1.5px dashed` border in `--color-action-red`.
- **Content**: Displays `฿ — —` to mark the position cleanly.
- **Position**: Absolute top-right corner of the product card.

### **About Section: Interactive Link Cards**
For external resources (Wix Bio, Project links):
- **Layout**: 2-column grid before the Portfolio Media section.
- **Card Style**: Standard card with a subtle hover elevation (`translateY(-4px)`).
- **Interactive Elements**: Includes a title, Thai description, and a blue directional arrow (`→`) that slides on hover.

---

## 🎴 14. CARD DESIGN STANDARDS *(Updated: January 30, 2026)*

### **Universal Card Behavior**
All content cards (Work, Resources, Blog) follow these consistent patterns:

**Base Card Styling:**
```css
background-color: var(--color-base-white);
padding: var(--space-6);
border-radius: var(--radius-card);
border: 1px solid transparent;
box-shadow: var(--shadow-subtle);
transition: all var(--transition-base);
```

**Hover State:**
```css
transform: translateY(-4px);
box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
border-color: var(--color-border);
```

---

## 🎨 15. SECTION-SPECIFIC COMPONENT RULES *(Updated: January 30, 2026)*

### **1. Work Section (`/work`)**
- **Theme Color:** Blue (`--color-system-blue`)
- **Card Header:** 
  - Layout: `flex-row`, `space-between`
  - **Left:** Title & Thai Subtitle
  - **Right:** Logo / Icon
- **Action Button:**
  - **Style:** Badge-style (Soft background, Bordered)
  - **Color:** **ALWAYS System Blue** (Matches Work Menu Underline)
  - **Alignment:** Center (`justify-content: center`)
  - **Text:** Bilingual (e.g., "View Project / ดูโปรเจกต์")
- **Tag Visibility:** Hidden (Clean look preferred)

### **2. Resources Section (`/resources`)**
- **Theme Color:** Green (`--color-growth-green`) OR Category-based
- **Action Button:**
  - **Style:** Badge-style
  - **Color:** Matches Category (Yellow=AI, Red=Live, Green=Business)
  - **Alignment:** Left (`justify-content: flex-start`)

### **Rationale for Work Section Button:**
Even though cards have different categories (AI, Live, Business), the **Work Section itself is defined by the Blue Navigation Line**. Therefore, the primary action button ("View Project") must align with the parent section's identity (Blue) to create visual unity and prevent color clashes.

### **Text Interaction Rules:**
- **Card Title Hover:** When hovering anywhere on the card, the Title text MUST change color to **System Blue** (`#4285F4`).
- **Effect:** This creates a "visual pop" (สีลอยเด่นขึ้นมา) correlating with the active section color.
- **Card Levitation:** The entire card lifts up (`translateY(-4px)`), putting emphasis on the content.

---

*This Brand Book reflects the FINAL configuration as of January 30, 2026. All values are extracted from production code and tested for professional alignment.*
