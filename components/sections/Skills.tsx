import { skillGroups } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-14 sm:py-20">
      <SectionHeading
        id="skills-title"
        title="What I work with"
        lead="Only what I use regularly. No proficiency bars — the projects above are the evidence."
      />
      <Reveal className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.group} className="rule py-5">
            <h3 className="label">{group.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-[0.95rem] text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
