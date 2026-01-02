import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/lnfl-logo.png"
            alt="Lucknow Futsal League"
            width={48}
            height={48}
          />
          <span className="font-bold text-xl text-[#0B1C2D]">
            LNFL
          </span>
        </Link>

        <nav className="flex gap-6 font-medium">
          <Link href="/about" className="hover:text-[#C4161C]">
            About
          </Link>
          <Link href="/league-format" className="hover:text-[#C4161C]">
            League Format
          </Link>
          <Link href="/news" className="hover:text-[#C4161C]">
            News
          </Link>
          <Link
            href="/register"
            className="bg-[#C4161C] text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
