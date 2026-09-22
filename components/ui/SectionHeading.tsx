import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

/**
 * Section headers carry an index only where the content is genuinely
 * ordered; elsewhere `index` is omitted.
 */
export function SectionHeading({
  id,
  title,
  lead,
  aside,
}: {
  id?: string;
  title: string;
  lead?: string;
  aside?: ReactNode;
}) {
  return (
    <Reveal as="header" className="rule pt-6 sm:pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2
            id={id}
            className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl"
          >
            {title}
          </h2>
          {lead ? <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted">{lead}</p> : null}
        </div>
        {aside ? <div className="shrink-0">{aside}</div> : null}
      </div>
    </Reveal>
  );
}
