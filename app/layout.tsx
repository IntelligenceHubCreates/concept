"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

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
        url: "/og-image.png", // 👈 image inside /public
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

  useEffect(() => {
    // 🔒 Disable right-click on the entire site
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // 🔒 Disable drag-and-drop for images
    const disableDrag = (e: DragEvent) => e.preventDefault();
    document.addEventListener("dragstart", disableDrag);

    // 🔒 Block common shortcuts (Ctrl+S, Ctrl+U, F12)
    const disableKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && ["s", "u", "p", "c"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableKeys);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
