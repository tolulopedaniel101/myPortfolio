'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { site } from '@/data/site';
import { Action } from '@/components/ui/Action';
import { BrowserFrame } from '@/components/projects/BrowserFrame';
import { ProjectPreview } from '@/components/projects/ProjectPreview';

/**
 * The one non-user-triggered motion moment on the site: the hero
 * assembles itself once on load, then everything holds still.
 */
export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] as const },
        };

  return (
    <section className="grid grid-cols-1 items-center gap-12 pb-16 pt-28 sm:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-40">
      <div className="lg:col-span-7">
        <motion.p {...rise(0)} className="label">
          Front-end engineer • Product builder
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          className="mt-5 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.25rem]"
        >
          {site.headline}
        </motion.h1>

        <motion.p
          {...rise(0.16)}
          className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-muted"
        >
          {site.intro}
        </motion.p>

        <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap gap-2">
          <Action href="#work" variant="solid">
            View my work
            <ArrowDown aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </Action>
          <Action href="#contact" variant="outline">
            Let&rsquo;s work together
          </Action>
        </motion.div>
      </div>

      <motion.div
        {...rise(0.3)}
        className="lg:col-span-5"
        aria-hidden
      >
        <BrowserFrame url="a product I built">
          <img src="/img/madeCuisine.png" alt="a product I built" />
        </BrowserFrame>
      </motion.div>
    </section>
  );
}
