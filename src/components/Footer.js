import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-white font-semibold mb-2">
            Lucknow Futsal League
          </h3>
          <p className="text-sm">
            Competitive futsal for working professionals.  
            Structured league. Fair play. Season-based format.
          </p>
        </div>

        {/* League Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">League Info</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/format" className="hover:text-white transition">
                League Format
              </Link>
            </li>
            <li>
              <Link href="/location" className="hover:text-white transition">
                Location
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-white font-semibold mb-3">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/fixtures-policy"
                className="hover:text-white transition"
              >
                Fixtures & Rescheduling
              </Link>
            </li>
            <li>
              <Link
                href="/fees-policy"
                className="hover:text-white transition"
              >
                Fees & Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Lucknow Futsal League · All rights reserved
        </p>
        <p className="mt-1">
          Contact:{" "}
          <a
            href="mailto:kickoff@lnfleague.com"
            className="text-[#c8102e] hover:underline"
          >
            kickoff@lnfleague.com
          </a>
        </p>
      </div>
    </footer>
  );
}
