import type { PreviewKind } from '@/lib/types';

/**
 * Drawn, markup-only product previews.
 *
 * These exist so the portfolio demonstrates the project-preview
 * experience before real screenshots are available. Drop a screenshot
 * path into `project.image` or `gallery[].src` and it replaces these.
 * No stock photography, no grey rectangles.
 */

const Bar = ({ h, dim = false }: { h: number; dim?: boolean }) => (
  <div
    style={{ height: `${h}%` }}
    className={`w-full rounded-sm ${dim ? 'bg-line-strong' : 'bg-accent-quiet'}`}
  />
);

const Line = ({ w = '100%', tone = 'line' }: { w?: string; tone?: 'line' | 'strong' }) => (
  <div
    style={{ width: w }}
    className={`h-2 rounded-full ${tone === 'strong' ? 'bg-line-strong' : 'bg-line'}`}
  />
);

function Dashboard() {
  return (
    <div className="flex gap-3 text-[0.6rem]">
      <div className="hidden w-24 shrink-0 flex-col gap-2 border-r border-line pr-3 sm:flex">
        <div className="h-2 w-12 rounded-full bg-line-strong" />
        {['Overview', 'Inventory', 'Orders', 'Reports'].map((item, i) => (
          <div
            key={item}
            className={`rounded px-1.5 py-1 ${i === 0 ? 'bg-accent-quiet/25 text-text' : 'text-faint'}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            ['Units out', '4,281'],
            ['Backorder', '112'],
            ['On hand', '18,940'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-line px-2 py-1.5">
              <div className="truncate text-faint">{label}</div>
              <div className="mt-0.5 text-[0.8rem] font-medium tracking-tight text-text">{value}</div>
            </div>
          ))}
        </div>
        <div className="flex h-20 items-end gap-1.5 rounded-md border border-line p-2">
          {[38, 52, 44, 66, 58, 79, 71, 88, 62, 74, 91, 68].map((h, i) => (
            <Bar key={i} h={h} dim={i < 6} />
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {[100, 82, 91, 70].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="size-4 shrink-0 rounded bg-line" />
              <Line w={`${w * 0.55}%`} tone={i === 0 ? 'strong' : 'line'} />
              <div className="ml-auto h-2 w-8 shrink-0 rounded-full bg-line" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Marketing() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="h-2 w-14 rounded-full bg-line-strong" />
        <div className="flex gap-2">
          <Line w="28px" />
          <Line w="20px" />
          <Line w="24px" />
        </div>
      </div>
      <div className="relative h-28 overflow-hidden rounded-md border border-line bg-sunken">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_10%,var(--line-strong),transparent_60%)]" />
        <div className="absolute bottom-3 left-3 flex flex-col gap-1.5">
          <div className="h-3 w-40 rounded-full bg-line-strong" />
          <div className="h-2 w-28 rounded-full bg-line" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="aspect-[4/5] rounded-md border border-line bg-sunken" />
        ))}
      </div>
    </div>
  );
}

function AppShell() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 border-b border-line pb-2">
        <div className="size-4 rounded bg-line-strong" />
        <Line w="60px" />
        <div className="ml-auto h-5 w-16 rounded-full bg-accent-quiet/40" />
      </div>
      <div className="grid grid-cols-[1.1fr_1fr] gap-3">
        <div className="aspect-square rounded-md border border-line bg-sunken" />
        <div className="flex flex-col gap-2">
          <div className="h-3 w-24 rounded-full bg-line-strong" />
          <Line w="80%" />
          <Line w="55%" />
          <div className="mt-1 flex gap-1.5">
            {['S', 'M', 'L'].map((s, i) => (
              <div
                key={s}
                className={`flex size-6 items-center justify-center rounded border text-[0.6rem] ${
                  i === 1 ? 'border-accent-quiet text-text' : 'border-line text-faint'
                }`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="mt-auto h-7 rounded-full bg-accent-quiet/50" />
        </div>
      </div>
    </div>
  );
}

function Editor() {
  return (
    <div className="grid grid-cols-2 gap-3 text-[0.6rem]">
      <div className="flex flex-col gap-2">
        <div className="h-2 w-16 rounded-full bg-line-strong" />
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded border border-line px-2 py-1.5">
            <Line w="40%" />
            <div className="ml-auto h-2 w-8 rounded-full bg-line" />
          </div>
        ))}
        <div className="flex items-center justify-between rounded border border-dashed border-line px-2 py-1.5 text-faint">
          <span>Add line</span>
          <span aria-hidden>+</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-md border border-line bg-sunken p-2.5">
        <div className="h-2 w-12 rounded-full bg-line-strong" />
        <Line w="70%" />
        <Line w="50%" />
        <div className="mt-2 flex flex-col gap-1 border-t border-line pt-2">
          {['Subtotal', 'Tax', 'Due'].map((r, i) => (
            <div key={r} className="flex justify-between">
              <span className="text-faint">{r}</span>
              <span className={i === 2 ? 'font-medium text-text' : 'text-muted'}>
                {['1,840.00', '138.00', '1,978.00'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileShell() {
  return (
    <div className="mx-auto w-full max-w-[220px]">
      <div className="overflow-hidden rounded-[1.4rem] border border-line-strong bg-sunken p-2.5">
        <div className="mx-auto mb-2.5 h-1 w-10 rounded-full bg-line-strong" />
        <div className="flex flex-col gap-2 text-[0.6rem]">
          <div className="h-2 w-16 rounded-full bg-line-strong" />
          <div className="h-16 rounded-md border border-line bg-bg" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-md border border-line px-2 py-1.5">
              <div className="size-4 rounded bg-line" />
              <Line w="45%" />
              <div className="ml-auto h-2 w-6 rounded-full bg-line" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const map: Record<PreviewKind, () => React.ReactElement> = {
  dashboard: Dashboard,
  marketing: Marketing,
  app: AppShell,
  editor: Editor,
  mobile: MobileShell,
};

export function ProjectPreview({ kind }: { kind: PreviewKind }) {
  const Drawn = map[kind] ?? Dashboard;
  return (
    <div className="select-none" role="img" aria-label="Illustrative interface preview">
      <Drawn />
    </div>
  );
}
