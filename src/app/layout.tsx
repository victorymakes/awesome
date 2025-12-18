import '@/app/globals.css';

import { configuration } from '@/configuration/site';
import { ThemeProvider } from '@/app/theme-provider';
import { Navbar } from '@/components/navbar';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { MicrosoftClarity } from '@/components/analytics/microsoft-clarity';
import { env } from '@/lib/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.APP_URL),
  title: {
    default: configuration.title,
    template: `%s | ${configuration.title}`,
  },
  description: configuration.description,
  openGraph: {
    title: configuration.title,
    description: configuration.description,
    url: './',
    siteName: configuration.title,
    images: [configuration.socialBanner],
    locale: configuration.locale,
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${env.APP_URL}/feed.xml`,
    },
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
  twitter: {
    title: configuration.title,
    card: 'summary_large_image',
    images: [configuration.socialBanner],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={configuration.language} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <GoogleAnalytics id={configuration.analytics.google.id} />
        <MicrosoftClarity
          id={configuration.analytics.microsoft.id}
          content={configuration.analytics.microsoft.content}
        />
      </head>
      <body className="bg-background text-foreground pl-[calc(100vw-100%)] antialiased">
        <ThemeProvider>
          <main className="mx-auto flex min-h-screen flex-col">
            <Navbar />
            <div id={'main'} className={'container mx-auto max-w-7xl flex-1 px-4 py-8'}>
              {children}
            </div>
            <Footer />
            <ScrollToTop />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
