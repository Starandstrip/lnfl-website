import Image from "next/image";

export default function FixturesPolicyPage() {
  return (
    <main className="bg-gradient-to-b from-[#0b1f35] to-black min-h-screen text-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center px-6">
        <div className="absolute inset-0">
          <Image
            src="/fixtures-hero.jpg"
            alt="LNFL Fixtures Policy"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">
            Fixtures & Rescheduling Policy
          </h1>
          <p className="text-gray-300">
            Match scheduling, postponements, and authority.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Scheduling
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Friday, Saturday, Sunday matches</li>
              <li>Weekday evenings if required</li>
              <li>Fixtures released 2–3 weeks in advance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Weather & Forfeits
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Light rain: match continues</li>
              <li>Heavy rain: match postponed</li>
              <li>15+ minutes late or no-show = forfeit</li>
            </ul>
          </div>

          <div className="border-t border-gray-800 pt-6 text-gray-400">
            LNFL reserves the right to modify fixtures and take operational
            decisions in the interest of the league.
          </div>
        </div>
      </section>
    </main>
  );
}
