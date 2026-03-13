import type { Metadata } from 'next';
import { League_Gothic, Saira_Condensed, Lexend_Deca } from 'next/font/google';
import './globals.css';

const heading = League_Gothic({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: '400'
});

const subheading = Saira_Condensed({
  subsets: ['latin'],
  variable: '--font-subheading',
  weight: ['400', '500', '600']
});

const body = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500']
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
      <body className={`${heading.variable} ${subheading.variable} ${body.variable} bg-charcoal`}>
        {children}
      </body>
    </html>
  );
}
