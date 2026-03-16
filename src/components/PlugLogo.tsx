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
      <rect x="8" y="16" width="32" height="24" rx="2" fill="#0040ff" />

      {/* Prongs */}
      <rect x="16" y="4" width="5" height="14" rx="1" fill="#00e5a0" />
      <rect x="27" y="4" width="5" height="14" rx="1" fill="#00e5a0" />

      {/* Ground prong */}
      <rect x="21" y="8" width="6" height="10" rx="1" fill="#00e5a0" opacity="0.6" />

      {/* PI text */}
      <text
        x="24"
        y="32"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="13"
        fontWeight="800"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        letterSpacing="1"
      >
        PI
      </text>
    </svg>
  );
}
