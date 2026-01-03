"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [type, setType] = useState("individual");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const form = e.target;

    const payload = {
      type,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      position: type === "individual" ? form.position?.value : null,
      teamName: type === "team" ? form.teamName?.value : null,
      playersCount: type === "team" ? form.playersCount?.value : null,
      pincode: form.pincode.value,
      consent: form.consent.checked,
    };

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      window.location.href = data.whatsappUrl;
    } else {
      alert(data.error || "Registration failed");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1f35] to-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          LNFL Registration
        </h1>

        <div className="flex justify-center gap-3 mb-6">
          <button
            type="button"
            onClick={() => setType("individual")}
            className={`px-4 py-2 rounded ${
              type === "individual"
                ? "bg-[#c8102e] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Individual
          </button>

          <button
            type="button"
            onClick={() => setType("team")}
            className={`px-4 py-2 rounded ${
              type === "team"
                ? "bg-[#c8102e] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Team
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="firstName" placeholder="First Name" required className="w-full border rounded px-4 py-2 text-black" />
          <input name="lastName" placeholder="Last Name" required className="w-full border rounded px-4 py-2 text-black" />
          <input name="email" type="email" placeholder="Email" required className="w-full border rounded px-4 py-2 text-black" />
          <input name="phone" placeholder="WhatsApp Number" required className="w-full border rounded px-4 py-2 text-black" />
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

          {type === "team" && (
            <>
              <input name="teamName" placeholder="Team Name" required className="w-full border rounded px-4 py-2 text-black" />
              <input name="playersCount" type="number" placeholder="Number of players" required className="w-full border rounded px-4 py-2 text-black" />
            </>
          )}

          <label className="flex items-center gap-2 text-sm text-black">
            <input type="checkbox" name="consent" required />
            I agree to be contacted regarding LNFL.
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
