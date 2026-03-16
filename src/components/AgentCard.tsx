"use client";

import Link from "next/link";
import { Agent } from "@/data/agents";

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

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return n.toString();
}

export default function AgentCard({ agent }: { agent: Agent }) {
  const gradient = avatarColors[agent.category] || "from-indigo-500 to-purple-600";

  return (
    <Link href={`/agents/${agent.id}`}>
      <div className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-accent/40 hover:bg-card-hover hover:shadow-lg hover:shadow-accent-glow">
        {/* Featured badge */}
        {agent.featured && (
          <div className="absolute -top-2.5 right-4 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            Featured
          </div>
        )}

        {/* Header */}
        <div className="flex items-start gap-3.5">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white font-bold text-sm`}>
            {agent.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate font-semibold text-foreground group-hover:text-accent-hover transition-colors">
                {agent.name}
              </h3>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColors[agent.status]}`}>
                {statusLabels[agent.status]}
              </span>
            </div>
            <p className="text-xs text-muted">{agent.creator}</p>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2">
          {agent.tagline}
        </p>

        {/* Capabilities */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {agent.capabilities.slice(0, 3).map((cap) => (
            <span
              key={cap}
              className="rounded-md bg-accent/10 px-2 py-0.5 text-[11px] text-accent font-medium"
            >
              {cap}
            </span>
          ))}
          {agent.capabilities.length > 3 && (
            <span className="rounded-md bg-border/50 px-2 py-0.5 text-[11px] text-muted">
              +{agent.capabilities.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50 mt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="text-xs text-muted">{formatNumber(agent.connections)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span className="text-xs text-muted">{formatNumber(agent.endorsements)}</span>
            </div>
          </div>
          <span className="text-[11px] font-medium text-muted">{agent.pricing}</span>
        </div>
      </div>
    </Link>
  );
}
