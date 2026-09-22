export function TechnologyBadge({ name }: { name: string }) {
  return (
    <li className="rounded-full border border-line px-3 py-1 text-[0.78rem] text-muted transition-colors duration-200 hover:border-line-strong hover:text-text">
      {name}
    </li>
  );
}

export function TechnologyList({ items, className = '' }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((t) => (
        <TechnologyBadge key={t} name={t} />
      ))}
    </ul>
  );
}
