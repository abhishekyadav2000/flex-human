interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

export function StatBlock({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((s) => (
        <div
          key={s.label}
          className="text-center p-6 rounded-xl border border-surface-800/60 bg-surface-900/30"
        >
          <div className="text-3xl md:text-4xl font-bold text-surface-50 mb-1">{s.value}</div>
          <div className="text-sm font-semibold text-accent-blue mb-1">{s.label}</div>
          {s.sublabel && <div className="text-xs text-surface-500">{s.sublabel}</div>}
        </div>
      ))}
    </div>
  );
}
