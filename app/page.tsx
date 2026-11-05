import React from "react";
import { recipes } from "./data/recipes";
import { RecipeCard } from "./components/RecipeCard";

export default function Home() {
  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center sm:text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-500/20 dark:text-amber-400 dark:ring-amber-400/20 mb-4">
            <span>✨ Fresh From The Kitchen</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
            Discover Delicious <span className="text-amber-500">Everyday Recipes</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Explore handcrafted, easy-to-follow dishes from around the world.
            Wholesome ingredients, foolproof steps, and unforgettable flavors.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              {recipes.length} Handcrafted Recipes
            </span>
            <span>•</span>
            <span>Reflows smoothly across all viewports</span>
            <span>•</span>
            <span>Click any recipe card for ingredients & instructions</span>
          </div>
        </div>

        {/* Recipes Grid Section */}
        <section id="recipes" aria-label="Recipe List">
          <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              Trending Recipes
            </h2>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Showing all {recipes.length} recipes
            </span>
          </div>

          {/* Responsive CSS Grid reflowing across screen sizes */}
          <div
            className="grid gap-6 sm:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
