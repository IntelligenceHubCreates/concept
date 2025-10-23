"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

type PDFItem = {
  id: number;
  title: string;
  description?: string;
  file: string; // path to PDF file in /public/pdfs
};

const pdfCatalog: PDFItem[] = [
  {
    id: 1,
    title: "3D Boards",
    description: "Discover our stunning range of WPC 3D Boards with wave-like textures that add luxury and depth to walls and interiors.",
    file: "/pdfs/pdfs/3D_Boards.pdf",
  },
  {
    id: 2,
    title: "CONCEPT HDPC BOARD",
    description: "High-Density Polymer Composite boards offering superior durability, weather resistance, and elegant surface finishes for modern interiors.",
    file: "/pdfs/pdfs/CONCEPT-HDPC-BOARD.pdf",
  },
  {
    id: 3,
    title: "EXTERIOR LOUVERS",
    description: "Premium exterior louvers designed for ventilation and aesthetics — ideal for facades, balconies, and architectural projects.",
    file: "/pdfs/pdfs/EXTERIOR-LOUVERS.pdf",
  },
  {
    id: 4,
    title: "POLYGRANITE SHEETS",
    description: "Durable and stylish Polygranite Sheets featuring stone-like finishes that bring a modern, premium touch to any space.",
    file: "/pdfs/pdfs/POLYGRANITE-SHEETS.pdf",
  },
  {
    id: 5,
    title: "VOL_1 DIGITAL SHUTTERS",
    description: "First edition of our Digital Shutters collection — featuring creative printed designs for doors that blend art and architecture.",
    file: "/pdfs/pdfs/VOL_1-DIGITAL-SHUTTERS.pdf",
  },
  {
    id: 6,
    title: "VOL_2 DIGITAL SHUTTERS",
    description: "Volume 2 of Concept Digital Shutters featuring artistic patterns and bold colors for unique door designs.",
    file: "/pdfs/pdfs/VOL_2-DIGITAL-SHUTTERS.pdf",
  },
  {
    id: 7,
    title: "VOL_3 DIGITAL SHUTTERS",
    description: "Explore Volume 3 with new contemporary designs — bringing digital artistry to durable WPC door surfaces.",
    file: "/pdfs/pdfs/VOL_3-DIGITAL-SHUTTERS.pdf",
  },
  {
    id: 8,
    title: "VOL_4 DIGITAL SHUTTERS",
    description: "Volume 4 of our Digital Shutters series highlighting modern geometry and subtle tones for minimalistic spaces.",
    file: "/pdfs/pdfs/VOL_4-DIGITAL-SHUTTERS.pdf",
  },
  {
    id: 9,
    title: "VOL_5 DIGITAL SHUTTERS",
    description: "A premium collection of digital printed WPC shutters featuring elegant textures and high-resolution graphics.",
    file: "/pdfs/pdfs/VOL_5-DIGITAL-SHUTTERS.pdf",
  },
  {
    id: 10,
    title: "VOL_6 DIGITAL SHUTTERS",
    description: "Volume 6 showcases futuristic door patterns crafted with precision digital printing on WPC material.",
    file: "/pdfs/pdfs/VOL_6-DIGITAL-SHUTTERS.pdf",
  },
  {
    id: 11,
    title: "VOL_7 DIGITAL SHUTTERS",
    description: "Explore abstract and nature-inspired themes in Volume 7 — redefining digital artistry for premium doors.",
    file: "/pdfs/pdfs/VOL_7-DIGITAL-SHUTTERS.pdf",
  },
  {
    id: 12,
    title: "VOL_8 DIGITAL SHUTTERS",
    description: "Latest Volume 8 collection featuring high-definition prints, modern color palettes, and creative themes for WPC doors.",
    file: "/pdfs/pdfs/VOL_8-DIGITAL-SHUTTERS.pdf",
  },
  {
    id: 13,
    title: "WPC ANTIQ DOOR",
    description: "A heritage-inspired door series with antique textures and intricate patterns, made with durable WPC material.",
    file: "/pdfs/pdfs/WPC-ANTIQ-DOOR.pdf",
  },
  {
    id: 14,
    title: "WPC DIGITAL DOOR",
    description: "Vibrant, digitally printed WPC doors offering style, strength, and design flexibility for every modern home.",
    file: "/pdfs/pdfs/WPC-DIGITAL-DOOR.pdf",
  },
  {
    id: 15,
    title: "WPC DIGITAL DOOR CONCEPT",
    description: "A concept catalog showcasing innovative digital door designs that merge technology with timeless aesthetics.",
    file: "/pdfs/pdfs/WPC-DIGITAL-DOOR-CONCEPT.pdf",
  },
  {
    id: 16,
    title: "WPC GROOVING DOOR DOUBLE",
    description: "Double-grooved WPC doors with symmetrical line detailing — a perfect balance of design and durability.",
    file: "/pdfs/pdfs/WPC-GROOVING-DOOR-DOUBLE.pdf",
  },
  {
    id: 17,
    title: "WPC GROOVING DOOR SINGLE",
    description: "Elegant single-grooved WPC doors offering minimalist design appeal and long-lasting performance.",
    file: "/pdfs/pdfs/WPC-GROOVING-DOOR-SINGLE.pdf",
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




export default function CatalogPage() {
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
    <section className="min-h-screen bg-gray-50 text-gray-800">
      {/* Page Header */}
      {/* Header */}
            <header className="flex items-center justify-between px-4 bg-gradient-to-t from-[#6b658d] via-[#2f2852] to-[#080c18] relative top-0 left-0 w-full z-50 h-16">
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
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 mt-2 bg-gradient-to-t from-[#6b658d] via-[#2f2852] to-[#080c18]0 text-black rounded-lg shadow-lg w-44 z-50">
                      <Link href="/collections/18" className="block px-4 py-2 hover:bg-purple-100">Ceiling Systems</Link>
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
                        d="M21 21l-4.35-4.35M16.65 10.5a6.15 6.15 0 11-12.3 0 6.15 6.15 0 0112.3 0z" />
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
                          } }
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
                            autoFocus />
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
                                d="M21 21l-4.35-4.35M16.65 10.5a6.15 6.15 0 11-12.3 0 6.15 6.15 0 0112.3 0z" />
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
                className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-t from-[#6b658d] via-[#2f2852] to-[#080c18] transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out flex flex-col items-start pt-20 px-6 text-white shadow-lg md:hidden z-[1000]`}
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
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
      
                  <div
                    className={`mt-2 bg-gradient-to-t from-[#6b658d] via-[#2f2852] to-[#080c18] text-white rounded-lg shadow-lg w-full z-50 overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${isOpen ? "max-h-96 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"}`}
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
      <div className="text-center mt-10 mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
        >
          PDF Catalog Library
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto px-4"
        >
          Browse and download our latest catalogs, brochures, and listings.
        </motion.p>
      </div>

      {/* PDF Catalog Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4"
      >
        {pdfCatalog.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col justify-between"
          >
            {/* PDF Icon Placeholder */}
            <div className="flex flex-col items-center justify-center h-32 mb-4">
              <div className="w-16 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                <span className="text-red-500 font-bold text-lg">PDF</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-gray-600 text-sm text-center mb-3">
                  {item.description}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-2">
              <Link
                href={item.file}
                target="_blank"
                className="px-3 py-1.5 bg-[#6b658d] text-white rounded-full text-sm hover:bg-gray-800 transition"
              >
                View
              </Link>
              <a
                href={item.file}
                download
                className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-full text-sm hover:bg-gray-300 transition"
              >
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
