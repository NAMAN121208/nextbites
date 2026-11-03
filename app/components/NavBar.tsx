import React from "react";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand logo & title */}
        <Link href="/" className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Next<span className="text-amber-500">Bites</span>
          </span>
        </Link>

        {/* Navigation links */}
        <nav className="flex items-center gap-1 sm:gap-6">
          <Link
            href="/"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:text-amber-600 dark:text-neutral-100 dark:hover:text-amber-400"
          >
            Home
          </Link>
          <a
            href="#recipes"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Recipes
          </a>
          <span className="hidden sm:inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
            Part 1
          </span>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
