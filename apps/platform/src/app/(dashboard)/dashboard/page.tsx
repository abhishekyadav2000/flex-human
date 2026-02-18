export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-2">Dashboard</h1>
      <p className="text-surface-400 mb-8">Operational overview and key metrics.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Active Projects', value: '—' },
          { label: 'Materials Tracked', value: '—' },
          { label: 'Active Vendors', value: '—' },
          { label: 'Open Signals', value: '—' },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface-900 border border-surface-700 rounded-lg p-5">
            <span className="text-[0.75rem] text-surface-500 uppercase tracking-wide">
              {stat.label}
            </span>
            <p className="text-[1.75rem] font-bold text-surface-50 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface-900 border border-surface-700 rounded-lg p-6">
        <h2 className="text-[1.125rem] font-semibold text-surface-50 mb-3">Recent Activity</h2>
        <p className="text-[0.875rem] text-surface-500">No activity recorded yet.</p>
      </div>
    </div>
  );
}
