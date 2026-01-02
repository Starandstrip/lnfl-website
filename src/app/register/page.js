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
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">LNFL Registration</h1>

      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 ${
            type === "individual" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setType("individual")}
        >
          Individual
        </button>
        <button
          className={`px-4 py-2 ${
            type === "team" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setType("team")}
        >
          Team
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <input name="firstName" placeholder="First Name" required className="w-full p-2 border" />
        <input name="lastName" placeholder="Last Name" required className="w-full p-2 border" />
        <input type="email" name="email" placeholder="Email" required className="w-full p-2 border" />
        <input name="phone" placeholder="WhatsApp Number (with country code)" required className="w-full p-2 border" />
        <input name="pincode" placeholder="Pincode" required className="w-full p-2 border" />

        {type === "individual" && (
          <select name="position" className="w-full p-2 border">
            <option>Forward</option>
            <option>Midfield</option>
            <option>Defence</option>
            <option>Goalkeeper</option>
            <option>Manager</option>
          </select>
        )}

        {type === "team" && (
          <>
            <input name="teamName" placeholder="Team Name" required className="w-full p-2 border" />
            <input name="playersCount" type="number" placeholder="Number of players" required className="w-full p-2 border" />
          </>
        )}

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="consent" required />
          I agree to be contacted regarding LNFL.
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 text-white py-2"
        >
          {loading ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}
