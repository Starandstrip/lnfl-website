"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [type, setType] = useState("individual");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = {
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
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      window.location.href = result.whatsappUrl;
    } else {
      alert(result.error || "Registration failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          LNFL Registration
        </h1>

        {/* Type Switch */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={() => setType("individual")}
            className={`px-5 py-2 font-semibold rounded ${
              type === "individual"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Individual
          </button>
          <button
            type="button"
            onClick={() => setType("team")}
            className={`px-5 py-2 font-semibold rounded ${
              type === "team"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Team
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="firstName"
            placeholder="First Name"
            required
            className="w-full p-3 border border-gray-300 rounded text-black placeholder-gray-500"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            required
            className="w-full p-3 border border-gray-300 rounded text-black placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded text-black placeholder-gray-500"
          />
          <input
            name="phone"
            placeholder="WhatsApp Number"
            required
            className="w-full p-3 border border-gray-300 rounded text-black placeholder-gray-500"
          />
          <input
            name="pincode"
            placeholder="Pincode"
            required
            className="w-full p-3 border border-gray-300 rounded text-black placeholder-gray-500"
          />

          {type === "individual" && (
            <select className="w-full p-3 border border-gray-300 rounded text-black">
              <option>Forward</option>
              <option>Midfield</option>
              <option>Defence</option>
              <option>Goalkeeper</option>
              <option>Manager</option>
            </select>
          )}

          {type === "team" && (
            <>
              <input
                name="teamName"
                placeholder="Team Name"
                required
                className="w-full p-3 border border-gray-300 rounded text-black placeholder-gray-500"
              />
              <input
                name="playersCount"
                type="number"
                placeholder="Number of players"
                required
                className="w-full p-3 border border-gray-300 rounded text-black placeholder-gray-500"
              />
            </>
          )}

          <label className="flex items-center gap-2 text-sm text-black">
            <input type="checkbox" name="consent" required />
            I agree to be contacted regarding LNFL.
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition"
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
