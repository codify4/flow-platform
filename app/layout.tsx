import './globals.css';
import type { Metadata } from 'next';
import { Lexend, Mulish, Poppins, Sour_Gummy } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({ 
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const sourGummy = Sour_Gummy({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-sour-gummy',
});

const lexend = Lexend({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'Flow',
  description: 'Streamline your learning with AI-powered notes, PDF chat, and flashcards.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${lexend.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}