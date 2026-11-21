# Antigravity Prompt — Company Profile & Governance (HD Optimized Assets)

Implement the Company Profile & Governance section for Merchants Agro Valley in the existing Next.js + TypeScript + Tailwind CSS project. Preserve the current navbar and hero section. Build only this section.

## Assets
Copy the `images`, `icons`, and `decor` folders into `public/`.
Use:
- `/images/agro-industrial-facility.webp`
- `/icons/operational-integrity.svg`
- `/icons/banking-trade-finance.svg`
- `/icons/statutory-governance.svg`
- `/icons/integrated-production.svg`
- `/icons/food-safety-quality.svg`
- `/icons/export-logistics.svg`
- `/decor/bottom-organic-wave.svg`
- `/decor/top-right-leaf-accent.svg`

The facility image is a newly generated HD WebP at 1745 × 901 pixels. Use it as supplied; do not replace it with a screenshot crop or low-resolution thumbnail. SVG icons are vector assets: render them at appropriate sizes without rasterizing them.

## Brand system
Use #013D26 for ALL headings and body text on white backgrounds. Use #68A617 for accent details, icon strokes and highlights. Supporting colors: #23934B, #F4FAEE and white. Match the homepage hero's elegant serif heading and modern sans-serif body typography.

## Layout
Create a spacious white section with a centered max-width container.
1. Intro row: left eyebrow and large two-line serif heading “Our Company Profile & Governance”; right side has a thin vertical divider and the company introduction from `docs/content.txt`.
2. Three equal governance cards in one row on desktop: Operational Integrity, Banking & Trade Finance, Statutory Governance. Each has its supplied SVG icon in a deep-green rounded tile with a narrow #68A617 accent, title, and exact description from the content file. Use a subtle pale-green border and restrained shadow.
3. Feature row: large facility image on the left, strategic evolution heading and copy on the right. Below the copy, show three compact capability highlights with the supplied SVG icons and vertical separators.
4. Add two pill CTA links: “Our Corporate Profile” (green fill) and “Company Overview” (white fill, green border), using lucide-react ArrowRight and Play icons.
5. Use the supplied organic wave at the bottom and leaf accent in the top-right as subtle decorations behind content.

## Technical requirements
- Next.js App Router, TypeScript, Tailwind CSS.
- Use next/image for the WebP image with an accurate alt description.
- Use next/link for navigation.
- Use lucide-react for UI icons only. Never use emoji.
- Keep components reusable and accessible.
- Responsive: three cards in a row on desktop, wrap on tablet, stack on mobile. Feature image/content columns stack on mobile. No horizontal overflow.
- Preserve image aspect ratio and use object-fit: cover; avoid cropping the facility itself.
- Keep assets optimized. Do not add unnecessary libraries or large background images.
- Respect prefers-reduced-motion.

## Content
Use the exact copy in `docs/content.txt`. Do not invent statistics, certifications, approvals or operational claims. Confirm corporate statements such as “zero default record”, bank relationships and bonded permissions before publishing.

## Finish
Run `npm run lint` and `npm run build`. Test at 1440px, 1024px, 768px and 390px. Compare against the supplied design and refine spacing, typography, image placement, card proportions and mobile layout. Do not redesign the existing hero or navbar.
