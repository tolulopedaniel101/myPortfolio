import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/types';
import { BrowserFrame } from './BrowserFrame';
import { ProjectPreview } from './ProjectPreview';
import { SafeImage } from './SafeImage';
import { SpecTable } from '@/components/ui/SpecTable';
import { TechnologyList } from '@/components/ui/TechnologyBadge';
import { Action } from '@/components/ui/Action';

export function ProjectCard({ project, flip = false }: { project: Project; flip?: boolean }) {
  const host = project.liveUrl?.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <article className="group rule grid grid-cols-1 gap-8 pt-8 lg:grid-cols-12 lg:gap-12 lg:pt-10">
      {/* Preview */}
      <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        <Link
          href={`/work/${project.slug}`}
          aria-label={`Read the ${project.title} case study`}
          className="block transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-1"
        >
          <BrowserFrame url={host ?? `${project.slug}.app`}>
            <SafeImage
              src={project.image}
              alt={`${project.title} interface`}
              fallback={<ProjectPreview kind={project.previewKind} />}
            />
          </BrowserFrame>
        </Link>
      </div>

      {/* Information */}
      <div className={`flex flex-col lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="label">{project.category}</span>
          {project.placeholder ? (
            <span className="rounded-full border border-dashed border-line-strong px-2 py-0.5 text-[0.65rem] text-faint">
              Sample project
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          <Link href={`/work/${project.slug}`} className="inline-flex items-start gap-1.5">
            {project.title}
            <ArrowUpRight
              aria-hidden
              className="mt-1.5 size-4 shrink-0 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </Link>
        </h3>

        <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        <SpecTable
          className="mt-6"
          rows={[
            { label: 'Role', value: project.role },
            { label: 'Year', value: project.year },
            { label: 'Status', value: project.status },
            ...(project.result ? [{ label: 'Outcome', value: project.result }] : []),
          ]}
        />

        <TechnologyList items={project.technologies} className="mt-5" />

        <div className="mt-6 flex flex-wrap gap-2">
          <Action href={`/work/${project.slug}`} variant="solid">
            Read case study
          </Action>
          {project.liveUrl ? (
            <Action href={project.liveUrl} variant="outline" external>
              Visit site
              <ExternalLink aria-hidden className="size-3.5" />
            </Action>
          ) : null}
        </div>
      </div>
    </article>
  );
}
