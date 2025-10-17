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
    default: 'Aslan Spor Akademisi - BESYO ve PMYO Hazırlık Kursu',
    template: '%s | Aslan Spor Akademisi'
  },
  description: 'Aslan Spor Akademisi - BESYO, PMYO, MSÜ, Jandarma ve Polis hazırlık kursları. Parkur antrenmanları, spor lisesi hazırlık, bilimsel antrenman programları. İstanbul Bahçelievler merkezli spor akademisi.',
  icons: {
    icon: '/favicon-32x32.png',
  },
  keywords: [
    'aslan spor akademi', 'aslan spor', 'BESYO hazırlık', 'PMYO hazırlık', 'MSÜ hazırlık', 
    'jandarma hazırlık kursu', 'polis hazırlık kursu', 'BESYO İstanbul', 'PMYO İstanbul', 
    'parkur kursu', 'spor lisesi', 'jandarma nasıl olunur', 'polis nasıl olunur', 
    'BESYO nasıl olunur', 'PMYO nasıl olunur', 'MSÜ nasıl olunur', 'spor kursu İstanbul',
    'bahçelievler spor', 'istanbul spor akademisi', 'antrenman kursu', 'fitness kursu',
    'BESYO parkur', 'PMYO parkur', 'jandarma parkur', 'polis parkur', 'MSÜ parkur',
    'spor akademisi İstanbul', 'beden eğitimi öğretmenliği', 'polis meslek yüksekokulu',
    'jandarma meslek yüksekokulu', 'milli savunma üniversitesi', 'spor lisesi hazırlık'
  ],
  authors: [{ name: 'Aslan Spor Akademisi' }],
  creator: 'Aslan Spor Akademisi',
  publisher: 'Aslan Spor Akademisi',
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
    siteName: 'Aslan Spor Akademisi',
    title: 'Aslan Spor Akademisi - BESYO ve PMYO Hazırlık Kursu',
    description: 'Aslan Spor Akademisi - BESYO ve PMYO hazırlık kursları. Bilimsel antrenman programları, deneyimli antrenörler, modern tesisler.',
    images: [
      {
        url: '/aslan-logo.png',
        width: 1200,
        height: 630,
        alt: 'Aslan Spor Akademisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aslan Spor Akademisi - BESYO ve PMYO Hazırlık Kursu',
    description: 'Aslan Spor Akademisi - BESYO ve PMYO hazırlık kursları. Bilimsel antrenman programları, deneyimli antrenörler, modern tesisler.',
    images: ['/aslan-logo.png'],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Aslan Spor Akademisi",
    "description": "BESYO ve PMYO hazırlık kursları. Bilimsel antrenman programları, deneyimli antrenörler, modern tesisler.",
    "url": "https://aslanspor.com",
    "telephone": "+90 533 749 18 43",
    "email": "info@aslanspor.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Çay Çiçeği Sk.",
      "addressLocality": "Bahçelievler",
      "addressRegion": "İstanbul",
      "postalCode": "34180",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.9968669",
      "longitude": "28.8661861"
    },
    "openingHours": "Mo-Su 06:00-23:00",
    "priceRange": "$$",
    "sport": ["BESYO Hazırlık", "PMYO Hazırlık", "MSÜ Hazırlık", "Jandarma Hazırlık", "Polis Hazırlık", "Spor Lisesi Hazırlık", "Parkur Antrenmanı"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Spor Kursları",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "BESYO Hazırlık",
            "description": "Parkur, koordinasyon ve dayanıklılık odaklı yoğun program"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "PMYO Hazırlık",
            "description": "Zamanla yarışan parkurlar için hız ve çeviklik antrenmanları"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "MSÜ Hazırlık",
            "description": "Milli Savunma Üniversitesi sınavlarına hazırlık programı"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Jandarma Hazırlık",
            "description": "Jandarma Meslek Yüksekokulu sınavlarına hazırlık kursu"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Polis Hazırlık",
            "description": "Polis Meslek Yüksekokulu sınavlarına hazırlık kursu"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Spor Lisesi Hazırlık",
            "description": "Spor lisesi sınavlarına hazırlık programı"
          }
        }
      ]
    }
  };

  return (
    <html lang="tr" className={`${poppins.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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