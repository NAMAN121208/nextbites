"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for client debugging
    console.error("NextBites caught an error in error boundary:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        {/* Warning Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-100 text-4xl shadow-inner dark:bg-rose-950/60">
          ⚠️
        </div>

        <span className="inline-block rounded-full bg-rose-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-700 dark:bg-rose-950/80 dark:text-rose-300">
          Unexpected Error
        </span>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          Something went wrong!
        </h1>

        <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
          We encountered an unexpected error while loading this recipe page. Don&apos;t worry, you can try again or head back to the recipe gallery.
        </p>

        {error?.message && (
          <div className="mt-4 overflow-hidden rounded-xl bg-neutral-100 p-3 text-left font-mono text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
            <span className="font-semibold text-rose-600">Details: </span>
            {error.message}
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/20 transition-all hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:w-auto"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-xs transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 sm:w-auto"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
