import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "ESP Cloud Nano | Africa's Leading Point Of Service Platform",
  description:
    "Manage your salon, spa, or wellness business anywhere, anytime, on any device. Appointment scheduling, POS, online bookings, stock control, and business intelligence - all in one platform.",
  keywords: [
    "salon management",
    "spa software",
    "point of service",
    "ESP Cloud",
    "appointment scheduling",
    "online bookings",
    "business intelligence",
    "Africa",
  ],
  openGraph: {
    title: "ESP Cloud Nano | Africa's Leading Point Of Service Platform",
    description:
      "Manage your salon, spa, or wellness business anywhere, anytime, on any device.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ESP Cloud Nano - Point Of Service Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESP Cloud Nano | Africa's Leading Point Of Service Platform",
    description:
      "Manage your salon, spa, or wellness business anywhere, anytime, on any device.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a2332",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
