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

const avatarImageUrl = `${DATA.url}/miguel-avatar.jpg`;

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
        url: avatarImageUrl,
        secureUrl: avatarImageUrl,
        width: 1200,
        height: 1200,
        type: "image/jpeg",
        alt: `${DATA.name} - Senior Full-Stack Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} — Senior Full-Stack Engineer & Tech Lead`,
    description: siteDescription,
    images: [avatarImageUrl],
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
      <head>
        {/* Direct Meta tags for WhatsApp, Telegram and Social Crawlers */}
        <meta property="og:image" content={avatarImageUrl} />
        <meta property="og:image:secure_url" content={avatarImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content={DATA.name} />
        <meta name="twitter:image" content={avatarImageUrl} />
        <link rel="image_src" href={avatarImageUrl} />
      </head>
      <body className="bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased min-h-screen selection:bg-[#7621B0]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
