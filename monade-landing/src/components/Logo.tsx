/**
 * Monade mark: the amber square with its top-left corner cut away and a small
 * green triangle sitting in the corner, separated by a diagonal gap.
 */
export function LogoMark({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden
    >
      <polygon points="5.2,0 16,0 16,16 0,16 0,5.2" fill="#f5b301" />
      <polygon points="0,0 3.4,0 0,3.4" fill="#2f8f5b" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="Monade">
      <LogoMark size={15} />
      <span className="text-[17px] font-medium tracking-[-0.01em] text-text">Monade</span>
    </span>
  );
}
