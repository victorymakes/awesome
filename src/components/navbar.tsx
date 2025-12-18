'use client';

import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { routes } from '@/configuration/nav';
import Link from 'next/link';
import { configuration } from '@/configuration/site';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-white/70 backdrop-blur-md dark:border-white/5 dark:bg-black/70">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-14 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 text-xl font-bold">
            {configuration.title}
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden flex-1 justify-center md:flex">
            <NavigationMenuList className="flex gap-2">
              {routes.map((route) => (
                <NavigationMenuItem key={route.label}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={route.href}>{route.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side */}
          <div className="flex flex-shrink-0 items-center gap-4">
            {/* Theme Toggle */}
            <div className="hidden md:block">
              <ModeToggle />
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2 md:hidden">
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-screen bg-white dark:bg-slate-950">
                <SheetHeader>
                  <SheetTitle className="text-foreground">{configuration.title}</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.label}
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-primary px-2 py-2 text-base font-medium transition-colors"
                    >
                      {route.label}
                    </Link>
                  ))}
                  <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
                    <span className="text-foreground text-sm font-medium">Theme</span>
                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
