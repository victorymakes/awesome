'use client';

import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { buttonVariants } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { routes } from '@/configuration/nav';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b-[1px] bg-background text-foreground">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-14 w-screen justify-between px-4">
          <NavigationMenuItem className="flex font-bold">
            <Link rel="noreferrer noopener" href="/" className="ml-2 flex text-xl font-bold">
              AwesomeLists
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  aria-label={'Menu Icon'}
                  className="flex h-5 w-5 md:hidden"
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>

              <SheetContent side={'right'}>
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">AwesomeLists</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col items-center justify-center gap-2">
                  {routes.map((route) => (
                    <a
                      rel="noreferrer noopener"
                      key={route.label}
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {route.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
            {routes.map((route) => (
              <Link
                rel="noreferrer noopener"
                href={route.href}
                key={route.label}
                className={`${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden gap-2 md:flex">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
