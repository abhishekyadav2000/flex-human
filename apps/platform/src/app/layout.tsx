import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Flex Brain — Internal Platform',
    template: '%s | Flex Brain',
  },
  description: 'Flex Human internal operations and intelligence platform.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">{children}</body>
    </html>
  );
}
