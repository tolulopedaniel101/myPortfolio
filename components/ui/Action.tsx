import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'ghost';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full text-[0.9rem] font-medium leading-none transition-[background-color,border-color,color,transform] duration-200 min-h-11 px-5 active:translate-y-px';

const variants: Record<Variant, string> = {
  solid: 'bg-text text-bg hover:bg-accent hover:text-accent-ink',
  outline: 'border border-line-strong text-text hover:border-text hover:bg-raised',
  ghost: 'text-muted hover:text-text',
};

export function Action({
  href,
  children,
  variant = 'outline',
  external,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
} & Omit<ComponentProps<'a'>, 'href'>) {
  const className = `${base} ${variants[variant]}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
