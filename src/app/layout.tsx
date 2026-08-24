import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

import { DATA } from "@/data/resume";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

const siteDescription =
  "Senior Full-Stack Engineer, Tech Lead & Co-Founder @Onixe. Specializing in high-performance web applications, Flutter mobile apps, distributed backends (Node.js, .NET), and 3D web animations (3AXIS).";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} — Senior Full-Stack Engineer & Tech Lead`,
    template: `%s | ${DATA.name}`,
  },
  description: siteDescription,
  openGraph: {
    title: `${DATA.name} — Senior Full-Stack Engineer & Tech Lead`,
    description: siteDescription,
    url: DATA.url,
    siteName: `${DATA.name} Portfolio`,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/miguel-avatar.jpg",
        width: 1200,
        height: 1200,
        alt: `${DATA.name} - Senior Full-Stack Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} — Senior Full-Stack Engineer & Tech Lead`,
    description: siteDescription,
    images: ["/miguel-avatar.jpg"],
    creator: "@miguelFosso",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
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
