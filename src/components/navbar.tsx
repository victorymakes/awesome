'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ArrowUpRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';

const repository = 'https://github.com/victorymakes/awesome';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="border-border mx-5 border-b-2 sm:mx-8 lg:mx-11">
      <div className="flex min-h-20 items-center justify-between gap-5 py-4 xl:h-[5.1875rem] xl:min-h-0 xl:py-0">
        <Link
          href="/"
          aria-label="AwesomeLists home"
          className="shrink-0 text-2xl font-bold tracking-tight sm:text-3xl lg:text-[2.3rem]"
        >
          AwesomeLists
        </Link>
        <nav
          aria-label="Main navigation"
          className="relative -top-0.5 ml-auto hidden items-center gap-8 font-mono text-base lg:flex xl:gap-16 xl:text-xl"
        >
          {[
            ['/', 'Directory'],
            ['/faq', 'FAQ'],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className={cn(
                'hover:text-primary relative py-3 transition-colors',
                pathname === href &&
                  'after:bg-primary font-semibold after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5',
              )}
            >
              {label}
            </Link>
          ))}
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary inline-flex items-center gap-2"
          >
            GitHub <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
        <div className="flex shrink-0 items-center gap-3 sm:gap-7 lg:ml-10 xl:ml-16">
          <Button
            asChild
            className="hidden h-12 px-6 font-mono text-base sm:inline-flex xl:h-13 xl:px-7 xl:text-xl"
          >
            <Link href="/faq#contribute">
              Submit a resource <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <div className="sm:border-border sm:border-l sm:pl-3">
            <ModeToggle />
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <SheetHeader className="text-left">
                <SheetTitle>AwesomeLists</SheetTitle>
                <SheetDescription>A good place to start building.</SheetDescription>
              </SheetHeader>
              <nav
                aria-label="Mobile navigation"
                className="mt-12 flex flex-col items-start gap-7 text-3xl font-semibold"
              >
                <Link href="/" onClick={() => setOpen(false)}>
                  Directory
                </Link>
                <Link href="/faq" onClick={() => setOpen(false)}>
                  FAQ
                </Link>
                <a
                  href={repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  GitHub <ArrowUpRight className="inline size-5" aria-hidden="true" />
                </a>
                <Button asChild className="mt-5 h-12 font-mono">
                  <Link href="/faq#contribute" onClick={() => setOpen(false)}>
                    Submit a resource <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
