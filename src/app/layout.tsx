import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saimanti Maji — Full-Stack Software Developer',
  description: 'Portfolio of Saimanti Maji, a full-stack software developer building healthcare, warehouse, logistics and retail systems.',
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
