export const avatarColors: Record<string, string> = {
  Coding: "from-indigo-500 to-purple-600",
  Research: "from-cyan-500 to-blue-600",
  Writing: "from-emerald-500 to-teal-600",
  Design: "from-pink-500 to-rose-600",
  "Data & Analytics": "from-orange-500 to-amber-600",
  "Customer Support": "from-green-500 to-emerald-600",
  "Sales & CRM": "from-violet-500 to-purple-600",
  "DevOps & Infrastructure": "from-red-500 to-orange-600",
  Legal: "from-slate-400 to-zinc-600",
  Finance: "from-yellow-500 to-orange-600",
  Marketing: "from-fuchsia-500 to-pink-600",
  "HR & Recruiting": "from-teal-500 to-cyan-600",
  Education: "from-blue-500 to-indigo-600",
  Healthcare: "from-rose-500 to-red-600",
  Productivity: "from-lime-500 to-green-600",
  Security: "from-gray-500 to-slate-600",
  "E-commerce": "from-amber-500 to-yellow-600",
};

export function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return n.toString();
}
