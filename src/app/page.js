import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-futsal.jpg"
            alt="Futsal players silhouette"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f35]/65 to-black/75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lucknow Futsal League
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            A city-level futsal league for working professionals and football
            enthusiasts. Competitive, organised, and played on quality turf
            grounds across Lucknow.
          </p>

          <Link
            href="/register"
            className="inline-block bg-[#c8102e] hover:bg-red-700 text-white px-8 py-4 rounded font-semibold transition"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* WHAT IS LNFL */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            What is LNFL?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Lucknow Futsal League (LNFL) is a structured futsal league designed
            for players who want to enjoy competitive football alongside their
            professional lives. No pro pressure — just quality football, fair
            play, and a great matchday experience.
          </p>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="bg-[#0b0b0b] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Who is it for?
          </h2>

          {/* Image */}
          <div className="mb-10">
            <Image
              src="/ground-top.jpg"
              alt="Futsal ground top view"
              width={1200}
              height={600}
              className="rounded-lg mx-auto"
            />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="border border-gray-800 rounded-lg p-6">
              <div className="text-3xl mb-3">👨‍💼</div>
              <h3 className="text-white font-semibold mb-2">
                Working Professionals
              </h3>
              <p className="text-gray-400 text-sm">
                Aged 25+, balancing work, business, and football.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <div className="text-3xl mb-3">⚽</div>
              <h3 className="text-white font-semibold mb-2">
                Casual & Semi-Competitive Players
              </h3>
              <p className="text-gray-400 text-sm">
                Not professionals, but serious about enjoying the game.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <div className="text-3xl mb-3">🧑‍🤝‍🧑</div>
              <h3 className="text-white font-semibold mb-2">
                Teams & Individuals
              </h3>
              <p className="text-gray-400 text-sm">
                Register as a full team or join as an individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            How it works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">📝</div>
              <p className="text-gray-400">
                Register as Individual or Team
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <p className="text-gray-400">
                Grouped by nearby location (pincode-based)
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🗓️</div>
              <p className="text-gray-400">
                League matches on weekends
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-gray-400">
                Knockouts and finals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEASON SNAPSHOT */}
      <section className="bg-[#0b0b0b] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Season Snapshot
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="text-gray-300">📍 Lucknow</div>
            <div className="text-gray-300">🗓 Starts April</div>
            <div className="text-gray-300">⚽ 6v6 Format</div>
            <div className="text-gray-300">👥 Limited Slots</div>
          </div>
        </div>
      </section>
    </main>
  );
}
