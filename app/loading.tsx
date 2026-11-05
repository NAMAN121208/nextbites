import React from "react";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero skeleton */}
      <div className="mb-12 text-center animate-pulse">
        <div className="mx-auto h-10 w-64 rounded-xl bg-neutral-200 dark:bg-neutral-800" />
        <div className="mx-auto mt-3 h-5 w-96 max-w-full rounded-md bg-neutral-200/70 dark:bg-neutral-800/70" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-xs animate-pulse dark:border-neutral-800 dark:bg-neutral-900"
          >
            {/* Image placeholder */}
            <div className="aspect-[16/10] w-full bg-neutral-200 dark:bg-neutral-800" />

            {/* Content placeholders */}
            <div className="flex flex-1 flex-col p-5">
              <div className="h-5 w-3/4 rounded-md bg-neutral-200 dark:bg-neutral-800" />
              <div className="mt-3 space-y-2">
                <div className="h-3.5 w-full rounded-md bg-neutral-200/70 dark:bg-neutral-800/70" />
                <div className="h-3.5 w-4/5 rounded-md bg-neutral-200/70 dark:bg-neutral-800/70" />
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-3 dark:border-neutral-800">
                <div className="h-4 w-20 rounded-md bg-neutral-200/80 dark:bg-neutral-800/80" />
                <div className="h-4 w-16 rounded-md bg-neutral-200/80 dark:bg-neutral-800/80" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
