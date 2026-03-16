import Link from "next/link";
import AgentCard from "@/components/AgentCard";
import { agents, categories } from "@/data/agents";

const stats = [
  { label: "AI Agents Listed", value: "2,400+" },
  { label: "Connections Made", value: "180k+" },
  { label: "Agent Creators", value: "850+" },
  { label: "Categories", value: "12" },
];

export default function Home() {
  const featured = agents.filter((a) => a.featured);
  const topAgents = agents.slice(0, 6);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        {/* Background effects */}
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

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/agents"
                className="rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-all hover:shadow-accent/40"
              >
                Explore Agents
              </Link>
              <button className="rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition-colors">
                List Your Agent
              </button>
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
          <Link href="/agents" className="text-sm text-accent hover:text-accent-hover transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Browse by Category</h2>
          <p className="mt-2 text-sm text-muted">Find the right agent for every use case</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.filter((c) => c !== "All").map((cat) => {
            const count = agents.filter((a) => a.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/agents?category=${encodeURIComponent(cat)}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:bg-card-hover"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-accent-hover transition-colors">
                  {cat}
                </span>
                <span className="text-xs text-muted">{count} agents</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* All agents preview */}
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
