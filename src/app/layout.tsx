import '@/app/globals.css';

import { configuration } from '@/configuration/site';
import { ThemeProvider } from '@/app/theme-provider';
import { Navbar } from '@/components/navbar';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { MicrosoftClarity } from '@/components/analytics/microsoft-clarity';

export const metadata: Metadata = {
  metadataBase: new URL(configuration.siteUrl),
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
      'application/rss+xml': `${configuration.siteUrl}/feed.xml`,
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
        <title>{configuration.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <GoogleAnalytics id={configuration.analytics.google.id} />
        <MicrosoftClarity
          id={configuration.analytics.microsoft.id}
          content={configuration.analytics.microsoft.content}
        />
      </head>
      <body className="bg-background pl-[calc(100vw-100%)] text-foreground antialiased">
        <ThemeProvider>
          <main className="mx-auto">
            <Navbar />
            <div id={'main'} className={'container py-8'}>
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
