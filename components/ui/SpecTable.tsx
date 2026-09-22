/**
 * The structural device used across the site: a hairline spec sheet.
 * It encodes project metadata as label/value pairs rather than as
 * decorative chips.
 */
export function SpecTable({
  rows,
  className = '',
}: {
  rows: Array<{ label: string; value: React.ReactNode }>;
  className?: string;
}) {
  return (
    <dl className={`grid grid-cols-1 ${className}`}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="rule grid grid-cols-[minmax(5.5rem,0.4fr)_1fr] items-baseline gap-4 py-2.5"
        >
          <dt className="label">{row.label}</dt>
          <dd className="text-[0.9rem] leading-snug text-text">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
