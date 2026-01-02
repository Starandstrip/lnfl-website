"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [mode, setMode] = useState("individual");

  // common
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [consent, setConsent] = useState(false);

  // individual
  const [position, setPosition] = useState("");

  // team
  const [teamName, setTeamName] = useState("");
  const [playersCount, setPlayersCount] = useState("");

  const handleWhatsApp = () => {
    if (!firstName || !lastName || !email || !phone || !pincode || !consent) {
      alert("Please fill all required fields and give consent.");
      return;
    }

    if (mode === "individual" && !position) {
      alert("Please select your playing position.");
      return;
    }

    if (mode === "team" && (!teamName || !playersCount)) {
      alert("Please fill team details.");
      return;
    }

    const message =
      mode === "individual"
        ? `Hi, my name is ${firstName} ${lastName}.
I want to register for Lucknow Futsal League (LNFL).

Type: Individual Player
Position: ${position}
Email: ${email}
WhatsApp: ${phone}
Pincode: ${pincode}

I agree to be contacted regarding LNFL.`
        : `Hi, my name is ${firstName} ${lastName}.
I want to register a team for Lucknow Futsal League (LNFL).

Team Name: ${teamName}
Players Already Have: ${playersCount}
Email: ${email}
WhatsApp: ${phone}
Pincode: ${pincode}

I agree to be contacted regarding LNFL.`;

    const whatsappNumber = "919044766697"; // replace with your number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-[#0B1C2D] mb-2">
          Register for LNFL
        </h1>

        <p className="text-gray-600 mb-6">
          LNFL is a 6v6 futsal tournament with 4 bench players.
          Grounds will be assigned based on your pincode.
        </p>

        {/* Tabs */}
        <div className="flex mb-8 border-b">
          <button
            onClick={() => setMode("individual")}
            className={`px-4 py-2 font-semibold ${
              mode === "individual"
                ? "border-b-2 border-[#C4161C] text-[#C4161C]"
                : "text-gray-500"
            }`}
          >
            Individual
          </button>

          <button
            onClick={() => setMode("team")}
            className={`px-4 py-2 font-semibold ml-6 ${
              mode === "team"
                ? "border-b-2 border-[#C4161C] text-[#C4161C]"
                : "text-gray-500"
            }`}
          >
            Team
          </button>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border px-4 py-2 rounded"
            />
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border px-4 py-2 rounded"
            />
          </div>

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-4 py-2 rounded w-full"
          />

          <input
            placeholder="WhatsApp Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border px-4 py-2 rounded w-full"
          />

          {mode === "individual" && (
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="border px-4 py-2 rounded w-full"
            >
              <option value="">Select Position</option>
              <option>Forward</option>
              <option>Midfield</option>
              <option>Defence</option>
              <option>Goalkeeper</option>
            </select>
          )}

          {mode === "team" && (
            <>
              <input
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="border px-4 py-2 rounded w-full"
              />
              <input
                placeholder="Number of Players You Have"
                value={playersCount}
                onChange={(e) => setPlayersCount(e.target.value)}
                className="border px-4 py-2 rounded w-full"
              />
            </>
          )}

          <input
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="border px-4 py-2 rounded w-full"
          />

          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            I agree to be contacted by LNFL via WhatsApp, email, or phone.
          </label>

          <button
            onClick={handleWhatsApp}
            className="w-full bg-[#C4161C] text-white py-3 rounded font-semibold hover:bg-red-700 transition"
          >
            Continue on WhatsApp
          </button>
        </div>
      </div>
    </main>
  );
}
