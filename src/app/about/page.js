import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-[#0b1f35] to-black min-h-screen text-white">
      <section className="relative py-16 px-6">
        <div className="absolute inset-0">
          <Image
            src="/hero-futsal.jpg"
            alt="About LNFL"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">About LNFL</h1>
          <p className="text-gray-300">
            Football that fits real life.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
          <p>
            Lucknow Futsal League (LNFL) is designed for working professionals and
            football enthusiasts who want competitive football without
            professional pressure.
          </p>

          <p>
            We focus on quality turf grounds, fair play, and a well-structured
            league format across Lucknow.
          </p>

          <p>
            Whether you join as an individual or a team, LNFL ensures you get
            regular games and a great matchday experience.
          </p>

          <div className="border-t border-gray-800 pt-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              Our Vision
            </h2>
            <p className="text-gray-400">
              To build Lucknow’s most trusted futsal league for non-professional
              players.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
