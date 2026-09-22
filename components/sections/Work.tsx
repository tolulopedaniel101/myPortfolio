'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { Project, ProjectCategory } from '@/lib/types';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Filter = 'All' | ProjectCategory;

export function Work({ projects, categories }: { projects: Project[]; categories: Filter[] }) {
  const [filter, setFilter] = useState<Filter>('All');
  const reduced = useReducedMotion();

  // Only offer filters that actually match something.
  const available = useMemo(
    () => categories.filter((c) => c === 'All' || projects.some((p) => p.category === c)),
    [categories, projects],
  );

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects],
  );

  return (
    <section id="work" aria-labelledby="work-title" className="py-14 sm:py-20">
      <SectionHeading
        id="work-title"
        title="Selected work"
        lead="Each entry is a short case study: what the product is, what it had to solve, and the part I built."
        aside={
          available.length > 2 ? (
            <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-1.5">
              {available.map((c) => {
                const active = c === filter;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFilter(c)}
                    aria-pressed={active}
                    className={`min-h-9 rounded-full border px-3.5 text-[0.85rem] transition-colors duration-200 ${
                      active
                        ? 'border-text bg-text text-bg'
                        : 'border-line text-muted hover:border-line-strong hover:text-text'
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          ) : null
        }
      />

      <div className="mt-12 flex flex-col gap-14 sm:gap-20">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <ProjectCard project={project} flip={i % 2 === 1} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 ? (
        <div className="rule mt-12 py-16 text-center">
          <p className="text-[1.05rem] font-medium">Nothing here yet</p>
          <p className="mx-auto mt-2 max-w-sm text-[0.9rem] text-muted">
            There are no projects in this category right now.
          </p>
          <button
            type="button"
            onClick={() => setFilter('All')}
            className="mt-5 min-h-10 rounded-full border border-line-strong px-4 text-[0.875rem] hover:bg-raised"
          >
            Show everything
          </button>
        </div>
      ) : null}
    </section>
  );
}
