import Image from "next/image";

export default function LocationsPage() {
  return (
    <main className="bg-gradient-to-b from-[#0b1f35] to-black min-h-screen text-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center px-6">
        <div className="absolute inset-0">
          <Image
            src="/ground-top.jpg"
            alt="LNFL Match Locations"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Match Locations</h1>
          <p className="text-gray-300">
            How grounds are assigned across Lucknow.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
          <p>
            LNFL assigns match locations based on player and team pincodes to
            ensure minimum travel and fair scheduling.
          </p>

          <p>
            Each team is assigned a primary home ground, with home and away
            fixtures spread across the season.
          </p>

          <p className="text-gray-400 border-t border-gray-800 pt-6">
            Final ground allocations are shared after registrations close.
          </p>
        </div>
      </section>
    </main>
  );
}
