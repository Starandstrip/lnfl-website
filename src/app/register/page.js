"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [type, setType] = useState("individual");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [registrationId, setRegistrationId] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    payload.type = type;

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data?.registrationId) {
      setRegistrationId(data.registrationId);
      setSuccess(true);

      window.location.href = `https://wa.me/91${payload.phone}?text=${encodeURIComponent(
        `Hi ${payload.first_name}, your LNFL registration is successful.\nRegistration ID: ${data.registrationId}`
      )}`;
    }

    setLoading(false);
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0b1f35] to-black flex items-center justify-center px-4">
        <div className="bg-white rounded-xl p-10 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-black mb-4">
            Registration Successful 🎉
          </h2>
          <p className="text-black mb-2">
            Your Registration ID:
          </p>
          <p className="text-lg font-semibold text-[#c8102e]">
            {registrationId}
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Our team will contact you shortly on WhatsApp.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1f35] to-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          LNFL Registration
        </h1>

        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setType("individual")}
            className={`px-4 py-2 rounded font-medium ${
              type === "individual"
                ? "bg-[#c8102e] text-white"
                : "bg-gray-200 text-black"
            }`}
            type="button"
          >
            Individual
          </button>

          <button
            onClick={() => setType("team")}
            className={`px-4 py-2 rounded font-medium ${
              type === "team"
                ? "bg-[#c8102e] text-white"
                : "bg-gray-200 text-black"
            }`}
            type="button"
          >
            Team
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="first_name" placeholder="First Name" required className="w-full border rounded px-4 py-2 text-black" />
          <input name="last_name" placeholder="Last Name" required className="w-full border rounded px-4 py-2 text-black" />
          <input name="email" type="email" placeholder="Email" required className="w-full border rounded px-4 py-2 text-black" />
          <input name="phone" placeholder="WhatsApp Number" required className="w-full border rounded px-4 py-2 text-black" />

          {type === "team" && (
            <>
              <input name="team_name" placeholder="Team Name" className="w-full border rounded px-4 py-2 text-black" />
              <input name="players_count" type="number" placeholder="Number of players" className="w-full border rounded px-4 py-2 text-black" />
            </>
          )}

          <input name="pincode" placeholder="Pincode" required className="w-full border rounded px-4 py-2 text-black" />

          {type === "individual" && (
            <select name="position" className="w-full border rounded px-4 py-2 text-black">
              <option>Forward</option>
              <option>Midfielder</option>
              <option>Defender</option>
              <option>Goalkeeper</option>
              <option>Manager</option>
            </select>
          )}

          <label className="flex items-center gap-2 text-sm text-black">
            <input type="checkbox" name="consent" required /> I agree to be contacted regarding LNFL.
          </label>

          <button
            disabled={loading}
            className="w-full bg-[#c8102e] hover:bg-red-700 text-white font-semibold py-3 rounded"
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
