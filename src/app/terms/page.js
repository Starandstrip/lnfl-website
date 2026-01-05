export default function TermsPage() {
  return (
    <main className="bg-gradient-to-b from-[#0b1f35] to-black min-h-screen text-white">
      {/* Header */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">
            Terms & Conditions
          </h1>
          <p className="text-gray-300">
            LNFL – Season 1
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By registering for the Lucknow Futsal League (LNFL), all players and
              teams confirm that they have read, understood, and agreed to these
              Terms & Conditions along with all LNFL policies published on the
              website. Participation is conditional upon acceptance of these
              terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. Eligibility
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Intended for working professionals and business owners</li>
              <li>Generally aged between 25–45 years</li>
              <li>Players must be medically fit to participate</li>
              <li>LNFL reserves the right to accept or reject registrations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Participation at Own Risk
            </h2>
            <p>
              Futsal is a physical sport and involves risk of injury. Players
              participate entirely at their own risk. LNFL, its organizers,
              referees, coordinators, and venue partners are not responsible for
              injuries, medical emergencies, loss of belongings, or any harm
              during or after matches.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. League Authority
            </h2>
            <p>
              LNFL has full authority over match scheduling, fixture changes,
              ground allocation, referee decisions, and disciplinary actions.
              All operational decisions are final and binding.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Fees & Payments
            </h2>
            <p>
              LNFL follows a season-based fee model payable in installments. All
              payments are governed by the Fees, Installments & Refund Policy.
              Failure to comply may result in suspension or removal from the
              league.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. No Refunds
            </h2>
            <p>
              Fees paid are non-refundable except in exceptional cases stated
              explicitly in LNFL policies. No refunds will be issued for
              withdrawals, missed matches, injuries, or forfeits.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Code of Conduct
            </h2>
            <p>
              All participants must respect referees, opponents, and LNFL staff.
              Violence, abuse, or misconduct may result in suspension, bans,
              or removal from the league without refund.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Media Usage
            </h2>
            <p>
              LNFL may capture photos or videos during matches and use them for
              promotional or marketing purposes without compensation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              9. Schedule Changes & Force Majeure
            </h2>
            <p>
              LNFL is not liable for delays or cancellations caused by weather,
              government restrictions, or venue unavailability. Reasonable
              efforts will be made to reschedule matches.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              10. Governing Law
            </h2>
            <p>
              These Terms & Conditions are governed by the laws of India. Any
              disputes shall fall under the jurisdiction of Lucknow.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6 text-gray-400">
            By registering for LNFL, players and teams confirm voluntary
            acceptance of all rules, policies, and decisions of the league.
          </div>

        </div>
      </section>
    </main>
  );
}
