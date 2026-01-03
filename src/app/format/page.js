export default function LeagueFormatPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          LNFL League Format
        </h1>

        {/* Match Format */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Match Format</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Matches will be played in a <strong>2 × 20 minutes</strong> format.
            </li>
            <li>
              <strong>5-minute break</strong> between halves.
            </li>
            <li>
              No rolling substitutions.
            </li>
            <li>
              Refereed matches with cards and full officiating.
            </li>
          </ul>
        </section>

        {/* Team Composition */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Team Composition</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Maximum <strong>15</strong> players per team for the season.
            </li>
            <li>
              Includes <strong>6</strong> on-field players.
            </li>
            <li>
              Up to <strong>4</strong> bench players per match.
            </li>
            <li>
              Up to <strong>5</strong> additional players can be registered
              before the season begins.
            </li>
            <li>
              Each team can have <strong>1 manager</strong>.
            </li>
          </ul>
        </section>

        {/* League Structure */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">League Structure</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Single league format.
            </li>
            <li>
              Each team plays <strong>home and away</strong> against every other
              team.
            </li>
            <li>
              Total of <strong>38 matches</strong> per team in the season.
            </li>
            <li>
              The team at the top of the table wins the league title.
            </li>
            <li>
              No playoffs or penalties, same structure as EPL.
            </li>
          </ul>
        </section>

        {/* Scheduling */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Scheduling</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Matches will be played on <strong>Friday, Saturday, and Sunday</strong>.
            </li>
            <li>
              Scheduling will be flexible and decided in discussion with team
              managers and captains.
            </li>
            <li>
              Each team will be assigned a home futsal ground.
            </li>
          </ul>
        </section>

        {/* Fees & Officials */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Fees & Officials</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Participation fees will be announced later.
            </li>
            <li>
              Professional referees will officiate all matches.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
