import React from "react";

export default function RecipeLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 animate-pulse">
      {/* Back button placeholder */}
      <div className="mb-6 h-5 w-36 rounded-md bg-neutral-200 dark:bg-neutral-800" />

      {/* Main card skeleton */}
      <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        {/* Banner image skeleton */}
        <div className="aspect-[21/9] w-full min-h-[260px] bg-neutral-200 dark:bg-neutral-800 sm:aspect-[16/7]" />

        {/* Content body skeleton */}
        <div className="p-6 sm:p-10">
          <div className="h-8 w-2/3 rounded-lg bg-neutral-200 dark:bg-neutral-800 sm:h-10" />
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full rounded-md bg-neutral-200/80 dark:bg-neutral-800/80" />
            <div className="h-4 w-4/5 rounded-md bg-neutral-200/80 dark:bg-neutral-800/80" />
          </div>

          {/* Stat chips skeleton */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-neutral-100 p-4 sm:grid-cols-4 dark:bg-neutral-950/60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-1.5">
                <div className="h-3 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-5 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
              </div>
            ))}
          </div>

          {/* Columns skeleton */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-3 lg:col-span-5">
              <div className="h-6 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-full rounded-lg bg-neutral-100 dark:bg-neutral-800/40" />
              ))}
            </div>
            <div className="space-y-3 lg:col-span-7">
              <div className="h-6 w-48 rounded bg-neutral-200 dark:bg-neutral-800" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 w-full rounded-xl bg-neutral-100 dark:bg-neutral-800/40" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
