import { experience } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <section aria-labelledby="journey-title" className="py-14 sm:py-20">
      <SectionHeading id="journey-title" title="Journey" />
      <Reveal>
        <ol className="mt-8">
          {experience.map((item) => (
            <li
              key={`${item.year}-${item.role}`}
              className="rule grid grid-cols-1 gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
            >
              <span className="label pt-1">{item.year}</span>
              <div>
                <h3 className="text-[1.05rem] font-medium tracking-[-0.02em]">
                  {item.role}, {item.org}
                </h3>
                <p className="mt-1.5 max-w-xl text-[0.9rem] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
