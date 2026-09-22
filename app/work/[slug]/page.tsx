import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { projects, getProject } from '@/data/projects';
import { site } from '@/data/site';
import { BrowserFrame } from '@/components/projects/BrowserFrame';
import { ProjectPreview } from '@/components/projects/ProjectPreview';
import { SafeImage } from '@/components/projects/SafeImage';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { CaseStudySection, NoteList } from '@/components/case-study/CaseStudySection';
import { SpecTable } from '@/components/ui/SpecTable';
import { TechnologyList } from '@/components/ui/TechnologyBadge';
import { Action } from '@/components/ui/Action';
import { CTASection } from '@/components/ui/CTASection';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project not found' };

  const title = `${project.title} — ${project.category}`;
  return {
    title,
    description: project.shortDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: 'article',
      title,
      description: project.shortDescription,
      url: `${site.url}/work/${project.slug}`,
      images: [project.image ?? '/opengraph-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      {/* Hero */}
      <header className="pb-10 pt-28 sm:pt-32 lg:pt-36">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-[0.875rem] text-muted hover:text-text"
        >
          <ArrowLeft
            aria-hidden
            className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          All work
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="label">{project.category}</span>
              {project.placeholder ? (
                <span className="rounded-full border border-dashed border-line-strong px-2 py-0.5 text-[0.65rem] text-faint">
                  Sample project
                </span>
              ) : null}
            </div>

            <h1 className="mt-4 text-[2.25rem] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.liveUrl ? (
                <Action href={project.liveUrl} variant="solid" external>
                  Visit live project
                  <ExternalLink aria-hidden className="size-4" />
                </Action>
              ) : null}
              {project.githubUrl ? (
                <Action href={project.githubUrl} variant="outline" external>
                  <Github aria-hidden className="size-4" />
                  View source
                </Action>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <SpecTable
              rows={[
                { label: 'Year', value: project.year },
                { label: 'Role', value: project.role },
                { label: 'Status', value: project.status },
                { label: 'Stack', value: project.technologies.join(', ') },
              ]}
            />
          </div>
        </div>

        <div className="mt-12">
          <BrowserFrame url={project.liveUrl?.replace(/^https?:\/\//, '') ?? `${project.slug}.app`}>
            <SafeImage
              src={project.image}
              alt={`${project.title} interface`}
              priority
              fallback={<ProjectPreview kind={project.previewKind} />}
            />
          </BrowserFrame>
        </div>
      </header>

      <CaseStudySection id="overview" title="Overview">
        <p className="prose-case">{project.overview}</p>
      </CaseStudySection>

      <CaseStudySection id="problem" title="The problem">
        <p className="prose-case">{project.problem}</p>
      </CaseStudySection>

      <CaseStudySection id="solution" title="The solution">
        <p className="prose-case">{project.solution}</p>
      </CaseStudySection>

      <CaseStudySection id="role" title="My role">
        <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {project.responsibilities.map((item) => (
            <li key={item} className="rule py-3 text-[0.95rem] text-muted">
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection id="stack" title="Tech stack">
        <TechnologyList items={project.technologies} />
      </CaseStudySection>

      <CaseStudySection id="walkthrough" title="Product walkthrough">
        <ProjectGallery items={project.gallery} projectTitle={project.title} />
      </CaseStudySection>

      {project.engineering.length > 0 ? (
        <CaseStudySection id="engineering" title="Engineering">
          <NoteList notes={project.engineering} />
        </CaseStudySection>
      ) : null}

      {project.challenges.length > 0 ? (
        <CaseStudySection id="challenges" title="Challenges">
          <NoteList notes={project.challenges} />
        </CaseStudySection>
      ) : null}

      <CaseStudySection id="outcome" title="Outcome">
        <p className="prose-case">{project.outcome}</p>
      </CaseStudySection>

      {/* Next project */}
      <section aria-label="Next project" className="rule py-10">
        <Link href={`/work/${next.slug}`} className="group flex items-end justify-between gap-6">
          <span>
            <span className="label">Next project</span>
            <span className="mt-2 block text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              {next.title}
            </span>
          </span>
          <ArrowUpRight
            aria-hidden
            className="size-6 shrink-0 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </Link>
      </section>

      <CTASection
        id="project-cta"
        title="Have a product you want to build?"
        lead="If any of this looks like the thing you need built, send me the short version and I will tell you how I would approach it."
      />
    </div>
  );
}
