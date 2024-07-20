import './globals.css'; 

import type { Metadata } from 'next';
import { Poppins, Lato, Poiret_One } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: '400'})
const pop = Poppins({ subsets: ['latin'], weight: '400'})
const poiret = Poiret_One({ subsets: ['cyrillic'], weight: '400'})

export const metadata: Metadata = {
  title: 'Nachiketa',
  description: 'Nachiketa - Machine Learning Engineer',
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pop.className} bg-dark-1` }>{children}</body>
    </html>
  );
}
