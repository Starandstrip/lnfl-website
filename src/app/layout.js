import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Lucknow Futsal League",
    template: "%s | Lucknow Futsal League",
  },
  description: "Official website of Lucknow Futsal League",
  metadataBase: new URL("https://www.lnfleague.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.lnfleague.com/" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
