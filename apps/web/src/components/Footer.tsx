import Link from 'next/link';

const footerSections = [
  {
    title: 'Technology',
    links: [
      { href: '/technology', label: 'Synthetic Skin' },
      { href: '/technology', label: 'Prosthetic Interfaces' },
      { href: '/technology', label: 'Intelligent Wearables' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/r-and-d', label: 'Research & Development' },
      { href: '/manufacturing', label: 'Manufacturing' },
      { href: '/partnerships', label: 'Partnerships' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/legal', label: 'Privacy Policy' },
      { href: '/legal', label: 'Terms of Service' },
      { href: '/legal', label: 'IP Notice' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-800">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-surface-50 flex items-center justify-center">
                <span className="text-surface-950 font-bold text-xs leading-none">FH</span>
              </div>
              <span className="text-[0.875rem] font-semibold text-surface-50">Flex Human</span>
            </div>
            <p className="text-[0.8125rem] leading-relaxed text-surface-500 max-w-[240px]">
              Engineering the interface between biology and intelligence. Advanced synthetic skin,
              prosthetic integration, and intelligent wearable systems.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[0.75rem] font-semibold text-surface-400 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    <Link
                      href={link.href}
                      className="text-[0.8125rem] text-surface-500 hover:text-surface-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-surface-800">
          <span className="text-[0.75rem] text-surface-500">
            &copy; {new Date().getFullYear()} Flex Human. All rights reserved.
          </span>
          <span className="text-[0.75rem] text-surface-500">Interface Engineering Platform</span>
        </div>
      </div>
    </footer>
  );
}
