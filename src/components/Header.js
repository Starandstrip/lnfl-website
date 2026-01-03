"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/lnfl-logo.png"
            alt="LNFL Logo"
            width={36}
            height={36}
            priority
          />
          <span className="text-white text-lg font-bold tracking-wide">
            LNFL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/format" className="text-gray-300 hover:text-white">
            League Format
          </Link>
          <Link
            href="/register"
            className="bg-[#c8102e] hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-4">
          <Link
            href="/"
            className="block text-gray-300 hover:text-white"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-300 hover:text-white"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/format"
            className="block text-gray-300 hover:text-white"
            onClick={() => setOpen(false)}
          >
            League Format
          </Link>
          <Link
            href="/register"
            className="block bg-[#c8102e] hover:bg-red-700 text-white px-4 py-2 rounded text-center"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
