'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import type { GalleryItem } from '@/lib/types';
import { BrowserFrame } from './BrowserFrame';
import { ProjectPreview } from './ProjectPreview';

export function ProjectGallery({ items, projectTitle }: { items: GalleryItem[]; projectTitle: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    openerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    document.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [openIndex, items.length, close]);

  if (items.length === 0) {
    return (
      <p className="rule py-6 text-[0.95rem] text-muted">
        Screens for this project are not published yet.
      </p>
    );
  }

  const active = openIndex === null ? null : items[openIndex];

  return (
    <>
      <div className="flex flex-col gap-12">
        {items.map((item, i) => {
          const isMobile = item.device === 'mobile';
          return (
            <figure key={item.alt} className={isMobile ? 'sm:max-w-sm' : ''}>
              <div className="relative">
                {item.src ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      openerRef.current = e.currentTarget;
                      setOpenIndex(i);
                    }}
                    className="block w-full cursor-zoom-in text-left"
                    aria-label={`Enlarge: ${item.alt}`}
                  >
                    <BrowserFrame url={projectTitle.toLowerCase().replace(/\s+/g, '') + '.app'}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={1600}
                        height={1000}
                        sizes="(max-width: 1024px) 100vw, 70vw"
                        className="h-auto w-full rounded-lg border border-line"
                      />
                    </BrowserFrame>
                    <span className="pointer-events-none absolute right-3 top-12 inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/80 px-2.5 py-1 text-[0.7rem] text-muted backdrop-blur">
                      <Maximize2 aria-hidden className="size-3" />
                      Enlarge
                    </span>
                  </button>
                ) : (
                  <BrowserFrame url={projectTitle.toLowerCase().replace(/\s+/g, '') + '.app'}>
                    <ProjectPreview kind={item.previewKind ?? 'app'} />
                  </BrowserFrame>
                )}
              </div>
              <figcaption className="mt-4 max-w-xl text-[0.9rem] leading-relaxed text-muted">
                {item.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-line text-muted hover:text-text"
            style={{ top: 'calc(1rem + env(safe-area-inset-top, 0px))' }}
          >
            <X aria-hidden className="size-4" />
            <span className="sr-only">Close</span>
          </button>
          {active.src ? (
            <Image
              src={active.src}
              alt={active.alt}
              width={2000}
              height={1250}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-auto max-w-full rounded-lg border border-line"
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
}
