/** A multiplayer-style cursor with a name tag, like in a design or editing tool. */
export function Cursor({ label, color, className }: { label: string; color: string; className?: string }) {
  return (
    <span className={`cursor${className ? ` ${className}` : ''}`} aria-hidden="true">
      <svg width="22" height="24" viewBox="0 0 22 24">
        <path d="M2.5 2.5 19.5 10.6l-7.7 2.3-3.4 7.6z" fill={color} stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
      <b style={{ background: color }}>{label}</b>
    </span>
  );
}
