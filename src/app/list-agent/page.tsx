"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/agents";

const steps = ["Basic Info", "Details", "Profile", "Review & Submit"];

const openToOptions = [
  "API Integration",
  "Enterprise Deployment",
  "Custom Training",
  "Workflow Partnerships",
  "Sub-agent Work",
  "Data Pipeline",
];

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "beta", label: "Beta" },
  { value: "coming-soon", label: "Coming Soon" },
];

function parsePills(value: string): string[] {
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

const inputClass =
  "w-full border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none transition-colors";

const selectClass =
  "w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors appearance-none";

function PillList({ items }: { items: string[] }) {
  if (items.length === 0) return <span className="text-muted text-xs">None</span>;
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ListAgentPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Step 1
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [headline, setHeadline] = useState("");
  const [creator, setCreator] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("active");

  // Step 2
  const [about, setAbout] = useState("");
  const [capabilitiesRaw, setCapabilitiesRaw] = useState("");
  const [skillsRaw, setSkillsRaw] = useState("");
  const [integrationsRaw, setIntegrationsRaw] = useState("");
  const [pricing, setPricing] = useState("");
  const [website, setWebsite] = useState("");

  // Step 3
  const [openTo, setOpenTo] = useState<string[]>([]);
  const [avatar, setAvatar] = useState("");

  const capabilities = parsePills(capabilitiesRaw);
  const skills = parsePills(skillsRaw);
  const integrations = parsePills(integrationsRaw);

  const canNext = () => {
    if (step === 0) return name.trim() !== "" && category !== "";
    if (step === 1) return about.trim() !== "";
    if (step === 2) return avatar.trim().length === 2;
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const toggleOpenTo = (item: string) => {
    setOpenTo((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center bg-cyan/20">
            <svg
              className="h-10 w-10 text-cyan"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Your agent has been listed on{" "}
            <span className="text-accent">AgentBank</span>!
          </h1>
          <p className="mt-4 text-muted">
            {name} is now discoverable by thousands of developers, teams, and
            enterprises. Welcome to the network.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-2xl">
            <span>&#127881;</span>
            <span>&#127882;</span>
            <span>&#10024;</span>
            <span>&#127881;</span>
            <span>&#127882;</span>
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <Link href="/" className="mb-6 inline-flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center bg-accent text-white font-bold text-xs">
              PI
            </div>
            <span className="text-lg font-bold">
              Agent<span className="text-cyan">Bank</span>
            </span>
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">List Your Agent</h1>
          <p className="mt-2 text-xs uppercase tracking-widest font-semibold text-muted">
            Get discovered by developers, teams, and enterprises
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map((label, i) => (
              <div key={label} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-9 w-9 items-center justify-center text-sm font-semibold transition-colors ${
                      i < step
                        ? "bg-accent text-white"
                        : i === step
                        ? "border-2 border-accent bg-accent/15 text-accent"
                        : "border border-border bg-card text-muted"
                    }`}
                  >
                    {i < step ? (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span
                    className={`mt-1.5 text-[11px] font-medium hidden sm:block ${
                      i <= step ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`mx-2 h-px flex-1 transition-colors ${
                      i < step ? "bg-accent" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div className="border border-border bg-card p-6 sm:p-8">
          {/* Step 1: Basic Info */}
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black uppercase tracking-tight">Basic Info</h2>
              <p className="text-xs uppercase tracking-widest font-semibold text-muted">
                Tell us about your agent &mdash; this is what people see first.
              </p>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Agent Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. CodePilot"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Tagline
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="A short one-liner about your agent"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Headline
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  placeholder="e.g. Senior AI Code Reviewer & Debugger"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Creator / Company Name
                </label>
                <input
                  type="text"
                  value={creator}
                  onChange={(e) => setCreator(e.target.value)}
                  placeholder="e.g. Acme AI Labs"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Category <span className="text-red-400">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Select a category</option>
                  {categories
                    .filter((c) => c !== "All")
                    .map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Cloud / Global"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className={selectClass}
                  >
                    {statusOptions.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black uppercase tracking-tight">Details</h2>
              <p className="text-xs uppercase tracking-widest font-semibold text-muted">
                Help people understand what your agent does and how it works.
              </p>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  About / Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Describe your agent's purpose, how it works, and why it's great..."
                  rows={5}
                  className={inputClass + " resize-y"}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Capabilities{" "}
                  <span className="text-muted font-normal">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  value={capabilitiesRaw}
                  onChange={(e) => setCapabilitiesRaw(e.target.value)}
                  placeholder="e.g. Code Review, Bug Detection, Auto-Fix"
                  className={inputClass}
                />
                {capabilities.length > 0 && (
                  <div className="mt-2">
                    <PillList items={capabilities} />
                  </div>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Skills{" "}
                  <span className="text-muted font-normal">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  value={skillsRaw}
                  onChange={(e) => setSkillsRaw(e.target.value)}
                  placeholder="e.g. Python, TypeScript, Rust, SQL"
                  className={inputClass}
                />
                {skills.length > 0 && (
                  <div className="mt-2">
                    <PillList items={skills} />
                  </div>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Integrations{" "}
                  <span className="text-muted font-normal">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  value={integrationsRaw}
                  onChange={(e) => setIntegrationsRaw(e.target.value)}
                  placeholder="e.g. GitHub, Slack, Jira, VS Code"
                  className={inputClass}
                />
                {integrations.length > 0 && (
                  <div className="mt-2">
                    <PillList items={integrations} />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Pricing Model
                  </label>
                  <input
                    type="text"
                    value={pricing}
                    onChange={(e) => setPricing(e.target.value)}
                    placeholder="e.g. Free / $20/mo / Usage-based"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Website URL{" "}
                    <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://..."
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Profile */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black uppercase tracking-tight">Profile</h2>
              <p className="text-xs uppercase tracking-widest font-semibold text-muted">
                Set your agent&apos;s avatar and what it&apos;s open to.
              </p>

              <div>
                <label className="mb-3 block text-sm font-medium">
                  What are you open to?
                </label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {openToOptions.map((item) => (
                    <label
                      key={item}
                      className={`flex cursor-pointer items-center gap-3 border px-4 py-3 transition-colors ${
                        openTo.includes(item)
                          ? "border-accent bg-accent/10"
                          : "border-border bg-card hover:border-accent/40 hover:bg-card-hover"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={openTo.includes(item)}
                        onChange={() => toggleOpenTo(item)}
                        className="sr-only"
                      />
                      <div
                        className={`flex h-5 w-5 items-center justify-center border transition-colors ${
                          openTo.includes(item)
                            ? "border-accent bg-accent"
                            : "border-border"
                        }`}
                      >
                        {openTo.includes(item) && (
                          <svg
                            className="h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Avatar{" "}
                  <span className="text-muted font-normal">
                    (exactly 2 letters)
                  </span>{" "}
                  <span className="text-red-400">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    value={avatar}
                    onChange={(e) =>
                      setAvatar(e.target.value.toUpperCase().slice(0, 2))
                    }
                    placeholder="e.g. CP"
                    maxLength={2}
                    className={inputClass + " max-w-[100px] text-center text-lg font-bold"}
                  />
                  {avatar.length === 2 && (
                    <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-accent to-cyan text-lg font-bold text-white">
                      {avatar}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-black uppercase tracking-tight">Review & Submit</h2>
              <p className="text-xs uppercase tracking-widest font-semibold text-muted">
                Here&apos;s how your agent will appear on AgentBank.
              </p>

              {/* Preview card */}
              <div className="border border-border bg-background p-6">
                {/* Top section */}
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-gradient-to-br from-accent to-cyan text-xl font-bold text-white">
                    {avatar || "??"}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold truncate">
                      {name || "Agent Name"}
                    </h3>
                    {headline && (
                      <p className="text-sm text-muted truncate">{headline}</p>
                    )}
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted">
                      {creator && <span>{creator}</span>}
                      {creator && location && (
                        <span className="h-1 w-1 bg-border" />
                      )}
                      {location && <span>{location}</span>}
                      {(creator || location) && (
                        <span className="h-1 w-1 bg-border" />
                      )}
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          status === "active"
                            ? "bg-cyan/15 text-cyan"
                            : status === "beta"
                            ? "bg-amber-500/15 text-amber-400"
                            : "bg-blue-500/15 text-blue-400"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 ${
                            status === "active"
                              ? "bg-cyan"
                              : status === "beta"
                              ? "bg-amber-400"
                              : "bg-blue-400"
                          }`}
                        />
                        {statusOptions.find((s) => s.value === status)?.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                {tagline && (
                  <p className="mt-4 text-sm italic text-muted">
                    &ldquo;{tagline}&rdquo;
                  </p>
                )}

                {/* Category & Pricing */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {category && (
                    <span className="bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                      {category}
                    </span>
                  )}
                  {pricing && (
                    <span className="bg-border/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                      {pricing}
                    </span>
                  )}
                </div>

                {/* About */}
                {about && (
                  <div className="mt-4">
                    <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
                      About
                    </h4>
                    <p className="text-sm text-foreground/80 whitespace-pre-line">
                      {about}
                    </p>
                  </div>
                )}

                {/* Capabilities */}
                {capabilities.length > 0 && (
                  <div className="mt-4">
                    <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                      Capabilities
                    </h4>
                    <PillList items={capabilities} />
                  </div>
                )}

                {/* Skills */}
                {skills.length > 0 && (
                  <div className="mt-4">
                    <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                      Skills
                    </h4>
                    <PillList items={skills} />
                  </div>
                )}

                {/* Integrations */}
                {integrations.length > 0 && (
                  <div className="mt-4">
                    <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                      Integrations
                    </h4>
                    <PillList items={integrations} />
                  </div>
                )}

                {/* Open To */}
                {openTo.length > 0 && (
                  <div className="mt-4">
                    <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                      Open To
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {openTo.map((item) => (
                        <span
                          key={item}
                          className="border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Website */}
                {website && (
                  <div className="mt-4 text-xs text-muted">
                    <span className="font-medium text-foreground/70">Website:</span>{" "}
                    <span className="text-accent">{website}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
              step === 0
                ? "cursor-not-allowed text-muted/40"
                : "border border-border bg-card text-foreground hover:bg-card-hover"
            }`}
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back
          </button>

          {step < 3 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext()}
              className={`flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white transition-all ${
                canNext()
                  ? "bg-accent hover:bg-accent-hover"
                  : "cursor-not-allowed bg-accent/40"
              }`}
            >
              Next
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-cyan text-background px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-cyan/90 transition-all"
            >
              Submit Agent
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
