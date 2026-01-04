import Image from "next/image";

export default function FormatPage() {
  return (
    <main className="bg-gradient-to-b from-[#0b1f35] to-black min-h-screen text-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center px-6">
        <div className="absolute inset-0">
          <Image
            src="/format-hero.jpg"
            alt="LNFL League Format"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">League Format</h1>
          <p className="text-gray-300">
            How the LNFL season is structured.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Match Format
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>2 × 20 minute halves</li>
              <li>5 minute half-time break</li>
              <li>No rolling substitutions</li>
              <li>Refereed matches with cards</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Team Structure
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Maximum 15 players + 1 manager per team</li>
              <li>6 players on the field</li>
              <li>4 bench players per match</li>
              <li>5 additional players can be registered before season start</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              League System
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Single league table</li>
              <li>Home & Away (38 matches per team)</li>
              <li>Top team wins the title</li>
              <li>No playoffs or penalties</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
