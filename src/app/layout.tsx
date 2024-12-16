import '@/app/globals.css';

import { configuration } from '@/configuration/site';
import { ThemeProvider } from '@/app/theme-provider';
import { Navbar } from '@/components/navbar';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Footer } from '@/components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={configuration.language} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <title>{configuration.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
