import Link from "next/link";
import { notFound } from "next/navigation";
import { agents } from "@/data/agents";

const avatarColors: Record<string, string> = {
  Coding: "from-indigo-500 to-purple-600",
  Research: "from-cyan-500 to-blue-600",
  Writing: "from-emerald-500 to-teal-600",
  Design: "from-pink-500 to-rose-600",
  Data: "from-orange-500 to-amber-600",
  "Customer Support": "from-green-500 to-emerald-600",
  Sales: "from-violet-500 to-purple-600",
  DevOps: "from-red-500 to-orange-600",
  Legal: "from-slate-400 to-zinc-600",
  Finance: "from-yellow-500 to-orange-600",
  Marketing: "from-fuchsia-500 to-pink-600",
};

const statusColors = {
  active: "bg-success/20 text-success",
  beta: "bg-yellow-500/20 text-yellow-400",
  "coming-soon": "bg-muted/20 text-muted",
};

const statusLabels = {
  active: "Active",
  beta: "Beta",
  "coming-soon": "Coming Soon",
};

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return n.toString();
}

export function generateStaticParams() {
  return agents.map((agent) => ({ id: agent.id }));
}

export default async function AgentProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const agent = agents.find((a) => a.id === id);

  if (!agent) notFound();

  const gradient = avatarColors[agent.category] || "from-indigo-500 to-purple-600";
  const related = agents.filter((a) => a.category === agent.category && a.id !== agent.id).slice(0, 3);

  return (
    <main className="min-h-screen pt-16">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {/* Back */}
        <Link href="/agents" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-8">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Directory
        </Link>

        {/* Profile header */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white font-bold text-2xl shadow-lg`}>
              {agent.avatar}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-bold sm:text-3xl">{agent.name}</h1>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[agent.status]}`}>
                  {statusLabels[agent.status]}
                </span>
                {agent.featured && (
                  <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent">
                    Featured
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-muted">by {agent.creator}</p>
              <p className="mt-3 text-muted leading-relaxed">{agent.tagline}</p>

              {/* Stats row */}
              <div className="mt-5 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span className="text-sm font-medium">{formatNumber(agent.connections)} connections</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span className="text-sm font-medium">{formatNumber(agent.endorsements)} endorsements</span>
                </div>
                <span className="rounded-lg bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {agent.category}
                </span>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors shadow-md shadow-accent/20">
                  + Connect
                </button>
                <button className="rounded-xl border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-card-hover transition-colors">
                  Endorse
                </button>
                {agent.website && (
                  <a
                    href={agent.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-card-hover transition-colors"
                  >
                    Visit Website ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold mb-3">About</h2>
          <p className="text-sm text-muted leading-relaxed">{agent.description}</p>
        </div>

        {/* Details grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {/* Capabilities */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold mb-4">Capabilities</h2>
            <div className="flex flex-wrap gap-2">
              {agent.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold mb-4">Integrations</h2>
            <div className="flex flex-wrap gap-2">
              {agent.integrations.map((int) => (
                <span
                  key={int}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {int}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold mb-2">Pricing</h2>
          <p className="text-sm text-muted">{agent.pricing}</p>
        </div>

        {/* Related agents */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-semibold mb-4">
              More in {agent.category}
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((r) => {
                const rGradient = avatarColors[r.category] || "from-indigo-500 to-purple-600";
                return (
                  <Link
                    key={r.id}
                    href={`/agents/${r.id}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:bg-card-hover"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${rGradient} text-white font-bold text-xs`}>
                      {r.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium group-hover:text-accent-hover transition-colors">{r.name}</p>
                      <p className="truncate text-xs text-muted">{r.creator}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
