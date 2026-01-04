export default function LeagueFormatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1f35] to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          LNFL League Format
        </h1>

        <section className="space-y-10 text-gray-300">
          <div>
            <h2 className="text-xl text-white font-semibold mb-3">Match Format</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>2 × 20 minutes matches</li>
              <li>5-minute half-time break</li>
              <li>No rolling substitutions</li>
              <li>Neutral referees with cards</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-3">Team Composition</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Maximum 15 players per team</li>
              <li>6 players on field</li>
              <li>4 bench players per match</li>
              <li>5 extra players registered before season</li>
              <li>1 team manager</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-3">League Structure</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Single league format</li>
              <li>Home and away matches</li>
              <li>38 matches per team</li>
              <li>Top team wins the league</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-3">Match Days</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Friday, Saturday, Sunday</li>
              <li>Flexible scheduling with team managers</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
