const navGroups = [
  {
    label: 'Operations',
    items: [
      { href: '/dashboard', label: 'Dashboard' },
      { href: '/dashboard/knowledge', label: 'Knowledge Base' },
      { href: '/dashboard/vendors', label: 'Vendors' },
      { href: '/dashboard/projects', label: 'Projects' },
      { href: '/dashboard/compliance', label: 'Compliance' },
    ],
  },
  {
    label: 'Intelligence',
    items: [
      { href: '/dashboard/materials', label: 'Materials' },
      { href: '/dashboard/experiments', label: 'Experiments' },
      { href: '/dashboard/signals', label: 'Signals' },
      { href: '/dashboard/surveillance', label: 'Surveillance' },
      { href: '/dashboard/telemetry', label: 'Telemetry' },
    ],
  },
  {
    label: 'System',
    items: [{ href: '/dashboard/settings', label: 'Settings' }],
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 border-r border-surface-700 bg-surface-950 flex flex-col">
        <div className="p-4 border-b border-surface-700">
          <span className="text-[1rem] font-bold text-surface-50">Flex Brain</span>
        </div>
        <nav className="flex-1 p-3 space-y-6 overflow-y-auto">
          {navGroups.map((group) => (
            <div key={group.label}>
              <span className="text-[0.75rem] font-medium text-surface-500 uppercase tracking-wider px-2">
                {group.label}
              </span>
              <ul className="mt-2 space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block px-2 py-1.5 text-[0.875rem] text-surface-400 hover:text-surface-50 hover:bg-surface-800 rounded-md transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="p-4 border-t border-surface-700 text-[0.75rem] text-surface-500">
          v0.1.0
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
