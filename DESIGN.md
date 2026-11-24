---
name: AwesomeLists
description: A typographic resource directory with paired light and dark themes.
colors:
  'background': '#f8f8f8'
  'foreground': '#090909'
  'popover': 'oklch(1 0 0)'
  'primary': '#0838d3'
  'primary-foreground': 'oklch(1 0 0)'
  'secondary': 'oklch(0.928 0.004 265)'
  'muted': 'oklch(0.945 0.002 265)'
  'muted-foreground': 'oklch(0.435 0.008 265)'
  'accent': 'oklch(0.928 0.014 265)'
  'border': '#b9b9bc'
  'input': '#545559'
  'dark-background': 'oklch(0.135 0 0)'
  'dark-foreground': 'oklch(0.945 0.003 100)'
  'dark-popover': 'oklch(0.2 0 0)'
  'dark-primary': 'oklch(0.88 0.025 265)'
  'dark-primary-foreground': 'oklch(0.135 0 0)'
  'dark-secondary': 'oklch(0.255 0 0)'
  'dark-muted': 'oklch(0.21 0 0)'
  'dark-muted-foreground': 'oklch(0.73 0.005 265)'
  'dark-accent': 'oklch(0.27 0.005 265)'
  'dark-border': 'oklch(0.37 0 0)'
  'dark-input': 'oklch(0.65 0.003 265)'
typography:
  display:
    fontFamily: 'Vend Sans, Mona Sans, sans-serif'
    fontSize: 'clamp(3.6rem, 12.2vw, 13rem)'
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: '-0.025em'
  headline:
    fontFamily: 'Vend Sans, Mona Sans, sans-serif'
    fontSize: 'clamp(3.2rem, 7.4vw, 8rem)'
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.035em'
  resource-title:
    fontFamily: 'Mona Sans, ui-sans-serif, sans-serif'
    fontSize: 'clamp(1.4rem, 2.25vw, 2.2rem)'
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: '-0.025em'
  body:
    fontFamily: 'Mona Sans, ui-sans-serif, sans-serif'
    fontSize: '1rem'
    lineHeight: 1.625
  label:
    fontFamily: 'Roboto Mono, ui-monospace, monospace'
    fontSize: '0.875rem'
    fontWeight: 500
    lineHeight: '1.25rem'
  button:
    fontFamily: 'Mona Sans, ui-sans-serif, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 500
    lineHeight: '1.25rem'
rounded:
  'sm': '4px'
  'md': '6px'
  'lg': '8px'
  'xl': '12px'
spacing:
  '2': '0.5rem'
  '3': '0.75rem'
  '4': '1rem'
  '5': '1.25rem'
  '6': '1.5rem'
  '7': '1.75rem'
  '8': '2rem'
  '10': '2.5rem'
  '11': '2.75rem'
  '12': '3rem'
  '16': '4rem'
  '20': '5rem'
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.primary-foreground}'
    typography: '{typography.button}'
    rounded: '{rounded.md}'
    padding: '8px 16px'
    height: '40px'
  button-primary-hover:
    backgroundColor: 'color-mix(in oklab, #0838d3 90%, transparent)'
  button-outline:
    backgroundColor: '{colors.background}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.md}'
    padding: '8px 16px'
    height: '40px'
  button-secondary:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.md}'
    padding: '0 12px'
    height: '32px'
  button-ghost:
    backgroundColor: 'transparent'
    textColor: '{colors.foreground}'
    rounded: '{rounded.md}'
    size: '40px'
  button-link:
    backgroundColor: 'transparent'
    textColor: '{colors.primary}'
    typography: '{typography.button}'
  input-search:
    backgroundColor: '{colors.background}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.md}'
    padding: '0 56px 0 80px'
    height: '56px'
  filter-chip:
    backgroundColor: '{colors.muted}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.sm}'
    padding: '8px 12px'
  resource-row:
    backgroundColor: '{colors.background}'
    textColor: '{colors.foreground}'
    padding: '24px 0'
  faq-item:
    textColor: '{colors.foreground}'
    padding: '20px 0'
---

# Design System: AwesomeLists

## Overview

**Creative North Star: "Type & Space / Quiet Monument"**

Type & Space gives light mode a pale ground, dense black display type, and cobalt actions. Quiet Monument carries the same structure into matte dark surfaces, soft white text, and a pale action color. Scale and whitespace establish hierarchy; monospace text makes navigation, controls, and resource metadata feel precise.

The directory is a ruled index rather than a gallery. Resource titles carry the strongest weight below the hero, with summaries, technology labels, and outbound actions arranged for scanning. FAQ content uses the same type contrast and rules, with longer answers given a readable measure.

**Key Characteristics:**

