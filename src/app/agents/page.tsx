"use client";

import { useState, useMemo } from "react";
import AgentCard from "@/components/AgentCard";
import { agents, categories } from "@/data/agents";

export default function AgentsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"connections" | "endorsements" | "name">("connections");

  const filtered = useMemo(() => {
    let result = agents;

    if (selectedCategory !== "All") {
      result = result.filter((a) => a.category === selectedCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.tagline.toLowerCase().includes(q) ||
          a.creator.toLowerCase().includes(q) ||
          a.capabilities.some((c) => c.toLowerCase().includes(q))
      );
    }

    result = [...result].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return b[sortBy] - a[sortBy];
    });

    return result;
  }, [search, selectedCategory, sortBy]);

  return (
    <main className="min-h-screen pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold sm:text-4xl">Agent Directory</h1>
          <p className="mt-2 text-muted">
            Discover {agents.length} AI agents across {categories.length - 1} categories
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search agents, capabilities, creators..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "connections" | "endorsements" | "name")}
            className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="connections">Most Connected</option>
            <option value="endorsements">Most Endorsed</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>

        {/* Category pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "bg-card border border-border text-muted hover:text-foreground hover:border-accent/40"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 opacity-60">
                  {agents.filter((a) => a.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-lg font-medium text-foreground">No agents found</p>
            <p className="mt-1 text-sm text-muted">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
