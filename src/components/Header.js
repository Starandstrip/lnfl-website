"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    pathname === path
      ? "text-white border-b-2 border-[#c8102e] pb-1"
      : "text-gray-300 hover:text-white";

  return (
    <header className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/lnfl-logo.png" alt="LNFL Logo" width={36} height={36} />
          <span className="text-white text-lg font-bold">LNFL</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/format" className={linkClass("/format")}>League Format</Link>
          <Link href="/register" className="bg-[#c8102e] text-white px-4 py-2 rounded">
            Register
          </Link>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">☰</button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-4">
          <Link href="/" className={linkClass("/")} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className={linkClass("/about")} onClick={() => setOpen(false)}>About</Link>
          <Link href="/format" className={linkClass("/format")} onClick={() => setOpen(false)}>League Format</Link>
          <Link href="/register" className="block bg-[#c8102e] text-white px-4 py-2 rounded text-center" onClick={() => setOpen(false)}>
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
