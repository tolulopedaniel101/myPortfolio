import { Mail } from 'lucide-react';
import { site } from '@/data/site';
import { Action } from './Action';
import { Reveal } from './Reveal';

export function CTASection({
  id = 'contact',
  title = "Let's build something worth shipping.",
  lead = 'Tell me what you are working on — a product, a rebuild, or an idea that needs a first interface. I reply to everything.',
}: {
  id?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <Reveal as="section" aria-labelledby={`${id}-title`} className="rule py-16 sm:py-24">
      <div className="max-w-3xl">
        <h2
          id={`${id}-title`}
          className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl"
        >
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-muted">{lead}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          <Action href={`mailto:${site.email}`} variant="solid" external>
            <Mail aria-hidden className="size-4" />
            {site.email}
          </Action>
          {site.socials.map((s) => (
            <Action key={s.label} href={s.href} variant="outline" external>
              {s.label}
            </Action>
          ))}
        </div>

        {site.available ? (
          <p className="mt-8 inline-flex items-center gap-2 text-[0.85rem] text-muted">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            {site.availabilityNote}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
