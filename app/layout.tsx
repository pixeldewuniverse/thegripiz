import type { Metadata } from 'next';
import { League_Gothic, Lexend_Deca, Saira_Condensed } from 'next/font/google';
import './globals.css';

const heading = League_Gothic({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: '400'
});

const body = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500']
});

const accent = Saira_Condensed({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: 'The Gripiz | Smoked Grill, Pizza, Sandwich',
  description:
    'Premium smokehouse and grill restaurant in Bali serving smoked grill, pizza, sandwiches, pasta, and drinks.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${accent.variable} bg-charcoal font-body`}>{children}</body>
    </html>
  );
}
