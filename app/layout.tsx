import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ImageProtection from "./components/ImageProtection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concept Doors & Windows",
  description: "Discover premium doors, windows, and interior solutions.",
  openGraph: {
    title: "Concept Doors & Windows",
    description: "Premium designs. Timeless beauty for your home.",
    url: "https://conceptdoors.in",
    siteName: "Concept Doors & Windows",
    images: [
      {
        url: "/og-image.png", // 👈 image you added in public
        width: 1200,
        height: 630,
        alt: "Concept Doors & Windows OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}
      >
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}
