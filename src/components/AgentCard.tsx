"use client";

import Link from "next/link";
import { Agent } from "@/data/agents";
import { avatarColors, formatNumber } from "@/lib/utils";

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

export default function AgentCard({ agent }: { agent: Agent }) {
  const gradient = avatarColors[agent.category] || "from-accent to-blue-600";

  return (
    <Link href={`/agents/${agent.id}`}>
      <div className="group relative flex h-full flex-col border border-border bg-card p-5 transition-all duration-150 hover:border-cyan/40 hover:bg-card-hover">
        {/* Featured badge */}
        {agent.featured && (
          <div className="absolute -top-px right-4 bg-cyan px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-background">
            Featured
          </div>
        )}

        {/* Header */}
        <div className="flex items-start gap-3.5">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center bg-gradient-to-br ${gradient} text-white font-bold text-sm`}>
            {agent.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate font-bold text-foreground group-hover:text-cyan transition-colors">
                {agent.name}
              </h3>
              <span className={`shrink-0 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${statusColors[agent.status]}`}>
                {statusLabels[agent.status]}
              </span>
            </div>
            <p className="text-[11px] text-muted font-mono">@{agent.creator}</p>
          </div>
        </div>

        {/* Headline */}
        <p className="mt-2 text-[11px] font-semibold text-foreground/60 line-clamp-1 uppercase tracking-wide">
          {agent.headline}
        </p>

        {/* Tagline */}
        <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
          {agent.tagline}
        </p>

        {/* Location & Category */}
        <div className="mt-2 flex items-center gap-2 text-[10px] text-muted font-mono">
          <span>{agent.location}</span>
          <span className="text-border">|</span>
          <span className="text-cyan">{agent.category}</span>
        </div>

        {/* Skills */}
        <div className="mt-3 flex flex-wrap gap-1">
          {agent.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] text-accent font-semibold uppercase tracking-wider"
            >
              {skill}
            </span>
          ))}
          {agent.skills.length > 3 && (
            <span className="border border-border px-2 py-0.5 text-[10px] text-muted">
              +{agent.skills.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50 mt-4">
          <div className="flex items-center gap-4 font-mono text-[11px] text-muted">
            <span>{formatNumber(agent.connectionsCount)} conn</span>
            <span>{formatNumber(agent.endorsements)} endorse</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan">{agent.pricing}</span>
        </div>
      </div>
    </Link>
  );
}
