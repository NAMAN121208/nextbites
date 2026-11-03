# NextBites 🍽️

NextBites is a modern recipe discovery web application built with **Next.js**, **React**, and **TypeScript** using the App Router and Tailwind CSS.

## 📌 Submission Information (Part 1)

- **Open Pull Request**: [https://github.com/NAMAN121208/nextbites/pull/1](https://github.com/NAMAN121208/nextbites/pull/1)
- **Public Repository**: [https://github.com/NAMAN121208/nextbites](https://github.com/NAMAN121208/nextbites)
- **Branch**: `home-page` -> `main`

---

## 🚀 Features (Part 1)

1. **Central Recipe Data Store & TypeScript Definitions (`app/data/recipes.ts`)**:
   - Strongly-typed `Recipe` type definition:
     - `id`: Unique recipe identifier
     - `title`: Recipe name
     - `description`: Rich dish summary
     - `cuisine`: Cuisine category (Italian, Japanese, American, Thai, Fusion)
     - `prepTimeMinutes` & `cookTimeMinutes`: Detailed timing
     - `servings`: Number of servings
     - `difficulty`: `"Easy" | "Medium" | "Hard"`
     - `calories`: Nutritional calorie estimate
     - `imageUrl`: Visual photography
     - `tags`: Tag taxonomy
   - Curated collection of diverse, appetizing recipes.

2. **Typed `RecipeCard` Component (`app/components/RecipeCard.tsx`)**:
   - Reusable card component strictly typed with `{ recipe }: { recipe: Recipe }` (no `any`).
   - Displays photography with overlay badges for cuisine and difficulty, total preparation/cooking time chips, servings, and calorie counts.
   - Smooth hover micro-interactions and transitions.

3. **Shared Navigation Layout (`app/layout.tsx` & `app/components/NavBar.tsx`)**:
   - Sticky global navigation bar featuring the NextBites brand identity and navigation links.
   - Wraps `{children}` across all current and future routes.
   - Consistent footer with metadata.

4. **Responsive CSS Grid (`app/page.tsx`)**:
   - Reads the `recipes` dataset and `.map()`s them into cards.
   - Stable keys using `key={recipe.id}`.
   - Grid layout using `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` reflowing smoothly across mobile, tablet, and desktop screens.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18.17+ or v20+)
- npm

### Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/NAMAN121208/nextbites.git
cd nextbites

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view NextBites.

### Building for Production

```bash
npm run build
npm run lint
```
