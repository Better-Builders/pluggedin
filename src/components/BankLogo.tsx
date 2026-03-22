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
      <polygon points="24,2 1,17 47,17" fill="#0040ff" />
      {/* Roof trim line */}
      <polygon points="24,5 5,17 43,17" fill="#0050ff" />
      {/* Pediment inner triangle */}
      <polygon points="24,7 10,16 38,16" fill="none" stroke="#00e5a0" strokeWidth="0.8" />

      {/* Top beam */}
      <rect x="0" y="17" width="48" height="3" fill="#0040ff" />
      {/* Beam detail line */}
      <rect x="2" y="17.5" width="44" height="0.5" fill="#00e5a0" opacity="0.4" />

      {/* Columns with caps and bases */}
      {/* Column 1 */}
      <rect x="6" y="20" width="6" height="1.5" rx="0.3" fill="#00e5a0" />
      <rect x="7" y="21.5" width="4" height="15" fill="#00e5a0" />
      <rect x="6.5" y="21.5" width="5" height="1" fill="#00e5a0" opacity="0.6" />
      <rect x="6" y="36.5" width="6" height="1.5" rx="0.3" fill="#00e5a0" />

      {/* Column 2 */}
      <rect x="16" y="20" width="6" height="1.5" rx="0.3" fill="#00e5a0" />
      <rect x="17" y="21.5" width="4" height="15" fill="#00e5a0" />
      <rect x="16.5" y="21.5" width="5" height="1" fill="#00e5a0" opacity="0.6" />
      <rect x="16" y="36.5" width="6" height="1.5" rx="0.3" fill="#00e5a0" />

      {/* Column 3 */}
      <rect x="26" y="20" width="6" height="1.5" rx="0.3" fill="#00e5a0" />
      <rect x="27" y="21.5" width="4" height="15" fill="#00e5a0" />
      <rect x="26.5" y="21.5" width="5" height="1" fill="#00e5a0" opacity="0.6" />
      <rect x="26" y="36.5" width="6" height="1.5" rx="0.3" fill="#00e5a0" />

      {/* Column 4 */}
      <rect x="36" y="20" width="6" height="1.5" rx="0.3" fill="#00e5a0" />
      <rect x="37" y="21.5" width="4" height="15" fill="#00e5a0" />
      <rect x="36.5" y="21.5" width="5" height="1" fill="#00e5a0" opacity="0.6" />
      <rect x="36" y="36.5" width="6" height="1.5" rx="0.3" fill="#00e5a0" />

      {/* Bottom beam */}
      <rect x="0" y="38" width="48" height="3" fill="#0040ff" />
      {/* Bottom beam detail */}
      <rect x="2" y="39.5" width="44" height="0.5" fill="#00e5a0" opacity="0.3" />

      {/* Base / Steps */}
      <rect x="3" y="41" width="42" height="2.5" fill="#0040ff" />
      <rect x="6" y="43.5" width="36" height="2.5" fill="#0035dd" />
    </svg>
  );
}
