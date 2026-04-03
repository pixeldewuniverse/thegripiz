import type { Metadata } from 'next';
import { leagueGothic, lexendDeca } from '@/lib/fonts';
import './globals.css';

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
      <body className={`${leagueGothic.variable} ${lexendDeca.variable} bg-charcoal font-body`}>
        {children}
      </body>
    </html>
  );
}
