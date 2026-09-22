import { capabilities, site } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';

export function Intro() {
  return (
    <Reveal as="section" aria-label="What I do" className="rule py-14 sm:py-20">
      <p className="max-w-3xl text-balance text-[1.375rem] font-medium leading-[1.35] tracking-[-0.025em] sm:text-[1.75rem]">
        {site.statement}
      </p>

      <ul className="mt-12 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <li key={c.title} className="rule py-4">
            <h3 className="text-[0.95rem] font-medium">{c.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-relaxed text-muted">{c.note}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
