'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { site } from '@/data/site';
import { MobileMenu } from './MobileMenu';

export const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-text focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <header
        className="fixed inset-x-0 top-0 z-40"
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-300 ${
            scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
          }`}
        >
          <nav
            aria-label="Primary"
            className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
          >
            <Link href="/" className="flex items-center gap-2.5 font-medium tracking-[-0.02em]">
              <span
                aria-hidden
                className="inline-flex size-7 items-center justify-center rounded-md border border-line-strong text-[0.65rem]"
              >
                {site.initials}
              </span>
              <span className="hidden sm:inline">{site.name}</span>
            </Link>

            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-full px-3 py-2 text-[0.9rem] text-muted transition-colors duration-200 hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Link
                href="/#contact"
                className="hidden min-h-9 items-center rounded-full bg-text px-4 text-[0.875rem] font-medium text-bg transition-colors duration-200 hover:bg-accent hover:text-accent-ink md:inline-flex"
              >
                Let&rsquo;s work
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="inline-flex size-10 items-center justify-center rounded-full border border-line text-text md:hidden"
              >
                <Menu aria-hidden className="size-4.5" />
                <span className="sr-only">Open menu</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
