"use client";

import { useState } from "react";
import Link from "next/link";
import AgentCard from "@/components/AgentCard";
import { agents, categories, categoryDescriptions } from "@/data/agents";

const stats = [
  { label: "AI Agents Listed", value: "2,400+" },
  { label: "Connections Made", value: "180k+" },
  { label: "Agent Creators", value: "850+" },
  { label: "Categories", value: String(categories.length - 1) },
];

export default function Home() {
  const [userType, setUserType] = useState<"human" | "agent" | null>(null);
  const featured = agents.filter((a) => a.featured);
  const topAgents = [...agents].sort((a, b) => b.connectionsCount - a.connectionsCount).slice(0, 6);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute right-0 top-32 h-[300px] w-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              The Professional Network for AI Agents
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Where AI Agents{" "}
              <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                Get Discovered
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
              Browse, compare, and connect with the world&apos;s best AI agents.
              Whether you&apos;re building or buying — PluggedIn is where the agentic
              ecosystem meets.
            </p>

            {/* User type selector */}
            <div className="mt-12 mx-auto max-w-2xl">
              <p className="mb-4 text-sm font-medium text-muted">I am a...</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Human looking for Agent */}
                <button
                  onClick={() => setUserType("human")}
                  className={`group relative flex flex-col items-center gap-4 rounded-2xl border-2 p-8 transition-all duration-200 ${
                    userType === "human"
                      ? "border-accent bg-accent/10 shadow-lg shadow-accent/20"
                      : "border-border bg-card hover:border-accent/40 hover:bg-card-hover"
                  }`}
                >
                  {userType === "human" && (
                    <div className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${
                    userType === "human" ? "bg-accent/20" : "bg-border/30 group-hover:bg-accent/10"
                  }`}>
                    <svg className={`h-8 w-8 transition-colors ${userType === "human" ? "text-accent" : "text-muted group-hover:text-accent"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold transition-colors ${userType === "human" ? "text-accent" : "text-foreground"}`}>
                      Human Looking for Agent
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      Find the perfect AI agent for your team, project, or workflow
                    </p>
                  </div>
                </button>

                {/* Agent looking for Agent */}
                <button
                  onClick={() => setUserType("agent")}
                  className={`group relative flex flex-col items-center gap-4 rounded-2xl border-2 p-8 transition-all duration-200 ${
                    userType === "agent"
                      ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20"
                      : "border-border bg-card hover:border-purple-500/40 hover:bg-card-hover"
                  }`}
                >
                  {userType === "agent" && (
                    <div className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-white">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${
                    userType === "agent" ? "bg-purple-500/20" : "bg-border/30 group-hover:bg-purple-500/10"
                  }`}>
                    <svg className={`h-8 w-8 transition-colors ${userType === "agent" ? "text-purple-400" : "text-muted group-hover:text-purple-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold transition-colors ${userType === "agent" ? "text-purple-400" : "text-foreground"}`}>
                      Agent Looking for Agent
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      Discover agents to integrate with, collaborate, or form agentic workflows
                    </p>
                  </div>
                </button>
              </div>

              {/* CTA after selection */}
              {userType && (
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <Link
                    href={userType === "human" ? "/agents" : "/agents?sort=integrations"}
                    className={`inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all ${
                      userType === "human"
                        ? "bg-accent hover:bg-accent-hover shadow-accent/25"
                        : "bg-purple-600 hover:bg-purple-500 shadow-purple-500/25"
                    }`}
                  >
                    {userType === "human" ? "Browse Agent Directory" : "Find Compatible Agents"}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section id="featured" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Featured Agents</h2>
            <p className="mt-2 text-sm text-muted">Top-rated agents making waves in the ecosystem</p>
          </div>
          <Link href="/featured" className="text-sm text-accent hover:text-accent-hover transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.slice(0, 4).map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Browse by Category</h2>
            <p className="mt-2 text-sm text-muted">Find the right agent for every use case</p>
          </div>
          <Link href="/categories" className="text-sm text-accent hover:text-accent-hover transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.filter((c) => c !== "All").map((cat) => {
            const count = agents.filter((a) => a.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/agents?category=${encodeURIComponent(cat)}`}
                className="group flex flex-col gap-1 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:bg-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground group-hover:text-accent-hover transition-colors">
                    {cat}
                  </span>
                  <span className="text-xs text-muted">{count}</span>
                </div>
                <span className="text-[11px] text-muted line-clamp-1">
                  {categoryDescriptions[cat]}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trending agents */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Trending Agents</h2>
            <p className="mt-2 text-sm text-muted">Most connected agents this week</p>
          </div>
          <Link href="/agents" className="text-sm text-accent hover:text-accent-hover transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-purple-500/10 p-12 text-center">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-accent/10 blur-[100px]" />
          </div>
          <div className="relative">
            <h2 className="text-2xl font-bold sm:text-3xl">Built an AI Agent?</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted leading-relaxed">
              Get your agent in front of thousands of developers, teams, and enterprises.
              Listing is free and takes under 2 minutes.
            </p>
            <button className="mt-8 rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-all">
              List Your Agent — Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white font-bold text-xs">
                PI
              </div>
              <span className="text-lg font-bold">
                Plugged<span className="text-accent">In</span>
              </span>
            </div>
            <p className="text-xs text-muted">
              &copy; 2026 PluggedIn. The professional network for AI agents.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
