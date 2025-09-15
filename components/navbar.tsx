"use client";

import { CompleteLogo } from "@/assets";
import { Button } from "@/components/ui/button";
import { servicesOverview } from "@/lib/services-data";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image src={CompleteLogo} alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="inline-flex items-center justify-center rounded-md p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12 items-center">
          {mainNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center text-sm font-semibold leading-6 text-foreground hover:text-secondary transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-4 w-[600px] z-50">
                <div className="grid grid-cols-4 gap-3">
                  {servicesOverview.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div className="rounded-md bg-secondary/10 p-2">
                        <service.icon className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {service.title}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-2">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu with slide animation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-xl"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="relative ml-auto flex w-full max-w-sm flex-col bg-background px-6 py-6 shadow-xl transition-transform duration-300 ease-out translate-x-0">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-lg font-bold text-primary">
                Artful Pro
              </Link>
              <Button
                variant="ghost"
                className="rounded-md p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile services */}
              <div className="mt-4">
                <p className="px-3 py-2 text-sm font-semibold text-foreground">
                  Services
                </p>
                <div className="space-y-1">
                  {servicesOverview.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button
                asChild
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
