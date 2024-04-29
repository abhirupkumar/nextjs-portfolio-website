import { Outfit } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// theme providers
import { ThemeProvider } from '@/components/ThemeProvider';
import StarsCanvas from '@/components/StarBackground';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Abhirup Kumar Bhowmick',
  description: 'Portfolio Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className}  bg-[#030014]`}>
        <StarsCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
