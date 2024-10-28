// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainNav } from '@/components/layout/main-nav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Birthday Central',
  description: 'Birthday planning and quiz platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <MainNav />
          <main className="container mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}