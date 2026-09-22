import Link from 'next/link';
import { site } from '@/data/site';

const footerLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
      <div className="rule grid grid-cols-1 gap-8 pt-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-medium tracking-[-0.02em]">{site.name}</p>
          <p className="mt-2 max-w-xs text-[0.9rem] leading-relaxed text-muted">{site.role}. {site.location}.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 text-[0.9rem] text-muted">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-text">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex flex-col gap-2 text-[0.9rem] text-muted">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer noopener" className="hover:text-text">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-10 text-[0.8rem] text-faint">
        © {new Date().getFullYear()} {site.name}. Built with Next.js.
      </p>
    </footer>
  );
}
