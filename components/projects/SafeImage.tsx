'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Renders a screenshot when one exists and the file actually loads.
 * If the asset is missing or fails, the drawn fallback is shown instead,
 * so a broken path never leaves an empty box on the page.
 */
export function SafeImage({
  src,
  alt,
  fallback,
  priority,
}: {
  src?: string;
  alt: string;
  fallback: ReactNode;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <>{fallback}</>;
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 60vw"
      onError={() => setFailed(true)}
      className="h-auto w-full rounded-lg border border-line"
    />
  );
}
