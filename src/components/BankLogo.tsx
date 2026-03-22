export default function BankLogo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Roof triangle */}
      <polygon points="24,4 4,18 44,18" fill="#0040ff" />

      {/* $ symbol on roof */}
      <text
        x="24"
        y="15"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#00e5a0"
        fontSize="10"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        $
      </text>

      {/* Top beam */}
      <rect x="2" y="18" width="44" height="3" fill="#0040ff" />

      {/* Columns */}
      <rect x="8" y="21" width="4" height="16" rx="1" fill="#00e5a0" />
      <rect x="22" y="21" width="4" height="16" rx="1" fill="#00e5a0" />
      <rect x="36" y="21" width="4" height="16" rx="1" fill="#00e5a0" />

      {/* Bottom beam */}
      <rect x="2" y="37" width="44" height="3" fill="#0040ff" />

      {/* Base */}
      <rect x="6" y="40" width="36" height="3" fill="#0040ff" />
    </svg>
  );
}
