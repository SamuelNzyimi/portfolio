---
name: Bauhaus Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#ffb4a2'
  on-secondary: '#611200'
  secondary-container: '#ff562b'
  on-secondary-container: '#550e00'
  tertiary: '#ffffff'
  on-tertiary: '#002780'
  tertiary-container: '#dce1ff'
  on-tertiary-container: '#0052f7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a2'
  on-secondary-fixed: '#3c0700'
  on-secondary-fixed-variant: '#891d00'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b6c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b3'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
This design system is a dark-mode evolution of Bauhaus modernism, emphasizing functionalism, geometric purity, and a "form follows function" philosophy. The aesthetic is rooted in the "less is more" principle, utilizing high-contrast accents and mathematical precision to create a focused, high-end digital environment.

The target audience consists of design-conscious professionals, architects, and technologists who value clarity over decoration. The UI evokes a sense of intellectual rigor and nocturnal sophistication, using the near-black canvas to make content feel like illuminated objects in a gallery space. The style is **Minimalist** with a touch of **Brutalist** structure, relying on grid discipline rather than ornamentation.

## Colors
The palette is strictly controlled to maintain the modernist aesthetic. 
- **Neutral:** The foundation is a near-black (#121212), providing a deep, non-distracting void. Text is an off-white/cream (#F9F9F9) to reduce ocular strain while maintaining high legibility.
- **Primary:** The off-white also serves as the primary action color for high-visibility components.
- **Secondary & Tertiary:** We use "Signal Colors"—Bauhaus Red (#FF3E00) and Cobalt Blue (#0055FF)—sparingly for status indicators, active states, or critical calls to action. 
- **Surface:** A slightly elevated grey (#1E1E1E) defines containers and interactive zones.

## Typography
**Hanken Grotesk** is used across all levels to maintain a unified, engineered look. 
- **Headlines:** Set with tight tracking and heavy weights. Large display type should feel architectural, almost like part of the layout's structural grid.
- **Body:** Generous line-height (1.6) is essential for readability against the dark background to prevent "halation" (the glow effect of light text on dark).
- **Labels:** Small labels utilize uppercase styling and increased letter spacing to echo the functionalist signage of the early 20th century.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy based on an 8px square module. 
- **Grid:** A 12-column system for desktop (1280px max-width) and a 4-column system for mobile.
- **Rhythm:** Spacing is aggressive and mathematical. Use `lg` (48px) and `xl` (80px) to create distinct "zones" of information. 
- **Alignment:** Strict left-alignment for all text elements. Avoid centering unless for singular, high-impact display moments. All elements should feel "snapped" to the grid lines.

## Elevation & Depth
In this dark modernist system, depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.
- **Layers:** The background is #121212. Elevated components (cards, menus) use #1E1E1E.
- **Borders:** Use subtle, 1px solid borders (#2A2A2A) to define shapes. 
- **Focus:** Avoid blurs or frosted glass. Depth is binary—an object is either on the base layer or on the surface layer. 
- **Active State:** High-contrast color shifts (e.g., a background turning from #1E1E1E to #F9F9F9) indicate the highest level of elevation/focus.

## Shapes
In keeping with the Bauhaus aesthetic, the shape language is strictly **Sharp (0)**. 
- All corners are 90-degree angles. 
- Circles are only permitted for specific functional icons (radio buttons) or profile avatars to provide a deliberate geometric contrast to the rectangular grid.
- Dividers are 1px solid lines, extending to the edge of containers to reinforce the grid structure.

## Components
- **Buttons:** Primary buttons are solid #F9F9F9 with #121212 text. Secondary buttons are transparent with a 1px #F9F9F9 border. No rounded corners.
- **Inputs:** Fields are defined by a bottom-border only (2px solid #2A2A2A). When active, the border shifts to #F9F9F9 or #0055FF.
- **Cards:** Cards use the Surface color (#1E1E1E) with no shadow. Use a 1px border (#2A2A2A) for definition.
- **Chips/Tags:** Small, rectangular boxes with #2A2A2A backgrounds and label-md typography.
- **Lists:** Separated by 1px horizontal rules. Interactive list items should have a hover state that fills the background with a subtle grey (#252525).
- **Navigation:** Vertical navigation is preferred for desktop, mirroring a sidebar architectural plan. Use bold typography for the active state.