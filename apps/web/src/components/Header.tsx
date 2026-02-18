'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/technology', label: 'Technology' },
  { href: '/r-and-d', label: 'R&D' },
  { href: '/manufacturing', label: 'Manufacturing' },
  { href: '/partnerships', label: 'Partnerships' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-800/60 bg-surface-DEFAULT/80 backdrop-blur-xl">
      <div className="mx-auto max-w-[1280px] px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-md bg-surface-50 flex items-center justify-center">
            <span className="text-surface-950 font-bold text-sm leading-none">FH</span>
          </div>
          <span className="text-[1rem] font-semibold text-surface-50 tracking-tight">
            Flex Human
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-[0.875rem] font-medium transition-colors ${
                pathname === link.href
                  ? 'text-surface-50 bg-surface-800'
                  : 'text-surface-400 hover:text-surface-50 hover:bg-surface-800/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-4 py-1.5 rounded-md text-[0.875rem] font-semibold bg-accent-blue text-white hover:bg-blue-500 transition-colors"
          >
            Schedule a Call
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-surface-400 hover:text-surface-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path
                d="M5 5L15 15M5 15L15 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-surface-800/60 bg-surface-DEFAULT/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-md text-[0.875rem] font-medium transition-colors ${
                pathname === link.href
                  ? 'text-surface-50 bg-surface-800'
                  : 'text-surface-400 hover:text-surface-50 hover:bg-surface-800/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 mt-2 rounded-md text-[0.875rem] font-semibold bg-accent-blue text-white text-center"
          >
            Schedule a Call
          </Link>
        </nav>
      )}
    </header>
  );
}
