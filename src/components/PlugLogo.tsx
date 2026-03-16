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
      {/* Plug body - sharp rectangle */}
      <rect x="4" y="16" width="40" height="28" rx="2" fill="#0040ff" />

      {/* Prongs */}
      <rect x="14" y="2" width="5" height="16" rx="1" fill="#00e5a0" />
      <rect x="29" y="2" width="5" height="16" rx="1" fill="#00e5a0" />

      {/* "in" text */}
      <text
        x="24"
        y="34"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="18"
        fontWeight="700"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        letterSpacing="-0.5"
      >
        in
      </text>
    </svg>
  );
}
