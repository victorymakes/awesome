import '@/app/globals.css';

import { configuration } from '@/configuration/site';
import { ThemeProvider } from '@/components/theme-provider';
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
      <body className="bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          <a
            href="#main"
            className="bg-primary text-primary-foreground sr-only z-50 rounded-md px-5 py-3 font-mono focus:not-sr-only focus:fixed focus:top-4 focus:left-5"
          >
            Skip to content
          </a>
          <div className="mx-auto flex min-h-screen flex-col">
            <Navbar />
            <main id="main" className="mx-5 flex-1 sm:mx-8 lg:mx-11">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
