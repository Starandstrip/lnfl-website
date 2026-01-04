export default function FixturesPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1f35] to-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-center">
          LNFL – Fixtures & Match Rescheduling Policy
        </h1>
        <p className="text-center text-gray-300">
          Season 1
        </p>

        {/* 1. League Structure */}
        <section>
          <h2 className="text-xl font-semibold mb-3">1. League Structure</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Total teams: 20</li>
            <li>Format: Home & Away (Double Round Robin)</li>
            <li>Matches per team: 38</li>
            <li>Season duration: Approximately 8–9 months</li>
            <li>Each team is assigned a designated home ground</li>
          </ul>
        </section>

        {/* 2. Match Scheduling */}
        <section>
          <h2 className="text-xl font-semibold mb-3">2. Match Scheduling</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Matches are primarily scheduled on Friday, Saturday, and Sunday</li>
            <li>Weekday evening matches may be scheduled if required</li>
            <li>Fixtures are released on a rolling basis, typically 2–3 weeks in advance</li>
            <li>
              Full-season fixtures are not released at once to allow flexibility for:
              <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>Weather conditions</li>
                <li>Festivals</li>
                <li>Ground availability</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* 3. Ground & Referee Responsibility */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            3. Ground & Referee Responsibility
          </h2>
          <p className="text-gray-300 mb-2">
            LNFL is fully responsible for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Ground booking</li>
            <li>Referee booking</li>
            <li>Match slot confirmation</li>
          </ul>
          <p className="text-gray-400 mt-3">
            Since players pay a participation fee, teams are not required to arrange
            or book grounds themselves.
          </p>
        </section>

        {/* 4. Team Responsibilities */}
        <section>
          <h2 className="text-xl font-semibold mb-3">4. Team Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Arriving at the venue on time</li>
            <li>Ensuring the minimum required number of players are available</li>
            <li>Following match-day instructions from LNFL coordinators and referees</li>
          </ul>
          <p className="text-gray-400 mt-3">
            Failure to meet basic match requirements may result in penalties or forfeits.
          </p>
        </section>

        {/* 5. Rain & Weather Policy */}
        <section>
          <h2 className="text-xl font-semibold mb-3">5. Rain & Weather Policy</h2>

          <p className="text-gray-300 font-medium mb-2">Light Rain</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>Matches will be played as scheduled</li>
            <li>Final decision will be taken at the venue</li>
          </ul>

          <p className="text-gray-300 font-medium mb-2">
            Heavy Rain / Unsafe Pitch
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>Match will be postponed</li>
            <li>
              Decision will be taken jointly by:
              <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>Referee</li>
                <li>LNFL coordinator</li>
                <li>Turf management</li>
              </ul>
            </li>
          </ul>

          <p className="text-gray-300 font-medium mb-2">
            Rain-related No-Shows
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>If the ground is deemed playable and a team does not show up, the match may be declared a forfeit</li>
          </ul>
        </section>

        {/* 6. Match Rescheduling Policy */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            6. Match Rescheduling Policy
          </h2>

          <p className="text-gray-300 mb-2">
            LNFL may reschedule matches due to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>Heavy rain or unsafe playing conditions</li>
            <li>Ground unavailability</li>
            <li>Referee unavailability</li>
            <li>Operational constraints beyond team control</li>
          </ul>

          <p className="text-gray-300 mb-2">
            LNFL will not reschedule matches due to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Player unavailability</li>
            <li>Personal commitments</li>
            <li>Travel issues</li>
            <li>Festivals (teams are expected to manage squads)</li>
          </ul>

          <p className="text-gray-400 mt-3">
            All rescheduling decisions taken by LNFL are final.
          </p>
        </section>

        {/* 7. Forfeit Rules */}
        <section>
          <h2 className="text-xl font-semibold mb-3">7. Forfeit Rules</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>A team has fewer than the minimum required players at kickoff</li>
            <li>A team arrives 15 minutes or more late</li>
            <li>A team refuses to play without an LNFL-approved reason</li>
          </ul>
          <p className="text-gray-400 mt-3">
            Forfeited matches will be recorded as a 3–0 win. No refunds will be issued.
          </p>
        </section>

        {/* 8. Festival & Blackout Dates */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            8. Festival & Blackout Dates
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>LNFL may declare blackout weekends due to major festivals or extreme weather</li>
            <li>No matches will be scheduled on these dates</li>
            <li>Teams will be informed in advance</li>
          </ul>
        </section>

        {/* 9. Communication Protocol */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            9. Communication Protocol
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>All official communication will take place via LNFL WhatsApp groups</li>
            <li>Only team representatives will be included</li>
            <li>Match confirmations are shared 48 hours before kickoff</li>
            <li>Only LNFL officials can announce match-day changes</li>
          </ul>
        </section>

        {/* 10. Final Authority */}
        <section className="border-t border-gray-800 pt-6">
          <h2 className="text-xl font-semibold mb-3">
            10. Final Authority
          </h2>
          <p className="text-gray-400">
            LNFL reserves the right to modify fixtures, adjust schedules, and take
            disciplinary action when required. All decisions made in the interest
            of league operations are final and binding.
          </p>
        </section>

      </div>
    </main>
  );
}
