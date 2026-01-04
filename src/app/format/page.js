export default function FormatPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0b1e2d] to-black py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          League Format
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Season structure, match format, and competition rules.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8 text-gray-200">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Match Structure
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>2 × 20-minute halves</li>
              <li>5-minute half-time break</li>
              <li>No rolling substitutions</li>
              <li>Refereed matches with cards</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Team Composition
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Maximum <strong>15 players</strong> + 1 manager per team</li>
              <li>6 players on the field</li>
              <li>Up to 4 bench players per match</li>
              <li>Up to 5 additional players can be registered before season start</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              League System
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Single league table</li>
              <li>Home & Away (38 matches per team)</li>
              <li>Top of the table wins the title</li>
              <li>No playoffs, no penalties</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
