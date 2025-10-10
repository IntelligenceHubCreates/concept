"use client"

import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Concept",
  description:
    "Get in touch with Concept for product inquiries, support, or collaboration opportunities.",
};

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
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      {/* navbar */}
      <header className="flex items-center justify-between px-4 bg-gradient-to-r from-purple-900 to-indigo-900 absolute top-0 left-0 w-full z-50">
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
        <button aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M16.65 10.5a6.15 6.15 0 11-12.3 0 6.15 6.15 0 0112.3 0z" />
          </svg>
        </button>

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

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gradient-to-r from-purple-900 to-indigo-900 flex flex-col items-center gap-4 py-6 text-white md:hidden shadow-lg z-50">
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
      )}
    </header>
      {/* Header */}
      <div className="text-center mb-12 mt-12">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We&apos;d love to hear from you! Whether you&apos;re interested in our products,
          services, or just have a question — our team is here to help.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 bg-white">
        {/* Left Column — Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Fill out the form or reach us through any of the following
              contact methods. Our specialists will get back to you within 24
              hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <p className="text-gray-700">support@concept.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <p className="text-gray-700">
                Concept Pvt. Ltd, Guntur, Andra Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Column — Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
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
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={4}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-900 to-indigo-900 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
