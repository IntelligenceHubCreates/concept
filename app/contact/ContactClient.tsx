"use client";

import { Metadata } from "next";
import { Mail, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";


import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Contact Us | Concept",
  description:
    "Get in touch with Concept for product inquiries, support, or collaboration opportunities.",
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

export default function ContactPage() {
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

  // ✅ WhatsApp submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    // ✅ Replace with your WhatsApp number (with country code)
    const whatsappNumber = "919952036814"; // Example: 91 + your number

    const whatsappMessage = `
🌟 *New Contact Form Submission from Concept Website* 🌟

👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
💬 *Message:* ${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage.trim());
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Open WhatsApp with message ready
    window.open(whatsappURL, "_blank");

    // Reset the form
    form.reset();

    alert("Thank you! Your message has been sent to our WhatsApp.");
  };

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
      {/* Header Navbar */}
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
        <Link href="/catalog" className="hover:text-purple-300">Catalogue</Link>
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
        <Link href="/catalog" className="hover:text-purple-300 py-2">Catalogue</Link>
      </div>
    </header>
    <section className=" px-6 py-16 bg-white">
      

      {/* Page Header */}
      <div className="text-center mb-12 mt-12">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We&apos;d love to hear from you! Whether you&apos;re interested in our products,
          services, or just have a question — our team is here to help.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 bg-white">
        {/* Left Info Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Fill out the form or reach us through any of the following
              contact methods. Our specialists will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <p className="text-gray-700">support@concept.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <p className="text-gray-700">
                Concept Pvt. Ltd, Morbi - 363630, Gujarat, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows={4}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-t from-[#6b658d] via-[#2f2852] to-[#080c18] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
    </section>
    {/* Footer Section */}
<footer className="bg-gradient-to-b from-[#080c18] via-[#2f2852] to-[#6b658d] text-gray-200 pt-2 pb-6 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    {/* Logo and About */}
    <div>
      <Image src="/logo.PNG" alt="Concept Logo" width={140} height={50} className="mb-4" />
      <p className="text-sm leading-relaxed">
        Concept brings innovation and elegance to your interiors and exteriors.
        Explore our wide range of WPC and HDPC solutions — built to last, crafted to impress.
      </p>
      <div className="flex items-center gap-3 mt-4">
        <a href="https://www.facebook.com" target="_blank" className="hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.5v7A10 10 0 0022 12z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/conceptdoorswindows" target="_blank" className="hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 4a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
          </svg>
        </a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
        <li><Link href="/catalog" className="hover:text-white transition">Catalogue</Link></li>
        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
      </ul>
    </div>

    {/* Product Categories */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/collections/1" className="hover:text-white transition">WPC Frames</Link></li>
        <li><Link href="/collections/10" className="hover:text-white transition">Antique Doors</Link></li>
        <li><Link href="/collections/8" className="hover:text-white transition">Exterior Louvers</Link></li>
        <li><Link href="/collections/6" className="hover:text-white transition">Polygranite Sheets</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
      <ul className="space-y-2 text-sm">
        <li><span className="font-semibold">Email:</span> conceptdoorswindows@gmail.com</li>
        <li><span className="font-semibold">Phone:</span> +91 81868 74592</li>
        <li><span className="font-semibold">Address:</span> Gujrat, India</li>
      </ul>
    </div>

  </div>

  <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
    © {new Date().getFullYear()} Concept Doors & Windows. All rights reserved. <br className="sm:hidden" />
    <span className="text-gray-400"> Developed by <span className="text-[#080c18] font-semibold">Intelligence Hub</span></span>
  </div>
</footer>
    </main>
  );
}
