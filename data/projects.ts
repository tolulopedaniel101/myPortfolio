import type { Project, ProjectCategory } from '@/lib/types';

/**
 * ─────────────────────────────────────────────────────────────
 *  Project content used by the portfolio, case studies and sitemap.
 *
 *  Adding a project = adding one object to this array. Nothing
 *  else needs to change: cards, filters, routes, sitemap and
 *  metadata are all derived from this file.
 * ─────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    slug: 'devias-analytics',
    title: 'Devias Dashboard Analytics',
    shortDescription: 'A reporting console for teams that outgrew their spreadsheet.',
    description:
      'A self-serve analytics console where operations teams build their own reports. Everything renders from a shared query layer, so a saved view behaves the same on a laptop and on a phone on the warehouse floor.',
    category: 'Dashboard',
    tags: ['Product', 'Frontend', 'Data'],
    year: '2026',
    role: 'Product engineer — frontend and data layer',
    status: 'Live',
    technologies: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'Recharts', 'Vercel'],
    previewKind: 'dashboard',
    image: '/img/hero.png',
    gallery: [
      {
        src: '/img/deviasCustomer.png',
        alt: 'Devias dashboard overview with customer data',
        caption:
          'A responsive business dashboard for viewing customer and user details.',
        device: 'desktop',
        previewKind: 'dashboard',
      },
      {
        src: '/img/deviasMobile.png',
        alt: 'Devias dashboard on a phone',
        caption:
          'The responsive layout keeps the dashboard usable on smaller screens.',
        device: 'mobile',
        previewKind: 'mobile',
      },
      {
        src: '/img/hero.png',
        alt: 'Devias dashboard interface',
        caption:
          'The interface brings common customer and user actions into one focused workspace.',
        device: 'desktop',
        previewKind: 'app',
      },
    ],
    liveUrl: 'https://devias-dashboard.vercel.app/',
    githubUrl: 'https://github.com/tolulopedaniel101/Devias-dashboard',
    featured: true,
    result: 'Delivered a responsive business dashboard for customer and user management.',
    overview:
      'Devias is a business administration dashboard that brings customer and user details into one responsive interface.',
    problem:
      'Customer and user information was difficult to review when it was spread across disconnected views and small-screen layouts.',
    solution:
      'I built a responsive dashboard with clear navigation, readable data views and reusable interface components for common administration tasks.',
    responsibilities: [
      'Frontend architecture and component library',
      'Responsive layout system for desktop and mobile',
      'Customer and user detail views',
      'Reusable dashboard components',
      'Chart and table presentation',
      'Deployment and preview environments',
    ],
    engineering: [
      {
        title: 'Reusable dashboard patterns',
        body: 'The dashboard uses consistent navigation, cards, tables and detail views so new sections can be added without inventing a new interface each time.',
      },
      {
        title: 'Responsive by default',
        body: 'The layout keeps the most important customer and user information accessible across desktop and mobile widths.',
      },
      {
        title: 'Focused information architecture',
        body: 'The navigation groups related administration tasks so users can move from an overview to detail information without losing context.',
      },
    ],
    challenges: [
      {
        title: 'Tables on small screens',
        body: 'Dense business information needs careful spacing and hierarchy on narrow screens, so the responsive layout prioritises the fields users need first.',
      },
      {
        title: 'Keeping the interface scannable',
        body: 'Cards, labels and consistent alignment make a large amount of business information easier to scan without overwhelming the page.',
      },
    ],
    outcome:
      'Delivered a polished dashboard experience that makes customer and user information easier to review across devices.',
  },
  {
    slug: 'tiye-africa',
    title: 'Tiye Africa',
    shortDescription: 'A non-profit organization site for building pathways into Africa\'s digital economy, built around their story.',
    description:
      'Tiye Africa is a non-profit organization dedicated to building pathways into Africa\'s digital economy.',
    category: 'Website',
    tags: ['Frontend', 'Design', 'Performance', 'Blog'],
    year: '2026',
    role: 'Frontend engineer',
    status: 'Live',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity', 'Vercel', 'Cloudinary'],
    previewKind: 'marketing',
    image: '/img/tiyeHome.png',
    gallery: [
      {
        src: '/img/tiyeDesktop.png',
        alt: 'TIYE desktop home page',
        caption:
          'The desktop layout introduces TIYE through its digital-skills, AI-literacy and community mission.',
        device: 'desktop',
        previewKind: 'marketing',
      },
      {
        src: '/img/tiyeMobile.png',
        alt: 'TIYE home page on mobile',
        caption:
          'The mobile layout keeps the navigation, donation action and programme content easy to reach.',
        device: 'mobile',
        previewKind: 'mobile',
      },
    ],
    liveUrl: 'https://www.tiyeafrica.org/',
    featured: true,
    result: 'Delivered a responsive nonprofit website that makes TIYE programmes and ways to get involved easy to discover.',
    overview:
      'A nonprofit website for TIYE, focused on digital skills, AI literacy, responsible AI and opportunities for underserved communities across Africa.',
    problem:
      'TIYE needed a clear, credible home for its mission, programmes, impact stories and opportunities for people to get involved.',
    solution:
      'Built a modern responsive site with structured programme content, a clear donation path and Cloudinary-powered imagery for a fast visual experience.',
    responsibilities: [
      'Frontend build and component system',
      'Programme and content structure in Sanity',
      'Cloudinary image pipeline and performance budget',
      'Responsive art direction per breakpoint',
      'Accessibility pass and keyboard navigation',
    ],
    engineering: [
      {
        title: 'Clear programme storytelling',
        body: 'The site gives each programme and impact area a focused place in the information architecture, so visitors can understand the work quickly.',
      },
      {
        title: 'Content that can grow',
        body: 'Structured content keeps programmes, stories and calls to action consistent while leaving room for the organisation to publish new work.',
      },
    ],
    challenges: [
      {
        title: 'Image-heavy storytelling',
        body: 'Community photography carries much of the story, so responsive Cloudinary delivery keeps the experience visual without sending unnecessarily large originals.',
      },
    ],
    outcome:
      'Delivered a responsive TIYE website that explains the organisation\'s mission and gives visitors clear paths to programmes, impact and involvement.',
  },
  {
    slug: 'made-cuisine',
    title: 'Made Cuisine',
    shortDescription: 'A refined catering and private-chef website for memorable food experiences.',
    description:
      'A hospitality website for Made Cuisine, helping people discover its catering and private-chef experiences in Birmingham.',
    category: 'Website',
    tags: ['Frontend', 'Design', 'Hospitality', 'Performance'],
    year: '2026',
    role: 'Frontend engineer',
    status: 'Live',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    previewKind: 'marketing',
    image: '/img/madeCuisinePreviw.png',
    gallery: [
      {
        src: '/img/madeCuisine.webp',
        alt: 'Made Cuisine desktop home page',
        caption:
          'The desktop experience leads with food photography, the Made Cuisine brand and a clear booking action.',
        device: 'desktop',
        previewKind: 'editor',
      },
      {
        src: '/img/madeCuisineMobile.webp',
        alt: 'Made Cuisine home page on mobile',
        caption: 'The mobile layout keeps the private-chef offer and service navigation prominent on a narrow screen.',
        device: 'mobile',
        previewKind: 'mobile',
      },
    ],
    liveUrl: 'https://www.madecuisine.com',
    featured: true,
    result: 'Delivered a visual hospitality website with clear paths to book an experience.',
    overview:
      'Made Cuisine is a Birmingham catering and private-chef service. The website presents its food, atmosphere and event services through an image-led experience.',
    problem:
      'The service needed a polished digital presence that could make an event feel appealing before a visitor made contact.',
    solution:
      'The site uses strong food photography, concise service messaging and repeated booking calls to action to turn interest into enquiries.',
    responsibilities: [
      'Frontend build and visual direction',
      'Responsive layout and mobile-first design',
      'Food and service presentation',
      'Booking call-to-action flow',
      'Accessibility and keyboard navigation',
      'Performance and image presentation',
    ],
    engineering: [
      {
        title: 'Image-led presentation',
        body: 'Large food and event imagery creates the first impression while typography and spacing keep the booking message readable.',
      },
      {
        title: 'A clear booking path',
        body: 'The main navigation and repeated calls to action make it easy for a visitor to move from discovery to planning an experience.',
      },
    ],
    challenges: [
      {
        title: 'Serving large visuals responsibly',
        body: 'The site depends on photography, so image dimensions and responsive delivery matter to perceived speed on mobile.',
      },
      {
        title: 'Balancing atmosphere and clarity',
        body: 'The visual direction has to feel premium without hiding practical details such as location, opening hours and how to book.',
      },
    ],
    outcome:
      'A working hospitality website that presents Made Cuisine as a premium catering and private-chef experience.',
  },
  {
    slug: 'yye-website',
    title: 'YYE Website',
    shortDescription: 'A community website for Yewa Youth Elites and its programmes.',
    description:
      'A responsive website for Yewa Youth Elites, built to explain its mission, programmes and ways to support Yewa youth.',
    category: 'Website',
    tags: ['Frontend', 'Design', 'Community', 'Performance'],
    year: '2026',
    role: 'Frontend engineer',
    status: 'Live',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Paystack', 'Sanity'],
    previewKind: 'app',
    image: '/img/yyeWebsitePreview.webp',
    gallery: [
      {
        src: '/img/yyeDesktop.png',
        alt: 'Yewa Youth Elites desktop programmes page',
        caption: 'The desktop site presents education, empowerment, culture and community programmes in a clear grid.',
        device: 'desktop',
        previewKind: 'app',
      },
      {
        src: '/img/yyeMobile.png',
        alt: 'Yewa Youth Elites mobile home page',
        caption: 'The mobile layout puts the community mission, programme link and support action within easy reach.',
        device: 'mobile',
        previewKind: 'mobile',
      },
    ],
    liveUrl: 'https://yewayouthelites.org/',
    featured: false,
    overview:
      'Yewa Youth Elites is a community organisation focused on education, mentorship, youth empowerment and cultural promotion in Yewa.',
    problem:
      'The organisation needed a clear way to explain its programmes and give supporters an easy route to get involved.',
    solution:
      'A responsive, mission-led website that gives programmes and community impact a strong visual hierarchy.',
    responsibilities: [
      'Frontend architecture and rendering strategy',
      'Programme and mission storytelling',
      'Responsive layout and mobile-first design',
      'Support and contact call-to-action flow',
      'Performance optimization and SEO',
    ],
    engineering: [
      {
        title: 'Programme-led information architecture',
        body: 'Education, empowerment, culture and community development are presented as distinct focus areas so visitors can understand the work quickly.',
      },
      {
        title: 'A strong mobile experience',
        body: 'The mobile composition keeps the mission, programmes and support actions readable and easy to navigate on a narrow screen.',
      },
    ],
    challenges: [
      {
        title: 'Making community work scannable',
        body: 'The challenge was giving several programme areas equal weight while keeping the page calm and understandable.',
      },
    ],
    outcome:
      'Delivered a responsive community website that makes Yewa Youth Elites\' mission, programmes and support options easy to understand.',
  },
  {
    slug: 'yayi-website',
    title: 'Yayi Website',
    shortDescription: 'A campaign website for YAYI 2027 and its vision for Ogun State.',
    description:
      'A responsive campaign website for Senator Solomon Olamilekan Adeola (YAYI), built around the campaign agenda, track record and movement.',
    category: 'Website',
    tags: ['Frontend', 'Design', 'Campaign', 'Performance'],
    year: '2026',
    role: 'Frontend engineer',
    status: 'Live',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Sanity'],
    previewKind: 'app',
    image: '/img/YayiWebsite.png',
    gallery: [
      {
        src: '/img/yayiDesktop.png',
        alt: 'YAYI 2027 desktop campaign page',
        caption: 'The campaign site combines the candidate story, agenda and latest campaign coverage in one visual system.',
        device: 'desktop',
        previewKind: 'app',
      },
      {
        src: '/img/yayiMobile.png',
        alt: 'YAYI 2027 mobile navigation',
        caption: 'The mobile navigation keeps campaign sections and the get-involved action easy to reach.',
        device: 'mobile',
        previewKind: 'mobile',
      },
    ],
    liveUrl: 'https://www.yayiadeola.org/',
    featured: false,
    overview:
      'YAYI 2027 is a campaign website for Senator Solomon Olamilekan Adeola, presenting his record, agenda and campaign activities across Ogun State.',
    problem:
      'The campaign needed a credible, easy-to-navigate digital home that could carry a large amount of political information without losing momentum.',
    solution:
      'Built a responsive campaign experience with clear routes for the candidate story, track record, agenda, news, gallery and volunteer action.',
    responsibilities: [
      'Frontend architecture and responsive implementation',
      'Campaign information architecture',
      'Agenda, news and gallery presentation',
      'Mobile navigation and get-involved flow',
      'Performance and accessibility',
    ],
    engineering: [
      {
        title: 'Campaign information architecture',
        body: 'The site separates the candidate story, track record, agenda and campaign updates into clear routes that are easy to scan.',
      },
      {
        title: 'A movement people can join',
        body: 'Calls to action are placed alongside the campaign story so visitors can move from learning about the agenda to getting involved.',
      },
    ],
    challenges: [
      {
        title: 'Presenting a lot of information clearly',
        body: 'The site balances long-form political content, media coverage and campaign actions without making the primary navigation difficult to use.',
      },
    ],
    outcome:
      'Delivered a campaign website that gives YAYI 2027 a clear digital presence across desktop and mobile.',
  },
];

export const categories: Array<'All' | ProjectCategory> = [
  'All',
  'Product',
  'Web App',
  'Dashboard',
  'Website',
  'Experiment',
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = () => projects.filter((p) => p.featured);
