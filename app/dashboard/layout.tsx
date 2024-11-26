import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { SidebarWrapper } from './components/sidebar';

const poppins = Poppins({ 
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Flow | Dashboard',
  description: 'Generate flashcards, notes, and chat with PDFs.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <SidebarWrapper />
        {children}
      </body>
    </html>
  );
}