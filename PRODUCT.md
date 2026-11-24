# AwesomeLists

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers and independent builders choosing SaaS boilerplates, templates, libraries, and developer tools for their next project.

## Product Purpose

Help builders discover relevant resources in one directory, narrow the collection by category and technology, and visit a resource's original website to evaluate it.

## Positioning

A curated, repository-backed collection born from the author's own search for SaaS starters. Contributions arrive through GitHub pull requests rather than an account or paid submission flow.

## Operating Context

Visitors browse `/`, combine category and technology-tag filters, paginate results, and follow external resource links. `/faq` explains the directory, filtering, contributions, and its relationship with LaunchSaaS. Contributors edit JSON files under `src/data/` and submit pull requests to https://github.com/victorymakes/awesome.

## Capabilities and Constraints

- Keep the AwesomeLists product name, existing catalog content, resource URLs, category/tag filtering, pagination, theme switching, FAQ, and GitHub contribution workflow.
- Existing implementation: Next.js App Router, React, TypeScript, Tailwind CSS, and shadcn/Radix components. Reuse the component system.
- The current catalog contains 149 resources in two categories: SaaS Boilerplate and Developer Tool. Derive displayed counts from the data rather than hardcoding them.
- The catalog is stored in `src/data/awesome-items.json`; category and tag lists live beside it. Preserve original records and avoid inventing resource screenshots, rankings, prices, endorsements, or availability claims.
- Keyword search is described in the existing FAQ but was not implemented at initialization. Category filtering also contains a `catagory` typo. The redesign should align the working interface and its documentation.
- The site is English. No additional locale, accounts, bookmarks, ratings, or payment flow has been requested.
- Feature LaunchSaaS only as the first item of the unfiltered first page. Search and filter results use ordinary resource styling and retain their natural ordering.
- Link the Victory footer attribution to `https://github.com/victorymakes`.
- Preserve analytics configuration and the existing deployment setup; redesign work does not authorize production deployment.

## Brand Commitments

The user confirmed redesigning the entire directory and FAQ while retaining the product's scope. AwesomeLists is authored by Victory. LaunchSaaS is an existing related project, not a third-party endorsement. Existing assets are `public/logo.png` and `public/banner.png`; a replacement visual system is authorized, but resource facts remain authoritative.

The design should feel novel, spacious, and confident. Type & Space is the approved light-mode reference and Quiet Monument is the approved dark-mode reference. Both themes share the same hero composition, headline weight, and decorative wave; only theme colors and contrast vary. Both themes ship together, using one coherent information structure and preserving switching and the system theme preference. Colors must use the Tailwind semantic theme, including shared shadcn controls.

## Evidence on Hand

`README.md`, `src/app/faq/page.tsx`, `src/configuration/site.ts`, and the catalog JSON are the product sources. No resource preview images, testimonials, traffic statistics, customer logos, or independently verified commercial claims are supplied. Baseline application was rendered locally before redesign.

## Product Principles

- Make resource evaluation and filtering easy to understand.
- Preserve real content and clearly identify outbound destinations.
- Keep contributions transparent and grounded in the GitHub repository.
- Document the behavior that actually ships.

## Open Decisions

The approved previews are `.impeccable/mocks/decision/type-space-r2.png` (light) and `.impeccable/mocks/decision/quiet-catalog-r2.png` (dark). No new business model or feature expansion is implied by the redesign.
