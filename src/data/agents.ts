export interface Agent {
  id: string;
  name: string;
  tagline: string;
  description: string;
  avatar: string;
  creator: string;
  category: string;
  capabilities: string[];
  connections: number;
  endorsements: number;
  status: "active" | "beta" | "coming-soon";
  featured?: boolean;
  integrations: string[];
  pricing: string;
  website?: string;
}

export const categories = [
  "All",
  "Coding",
  "Research",
  "Writing",
  "Design",
  "Data",
  "Customer Support",
  "Sales",
  "DevOps",
  "Legal",
  "Finance",
  "Marketing",
] as const;

export const agents: Agent[] = [
  {
    id: "claude-code",
    name: "Claude Code",
    tagline: "Agentic coding right in your terminal",
    description:
      "An autonomous coding agent that lives in your terminal. Claude Code can read your codebase, edit files, run commands, search the web, and handle complex multi-step engineering tasks — all while following your project conventions.",
    avatar: "CC",
    creator: "Anthropic",
    category: "Coding",
    capabilities: ["Code Generation", "Debugging", "Refactoring", "Git Operations", "Multi-file Editing", "Test Writing"],
    connections: 48200,
    endorsements: 12840,
    status: "active",
    featured: true,
    integrations: ["VS Code", "JetBrains", "GitHub", "Terminal"],
    pricing: "Usage-based",
    website: "https://claude.ai/claude-code",
  },
  {
    id: "devin",
    name: "Devin",
    tagline: "The first AI software engineer",
    description:
      "A fully autonomous AI software engineer capable of planning, coding, debugging, and deploying entire projects. Devin can use a browser, terminal, and code editor simultaneously to complete complex engineering tasks end-to-end.",
    avatar: "DV",
    creator: "Cognition",
    category: "Coding",
    capabilities: ["Full-stack Development", "Planning", "Debugging", "Deployment", "Browser Use", "API Integration"],
    connections: 35100,
    endorsements: 9450,
    status: "active",
    featured: true,
    integrations: ["GitHub", "Slack", "Linear", "Jira"],
    pricing: "$500/mo",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    tagline: "AI-powered answer engine",
    description:
      "A conversational AI search engine that provides accurate, cited answers by searching the web in real-time. Perplexity combines large language models with live web data to deliver up-to-date, sourced information.",
    avatar: "PX",
    creator: "Perplexity AI",
    category: "Research",
    capabilities: ["Web Search", "Citation Generation", "Summarization", "Follow-up Questions", "Academic Research", "Real-time Data"],
    connections: 62300,
    endorsements: 18200,
    status: "active",
    featured: true,
    integrations: ["API", "Chrome Extension", "Mobile Apps", "Slack"],
    pricing: "Free / $20/mo Pro",
  },
  {
    id: "cursor-agent",
    name: "Cursor Agent",
    tagline: "AI-first code editor agent",
    description:
      "The intelligent coding agent built into Cursor IDE. It understands your entire codebase and can make multi-file edits, run commands, and iterate on code based on natural language instructions.",
    avatar: "CR",
    creator: "Cursor Inc.",
    category: "Coding",
    capabilities: ["Code Completion", "Multi-file Editing", "Codebase Q&A", "Bug Fixing", "Code Review", "Terminal Commands"],
    connections: 41800,
    endorsements: 11200,
    status: "active",
    integrations: ["VS Code Extensions", "GitHub", "GitLab"],
    pricing: "$20/mo",
  },
  {
    id: "gpt-researcher",
    name: "GPT Researcher",
    tagline: "Autonomous research agent",
    description:
      "An open-source autonomous agent designed for comprehensive online research. It generates research questions, searches the web, scrapes content, and produces detailed research reports with citations.",
    avatar: "GR",
    creator: "Tavily",
    category: "Research",
    capabilities: ["Deep Research", "Report Generation", "Web Scraping", "Multi-source Analysis", "Citation Management"],
    connections: 18400,
    endorsements: 5200,
    status: "active",
    integrations: ["Python SDK", "LangChain", "REST API"],
    pricing: "Open Source",
  },
  {
    id: "jasper-ai",
    name: "Jasper",
    tagline: "AI marketing copilot",
    description:
      "An AI-powered marketing platform that helps teams create on-brand content at scale. From blog posts to ad copy, Jasper understands your brand voice and produces content that converts.",
    avatar: "JA",
    creator: "Jasper AI",
    category: "Marketing",
    capabilities: ["Copywriting", "Brand Voice", "Campaign Generation", "SEO Content", "Social Media", "Email Marketing"],
    connections: 29700,
    endorsements: 8100,
    status: "active",
    integrations: ["Chrome Extension", "Zapier", "Webflow", "HubSpot"],
    pricing: "$49/mo",
  },
  {
    id: "openai-codex",
    name: "Codex CLI",
    tagline: "OpenAI's coding agent in the terminal",
    description:
      "A lightweight coding agent from OpenAI that runs in your terminal. Codex can understand your codebase, write and edit code, execute commands, and handle multi-step tasks with full sandboxing.",
    avatar: "OC",
    creator: "OpenAI",
    category: "Coding",
    capabilities: ["Code Generation", "Terminal Commands", "Sandboxed Execution", "Multi-step Tasks", "File Editing"],
    connections: 22100,
    endorsements: 6300,
    status: "active",
    integrations: ["Terminal", "GitHub"],
    pricing: "Usage-based",
  },
  {
    id: "v0-dev",
    name: "v0",
    tagline: "AI-powered UI generation",
    description:
      "An AI-powered tool by Vercel that generates production-ready React components from text descriptions and images. v0 creates beautiful, responsive UIs using shadcn/ui and Tailwind CSS.",
    avatar: "V0",
    creator: "Vercel",
    category: "Design",
    capabilities: ["UI Generation", "React Components", "Responsive Design", "Image-to-Code", "Iteration", "Tailwind CSS"],
    connections: 38500,
    endorsements: 10800,
    status: "active",
    featured: true,
    integrations: ["Next.js", "React", "shadcn/ui"],
    pricing: "Free / $20/mo Premium",
  },
  {
    id: "harvey-ai",
    name: "Harvey",
    tagline: "AI for legal professionals",
    description:
      "A purpose-built AI assistant for law firms and legal departments. Harvey helps lawyers with contract analysis, legal research, due diligence, and document drafting while maintaining confidentiality standards.",
    avatar: "HV",
    creator: "Harvey AI",
    category: "Legal",
    capabilities: ["Contract Analysis", "Legal Research", "Document Drafting", "Due Diligence", "Case Law Search"],
    connections: 14200,
    endorsements: 4800,
    status: "active",
    integrations: ["Microsoft Word", "Document Management Systems"],
    pricing: "Enterprise",
  },
  {
    id: "greenhouse-agent",
    name: "Greenhouse AI",
    tagline: "Autonomous recruiting agent",
    description:
      "An AI recruiting agent that automates candidate sourcing, screening, and scheduling. It understands job requirements, searches talent pools, and manages the early stages of the hiring pipeline.",
    avatar: "GA",
    creator: "Greenhouse",
    category: "Sales",
    capabilities: ["Candidate Sourcing", "Resume Screening", "Interview Scheduling", "Pipeline Management", "Outreach"],
    connections: 11300,
    endorsements: 3200,
    status: "beta",
    integrations: ["LinkedIn", "Greenhouse ATS", "Slack", "Calendar"],
    pricing: "Enterprise",
  },
  {
    id: "datadog-bits",
    name: "Bits AI",
    tagline: "AI-powered DevOps assistant",
    description:
      "Datadog's AI assistant that helps engineering teams investigate incidents, analyze logs, and monitor infrastructure. Bits understands your observability data and helps resolve issues faster.",
    avatar: "BA",
    creator: "Datadog",
    category: "DevOps",
    capabilities: ["Incident Investigation", "Log Analysis", "Anomaly Detection", "Root Cause Analysis", "Alert Management"],
    connections: 16700,
    endorsements: 5100,
    status: "active",
    integrations: ["Datadog", "Slack", "PagerDuty", "Jira"],
    pricing: "Included with Datadog",
  },
  {
    id: "fin-ai",
    name: "Fin",
    tagline: "AI customer service agent",
    description:
      "Intercom's AI customer service agent that resolves support tickets autonomously. Fin understands your help center, product docs, and past conversations to provide accurate, helpful responses.",
    avatar: "FN",
    creator: "Intercom",
    category: "Customer Support",
    capabilities: ["Ticket Resolution", "Knowledge Base Q&A", "Handoff to Human", "Multi-language", "Conversation Summary"],
    connections: 24600,
    endorsements: 7400,
    status: "active",
    integrations: ["Intercom", "Zendesk", "Salesforce", "Slack"],
    pricing: "$0.99/resolution",
  },
];
