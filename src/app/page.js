export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#0B1C2D] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Lucknow Futsal League
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A competitive futsal league for working professionals who play for passion.
        </p>

        <div className="mt-8">
          <a
            href="/register"
            className="inline-block bg-[#C4161C] hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-xl font-bold mb-2">20 Teams</h3>
          <p>Carefully selected amateur teams from Lucknow.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">April Kickoff</h3>
          <p>Season 1 starts this April. Registrations open soon.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Futsal Focused</h3>
          <p>Fast-paced matches designed for working professionals.</p>
        </div>
      </section>
    </main>
  );
}
