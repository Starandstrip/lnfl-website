import Image from "next/image";

export default function FormatPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0">
          <Image
            src="/hero-futsal.jpg"
            alt="LNFL Match Format"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            League Format
          </h1>
          <p className="text-gray-300">
            Simple, competitive, and designed for fair play.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-300">

          {/* Match Format */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Match Format
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Matches will be played in a <strong>6v6 futsal format</strong>.</li>
              <li>Each match consists of <strong>2 halves of 20 minutes</strong>.</li>
              <li><strong>5-minute half-time break</strong> between halves.</li>
              <li>Matches are officiated by <strong>neutral referees</strong>.</li>
            </ul>
          </div>

          {/* Squad */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Squad Structure
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Maximum <strong>15 players</strong per team for the season.</li>
              <li>Includes <strong>6 on-field players</strong>.</li>
              <li>Up to <strong>4 bench players</strong per match.</li>
              <li>Up to <strong>5 additional players</strong can be registered before the season begins.</li>
              <li><strong>1 team manager</strong per team.</li>
              <li><strong>No rolling substitutions</strong>.</li>
            </ul>
          </div>

          {/* League Structure */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              League Structure
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Single league format.</li>
              <li>Each team plays <strong>home and away</strong matches against every other team.</li>
              <li>Total of <strong>38 matches</strong per team in the season.</li>
              <li>The team at the <strong>top of the league table</strong> at the end of the season is declared the <strong>Champion</strong>.</li>
            </ul>
          </div>

          {/* Points System */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Points System
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Win: <strong>3 points</strong></li>
              <li>Draw: <strong>1 point</strong></li>
              <li>Loss: <strong>0 points</strong></li>
              <li>No penalty shootouts during league matches.</li>
            </ul>
          </div>

          {/* Discipline */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Discipline & Fair Play
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Matches will follow standard futsal rules.</li>
              <li>Yellow and red cards will be enforced.</li>
              <li>Serious fouls or misconduct may result in match bans.</li>
              <li>Decisions by referees and league officials will be final.</li>
            </ul>
          </div>

          {/* Match Days */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Match Days & Venues
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Matches will be played on <strong>Friday, Saturday, and Sunday</strong>.</li>
              <li>Fixtures will be scheduled in coordination with <strong>team managers and captains</strong>.</li>
              <li>Each team will be assigned a <strong>designated futsal ground</strong>.</li>
              <li>Home and away matches will be conducted throughout the season.</li>
            </ul>
          </div>

          {/* Fees */}
          <div className="border-t border-gray-800 pt-6">
            <h2 className="text-xl font-semibold text-white mb-3">
              Registration & Fees
            </h2>
            <p className="text-gray-400">
              Registration fees will be applicable for participation in the league.
              Details will be shared with teams and individuals after registration.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
