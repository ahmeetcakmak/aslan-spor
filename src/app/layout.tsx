import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aslan Spor Akademi - BESYO ve PMYO Hazırlık',
    template: '%s | Aslan Spor Akademi'
  },
  description: 'BESYO ve PMYO hazırlık kursları. Bilimsel antrenman programları, deneyimli antrenörler, modern tesisler. Hedeflerinize ulaşmak için doğru adres.',
  keywords: ['BESYO', 'PMYO', 'spor', 'hazırlık', 'kurs', 'antrenman', 'akademi'],
  authors: [{ name: 'Aslan Spor Akademi' }],
  creator: 'Aslan Spor Akademi',
  publisher: 'Aslan Spor Akademi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aslanspor.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://aslanspor.com',
    siteName: 'Aslan Spor Akademi',
    title: 'Aslan Spor Akademi - BESYO ve PMYO Hazırlık',
    description: 'BESYO ve PMYO hazırlık kursları. Bilimsel antrenman programları, deneyimli antrenörler, modern tesisler.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aslan Spor Akademi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aslan Spor Akademi - BESYO ve PMYO Hazırlık',
    description: 'BESYO ve PMYO hazırlık kursları. Bilimsel antrenman programları, deneyimli antrenörler, modern tesisler.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}