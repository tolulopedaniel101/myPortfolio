export type ProjectCategory =
  | 'Web App'
  | 'Website'
  | 'Dashboard'
  | 'Experiment'
  | 'Product';

export type ProjectStatus = 'Live' | 'In development' | 'Archived' | 'Private beta';

/** Decides which built-in CSS preview is drawn when no screenshot exists. */
export type PreviewKind = 'dashboard' | 'marketing' | 'app' | 'editor' | 'mobile';

export interface GalleryItem {
  /** Path under /public, e.g. "/work/helix/overview.png". Optional while you wait on assets. */
  src?: string;
  alt: string;
  caption: string;
  /** Frames the shot. Mobile shots render in a narrower column. */
  device?: 'desktop' | 'mobile';
  /** Used to draw a placeholder when `src` is missing. */
  previewKind?: PreviewKind;
}

export interface CaseStudyNote {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One line. Used on cards and in metadata. */
  shortDescription: string;
  /** Two or three sentences. Used on the case-study hero. */
  description: string;
  category: ProjectCategory;
  /** Free-form tags shown under the preview, e.g. ["Product", "Frontend"]. */
  tags: string[];
  year: string;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  /** Screenshot path under /public. Falls back to a drawn preview when absent. */
  image?: string;
  previewKind: PreviewKind;
  gallery: GalleryItem[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  /** Headline outcome shown on the card. Keep it factual. */
  result?: string;
  overview: string;
  problem: string;
  solution: string;
  /** Only list what you actually did on this project. */
  responsibilities: string[];
  engineering: CaseStudyNote[];
  challenges: CaseStudyNote[];
  outcome: string;
  /** Marks sample content so it is never presented as real work. */
  placeholder?: boolean;
}
