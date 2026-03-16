import Link from "next/link";
import { notFound } from "next/navigation";
import { agents } from "@/data/agents";
import { avatarColors, formatNumber } from "@/lib/utils";
import ConnectModal from "@/components/ConnectModal";

const statusColors = {
  active: "bg-cyan/20 text-cyan",
  beta: "bg-yellow-500/20 text-yellow-400",
  "coming-soon": "bg-muted/20 text-muted",
};

const statusLabels = {
  active: "Active",
  beta: "Beta",
  "coming-soon": "Coming Soon",
};

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

        {/* Profile header — LinkedIn style */}
        <div className="border border-border bg-card overflow-hidden">
          {/* Banner */}
          <div className={`h-24 bg-gradient-to-r ${gradient} opacity-30`} />

          <div className="p-6 sm:p-8 -mt-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
              <div className={`flex h-24 w-24 shrink-0 items-center justify-center bg-gradient-to-br ${gradient} text-white font-bold text-3xl shadow-xl border-4 border-card`}>
                {agent.avatar}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-2xl font-bold sm:text-3xl">{agent.name}</h1>
                  <span className={`px-2.5 py-0.5 text-xs font-medium ${statusColors[agent.status]}`}>
                    {statusLabels[agent.status]}
                  </span>
                  {agent.featured && (
                    <span className="bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm font-medium text-foreground/80">{agent.headline}</p>
                <p className="mt-1 font-mono text-[11px] text-muted">{agent.location} · Created by @{agent.creator}</p>


                {/* Open to */}
                {agent.openTo.length > 0 && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                      <span className="h-1.5 w-1.5 bg-cyan" />
                      Open to: {agent.openTo.join(", ")}
                    </span>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <ConnectModal agentName={agent.name} />
                  <button className="border border-cyan text-cyan px-6 py-2.5 text-sm font-medium hover:bg-cyan/10 transition-colors">
                    Follow
                  </button>
                  <button className="border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-card-hover transition-colors">
                    Endorse
                  </button>
                  {agent.website && (
                    <a
                      href={agent.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-card-hover transition-colors"
                    >
                      Website ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-6 border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-black uppercase tracking-tight mb-3">About</h2>
          <p className="text-sm text-muted leading-relaxed whitespace-pre-line">{agent.about}</p>
        </div>

        {/* Experience */}
        {agent.experience.length > 0 && (
          <div className="mt-6 border border-border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-black uppercase tracking-tight mb-5">Experience</h2>
            <div className="space-y-6">
              {agent.experience.map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center bg-gradient-to-br ${gradient} text-white text-xs font-bold mt-0.5`}>
                    {exp.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{exp.role}</h3>
                    <p className="uppercase tracking-widest text-[10px] font-semibold text-muted">{exp.company} · {exp.duration}</p>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills & Endorsements */}
        <div className="mt-6 border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-black uppercase tracking-tight mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {agent.skills.map((skill) => (
              <span
                key={skill}
                className="border border-accent/30 bg-accent/10 px-3 py-1.5 uppercase tracking-wider text-[10px] font-semibold text-accent hover:bg-accent/20 transition-colors cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Details grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {/* Capabilities */}
          <div className="border border-border bg-card p-6">
            <h2 className="text-lg font-black uppercase tracking-tight mb-4">Capabilities</h2>
            <div className="flex flex-wrap gap-2">
              {agent.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div className="border border-border bg-card p-6">
            <h2 className="text-lg font-black uppercase tracking-tight mb-4">Integrations</h2>
            <div className="flex flex-wrap gap-2">
              {agent.integrations.map((intg) => (
                <span
                  key={intg}
                  className="border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {intg}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-6 border border-border bg-card p-6">
          <h2 className="text-lg font-black uppercase tracking-tight mb-2">Pricing</h2>
          <p className="text-sm text-muted">{agent.pricing}</p>
        </div>

        {/* Related agents — "People also viewed" */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-black uppercase tracking-tight mb-4">
              Agents also viewed
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((r) => {
                const rGradient = avatarColors[r.category] || "from-indigo-500 to-purple-600";
                return (
                  <Link
                    key={r.id}
                    href={`/agents/${r.id}`}
                    className="group flex flex-col gap-3 border border-border bg-card p-4 transition-all hover:border-accent/40 hover:bg-card-hover"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center bg-gradient-to-br ${rGradient} text-white font-bold text-xs`}>
                        {r.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium group-hover:text-cyan transition-colors">{r.name}</p>
                        <p className="truncate font-mono text-[11px] text-muted">@{r.creator}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted line-clamp-2">{r.headline}</p>
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
