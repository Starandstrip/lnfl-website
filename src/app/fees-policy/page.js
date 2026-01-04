export default function FeesPolicyPage() {
  return (
    <main className="bg-gradient-to-b from-[#0b1f35] to-black min-h-screen text-white">
      {/* Hero */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">
            Fees, Installments & Refund Policy
          </h1>
          <p className="text-gray-300">
            LNFL – Season 1
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-300">

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Season Fee Structure
            </h2>
            <p>
              LNFL follows a season-based fee model. The total season fee covers
              all league matches, ground bookings, referees, and league
              operations. Fees are for full-season participation and not
              calculated on a per-match basis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. Installment Plan
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Installment 1 (April):</strong> At registration,
                confirms participation and required before the first match.
              </li>
              <li>
                <strong>Installment 2 (July):</strong> Mid-season payment
                required to continue fixtures.
              </li>
              <li>
                <strong>Installment 3 (October):</strong> Required to
                participate in the remaining matches.
              </li>
            </ul>
            <p className="mt-2 text-gray-400">
              Exact due dates will be communicated in advance via official LNFL
              channels.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Installment Compliance
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Installments must be up to date to receive fixtures</li>
              <li>Unpaid dues may result in withheld fixtures or forfeits</li>
              <li>Access is restored once payment is cleared</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Refund Policy
            </h2>
            <p className="mb-2">
              LNFL operates on advance planning and bookings. Therefore,
              <strong> no refunds</strong> will be provided for:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Player or team withdrawal after registration</li>
              <li>Missed matches due to personal reasons, injuries, work, or travel</li>
              <li>Matches forfeited due to no-shows or late arrival</li>
            </ul>
            <p className="mt-2 text-gray-400">
              Fees are not adjusted based on the number of matches played or
              individual attendance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Exceptional Situations
            </h2>
            <p>
              Refunds or credits may be considered only if LNFL cancels the league
              entirely or is unable to deliver a significant portion of the
              season due to uncontrollable operational failure. Decisions are
              taken at LNFL’s sole discretion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Transfer & Replacement
            </h2>
            <p>
              Teams may replace players subject to LNFL approval and squad size
              limits. Fees already paid remain with the team. LNFL does not
              manage internal player fee settlements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Payment Confirmation
            </h2>
            <p>
              Accepted payment methods and confirmation processes will be shared
              during registration. Payment confirmation is required for fixture
              allocation and match eligibility.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Policy Acceptance
            </h2>
            <p className="text-gray-400">
              By registering for LNFL, players and teams confirm that they have
              read, understood, and agreed to this policy. All LNFL decisions
              are final and binding.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
