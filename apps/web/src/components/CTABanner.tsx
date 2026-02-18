import Link from 'next/link';

interface CTABannerProps {
  headline: string;
  subtext: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'default' | 'accent';
}

export function CTABanner({
  headline,
  subtext,
  primaryLabel = 'Schedule a Call',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  variant = 'default',
}: CTABannerProps) {
  const bg =
    variant === 'accent'
      ? 'bg-gradient-to-br from-accent-blue/10 via-surface-900 to-purple-900/10 border-accent-blue/20'
      : 'bg-surface-900/80 border-surface-800';

  return (
    <section
      className={`relative mx-auto max-w-5xl rounded-2xl border ${bg} px-8 py-14 md:px-16 md:py-20 text-center overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
      <div className="relative">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-surface-50 mb-4 leading-tight">
          {headline}
        </h2>
        <p className="text-surface-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-150 active:scale-[0.98] shadow-lg shadow-accent-blue/20"
          >
            {primaryLabel}
            <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center px-8 py-4 border border-surface-700 text-surface-300 font-semibold rounded-lg hover:bg-surface-800/50 hover:border-surface-600 transition-all duration-150"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
