import type { Metadata } from 'next';
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
      <body className="bg-charcoal">{children}</body>
    </html>
  );
}