- Oversized proportional headlines paired with restrained monospace utilities.
- One responsive information structure across light and dark themes.
- Flat page surfaces, visible rules, and minimally rounded controls.
- Brief state feedback with reduced-motion support.

## Colors

Light mode pairs paper-like neutrals with cobalt; dark mode uses a mostly neutral palette with a pale cool primary.

### Primary

- **Cobalt action:** `primary` colors the main action, links, focus, count emphasis, and text selection in light mode. `primary-foreground` supplies contrasting text.
- **Pale cool action:** the `dark-primary` pair performs the same roles in dark mode.

### Neutral

- **Paper / matte ground:** `background` and `dark-background` are the page and card surfaces. Card foreground follows foreground.
- **Ink / soft white:** `foreground` and `dark-foreground` carry primary text. Secondary and accent foregrounds also follow foreground.
- **Quiet supporting tones:** the paired muted and muted-foreground tokens support filter chips, metadata, and explanatory text. Secondary fills removable technology chips; accent fills hover and selected menu states.
- **Rules and fields:** border separates sections and rows; input gives form boundaries stronger contrast. The focus ring follows primary.
- **Floating surface:** popover tokens lift menu and detail contents slightly away from the page without changing the palette family.

The frontmatter records default light values and explicit dark counterparts. Runtime values come from `:root` and `.dark` custom properties in `src/app/globals.css`; shared components consume their semantic Tailwind aliases. Card, foreground aliases, and ring are resolved through those source variables rather than added as duplicate primitive values here.

**The Semantic Theme Rule.** Use semantic background, foreground, primary, muted, border, input, and ring roles in product UI; let the active theme supply their values.

## Typography

**Display Font:** Vend Sans, with Mona Sans and sans-serif fallbacks.  
**Body Font:** Mona Sans, with ui-sans-serif and sans-serif fallbacks.  
**Label/Mono Font:** Roboto Mono, with ui-monospace and monospace fallbacks.

All three families are locally hosted WOFF2 files, loaded with swap. Mona Sans supports weights (200–900), Vend Sans (100–900), and Roboto Mono (100–700).

### Hierarchy

- **Display:** the frontmatter display role supplies the directory headline. Its first line uses Mona Sans at (0.96em) with tighter tracking (-0.04em); the second uses Vend Sans.
- **Headline:** the FAQ title uses the headline role and changes to weight (500) in dark mode.
- **Resource title:** the frontmatter resource-title role applies on desktop; smaller screens use (24px), then (30px) from the small breakpoint. Titles wrap anywhere when necessary.
- **Section title:** Mona Sans semibold, (24px), commonly increasing to (30px) at the small breakpoint, with tight tracking.
- **Body:** regular proportional text uses the body role. FAQ answers increase to (18px) from the small breakpoint and have a maximum measure (75ch). Desktop resource summaries instead use Roboto Mono (17px).
- **Label:** filter labels and navigation use Roboto Mono. Filter controls grow from (16px) to (18px); desktop navigation grows from (16px) to (20px) at the extra-large breakpoint. Footer metadata uses (12px).

**The Type Contrast Rule.** Use proportional faces for display and content hierarchy, and the mono face for navigation, filtering, and compact metadata.

## Layout

The shell uses the available page width with equal horizontal gutters: (20px), (32px) from the small breakpoint, and (44px) from the large breakpoint. Header, main, and footer share this alignment. There is no fixed maximum width on the shell.

The directory headline scales fluidly. Its section padding is (48px) at the top, (64px) from small, and (4.1vw) from large. Search follows with (44px), increasing to (48px) from small. The three toolbar controls stack on narrow screens; at medium the keyword field spans a four-column grid and the two filters split the next row. From large, the columns use proportions (2.25:1:1), with (28px) gaps.

Resource rows stack on narrow screens with (16px) gaps and (24px) vertical padding. From large, four columns use `minmax(0,1.095fr) minmax(0,1.336fr) minmax(0,1fr) auto`, with (28px) gaps and (14px) vertical padding. Desktop rows have minimum height (84px), with the first row (108px). Summaries clamp to two lines on small screens and one on large; technology summaries open an overlaid full list.

FAQ groups stack until large, then split into a narrow heading and broad accordion column in proportions (0.85:2.8), separated by (64px). Navigation becomes a right-side Sheet below large; its width is full on narrow screens and capped at (448px) from small. The submit action in the header is visible from small, and remains available inside mobile navigation.

The active breakpoints are small (640px), medium (768px), large (1024px), and extra-large (1280px). Spacing follows Tailwind's quarter-rem rhythm, with occasional measured hero offsets.

## Elevation & Depth

The main page, header, footer, rows, and FAQ groups are flat. Borders and tonal hover fills create separation. Popovers, selects, and expanded technology details use the medium shadow; the mobile navigation Sheet uses the large shadow with a black scrim (80% opacity). Exact shadow values live in the sidecar.

