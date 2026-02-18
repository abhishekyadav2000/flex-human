'use client';

interface LeadMagnetProps {
  title: string;
  description: string;
  buttonLabel?: string;
  badge?: string;
}

export function LeadMagnet({
  title,
  description,
  buttonLabel = 'Download Free Report',
  badge = 'Free Resource',
}: LeadMagnetProps) {
  return (
    <div className="relative rounded-2xl border border-surface-800 bg-gradient-to-br from-surface-900 to-surface-950 p-8 md:p-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="relative">
        <span className="inline-block text-xs font-bold text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          {badge}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-surface-50 mb-3">{title}</h3>
        <p className="text-surface-400 mb-6 leading-relaxed max-w-lg">{description}</p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-surface-800 border border-surface-700 text-surface-100 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-500 transition-all active:scale-[0.98] whitespace-nowrap"
          >
            {buttonLabel}
          </button>
        </form>
        <p className="mt-3 text-xs text-surface-600">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
