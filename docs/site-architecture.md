# JMT Shipping & Trading Co. Ltd. Website Information Architecture

## Purpose

This document finalizes the first-launch sitemap, route hierarchy, navigation model, footer links, mobile navigation, and future SEO service-page expansion plan for a modern corporate website for **JMT Shipping & Trading Co. Ltd.**

## Routing principles

- Keep first-launch navigation concise and confidence-building: Home, About Us, Services, Contact.
- Use short, readable, lowercase URLs with hyphenated service slugs.
- Treat `/services` as the parent overview page for all current and future service-detail pages.
- This codebase uses the root-level `app/` directory for the Next.js App Router, not `src/app/`; service detail routing is implemented at `app/services/[slug]/page.tsx`.
- Prepare future SEO service routes now so copy, metadata, internal links, redirects, and CMS entries can be added without changing the core URL strategy.
- Keep every primary conversion path within one click of the main navigation or mobile menu.

## First-launch sitemap

| Page | Route | Launch status | Primary purpose | Primary call to action |
| --- | --- | --- | --- | --- |
| Home | `/` | Live at first launch | Establish credibility, summarize maritime support capabilities, and guide visitors to services or contact. | Contact JMT |
| About Us | `/about` | Live at first launch | Present company background, operating standards, regional knowledge, and client trust signals. | Learn About Our Services |
| Services | `/services` | Live at first launch | Provide a consolidated overview of port agency, trading, vessel support, survey, and marine service capabilities. | Request Service Support |
| Contact | `/contact` | Live at first launch | Capture inquiries, emergency support requests, and commercial contact details. | Send Inquiry |

## Live SEO service routes

These URLs are implemented as published service-detail pages through the reusable App Router dynamic route at `app/services/[slug]/page.tsx`. They remain out of the primary navigation, but `/services`, the footer, and each detail page provide natural internal links.

| Service page | Route | Recommended SEO intent | Parent |
| --- | --- | --- | --- |
| Port Agency | `/services/port-agency` | Port agency services, port call coordination, ship agency support. | `/services` |
| STS Service | `/services/sts-service` | Ship-to-ship transfer coordination and marine logistics support. | `/services` |
| Vessel Husbandry | `/services/vessel-husbandry` | Husbandry services, vessel supplies, port support, owner matters. | `/services` |
| Crew Change | `/services/crew-change` | Crew change coordination, immigration/logistics support, seafarer transfers. | `/services` |
| Fresh Water Supply | `/services/fresh-water-supply` | Fresh water delivery and marine supply support. | `/services` |
| Cargo Survey | `/services/cargo-survey` | Cargo inspection, condition reporting, and survey coordination. | `/services` |
| Bunker Survey | `/services/bunker-survey` | Bunker quantity survey, sampling coordination, and reporting support. | `/services` |
| Underwater Diving | `/services/underwater-diving` | Underwater inspection, hull support, and diving coordination. | `/services` |

## Hierarchical sitemap

```text
/
├── /about
├── /services
│   ├── /services/port-agency            [live SEO page]
│   ├── /services/sts-service            [live SEO page]
│   ├── /services/vessel-husbandry       [live SEO page]
│   ├── /services/crew-change            [live SEO page]
│   ├── /services/fresh-water-supply     [live SEO page]
│   ├── /services/cargo-survey           [live SEO page]
│   ├── /services/bunker-survey          [live SEO page]
│   └── /services/underwater-diving      [live SEO page]
└── /contact
```

## Primary desktop navigation

Recommended order:

1. **Home** — `/`
2. **About Us** — `/about`
3. **Services** — `/services`
4. **Contact** — `/contact`

Recommended header CTA:

- **Request Support** — `/contact`

Desktop navigation behavior:

- Keep the header sticky on scroll for quick inquiry access.
- Highlight the active top-level route.
- On first launch, link **Services** directly to `/services` instead of exposing incomplete future service pages.
- When service-detail pages go live, add a Services dropdown containing the eight SEO routes while keeping `/services` as the first item labeled **All Services**.

## Future Services dropdown

When the service-detail pages are published, the desktop Services dropdown should use this order:

