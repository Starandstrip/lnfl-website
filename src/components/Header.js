"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "League Format", href: "/format" },
    { name: "Fixtures & Policy", href: "/fixtures-policy" },
    { name: "Location", href: "/location" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/lnfl-logo.png"
            alt="LNFL"
            className="h-8 w-auto"
          />
          <span className="text-white font-semibold tracking-wide">
            LNFL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm transition ${
                  isActive
                    ? "text-red-500 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/register"
            className="ml-4 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
