import Image from "next/image";

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1f35] to-black text-white">
      {/* Hero */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0">
          <Image
            src="/ground-top.jpg"
            alt="LNFL match locations"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">
            Match Locations
          </h1>
          <p className="text-gray-300">
            How grounds are assigned for LNFL matches
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-300">

          {/* Pincode-based allocation */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Pincode-based Grouping
            </h2>
            <p>
              During registration, we collect your <strong>pincode</strong> to
              understand your preferred playing area. Teams and individual
              players are grouped based on nearby pincodes to ensure
              <strong> minimum travel</strong> and better match experience.
            </p>
          </div>

          {/* Home ground */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Assigned Home Ground
            </h2>
            <p>
              Each team will be assigned a <strong>primary home ground</strong>
              based on location clustering. Matches will be scheduled as
              home and away fixtures throughout the season.
            </p>
          </div>

          {/* Flexibility */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Flexible & Fair Scheduling
            </h2>
            <p>
              While every team has a designated home ground, match venues may
              vary depending on availability, number of teams in an area,
              and scheduling requirements. Any changes are made to maintain
              fairness for all teams.
            </p>
          </div>

          {/* Zones */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Coverage Across Lucknow
            </h2>
            <p className="mb-3">
              LNFL matches will be conducted across multiple areas of Lucknow,
              including (but not limited to):
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Gomti Nagar & nearby areas</li>
              <li>Indira Nagar</li>
              <li>Aliganj</li>
              <li>Alambagh</li>
              <li>Central Lucknow</li>
            </ul>
          </div>

          {/* Final note */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              Final ground assignments will be shared after registrations close,
              once team distribution across areas is confirmed.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
