# NextBites 🍽️

NextBites is a modern recipe discovery web application built with **Next.js 16**, **React 19**, and **TypeScript** using the App Router and Tailwind CSS 4.

## 🌐 Live Website & Submission Information (Part 3)

- **Live URL**: [https://naman121208.github.io/nextbites/](https://naman121208.github.io/nextbites/)
- **Public Repository**: [https://github.com/NAMAN121208/nextbites](https://github.com/NAMAN121208/nextbites)
- **Pull Request**: Open PR from branch `polish-and-deploy` into `main`

---

## 🚀 What Was Built (Part 3: Polish & Deploy)

1. **Graceful Loading State (`app/loading.tsx` & `app/recipe/[id]/loading.tsx`)**:
   - Modern pulsing skeletons (`animate-pulse`) for both the recipe gallery grid and individual recipe detail views.
   - Next.js displays these automatically during page transitions.

2. **Handled Missing Recipes & Custom 404 (`app/recipe/[id]/page.tsx` & `app/not-found.tsx`)**:
   - In `app/recipe/[id]/page.tsx`, when `getRecipe(id)` returns `undefined`, Next.js triggers `notFound()`.
   - Custom, friendly `app/not-found.tsx` screen with clear messaging and a direct button linking back to the home page.

3. **Client-Side Error Boundary (`app/error.tsx`)**:
   - Convention-based `"use client"` error boundary catching runtime errors gracefully.
   - Includes a recovery button calling `reset()` so users can retry without experiencing a blank screen or crash.

4. **Meaningful Page Titles & SEO Metadata (`app/layout.tsx` & `app/recipe/[id]/page.tsx`)**:
   - Root layout exports a full `Metadata` object defining title templates, descriptions, keywords, Open Graph, and Twitter tags.
   - Dynamic metadata generated in recipe pages (`${recipe.title} — NextBites`).

5. **Static Export Pre-Rendering (`next.config.mjs`)**:
   - Configured `output: "export"`, `trailingSlash: true`, and dynamic `basePath` resolution for GitHub Pages.
   - Uses `generateStaticParams()` to pre-render every recipe page as static HTML at build time (`npm run build`).

6. **Continuous Deployment via GitHub Actions (`.github/workflows/deploy.yml`)**:
   - Automated workflow triggers on push to build the static export and deploy to GitHub Pages.

---

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js (v18.17+ or v20+)
- npm

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/NAMAN121208/nextbites.git
cd nextbites

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view NextBites.

### Building for Production & Static Export

```bash
# Run ESLint validation
npm run lint

# Build static output (produces /out directory)
npm run build
```
