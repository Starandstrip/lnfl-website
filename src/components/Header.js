import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/lnfl-logo.png"
            alt="LNFL Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl font-bold tracking-wide">
            LNFL
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-white hover:text-red-600 transition"
          >
            Home
          </Link>

          <Link
            href="/register"
            className="bg-[#c8102e] hover:bg-red-700 text-white px-4 py-2 rounded transition"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
