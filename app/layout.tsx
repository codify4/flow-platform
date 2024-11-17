import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({ 
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-poppins',
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
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
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