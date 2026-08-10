"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function QRVerification() {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const intervalRef = useRef<number | null>(null); // store interval
  const timeoutRef = useRef<number | null>(null); // store timeout

  useEffect(() => {
    const hasSeenMessage = sessionStorage.getItem("hasSeenQRMessage");
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!hasSeenMessage && isMobile) {
      setShowMessage(true);
      sessionStorage.setItem("hasSeenQRMessage", "true");

      // Countdown every second
      intervalRef.current = window.setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            if (intervalRef.current !== null) clearInterval(intervalRef.current);
          }
          return prev - 1;
        });
      }, 1000);

      // Redirect after 10 seconds
      timeoutRef.current = window.setTimeout(() => {
        router.push("/concept");
      }, 10000);
    } else {
      router.replace("/concept"); // redirect immediately for desktop or repeat visits
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, [router]);

  // Render nothing until showMessage is true
  if (!showMessage) return null;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-10 overflow-hidden bg-white transition-fade">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6b658d] via-[#2f2852]/40 to-[#080c18]/80 opacity-80"></div>

      <div className="relative z-10 max-w-2xl mx-auto text-gray-900">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2f2852] mb-4">
          ✅ Welcome to Concept Doors & Windows
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
          Your trusted source for{" "}
          <span className="font-semibold">premium, durable, and eco-friendly</span>{" "}
          framing solutions.
          <br />
          You’ve successfully scanned the QR code to verify that this is a{" "}
          <span className="font-semibold text-purple-800">
            100% genuine Concept product.
          </span>
        </p>

        <p className="bg-gradient-to-t from-[#6b658d] via-[#2f2852] to-[#080c18]
                     text-white px-8 py-3 rounded-full font-medium shadow-lg inline-block">
          ✅ This is a genuine product of Concept Doors and Windows.
        </p>

        <p className="mt-6 text-sm text-gray-500 animate-pulse">
          Redirecting to homepage in {countdown} second{countdown !== 1 ? "s" : ""}...
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white blur-md opacity-90"></div>
    </div>
  );
}
