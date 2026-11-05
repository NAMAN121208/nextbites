import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRecipe, recipes } from "../../data/recipes";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    return {
      title: "Recipe Not Found",
      description: "The requested recipe could not be found on NextBites.",
    };
  }

  return {
    title: `${recipe.title} — NextBites`,
    description: recipe.description,
  };
}

export default async function RecipeDetailPage({ params }: Props) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  const totalMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  const difficultyColors = {
    Easy: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
    Medium: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800",
    Hard: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800",
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back button */}
      <nav className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-amber-600 dark:text-neutral-400 dark:hover:text-amber-400"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all recipes
        </Link>
      </nav>

      {/* Hero Header */}
      <article className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="relative aspect-[21/9] w-full min-h-[260px] overflow-hidden bg-neutral-100 sm:aspect-[16/7] dark:bg-neutral-800">
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Badges in image */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 sm:bottom-6 sm:left-6 sm:right-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur-md dark:bg-neutral-900/90 dark:text-white">
                {recipe.cuisine}
              </span>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${
                  difficultyColors[recipe.difficulty]
                }`}
              >
                {recipe.difficulty}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-white/90">
              <span className="rounded-full bg-black/60 px-3 py-1 backdrop-blur-sm">
                🕒 Total: {totalMinutes} mins
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            {recipe.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            {recipe.description}
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-100 bg-neutral-50/70 p-4 sm:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-950/50">
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Prep Time</span>
              <span className="mt-1 text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {recipe.prepTimeMinutes} min
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Cook Time</span>
              <span className="mt-1 text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {recipe.cookTimeMinutes} min
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Servings</span>
              <span className="mt-1 text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {recipe.servings} {recipe.servings === 1 ? "person" : "people"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Calories</span>
              <span className="mt-1 text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {recipe.calories} kcal
              </span>
            </div>
          </div>

          {/* Two-column layout: Ingredients & Instructions */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Ingredients */}
            <section className="lg:col-span-5">
              <h2 className="flex items-center gap-2 text-xl font-bold text-neutral-900 dark:text-white">
                <span className="text-amber-500">🥗</span> Ingredients
              </h2>
              <ul className="mt-4 space-y-2.5">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-white p-3 text-sm text-neutral-700 shadow-xs dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-neutral-300"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructions */}
            <section className="lg:col-span-7">
              <h2 className="flex items-center gap-2 text-xl font-bold text-neutral-900 dark:text-white">
                <span className="text-amber-500">👨‍🍳</span> Step-by-Step Instructions
              </h2>
              <ol className="mt-4 space-y-4">
                {recipe.instructions.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 rounded-xl border border-neutral-100 bg-white p-4 shadow-xs dark:border-neutral-800 dark:bg-neutral-800/30"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                      {idx + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Tags */}
          {recipe.tags && recipe.tags.length > 0 && (
            <div className="mt-10 border-t border-neutral-100 pt-6 dark:border-neutral-800">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-neutral-400">Tags:</span>
                {recipe.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
