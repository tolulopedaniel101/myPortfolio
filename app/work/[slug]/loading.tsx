/** Skeleton for the case-study route: reserves the real layout so the
 *  page does not shift when content arrives. */
export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl animate-pulse px-5 pt-32 sm:px-8">
      <div className="h-3 w-20 rounded-full bg-line" />
      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="h-12 w-3/4 rounded-lg bg-line" />
          <div className="mt-5 h-4 w-full rounded-full bg-line" />
          <div className="mt-2 h-4 w-2/3 rounded-full bg-line" />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rule h-10" />
          ))}
        </div>
      </div>
      <div className="mt-12 aspect-[16/10] w-full rounded-xl border border-line bg-raised" />
      <span className="sr-only">Loading project</span>
    </div>
  );
}
