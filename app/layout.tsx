import type { Metadata } from 'next';
<<<<<<< codex/fix-font-loading-and-menu-images-2parhp
import { leagueGothic, lexendDeca } from '@/lib/fonts';
=======
import { holiday, leagueGothic, lexendDeca } from '@/lib/fonts';
>>>>>>> main
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
<<<<<<< codex/fix-font-loading-and-menu-images-2parhp
      <body className={`${leagueGothic.variable} ${lexendDeca.variable} bg-charcoal font-body`}>
=======
      <body className={`${holiday.variable} ${leagueGothic.variable} ${lexendDeca.variable} bg-charcoal font-body`}>
>>>>>>> main
        {children}
      </body>
    </html>
  );
}
