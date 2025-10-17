"use client";
import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";


import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "About Us | Concept",
  description:
    "Learn more about Concept — our vision, values, and commitment to delivering innovative and sustainable door solutions.",
};

type Product = {
  name: string;
  image: string;
  id: number;
};
const products: Product[] = [
  { id:1 ,name: "WPC FRAMES", image: "/homepage-icons/WPC-FRAME.png" },
  { id:4 ,name: "WPC WINDOWS", image: "/homepage-icons/WPC-WINDOW.png" },
  { id:5 ,name: "WPC DOOR", image: "/homepage-icons/WPC-DOOR.png" },
  { id:16 ,name: "HDPC DOOR", image: "/homepage-icons/HDPC-DOOR.png" },
  { id:12 ,name: "35MM HDPC", image: "/homepage-icons/35MM-HDPC-DOOR.png" },
  { id:14 ,name: "DIGITAL DOOR", image: "/homepage-icons/DIGITAL-DOOR.png" },
  { id:7 ,name: "GROOVE DOOR", image: "/homepage-icons/GROOVE-DOOR.png" },
  { id:10 ,name: "ANTIQUE GROOVE DOOR", image: "/homepage-icons/ANTIQ-DOOR.png" },
  { id:11 ,name: "TEXTURED DOOR", image: "/homepage-icons/TEXTURE-DOOR.png" },
  { id:13 ,name: "WPC DIGITAL SHUTTLE", image: "/homepage-icons/DIGITAL-SHUTTLES.png" },
  { id:6 ,name: "POLYGRANITE SHEETS", image: "/homepage-icons/POLYGRANITE-SHEETS.png" },
  { id:3 ,name: "3D WPC BOARD", image: "/homepage-icons/3D-BOARD-ICON.png" },
  { id:8 ,name: "EXTERIOR LOUVERS", image: "/homepage-icons/EXTERIOR-LOUVERS.png" },
  { id:9 ,name: "EXTERIOR PILLERS", image: "/homepage-icons/WPC-PILLARS-ICON.png" },
  { id:15 ,name: "WPC DIGITAL RAFTERS", image: "/homepage-icons/DIGITAL-RAFTERS.png" },
  { id:2 ,name: "HDPC SHEETS", image: "/homepage-icons/HDPC-BOARD.png" },
  { id:17 ,name: "WPC SHEETS", image: "/homepage-icons/WPC-BOARD-ICON.png" },
  { id:18 ,name: "CELING PANEL", image: "/homepage-icons/CEILING-PANELS.png" },
  { id:19 ,name: "INTERIOR lOUVERS", image: "/homepage-icons/WPC-RAFTERS.png" },
  { id:20 ,name: "BAFFLES", image: "/homepage-icons/BAFFLES.png" }, 
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [query, setQuery] = useState("");
          const [results, setResults] = useState<Product[]>([]);
           const [open, setOpen] = useState(false);
          const router = useRouter();
        
         const handleSearch = (value: string) => {
            setQuery(value);
            if (!value.trim()) {
              setResults([]);
              return;
            }
            const filtered = products.filter((product) =>
              product.name.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filtered);
          };
        
           const handleSelect = (id: number) => {
            setOpen(false);
            setQuery("");
            router.push(`/collections/${id}`);
          };
      
   
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-4 bg-gradient-to-t from-[#6b658d] via-[#2f2852] to-[#080c18] fixed top-0 left-0 w-full z-50 h-16">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.PNG" alt="Concept logo" width={120} height={40} />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 text-white font-medium relative">
        <Link href="/" className="hover:text-purple-300">Home</Link>
        <Link href="/about" className="hover:text-purple-300">About</Link>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 hover:text-purple-300 focus:outline-none"
          >
            Products
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isOpen && (
            <div className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-44 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-purple-100">Ceiling Systems</a>
              <a href="#" className="block px-4 py-2 hover:bg-purple-100">Exterior Louvers</a>
              <a href="#" className="block px-4 py-2 hover:bg-purple-100">Fluted Panels</a>
              <a href="#" className="block px-4 py-2 hover:bg-purple-100">HDPC Doors & Frames</a>
              <a href="#" className="block px-4 py-2 hover:bg-purple-100">New Arrivals</a>
              <a href="#" className="block px-4 py-2 hover:bg-purple-100">Wall Panels</a>
              <a href="#" className="block px-4 py-2 hover:bg-purple-100">WPC Door & Frames</a>
            </div>
          )}
        </div>
        <a href="#" className="hover:text-purple-300">Gallery</a>
        <Link href="/faqs" className="hover:text-purple-300">FAQs</Link>
        <Link href="/contact" className="hover:text-purple-300">Contact</Link>
        <Link href="#" className="hover:text-purple-300">Catalogue</Link>
      </nav>

      {/* Icons + Mobile Menu Button */}
      <div className="flex items-center gap-4 text-white">
        {/* Search button */}
        <div className="relative">
      {/* 🔘 Search Icon Button */}
      <button
        aria-label="Search"
        onClick={() => setOpen(true)}
        className="text-white hover:text-purple-700 p-2 rounded-full transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M16.65 10.5a6.15 6.15 0 11-12.3 0 6.15 6.15 0 0112.3 0z"
          />
        </svg>
      </button>

      {/* 🔍 Fullscreen Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-white/80 backdrop-blur-md z-50 flex flex-col items-center justify-start pt-16 px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* ✖ Close Button */}
            <button
              onClick={() => {
                setOpen(false);
                setQuery("");
                setResults([]);
              }}
              className="absolute top-6 right-6 text-gray-600 hover:text-purple-700 text-2xl"
              aria-label="Close Search"
            >
              ✕
            </button>

            {/* 🧠 Input Field */}
            <div className="w-full max-w-lg flex items-center border border-gray-300 rounded-full bg-white px-4 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Search for products..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="flex-1 outline-none bg-transparent text-gray-800 text-base sm:text-lg"
                autoFocus
              />
              <button
                onClick={() => handleSearch(query)}
                className="text-gray-600 hover:text-purple-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M16.65 10.5a6.15 6.15 0 11-12.3 0 6.15 6.15 0 0112.3 0z"
                  />
                </svg>
              </button>
            </div>

            {/* 📋 Search Results */}
            <div className="w-full max-w-lg mt-6 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {query && results.length === 0 && (
                <p className="text-center py-6 text-gray-500 text-sm">
                  No products found.
                </p>
              )}
              {results.length > 0 && (
                <ul className="max-h-[60vh] overflow-y-auto divide-y divide-gray-100">
                  {results.map((product) => (
                    <li
                      key={product.id}
                      onClick={() => handleSelect(product.id)}
                      className="px-5 py-3 text-gray-800 hover:bg-purple-100 cursor-pointer text-base sm:text-lg"
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            // Close Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Slide from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-t from-[#6b658d] via-[#2f2852] to-[#080c18] transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col items-start pt-20 px-6 text-white shadow-lg md:hidden z-[1000]`}
      >
         {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Link href="/" className="hover:text-purple-300 py-2">Home</Link>
        <Link href="/about" className="hover:text-purple-300 py-2">About</Link>
        <div className="relative w-full" ref={dropdownRef}>
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="flex items-center gap-1 hover:text-purple-300 focus:outline-none py-2"
  >
    Products
    <ChevronDown
      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    />
  </button>

  <div
    className={`mt-2 bg-gradient-to-t from-[#6b658d] via-[#2f2852] to-[#080c18] text-white rounded-lg shadow-lg w-full z-50 overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
      isOpen ? "max-h-96 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
    }`}
  >
    <Link href="/collections/18" className="block px-4 py-2 hover:bg-purple-100">Ceiling Systems</Link>
    <Link href="/collections/8" className="block px-4 py-2 hover:bg-purple-100">Exterior Louvers</Link>
    <Link href="/collections/1" className="block px-4 py-2 hover:bg-purple-100">WPC Frame</Link>
    <Link href="/collections/12" className="block px-4 py-2 hover:bg-purple-100">35MM HDPC Doors & Frames</Link>
    <Link href="/collections/6" className="block px-4 py-2 hover:bg-purple-100">New Arrivals</Link>
    <Link href="/collections/3" className="block px-4 py-2 hover:bg-purple-100">3D Boards</Link>
    <Link href="/collections/11" className="block px-4 py-2 hover:bg-purple-100">WPC UV Textured Door</Link>
  </div>
</div>

        <a href="#" className="hover:text-purple-300 py-2">Gallery</a>
        <Link href="/faqs" className="hover:text-purple-300 py-2">FAQs</Link>
        <Link href="/contact" className="hover:text-purple-300 py-2">Contact</Link>
        <Link href="#" className="hover:text-purple-300 py-2">Catalogue</Link>
      </div>
    </header>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#6b658d] via-[#2f2852] to-[#080c18] text-white">
        <div className="absolute inset-0">
          <Image
            src="/Option-2.jpg"
            alt="About Concept"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto">
            Redefining durability and design with eco-friendly door and frame solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Company Overview
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
          Concept Door is a pioneering door manufacturing company committed to redefining the way doors enhance interior and architectural spaces. Since its inception, the company has embraced innovation, creativity, and craftsmanship to produce doors that blend functionality with timeless design.
Specializing in designer doors, modern groove patterns, decorative finishes, and durable constructions, Concept Door has established itself as a trusted choice for homeowners, architects, and interior designers seeking both style and strength. With every product, we aim to open new possibilities for interiors that inspire elegance and sophistication.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to be recognized as a global leader in door innovation and design, setting new standards in quality and customer satisfaction. We aspire to transform interiors with doors that reflect individuality, elevate ambiance, and stand as enduring symbols of artistry and performance.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              At Concept Door, our mission is to craft doors that go beyond being mere entrances. We strive to design and manufacture aesthetic, durable, and functional door solutions that enhance the character of every space — from homes and offices to hospitality and commercial settings. Our goal is to deliver products that embody creativity, reliability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Innovation", desc: "Constantly evolving with modern materials and design." },
              { title: "Sustainability", desc: "Committed to eco-friendly production and processes." },
              { title: "Quality", desc: "Ensuring superior durability and finish in every product." },
              { title: "Customer Focus", desc: "Delivering personalized solutions and long-term value." },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-xl mb-2 text-gray-900">
                  {value.title}
                </h4>
                <p className="text-gray-700 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-12 bg-gradient-to-b from-[#6b658d] via-[#2f2852] to-[#080c18] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s Build Something Beautiful Together
        </h2>
        <p className="text-lg mb-8">
          Get in touch with our specialists to discuss your next project.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
