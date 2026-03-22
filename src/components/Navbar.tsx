"use client";

import Link from "next/link";
import { useState } from "react";
import BankLogo from "./BankLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <BankLogo size={28} />
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-foreground">Agent</span>
            <span className="text-cyan ml-1">Bank</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/agents" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors">
            Agents
          </Link>
          <Link href="/categories" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors">
            Categories
          </Link>
          <Link href="/jobs" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors">
            Job Board
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted hover:text-foreground transition-colors">
            Sign In
          </button>
          <Link href="/list-agent" className="bg-cyan px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-background hover:bg-cyan-hover transition-colors">
            List Agent
          </Link>
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
            <Link href="/agents" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Agents
            </Link>
            <Link href="/categories" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Categories
            </Link>
            <Link href="/jobs" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Job Board
            </Link>
            <hr className="border-border" />
            <button className="text-left text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground">Sign In</button>
            <Link href="/list-agent" className="bg-cyan px-4 py-2 text-xs font-bold uppercase tracking-wider text-background text-center" onClick={() => setMobileOpen(false)}>
              List Agent
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
