"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QRVerification() {
  const router = useRouter();

  // Auto-redirect to homepage after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, [router]);

  const handleViewCertificate = () => {
    window.open("/certificate.pdf", "_blank"); // Replace with your actual link
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-10 overflow-hidden bg-gradient-to-b from-white via-purple-50 to-[#2e1745] transition-fade">
      {/* Soft gradient overlay for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-100/40 to-[#2e1745]/80 opacity-80"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto text-gray-900">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2e1745] mb-4">
          ✅ Welcome to Concept Doors & Windows
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
          Your trusted source for <span className="font-semibold">premium, durable, and eco-friendly</span> framing solutions.
          <br />
          You’ve successfully scanned the QR code to verify that this is a{" "}
          <span className="font-semibold text-purple-800">100% genuine Concept product.</span>
        </p>

        <button
          onClick={handleViewCertificate}
          className="bg-gradient-to-r from-[#2e1745] to-purple-700 hover:from-purple-700 hover:to-[#2e1745]
                     text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          📄 View Certificate
        </button>

        <p className="mt-6 text-sm text-gray-500 animate-pulse">
          Redirecting to homepage in 10 seconds...
        </p>
      </div>

      {/* Fade effect at bottom to blend with homepage */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white blur-md opacity-90"></div>
    </div>
  );
}
