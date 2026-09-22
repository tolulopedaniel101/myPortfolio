import { projects, categories } from '@/data/projects';
import { Hero } from '@/components/sections/Hero';
import { Intro } from '@/components/sections/Intro';
import { Work } from '@/components/sections/Work';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { CTASection } from '@/components/ui/CTASection';
import { site } from '@/data/site';

export default function HomePage() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: site.socials.map((s) => s.href),
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <Intro />
      <Work projects={projects} categories={categories} />
      <About />
      <Skills />
      <Experience />
      <div id="contact">
        <CTASection />
      </div>
    </div>
  );
}
