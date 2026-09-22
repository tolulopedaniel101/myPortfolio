import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';

/**
 * One case-study block: a sticky label column on wide screens and the
 * content beside it, so a long page still tells you where you are.
 */
export function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" className="rule grid grid-cols-1 gap-4 py-10 lg:grid-cols-12 lg:gap-10 lg:py-14">
      <div className="lg:col-span-3">
        <h2 id={id} className="label lg:sticky lg:top-28">
          {title}
        </h2>
      </div>
      <div className="lg:col-span-9">{children}</div>
    </Reveal>
  );
}

export function NoteList({ notes }: { notes: Array<{ title: string; body: string }> }) {
  return (
    <ul className="flex flex-col gap-8">
      {notes.map((note) => (
        <li key={note.title}>
          <h3 className="text-lg font-semibold tracking-[-0.02em]">{note.title}</h3>
          <p className="prose-case mt-2">{note.body}</p>
        </li>
      ))}
    </ul>
  );
}
