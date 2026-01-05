"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "League Format", href: "/format" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/lnfl-logo.png"
            alt="LNFL"
            width={56}
            height={56}
            priority
          />
          <span className="text-white font-semibold tracking-wide text-lg">
            LNFL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded transition-all duration-300 ${
                  isActive
                    ? "text-white bg-[#c8102e]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="/register"
            className="ml-4 px-6 py-2 rounded bg-[#c8102e] text-white text-sm font-semibold shadow-md hover:bg-red-700 transition"
          >
            Pre-Register for Season 1
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80" : "max-h-0"
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
                className={`block px-4 py-2 rounded ${
                  isActive
                    ? "bg-[#c8102e] text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="block mt-3 px-4 py-2 rounded bg-[#c8102e] text-white text-center font-semibold"
          >
            Pre-Register for Season 1
          </Link>
        </div>
      </div>
    </header>
  );
}
