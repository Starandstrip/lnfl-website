"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "League Format", href: "/format" },
  { name: "Fixtures & Policy", href: "/fixtures-policy" },
  { name: "Locations", href: "/locations" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/lnfl-logo.png"
            alt="LNFL"
            width={36}
            height={36}
            priority
          />
          <span className="text-white font-semibold tracking-wide">
            LNFL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded transition-all duration-300
                  ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {/* Active background */}
                {isActive && (
                  <span className="absolute inset-0 bg-[#c8102e] rounded z-[-1] transition-all duration-300"></span>
                )}
                {link.name}
              </Link>
            );
          })}

          {/* Register CTA */}
          <Link
            href="/register"
            className="ml-3 px-5 py-2 rounded bg-[#c8102e] hover:bg-red-700 text-white text-sm font-semibold transition"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-black border-t border-gray-800 px-4 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded transition
                  ${
                    isActive
                      ? "bg-[#c8102e] text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-2 rounded bg-[#c8102e] text-white text-center font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
