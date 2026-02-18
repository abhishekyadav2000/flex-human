import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Flex Human — Interface Engineering Platform',
    template: '%s | Flex Human',
  },
  description:
    'Advanced human-like synthetic skin and intelligent wearable systems for robotics and prosthetic integration.',
  metadataBase: new URL('https://flexhuman.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Flex Human',
    title: 'Flex Human — Interface Engineering Platform',
    description:
      'Advanced human-like synthetic skin and intelligent wearable systems for robotics and prosthetic integration.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flex Human — Interface Engineering Platform',
    description:
      'Advanced human-like synthetic skin and intelligent wearable systems for robotics and prosthetic integration.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">{children}</body>
    </html>
  );
}
