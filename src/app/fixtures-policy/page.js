export default function FixturesPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0b1e2d] to-black py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Fixtures & Rescheduling Policy
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          How matches are scheduled, postponed, and managed throughout the season.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-gray-200 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Scheduling</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Matches on Friday, Saturday, Sunday</li>
            <li>Weekday evenings if required</li>
            <li>Fixtures released 2–3 weeks in advance</li>
            <li>No full-season schedule upfront</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Ground & Referees
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>LNFL handles ground booking</li>
            <li>LNFL assigns referees</li>
            <li>Teams do not arrange venues</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Weather Policy
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Light rain: match continues</li>
            <li>Heavy rain: match postponed</li>
            <li>Decision by referee + LNFL + turf</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Forfeits & Authority
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>15+ minutes late = forfeit</li>
            <li>Insufficient players = forfeit</li>
            <li>No refunds for forfeits</li>
            <li>LNFL decisions are final</li>
          </ul>
        </div>
      </section>
    </>
  );
}
