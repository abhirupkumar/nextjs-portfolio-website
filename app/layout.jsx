import { Outfit } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// theme providers
import StarsCanvas from '@/components/StarBackground';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Abhirup | Web Developer | App Developer | C++ Programmer',
  description: 'Portfolio Website',
  image: "/hero/developer.png",
  keywords: ['abhirup', 'kumar', 'bhowmick', 'abhirupkumar', 'portfolio', 'web development', 'app development', 'software geek', 'c++ programming'],
  openGraph: {
    title: 'Abhirup | Web Developer | App Developer | C++ Programmer',
    description: 'Portfolio Website',
    images: [
      {
        url: "/hero/developer.png"
      }
    ]
  },
  metadataBase: new URL('https://abhirupkumar.vercel.app'),
  other: {
    "google-site-verification": "co0B-CYrqRdI_fmi2ySiu2nYjJd2Wq8Db9ESsAv_uZE"
  }
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
