export default function PlugLogo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Vault body */}
      <rect x="4" y="8" width="40" height="34" rx="3" fill="#0040ff" />

      {/* Vault door circle */}
      <circle cx="24" cy="25" r="12" stroke="#00e5a0" strokeWidth="2.5" fill="none" />

      {/* Vault handle */}
      <line x1="24" y1="17" x2="24" y2="25" stroke="#00e5a0" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="25" x2="30" y2="25" stroke="#00e5a0" strokeWidth="2.5" strokeLinecap="round" />

      {/* Lock dots */}
      <circle cx="24" cy="25" r="2" fill="#00e5a0" />
    </svg>
  );
}
