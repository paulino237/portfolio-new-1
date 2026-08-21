import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miguel Fosso — Senior Full-Stack Engineer",
  description: "Senior Full-Stack Engineer, Tech Lead & Digital Solutions Architect specializing in Node.js, .NET, React, Vue.js, Flutter, React Native, AWS, GCP, PostgreSQL & Payment Integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.variable}>
      <body className="bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased min-h-screen selection:bg-[#7621B0]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
