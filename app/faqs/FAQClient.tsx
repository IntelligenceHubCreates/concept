"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is a WPC Door?",
    answer:
      "WPC (Wood Plastic Composite) Doors are made from a blend of wood fiber and thermoplastics. They are 100% waterproof, termite-proof, and durable, making them an ideal replacement for traditional wooden doors.",
  },
  {
    question: "Are WPC Doors suitable for bathrooms and kitchens?",
    answer:
      "Yes. WPC Doors are completely water-resistant and do not swell or warp, making them perfect for moisture-prone areas like bathrooms, kitchens, and balconies.",
  },
  {
    question: "What are the benefits of WPC Frames?",
    answer:
      "WPC Frames are strong, waterproof, and termite-proof. Unlike wooden frames, they do not crack, warp, or decay over time, ensuring a long-lasting fit for any door.",
  },
  {
    question: "What are WPC 3D Boards used for?",
    answer:
      "WPC 3D Boards are decorative wall panels designed to enhance interiors with unique textures and patterns. They are widely used in living rooms, offices, hotels, and commercial spaces.",
  },
  {
    question: "What are Polygranite Sheets?",
    answer:
      "Polygranite Sheets combine the look of natural granite with the durability of polymers. They are lightweight, impact-resistant, and waterproof, making them ideal for both interiors and exteriors.",
  },
  {
    question: "What makes Groove Doors special?",
    answer:
      "Groove Doors feature stylish, precision-cut patterns that give interiors a modern and elegant appeal. They are customizable and available in different finishes.",
  },
  {
    question: "Are these products eco-friendly?",
    answer:
      "Yes. WPC, HDPC, and Polygranite products are eco-friendly alternatives to traditional wood, helping reduce deforestation while offering long-lasting performance.",
  },
];
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

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [menuOpen, setMenuOpen] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
     
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
      <section className="bg-gradient-to-b from-[#6b658d] via-[#2f2852] to-[#080c18] text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Find quick answers to the most common questions about our WPC doors and frames.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700 text-base leading-relaxed border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-b from-[#6b658d] via-[#2f2852] to-[#080c18] px-10 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Still Have Questions?
        </h2>
        <p className="text-lg mb-8">
          Get in touch with our specialists for personalized support and expert guidance.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Contact Our Team
        </a>
      </section>
    </main>
  );
}
