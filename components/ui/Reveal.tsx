'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * A single, quiet entrance used only on section headers and case-study
 * blocks — not on every element. Respects prefers-reduced-motion by
 * rendering the content with no transform at all.
 */
export function Reveal({
  children,
  delay = 0,
  as = 'div',
  className,
}: {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'header';
  className?: string;
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  if (reduced) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
      transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
}
