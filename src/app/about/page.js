import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0">
          <Image
            src="/hero-futsal.jpg"
            alt="About LNFL"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            About LNFL
          </h1>
          <p className="text-gray-300">
            Lucknow Futsal League — football that fits real life.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-gray-300">
            Lucknow Futsal League (LNFL) was created to give working
            professionals and football enthusiasts a well-organised,
            competitive futsal experience without the pressure of
            professional leagues.
          </p>

          <p className="text-gray-300">
            The league focuses on quality turf grounds, fair play,
            structured scheduling, and a community-driven approach
            to football in Lucknow.
          </p>

          <p className="text-gray-300">
            Whether you already have a team or are joining as an
            individual, LNFL ensures you get placed, play regularly,
            and enjoy the game the way it’s meant to be played.
          </p>

          <div className="border-t border-gray-800 pt-6">
            <h2 className="text-xl font-semibold text-white mb-3">
              Our Vision
            </h2>
            <p className="text-gray-400">
              To build Lucknow’s most trusted futsal league for
              non-professional players — organised, competitive,
              and enjoyable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
