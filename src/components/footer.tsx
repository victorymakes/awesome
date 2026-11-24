import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { configuration } from '@/configuration/site';

export function Footer() {
  return (
    <footer className="border-border mx-5 mt-20 border-t py-8 sm:mx-8 lg:mx-11">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tight">
            AwesomeLists
          </Link>
          <p className="text-muted-foreground mt-2 text-sm">Good foundations for your next idea.</p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-sm"
        >
          <Link href="/faq" className="hover:text-primary">
            Questions & answers
          </Link>
          <a
            href="https://github.com/victorymakes/awesome"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary inline-flex items-center gap-1"
          >
            Contribute <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="https://launchsaas.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary inline-flex items-center gap-1"
          >
            LaunchSaaS <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
      <p className="text-muted-foreground mt-9 font-mono text-xs">
        © {new Date().getFullYear()} AwesomeLists · Made by{' '}
        <a
          href="https://github.com/victorymakes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary underline underline-offset-4"
        >
          {configuration.author}
        </a>
      </p>
    </footer>
  );
}
