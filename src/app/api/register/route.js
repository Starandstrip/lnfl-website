import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

// MySQL connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// LNFL WhatsApp number (OWNER NUMBER)
const LNFL_WHATSAPP_NUMBER = "9559991179";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      type, // "individual" or "team"
      firstName,
      lastName,
      age,
      email,
      phone,
      position,
      teamName,
      playersCount,
      pincode,
      consent,
    } = body;

    if (!firstName || !lastName || !email || !phone || !pincode || !consent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert into DB
    const [result] = await db.execute(
      `INSERT INTO registrations
      (type, first_name, last_name, age, email, phone, position, team_name, players_count, pincode, consent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        type,
        firstName,
        lastName,
        age || null,
        email,
        phone,
        position || null,
        teamName || null,
        playersCount || null,
        pincode,
        consent,
      ]
    );

    const registrationId = result.insertId;

    // WhatsApp message (sent TO LNFL number)
    const whatsappMessage = encodeURIComponent(
      `Hi, I am ${firstName} ${lastName}.\n\n` +
      `I am registering for Lucknow Futsal League (LNFL).\n` +
      `Registration ID: LNFL-${registrationId}\n` +
      `Applying as: ${type === "team" ? "Team" : "Individual"}\n` +
      (type === "individual"
        ? `Position: ${position}\n`
        : `Team Name: ${teamName}\nPlayers Count: ${playersCount}\n`) +
      `Phone: ${phone}\n` +
      `Pincode: ${pincode}`
    );

    return NextResponse.json({
      success: true,
      registrationId: `LNFL-${registrationId}`,
      whatsappUrl: `https://wa.me/${LNFL_WHATSAPP_NUMBER}?text=${whatsappMessage}`,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
