import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="label">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
        That page does not exist.
      </h1>
      <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted">
        The link may be out of date. The work is all on the home page.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-full bg-text px-5 text-[0.9rem] font-medium text-bg"
        >
          Back to home
        </Link>
        <Link
          href="/#work"
          className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-[0.9rem]"
        >
          See the work
        </Link>
      </div>
    </div>
  );
}
