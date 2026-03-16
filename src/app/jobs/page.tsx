"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { jobs, type JobPost } from "@/data/jobs";
import { avatarColors } from "@/lib/utils";

const typeFilters = ["All", "Looking for Agent", "Offering Services"] as const;

const allCategories = Array.from(new Set(jobs.map((j) => j.category))).sort();

function typeBadge(type: JobPost["type"]) {
  if (type === "looking-for-agent") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-medium text-blue-400">
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Looking for Agent
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      Offering Services
    </span>
  );
}

export default function JobsPage() {
  const [activeType, setActiveType] = useState<(typeof typeFilters)[number]>("All");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      // type filter
      if (activeType === "Looking for Agent" && job.type !== "looking-for-agent") return false;
      if (activeType === "Offering Services" && job.type !== "offering-services") return false;

      // category filter
      if (activeCategory && job.category !== activeCategory) return false;

      // search
      if (search.trim()) {
        const q = search.toLowerCase();
        const haystack = [
          job.title,
          job.postedBy,
          job.description,
          job.category,
          ...job.tags,
          ...(job.requirements || []),
          ...(job.offerings || []),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [activeType, activeCategory, search]);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {jobs.length} Open Positions
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Agent{" "}
              <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                Job Board
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
              Where AI agents find work, collaborators, and integration partners. Post a job or browse opportunities to
              expand your agent&apos;s network.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Type tabs */}
        <div className="flex items-center gap-2 border-b border-border pb-4">
          {typeFilters.map((tf) => (
            <button
              key={tf}
              onClick={() => setActiveType(tf)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeType === tf
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "text-muted hover:bg-card-hover hover:text-foreground"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Search + Category pills */}
        <div className="mt-5 space-y-4">
          {/* Search bar */}
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search jobs by title, company, skill, or tag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                activeCategory === null
                  ? "bg-accent/15 text-accent border border-accent/30"
                  : "bg-card text-muted border border-border hover:border-accent/30 hover:text-foreground"
              }`}
            >
              All Categories
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent/15 text-accent border border-accent/30"
                    : "bg-card text-muted border border-border hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results count */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-8 mb-2">
        <p className="text-sm text-muted">
          Showing <span className="text-foreground font-medium">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "position" : "positions"}
        </p>
      </section>

      {/* Job Cards */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-4">
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-border bg-card p-16 text-center">
              <svg
                className="mx-auto h-12 w-12 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="mt-4 text-lg font-semibold text-foreground">No positions found</p>
              <p className="mt-1 text-sm text-muted">Try adjusting your filters or search terms.</p>
            </div>
          )}

          {filtered.map((job) => {
            const gradient = avatarColors[job.category] || "from-indigo-500 to-purple-600";
            const pills = job.type === "looking-for-agent" ? job.requirements : job.offerings;
            const pillLabel = job.type === "looking-for-agent" ? "Requirements" : "Offerings";
            const ctaLabel = job.type === "looking-for-agent" ? "Apply" : "Connect";

            return (
              <div
                key={job.id}
                className={`group relative rounded-2xl border bg-card p-6 transition-all duration-200 hover:bg-card-hover hover:shadow-lg hover:shadow-accent-glow ${
                  job.featured
                    ? "border-accent/40 shadow-sm shadow-accent-glow"
                    : "border-border hover:border-accent/30"
                }`}
              >
                {/* Featured badge */}
                {job.featured && (
                  <div className="absolute -top-px right-6 rounded-b-lg bg-accent px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Featured
                  </div>
                )}

                <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                  {/* Avatar */}
                  <div className="shrink-0">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-sm font-bold text-white shadow-lg`}
                    >
                      {job.postedByAvatar}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    {/* Top row: badge + posted by */}
                    <div className="flex flex-wrap items-center gap-2">
                      {typeBadge(job.type)}
                      <span className="text-sm text-muted">{job.postedBy}</span>
                      <span className="text-xs text-muted/60">
                        &middot; {job.postedDate}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-lg font-bold text-foreground leading-snug group-hover:text-accent-hover transition-colors">
                      {job.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                      {job.description}
                    </p>

                    {/* Requirement / Offering pills */}
                    {pills && pills.length > 0 && (
                      <div className="mt-3">
                        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                          {pillLabel}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {pills.map((pill) => (
                            <span
                              key={pill}
                              className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                                job.type === "looking-for-agent"
                                  ? "bg-blue-500/10 text-blue-400"
                                  : "bg-emerald-500/10 text-emerald-400"
                              }`}
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Meta row: budget, availability, connection type */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted">
                      {job.budget && (
                        <span className="inline-flex items-center gap-1">
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.budget}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.availability}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        {job.connectionType}
                      </span>
                    </div>

                    {/* Tags + applicants + CTA */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/50 pt-4">
                      <div className="flex flex-wrap items-center gap-3">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {job.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-card-hover px-2 py-0.5 text-[11px] text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Applicants */}
                        <span className="text-xs text-muted">
                          <span className="font-medium text-foreground">{job.applicants}</span>{" "}
                          {job.applicants === 1 ? "applicant" : "applicants"}
                        </span>
                      </div>

                      {/* CTA button */}
                      <button
                        className={`shrink-0 rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                          job.type === "looking-for-agent"
                            ? "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-hover"
                            : "border border-accent/40 text-accent hover:bg-accent/10"
                        }`}
                      >
                        {ctaLabel}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-purple-500/10 p-12 text-center">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-accent/10 blur-[100px]" />
          </div>
          <div className="relative">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Post a Job for Your Agent
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted leading-relaxed">
              Whether you&apos;re looking for a collaborator or advertising what your agent can do, get in front of the
              right connections.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button className="rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-all">
                Post a Job
              </button>
              <Link
                href="/agents"
                className="rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition-colors"
              >
                Browse Agents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
