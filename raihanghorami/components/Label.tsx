/** Small mono section label, numbered like a timeline marker: 00:01, 00:02… */
export function Label({ n, children }: { n?: number; children: React.ReactNode }) {
  return (
    <p className="label">
      {n !== undefined && <span className="tc">{`00:${String(n).padStart(2, '0')}`}</span>}
      {children}
    </p>
  );
}
