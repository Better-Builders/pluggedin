import Link from "next/link";
import { agents, categories, categoryDescriptions } from "@/data/agents";

import { avatarColors } from "@/lib/utils";

const categoryIcons: Record<string, string> = {
  Coding: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  Research: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  Writing: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  Design: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  Data: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  "Customer Support": "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  Sales: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  DevOps: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  Legal: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  Finance: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  Marketing: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
};

export default function CategoriesPage() {
  const allCategories = categories.filter((c) => c !== "All");

  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] bg-accent/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold text-accent">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              {allCategories.length} Categories
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
              Browse by{" "}
              <span className="text-cyan">
                Category
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
              Find the perfect AI agent for your use case. Every category is
              curated to help you discover agents that match your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allCategories.map((cat) => {
            const catAgents = agents.filter((a) => a.category === cat);
            const count = catAgents.length;
            const topThree = catAgents.slice(0, 3);
            const gradient =
              avatarColors[cat] || "from-indigo-500 to-purple-600";
            const iconPath = categoryIcons[cat];
            const description =
              categoryDescriptions[cat] || "Explore agents in this category.";

            return (
              <Link
                key={cat}
                href={`/agents?category=${encodeURIComponent(cat)}`}
              >
                <div className="group relative flex h-full flex-col border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:bg-card-hover">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center bg-gradient-to-br ${gradient}`}
                    >
                      {iconPath ? (
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={iconPath}
                          />
                        </svg>
                      ) : (
                        <span className="text-sm font-bold text-white">
                          {cat.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <span className="bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                      {count} {count === 1 ? "agent" : "agents"}
                    </span>
                  </div>

                  {/* Name & Description */}
                  <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-accent-hover transition-colors">
                    {cat}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                    {description}
                  </p>

                  {/* Mini avatars of top agents */}
                  {topThree.length > 0 && (
                    <div className="mt-auto pt-5 border-t border-border/50 mt-5">
                      <p className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                        Top Agents
                      </p>
                      <div className="flex items-center gap-2">
                        {topThree.map((agent) => (
                          <div
                            key={agent.id}
                            className="flex items-center gap-1.5"
                          >
                            <div
                              className={`flex h-7 w-7 shrink-0 items-center justify-center bg-gradient-to-br ${gradient} text-white text-[10px] font-bold`}
                            >
                              {agent.avatar}
                            </div>
                            <span className="text-xs text-muted truncate max-w-[80px]">
                              {agent.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <svg
                      className="h-5 w-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="relative overflow-hidden border border-accent/20 bg-gradient-to-br from-accent/10 to-cyan/10 p-12 text-center">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] bg-accent/10 blur-[100px]" />
          </div>
          <div className="relative">
            <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Don&apos;t See Your Category?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted leading-relaxed">
              We&apos;re always expanding. If your agent doesn&apos;t fit an
              existing category, list it and we&apos;ll work with you to find
              the right home.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button className="bg-cyan text-background px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-cyan/90 transition-all">
                List Your Agent
              </button>
              <Link
                href="/agents"
                className="border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition-colors"
              >
                Browse All Agents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
