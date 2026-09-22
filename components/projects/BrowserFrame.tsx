import type { ReactNode } from 'react';

/** Chrome around every product preview so screenshots read as a real screen. */
export function BrowserFrame({
  url = 'example.com',
  children,
  compact = false,
}: {
  url?: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-raised shadow-lift">
      <div className="flex items-center gap-3 border-b border-line bg-sunken px-3 py-2.5">
        <div aria-hidden className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md border border-line px-2.5 py-1 text-[0.7rem] text-faint">
          {url}
        </div>
      </div>
      <div className={compact ? 'p-3' : 'p-3 sm:p-4'}>{children}</div>
    </div>
  );
}
