# Antigravity Build Prompt — Merchants Agro Valley Homepage Hero

You are a senior frontend engineer and UI/UX designer. Build the homepage header and hero section for **Merchants Agro Valley** using the supplied assets. Match the supplied reference screenshot as closely as possible, while producing clean, production-quality responsive code.

## 1. Create the project
Create a new Next.js project using the App Router, TypeScript, ESLint and Tailwind CSS.

```bash
npx create-next-app@latest merchants-agro-valley --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd merchants-agro-valley
npm run dev
```

If the CLI asks questions, select App Router, TypeScript, Tailwind CSS, ESLint and `src/` directory. Do not use a separate CSS framework.

## 2. Add the supplied assets
Copy the `public` directory from this asset pack into the project root so the following paths exist:

- `/images/hero-background.jpg`
- `/logo/logo.png`
- `/logo/merchants-agro-valley-logo.svg`
- `/icons/poultry-eggs.svg`
- `/icons/cattle-dairy.svg`
- `/icons/goat-duck.svg`
- `/icons/fish-aquaculture.svg`
- `/icons/food-processing.svg`
- `/icons/renewable-energy.svg`
- `/icons/cold-chain-export.svg`

Use the supplied image as the hero background. Do not recreate the background with gradients, stock images, CSS illustrations or text baked into an image. Do not redraw or approximate the logo and icons.

## 3. Build the page
Create or update:
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/Navbar.tsx`
- `src/components/HeroSection.tsx`
- `src/components/BusinessCategoryStrip.tsx`

Use reusable React components and semantic HTML.

## 4. Visual direction
Brand identity:
- Deep forest green `#063F2B`
- Primary green `#08713D`
- Fresh green `#23934B`
- Lime accent `#A6E51B`
- Sunrise orange `#F28A16`
- White `#FFFFFF`

The page should feel premium, trustworthy, modern and nature-led. Use generous spacing, crisp typography, subtle transitions and restrained shadows. Avoid a brochure, poster or collage appearance.

## 5. Navbar
Create a full-width white navigation bar at the top:
- Left: transparent logo PNG at approximately 250–300px desktop display width, preserving its aspect ratio.
- Desktop links: Home, About Us, Our Businesses, Sustainability, Quality & Compliance, Export & Trade, Media.
- Add small chevrons to About Us, Our Businesses and Media if they are dropdown menus.
- Right: dark-green rounded `Get in Touch` button with an envelope icon.
- Active Home link has a green underline.
- Keep the navbar height around 90–102px on desktop.
- Make it sticky with a subtle shadow or border after scrolling.
- On mobile, collapse links into an accessible hamburger menu. The menu must open and close, close on Escape and close after selecting a link. Use an appropriate React state and accessible `aria-expanded` / `aria-controls`.

## 6. Hero section
The hero begins directly below the navbar and uses `/images/hero-background.jpg` as a full-bleed background image.
- Desktop hero target height: approximately 720–780px including the bottom category strip, adapting to viewport height.
- Use `background-size: cover` and carefully tune `background-position` so the industrial campus remains visible on the right and the darker fields remain behind the left text.
- Add a dark forest-green gradient overlay from left to right and a subtle bottom gradient. This is a CSS overlay, not a replacement for the photo.
- Place hero content in a centered max-width container, aligned to the left, vertically around the upper-middle of the image.
- Eyebrow: `INTEGRATED AGRO-INDUSTRIAL ENTERPRISE`, uppercase, letter-spaced, small white text, with a short lime-green line to its left.
- Headline exactly:
  `Nourishing`
  `People & Markets`
  `from Bangladesh`
  Use a large, elegant, bold serif or high-quality display font. White for the first two lines and vivid lime green for `from Bangladesh`. Keep line breaks similar to the reference. Responsive font sizing with `clamp()`.
- Supporting text exactly:
  `A value integrated agro ecosystem — from feed and farming to processing, renewable energy and global export.`
  Keep width around 580px, white, readable, and line-height around 1.45.
- Two CTAs:
  1. `Explore Our Operations` — lime-green filled pill with dark-green text and right-arrow icon.
  2. `Company Overview` — transparent/dark translucent pill with white border, white text and play icon.
  Use real anchor links (placeholder section anchors are acceptable) and hover/focus states.

## 7. Business category strip
At the bottom of the hero, create a horizontal row of seven business categories. Each has its own individual SVG icon from `/icons/`, a short label and thin vertical separators:
1. Poultry & Eggs
2. Cattle & Dairy
3. Goat & Duck
4. Fish & Aquaculture
5. Food Processing
6. Renewable Energy
7. Cold Chain & Export

Use white icons and white labels on the dark lower part of the hero. Each category should be a clickable link to a relevant section or placeholder anchor. On tablets, allow horizontal scrolling; on mobile, use a compact two-column grid or horizontal scroll without overflow of the page. Keep icons visually consistent and around 42–48px on desktop.

## 8. Responsive behaviour
- Desktop: preserve the two-level composition (navbar, full scenic hero with text left and campus visible right, category strip at bottom).
- Tablet: reduce heading size and spacing; keep all CTAs usable.
- Mobile: compact navbar, stack text naturally, maintain readable contrast, and keep the hero image focal point visible. Consider a darker overlay for readability. Category items should wrap or scroll horizontally.
- Prevent horizontal page overflow at all widths.
- Respect `prefers-reduced-motion`.

## 9. Technical requirements
- Use Next.js App Router and TypeScript.
- Use Tailwind CSS for layout, spacing, responsive breakpoints and states. Keep custom CSS limited to the background overlay and any necessary typography details.
- Use `next/image` for the logo and any image elements. For a CSS background image, use the supplied local path and document the choice.
- Use `next/link` for internal navigation.
- Use lucide-react only for small UI icons such as menu, arrow, mail and play; use the supplied SVGs for the seven business categories.
- Use accessible labels, keyboard focus styles, semantic landmarks and sufficient colour contrast.
- Avoid unnecessary dependencies.
- No lorem ipsum, no invented certifications, no unsupported claims, and no fabricated statistics.
- Keep the code readable and componentized.

## 10. Final checks
Run:
```bash
npm run lint
npm run build
```
Fix all errors and warnings that affect the build. Verify desktop at 1440px, tablet at 768px and mobile at 390px. Confirm the mobile menu works, all image paths load, the category links work, and the hero text is legible over the image.

## Expected result
A responsive, polished homepage first fold for `merchantsagrovalley.com` with a white brand navbar, large cinematic agro-industrial background image, left-aligned headline and CTA buttons, and a seven-item category strip along the bottom. Match the supplied screenshot's hierarchy, proportions, colours and overall visual feel.
