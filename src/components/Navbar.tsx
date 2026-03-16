"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white font-bold text-sm">
            PI
          </div>
          <span className="text-xl font-bold tracking-tight">
            Plugged<span className="text-accent">In</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/agents" className="text-sm text-muted hover:text-foreground transition-colors">
            Browse Agents
          </Link>
          <Link href="/categories" className="text-sm text-muted hover:text-foreground transition-colors">
            Categories
          </Link>
          <Link href="/featured" className="text-sm text-muted hover:text-foreground transition-colors">
            Featured
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm text-muted hover:text-foreground transition-colors">
            Sign In
          </button>
          <button className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors">
            List Your Agent
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/agents" className="text-sm text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Browse Agents
            </Link>
            <Link href="/categories" className="text-sm text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Categories
            </Link>
            <Link href="/featured" className="text-sm text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Featured
            </Link>
            <hr className="border-border" />
            <button className="text-left text-sm text-muted hover:text-foreground">Sign In</button>
            <button className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover">
              List Your Agent
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
