/**
 * Every piece of personal information lives here.
 * Replace the values below and the whole site updates.
 * Anything left as a TODO is a placeholder, not a claim.
 */
export const site = {
  name: 'AJIBOYE DANIEL TOLULOPE', // TODO: replace
  initials: 'ADT', // TODO: replace
  role: 'Front-end engineer and product builder',
  location: 'Nigeria', // TODO: replace
  url: 'https://example.com', // TODO: replace with your deployed URL
  email: 'tolulopedaniel101@gmail.com', // TODO: replace
  available: true,
  availabilityNote: 'Taking on new work from Q1',
  headline: 'Building digital products that look as good as they work.',
  intro:
    'I build modern, responsive web experiences and turn early ideas into products people can actually use — from the first interface sketch through to the shipped, deployed thing.',
  statement:
    'I build products from idea to interface, combining frontend engineering, product thinking and careful user experience.',
  about: [
    'I work at the seam between design and engineering. Most of what I build starts as a rough idea from a founder or a product team, and my job is to turn it into an interface that feels obvious to use and holds up under real traffic.',
    'I care about the parts people feel but rarely name: how fast a page becomes interactive, whether a layout survives a 320px screen, whether a form tells you what went wrong. I would rather ship a smaller surface that works everywhere than a larger one that only works in a demo.',
    'Right now I am spending most of my time on data-dense product interfaces, motion that explains state rather than decorating it, and getting more of my work onto the server so the browser has less to do.',
  ],
  /** Social links. Delete any you do not use — the UI adapts. */
  socials: [
    { label: 'GitHub', href: 'https://github.com/tolulopedaniel101' }, // TODO
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tolulope-daniel' }, // TODO
    { label: 'X', href: 'https://x.com/tolulopedaniel8' }, // TODO
  ],
} as const;

export const capabilities = [
  { title: 'Frontend engineering', note: 'Component architecture, state, performance budgets.' },
  { title: 'Product development', note: 'Scoping, prioritising, shipping in small increments.' },
  { title: 'UI implementation', note: 'Design files rebuilt faithfully, down to the spacing.' },
  { title: 'Web applications', note: 'Auth, data fetching, dashboards, real-time views.' },
  { title: 'Responsive design', note: 'One layout system that holds from 320px to ultrawide.' },
  { title: 'Interactive experiences', note: 'Motion used to show what changed, never to decorate.' },
];

export const skillGroups = [
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Motion'],
  },
  {
    group: 'Backend and data',
    items: ['Supabase', 'PostgreSQL', 'REST APIs', 'Authentication', 'Edge functions'],
  },
  { group: 'Tooling', items: ['Git', 'GitHub', 'Vercel', 'Vite'] },
  { group: 'Product and design', items: ['Figma', 'Design systems', 'Accessibility', 'Analytics'] },
];

/** Optional. Leave the array empty to hide the section entirely. */
export const experience = [
  {
    year: '2024 — now',
    role: 'Founder and product engineer',
    org: 'Independent',
    description:
      'Building and shipping my own products end to end, and taking on frontend work for early-stage teams.',
  }
];
