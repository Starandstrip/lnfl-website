"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [type, setType] = useState("individual");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1f35] to-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-xl p-8">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          LNFL Registration
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setType("individual")}
            className={`px-4 py-2 rounded font-medium ${
              type === "individual"
                ? "bg-[#c8102e] text-white"
                : "bg-gray-200 text-black"
            }`}
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
          >
            Team
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded px-4 py-2 text-black"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded px-4 py-2 text-black"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2 text-black"
          />

          <input
            type="tel"
            placeholder="WhatsApp Number"
            className="w-full border border-gray-300 rounded px-4 py-2 text-black"
          />

          {type === "team" && (
            <>
              <input
                type="text"
                placeholder="Team Name"
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />

              <input
                type="number"
                placeholder="Number of players"
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />
            </>
          )}

          <input
            type="text"
            placeholder="Pincode"
            className="w-full border border-gray-300 rounded px-4 py-2 text-black"
          />

          {type === "individual" && (
            <select className="w-full border border-gray-300 rounded px-4 py-2 text-black">
              <option>Forward</option>
              <option>Midfielder</option>
              <option>Defender</option>
              <option>Goalkeeper</option>
              <option>Manager</option>
            </select>
          )}

          <label className="flex items-center gap-2 text-sm text-black">
            <input type="checkbox" />
            I agree to be contacted regarding LNFL.
          </label>

          <button
            type="submit"
            className="w-full bg-[#c8102e] hover:bg-red-700 text-white font-semibold py-3 rounded mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
