import mysql from "mysql2/promise";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// MySQL connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Email transporter (Hostinger SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      type, // "individual" or "team"
      firstName,
      lastName,
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
      (type, first_name, last_name, email, phone, position, team_name, players_count, pincode, consent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        type,
        firstName,
        lastName,
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

    // Send confirmation email
    await transporter.sendMail({
      from: `"LNFL" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "LNFL Registration Successful",
      html: `
        <h2>Thank you for registering with LNFL!</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Registration ID:</strong> LNFL-${registrationId}</p>
        <p>We will contact you shortly on WhatsApp.</p>
      `,
    });

    // WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hi ${firstName}, thanks for registering for Lucknow Futsal League (LNFL).\nYour Registration ID is LNFL-${registrationId}.\nWe’ll contact you shortly with next steps.`
    );

    return NextResponse.json({
      success: true,
      registrationId: `LNFL-${registrationId}`,
      whatsappUrl: `https://wa.me/${phone}?text=${whatsappMessage}`,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
