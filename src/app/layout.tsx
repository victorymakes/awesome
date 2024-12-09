import '@/app/globals.css'

import site from '@/configuration/site'
import { ThemeProvider } from '@/app/theme-provider'
import { Navbar } from '@/components/navbar'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.language} className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground pl-[calc(100vw-100%)] antialiased">
        <ThemeProvider>
          <main className="mx-auto">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
