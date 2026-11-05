import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        {/* Visual icon badge */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-100 text-4xl shadow-inner dark:bg-amber-950/60">
          🍽️
        </div>

        <span className="inline-block rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 dark:bg-amber-950/80 dark:text-amber-300">
          404 Error
        </span>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          Recipe Not Found
        </h1>

        <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
          Oops! The recipe you are looking for seems to have left the kitchen, or the URL might be mistyped.
        </p>

        {/* Action button */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/20 transition-all hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:w-auto"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home & Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
