---
name: Bauhaus Modernist
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5f5d'
  on-secondary: '#ffffff'
  secondary-container: '#e2e3e1'
  on-secondary-container: '#636563'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868381'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e3e1'
  secondary-fixed-dim: '#c6c7c5'
  on-secondary-fixed: '#1a1c1b'
  on-secondary-fixed-variant: '#454746'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  bg-light: '#F9F9F7'
  text-light: '#121212'
  bg-dark: '#121212'
  text-dark: '#F9F9F7'
  border-low-contrast: rgba(18, 18, 18, 0.1)
typography:
  hero-lg:
    fontFamily: Hanken Grotesk
    fontSize: clamp(64px, 12vw, 160px)
    fontWeight: '800'
    lineHeight: '0.9'
    letterSpacing: -0.04em
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  section-title:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  nav-link:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.01em
spacing:
  container-max: 1440px
  edge-margin: clamp(2rem, 5vw, 6rem)
  section-gap: clamp(8rem, 15vw, 16rem)
  gutter: 2rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style

The design system is rooted in the "Bauhaus-minimal" movement, emphasizing functionality, geometric clarity, and the removal of the superfluous. It targets freelance clients and recruiters who value precision, technical craft, and modern aesthetics.

The visual language is defined by high-contrast typography, a restrained neutral palette, and an architectural approach to whitespace. It avoids decorative elements like shadows or gradients, relying instead on motion design (GSAP-driven kinetic distortion and split-text reveals) to provide a premium, interactive feel. The interface should feel "quiet" yet authoritative—letting the work and the motion effects serve as the primary visual interest.

## Colors

The palette is strictly monochromatic to maintain a focus on form and typography. 

- **Light Mode (Default):** Uses an off-white/cream background (`#F9F9F7`) to reduce eye strain compared to pure white, paired with deep charcoal (`#121212`) for all typographic elements and borders.
- **Dark Mode:** A direct inverse. The charcoal becomes the background and the off-white becomes the text color.

Color is never used for emphasis; instead, use font weight, scale, and motion to guide the user's eye. All borders should use low-opacity versions of the text color to maintain a soft, technical look.

## Typography

The system utilizes **Hanken Grotesk** (as a highly accessible alternative to Neue Montreal) for all roles. The hierarchy is extreme, with massive "Hero" displays contrasting against small, utility-focused labels.

- **Kinetic Effects:** The `hero-lg` and `headline-xl` levels are the primary targets for GSAP displacement filters and SplitText animations.
- **Readability:** Body text is kept at a comfortable size with generous line height to ensure clarity against the off-white background.
- **Navigation:** All navigation and functional labels use a medium weight to maintain presence without competing with headlines.

## Layout & Spacing

This design system uses a **Fixed Grid** approach with very generous safe margins and section breaks to evoke a gallery-like feel.

- **Breakpoints:** 
  - Mobile: < 768px (single column, reduced edge margins).
  - Tablet: 768px - 1024px (reduced section gaps).
  - Desktop: > 1024px (full 12-column logic).
- **Rhythm:** Section-to-section spacing is intentionally large (`section-gap`) to allow the kinetic typography effects room to breathe and clear the visual field before new content arrives. 
- **The Hero:** Should occupy `100vh` to facilitate the preloader-to-header transition logic.

## Elevation & Depth

In alignment with the Bauhaus-minimal style, the design system rejects traditional shadows and depth.

- **Tonal Layers:** Depth is created through a "Sticky" header that floats above the content with a backdrop-blur (glassmorphism) of the background color (90% opacity).
- **Outlines:** Low-contrast outlines (1px solid with 10% opacity) define the boundaries of work grid cards and input fields.
- **Z-Index Strategy:** 
  - Level 0: Background.
  - Level 1: Page content.
  - Level 2: Sticky Header.
  - Level 3: Preloader/Intro Screen (Global Overlay).

## Shapes

The design system uses **Sharp (0px)** corners for all primary UI elements, including cards, buttons, and input fields. This reinforces the "architectural" and professional tone. 

The only exception to the sharp rule is the Dark Mode toggle icon and specific motion-based UI (like a carousel dot), which may remain circular for clarity. All containers and structural blocks must maintain 90-degree angles.

## Components

### Sticky Header
A fixed container at the top of the viewport. On the left, the name "Samuel Nzyimi" (morphing from the preloader). On the right, a horizontal list of text links and the Dark Mode toggle icon.

### Work Grid Cards
Vertical layout. A large, consistent aspect-ratio image (16:9 or 4:3) on top. Below the image: Project Title (`body-md` bold), Category Label (`label-sm`), and the outcome-focused caption. The entire card acts as a hover trigger for a subtle 1px border-color change.

### Hero Section
Center or left-aligned massive typography (`hero-lg`). This section should be minimally populated to maximize the impact of the liquid distortion effect.

### Vertical Text-Link Lists (Contact)
Used in the footer/contact section. These are groups of links stacked vertically with no icons.
- **Group Label:** `section-title` (uppercase, tracked out).
- **Links:** `body-md` with a 1px underline that appears/grows on hover.

### Buttons & CTAs
Ghost buttons (text with an underline or border-bottom) are preferred. If a contained button is used, it should be a solid rectangle (no radius) with inverted text color.

### Preloader
A full-screen overlay (`#F9F9F7`) with the name centered. Below it, a thin 1px line that grows horizontally based on the load percentage, with the "Role" text swapping instantly at defined milestones (25%, 50%, 75%, 100%).