1. **All Services** — `/services`
2. **Port Agency** — `/services/port-agency`
3. **STS Service** — `/services/sts-service`
4. **Vessel Husbandry** — `/services/vessel-husbandry`
5. **Crew Change** — `/services/crew-change`
6. **Fresh Water Supply** — `/services/fresh-water-supply`
7. **Cargo Survey** — `/services/cargo-survey`
8. **Bunker Survey** — `/services/bunker-survey`
9. **Underwater Diving** — `/services/underwater-diving`

## Mobile navigation structure

Mobile navigation should use a full-screen drawer or slide-over panel with large tap targets and a persistent contact CTA.

Recommended mobile menu:

1. **Home** — `/`
2. **About Us** — `/about`
3. **Services** — `/services`
4. **Contact** — `/contact`
5. **Request Support** — `/contact` as the prominent final CTA button

Future mobile Services accordion:

- **Services** — parent accordion label and direct link to `/services`
  - All Services — `/services`
  - Port Agency — `/services/port-agency`
  - STS Service — `/services/sts-service`
  - Vessel Husbandry — `/services/vessel-husbandry`
  - Crew Change — `/services/crew-change`
  - Fresh Water Supply — `/services/fresh-water-supply`
  - Cargo Survey — `/services/cargo-survey`
  - Bunker Survey — `/services/bunker-survey`
  - Underwater Diving — `/services/underwater-diving`

Mobile behavior requirements:

- Close the drawer after route selection.
- Keep phone/email or inquiry access visible at the bottom of the drawer.
- Use `aria-expanded` for the Services accordion.
- Preserve keyboard focus management when opening and closing the menu.

## Footer link architecture

The footer should reinforce trust, make service discovery easy, and provide contact access without overcrowding the first-launch header.

### Company

- Home — `/`
- About Us — `/about`
- Services — `/services`
- Contact — `/contact`

### Services

First launch:

- Services Overview — `/services`

Future expansion:

- Port Agency — `/services/port-agency`
- STS Service — `/services/sts-service`
- Vessel Husbandry — `/services/vessel-husbandry`
- Crew Change — `/services/crew-change`
- Fresh Water Supply — `/services/fresh-water-supply`
- Cargo Survey — `/services/cargo-survey`
- Bunker Survey — `/services/bunker-survey`
- Underwater Diving — `/services/underwater-diving`

### Contact

- Contact JMT — `/contact`
- Request Service Support — `/contact`
- Emergency / Time-sensitive Inquiry — `/contact`

## Page content map

### Home (`/`)

Recommended sections:

1. Hero with maritime positioning and Contact CTA.
2. Service capability snapshot linking to `/services`.
3. Why choose JMT Shipping & Trading Co. Ltd.
4. Operating coverage / port support message.
5. Trust signals such as responsiveness, coordination, compliance, and local expertise.
6. Final CTA linking to `/contact`.

### About Us (`/about`)

Recommended sections:

1. Company overview.
2. Mission and operating values.
3. Maritime expertise and client types.
4. Standards, safety, reliability, and compliance approach.
5. CTA linking to `/services` and `/contact`.

### Services (`/services`)

Recommended sections:

1. Services overview hero.
2. Service categories/cards for all eight published service detail areas.
3. Operational workflow: request, coordination, execution, reporting.
4. Industries and vessel/client types served.
5. CTA linking to `/contact`.

### Contact (`/contact`)

Recommended sections:

1. Inquiry form.
2. Direct contact details.
3. Request type selection.
4. Location / coverage note.
5. Response-time or urgent-support guidance.

## SEO and metadata model

Every route should define:

- Page title.
- Meta description.
- Canonical URL.
- Open Graph title and description.
- Primary H1.
- Breadcrumb structure.

Service-detail pages should include:

- A unique service-focused H1.
- Local and maritime service intent terms.
- A concise service overview.
- Use cases and support scenarios.
- Process steps.
- Related services linking back to `/services` and sibling service pages.
- A strong contact CTA.

## Recommended route states

- First-launch pages should return `200` and be included in public navigation.
- SEO service routes should be backed by the active App Router path and return `200` for published slugs.
- Keep the service-detail route in `app/services/[slug]/page.tsx` unless the whole project is intentionally migrated to `src/app/`.
- Do not publish thin or duplicate service pages just to occupy SEO routes.
- Published service pages must be included in the XML sitemap and footer Services column.
