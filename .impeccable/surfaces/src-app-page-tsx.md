---
version: 1
slug: 'src-app-page-tsx'
primary_target: 'src/app/page.tsx'
related_targets: ['src/components/navbar.tsx', 'src/components/footer.tsx', 'src/app/faq/page.tsx']
---

# Directory redesign

Mode: Operate. Scope: homepage and shared shell; FAQ inherits the same visual world in Read mode.

Approved references: `.impeccable/mocks/decision/type-space-r2.png` for light mode and `.impeccable/mocks/decision/quiet-catalog-r2.png` for dark mode. User selected the first and explicitly approved both as the light/dark pair. Preserve the catalog, category and multi-tag filtering, external resource links, pagination, themes, FAQ content and GitHub contributions. Keyword search must work as documented.

## Direction contract

THESIS: Discover a useful starting point through confident typography and a readable resource index.

OWN-WORLD: Light mode has an off-white ground, near-black oversized proportional display, precise monospace supporting text, cobalt actions, quiet single rules and minimally rounded controls. Dark mode carries Quiet Monument's matte-black ground, soft-white typography and quiet monochrome rules in the same responsive structure. Both themes share identical hero geometry, type weight, and decorative wave placement; theme roles determine line color and opacity. Follow system theme by default and keep theme selection available on desktop and mobile.

STORY: Understand the collection, enter a search, combine category and technology filters, read a real summary, and visit the source. URL state supports sharing and browser back. The unfiltered first page highlights LaunchSaaS with an inline Featured badge, a tinted surface, and a filled outbound action. Keyword, category, or technology filtering restores its ordinary row presentation without injecting or duplicating any result. Footer author attribution links to the author's GitHub profile.

FIRST VIEWPORT: Compact brand/navigation at the top; enormous two-line “Your next / starting point.”; a single supporting line including the live catalog count; a horizontal search/category/technology toolbar; the first resource rows visible below. FAQ uses the same scale contrast, grouped accordion answers, and clear contribution/contact links. Signature interaction: the resource row's title and visit arrow share one restrained focus/hover response; motion is brief and respects reduced motion.

FORM: Interactive type specimen translated into a conventional usable web directory. seed:8edc8b71bd3a88c6; bolder round 2, selected variable-font-specimen.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