**The Flat Index Rule.** Keep directory rows flat and separated by rules; reserve elevation for overlays and floating detail surfaces.

## Shapes

Controls and overlays use the medium radius; small filter chips, inline code, and checkbox indicators use the small radius. Page rows and section rules stay square. The header rule is (2px); ordinary row, field, and section borders are (1px).

On medium and larger screens, both themes share the same geometric line wave behind the directory headline at the upper right. `public/images/line-wave.svg` acts as an alpha mask filled with primary at (15% opacity) in light mode and foreground at (20% opacity) in dark mode. Headline geometry and weight remain the same across themes. It is decorative, hidden from assistive technology, and ignores pointer input.

## Components

### Buttons

Compact, minimally rounded shadcn controls. The default primitive is (40px) high with (16px) horizontal and (8px) vertical padding. Primary uses the semantic primary pair and fades the fill to (90%) on hover. Outline uses input borders and the page background, then accent on hover; ghost uses the same hover treatment without a resting fill. Secondary fills active technology chips and fades to (80%) on hover. Link buttons use primary text and underline on hover. Disabled primitives reduce opacity to (50%) and suppress pointer events.

Keyboard focus uses a primary ring (2px) with a background-colored offset (2px) on Button and Select. The global focus-visible fallback is an outline (2px) offset by (4px). Header contribution buttons grow to (48px), then (52px) at extra-large; the theme icon button is (44px).

### Chips

Search and category indicators use muted fills, the small radius, mono text (12px), and compact padding. Removable technology filters use secondary small Buttons (32px high) with an inline close icon. Clear all remains a text link.

### Cards / Containers

The shipping catalog uses ruled resource rows rather than card tiles. Hover adds muted fill at (35% opacity), changes the title to primary, and shifts the visit arrow right by (4px). Each title and visit action remains a real outbound link with independent keyboard focus. Full technology details use a bordered popover surface (256px wide) with (16px) padding.

The default first page highlights LaunchSaaS as a featured resource with a primary tint, an inline Featured badge, generous padding, an unclamped summary, and a filled outbound action. Keyword, category, or technology filters restore the ordinary row treatment; the featured presentation never injects or duplicates a search result. Both themes use the same complete (1px) border, primary title, filled Featured badge, spacing, and outbound action. Light mode uses primary at (5% opacity), increasing to (10%) on hover, and a primary border at (35% opacity). Dark mode uses (15%), (20%), and (50%) respectively. Theme changes affect colors and contrast only; they never add or remove structural decoration. All colors come from semantic theme roles.

### Inputs / Fields

Search and filter triggers share the page background, input-colored border, and medium radius. Search is (56px) high, increasing to (60px) from small; its search icon and submit arrow sit inside the field. Category and technology controls follow the same height and mono type. The searchable technology Popover matches its trigger width with a minimum (256px), uses checkbox indicators, and provides Clear selection and Done controls.

### Navigation

The wordmark is proportional bold text; desktop links are mono. The active page has stronger weight and a primary underline (2px). Theme selection defaults to the system and can be toggled explicitly in the shared header at every size. Footer navigation uses smaller mono links and wraps naturally. The Victory attribution links to `https://github.com/victorymakes`.

### FAQ Accordion

Use the shared Radix Accordion with multiple answers allowed open. Questions use semibold proportional type and a rotating chevron; answers use muted foreground, generous line height, and restrained inline links. Only the first question in each group omits top padding; later questions retain (20px) above and below. About and contribution groups initially open their first answer. Topic links scroll to their corresponding groups.

### Motion

Color and arrow transitions use Tailwind's default duration (150ms) and easing. Accordion chevrons rotate over (200ms). Overlays use the shared fade, zoom, and directional entry classes; the Sheet enters over (500ms) and exits over (300ms). Reduced-motion preference globally reduces animation and transition durations to (0.01ms), limits animations to one iteration, and disables smooth scrolling. The Back to top button appears after scrolling (600px) and follows that preference.

## Do's and Don'ts

### Do:

- **Do** reuse shadcn Button, Select, Popover, Command, Sheet, and Accordion behavior and apply semantic theme tokens.
- **Do** keep the same content order and controls in both themes, including the mobile theme toggle.
- **Do** preserve visible keyboard focus, readable wrapping, and reduced-motion behavior.
- **Do** use inline SVG icons for arrows, toggles, and search affordances.

### Don't:

- **Don't** hardcode a light-only color into a shared control.
- **Don't** replace the directory's ruled rows with elevated marketing cards.
- **Don't** substitute system fonts for the locally hosted display and monospace faces.
- **Don't** use the dark wave as content or make it intercept pointer input.
