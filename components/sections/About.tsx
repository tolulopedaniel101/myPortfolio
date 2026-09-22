import { site } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-14 sm:py-20">
      <SectionHeading id="about-title" title="About" />
      <Reveal className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {site.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="prose-case mb-5 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <Image
            src="/img/portrait.png"
            alt="Portrait"
            width={800}
            height={1000}
            className="h-auto w-full rounded-xl"
          />
          {/* <p className="mt-3 text-[0.8rem] text-faint">
            Placeholder for a portrait — add one at /public/portrait.jpg.
          </p> */}
        </div>
      </Reveal>
    </section>
  );
}
