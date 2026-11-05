import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextBites — Discover Delicious Everyday Recipes",
  description: "Explore delicious, easy-to-cook recipes from around the world on NextBites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <NavBar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200 bg-white py-8 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p>© 2026 NextBites. Built with Next.js, React & TypeScript.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
