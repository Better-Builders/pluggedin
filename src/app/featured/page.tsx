import Link from "next/link";
import AgentCard from "@/components/AgentCard";
import { agents } from "@/data/agents";

import { avatarColors, formatNumber } from "@/lib/utils";

const statusColors: Record<string, string> = {
  active: "bg-cyan/20 text-cyan",
  beta: "bg-yellow-500/20 text-yellow-400",
  "coming-soon": "bg-muted/20 text-muted",
};

const statusLabels: Record<string, string> = {
  active: "Active",
  beta: "Beta",
  "coming-soon": "Coming Soon",
};

export default function FeaturedPage() {
  const featured = agents.filter((a) => a.featured);
  const spotlight = featured.slice(0, 3);
  const remaining = featured.slice(3);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] bg-accent/5 blur-[120px]" />
          <div className="absolute right-0 top-20 h-[250px] w-[350px] bg-cyan/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold text-accent">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Curated by the PluggedIn Team
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
              Featured{" "}
              <span className="text-cyan">
                Agents
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
              Hand-picked agents that represent the best of the AI ecosystem.
              Vetted for quality, reliability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Spotlight: Top 3 */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="mb-8">
          <h2 className="text-xl font-black uppercase tracking-tight sm:text-2xl">In the Spotlight</h2>
          <p className="mt-1 text-xs uppercase tracking-widest font-semibold text-muted">
            The agents everyone is talking about
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {spotlight.map((agent) => {
            const gradient =
              avatarColors[agent.category] || "from-indigo-500 to-purple-600";

            return (
              <Link key={agent.id} href={`/agents/${agent.id}`}>
                <div className="group relative flex flex-col gap-6 border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:bg-card-hover sm:flex-row sm:items-start sm:p-8">
                  {/* Accent bar */}
                  <div
                    className={`absolute left-0 top-6 hidden h-16 w-1 bg-gradient-to-b ${gradient} sm:block`}
                  />

                  {/* Avatar */}
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center bg-gradient-to-br ${gradient} text-white font-bold text-2xl`}
                  >
                    {agent.avatar}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent-hover transition-colors">
                        {agent.name}
                      </h3>
                      <span
                        className={`shrink-0 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${statusColors[agent.status]}`}
                      >
                        {statusLabels[agent.status]}
                      </span>
                      <span className="bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                        {agent.category}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-muted">
                      by {agent.creator}
                    </p>

                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      {agent.tagline}
                    </p>

                    <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
                      {agent.description}
                    </p>

                    {/* Capabilities */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {agent.capabilities.slice(0, 5).map((cap) => (
                        <span
                          key={cap}
                          className="bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent"
                        >
                          {cap}
                        </span>
                      ))}
                      {agent.capabilities.length > 5 && (
                        <span className="bg-border/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted">
                          +{agent.capabilities.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Pricing */}
                    <div className="mt-5 border-t border-border/50 pt-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan">
                        {agent.pricing}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Remaining featured agents grid */}
      {remaining.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8">
            <h2 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
              More Featured Agents
            </h2>
            <p className="mt-1 text-xs uppercase tracking-widest font-semibold text-muted">
              More outstanding agents worth checking out
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {remaining.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden border border-accent/20 bg-gradient-to-br from-accent/10 to-cyan/10 p-12 text-center">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] bg-accent/10 blur-[100px]" />
          </div>
          <div className="relative">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-accent/20">
              <svg
                className="h-7 w-7 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Want to Be Featured?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted leading-relaxed">
              We spotlight agents that push the boundaries of what AI can do. If
              your agent is production-ready, well-documented, and loved by its
              users, we&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button className="bg-cyan text-background px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-cyan/90 transition-all">
                Submit Your Agent
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
