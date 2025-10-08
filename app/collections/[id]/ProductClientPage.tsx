"use client";


import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

type Frame = { src: string; size?: string; width: number; height: number;  };

type Headings = {
  presenting?: string;
  technical?: string;
  frame?: string;
};

type Spec = {
  text: string;
  image?: string; // optional image for some specs
  width?: number; 
  height?: number;
};


type Product = {
  id: number | string;
  name: string;
  heroImage: string;
  description: (string | undefined)[];
  frames: Frame[];
  headings?: Headings;
  video?: string;
  bottomImage?: string;
  image?: string;
  specs?: Spec[];
};

export default function ProductClientPage({ product }: { product: Product }) {
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
    <main className="bg-white text-neutral-900">
      <header className="flex items-center justify-between px-4 bg-transparent py-1 absolute top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Concept Logo" width={120} height={40} />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 text-white font-medium relative">
        <a href="#" className="hover:text-purple-300">Home</a>
        <a href="#" className="hover:text-purple-300">About</a>
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
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">WPC Frames</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">WPC Doors</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">Digital Doors</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">3D WPC Boards</a>
          </div>
        )}
      </div>
        <a href="#" className="hover:text-purple-300">Gallery</a>
        <a href="#" className="hover:text-purple-300">FAQs</a>
        <a href="#" className="hover:text-purple-300">Contact</a>
        <a href="#" className="hover:text-purple-300">Catalogue</a>
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
          <a href="#" className="hover:text-purple-300">Home</a>
           <a href="#" className="hover:text-purple-300">About</a>
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
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">WPC Frames</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">WPC Doors</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">Digital Doors</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">3D WPC Boards</a>
          </div>
        )}
      </div>
         <a href="#" className="hover:text-purple-300">Gallery</a>
        <a href="#" className="hover:text-purple-300">FAQs</a>
        <a href="#" className="hover:text-purple-300">Contact</a>
        <a href="#" className="hover:text-purple-300">Catalogue</a>
        </nav>
      )}
    </header>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center bg-black">
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          className="object-cover opacity-70"
        />
       {/*} <div className="absolute z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            {product.name}
          </h1>
        </div>*/}
      </section>

      {/* Presenting Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
  <h2 className="text-xl font-semibold text-gray-700 mb-4">
    {product.headings?.presenting || "PRESENTING"}
  </h2>
  <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
    HIGH DENSITY WPC SOLID {product.name.toUpperCase()}
  </h3>
  {product.description.map((para, i) => (
    <p key={i} className="text-gray-700 leading-relaxed mb-6">
      {para}
    </p>
  ))}
</section>

      {/* Technical Specs */}
{/* Technical Specifications */}
{product.specs && product.specs.length > 0 && (
  <section className="bg-gray-50 py-12 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
        {product.headings?.technical || "Technical Specifications"}
      </h2>

      <ul className="space-y-6 text-gray-800">
        {product.specs.map((spec, i) => (
          <li
            key={i}
            className="flex items-start gap-4 pb-2 last:border-none"
          >
            {/* Custom bullet */}
            <span className="w-3 h-3 bg-gray-800 rounded-full mt-2 flex-shrink-0"></span>

            {/* Text + optional image container */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
              {/* Text */}
              <p className="flex-1 text-lg leading-relaxed">{spec.text}</p>

              {/* Conditional Image */}
              {spec.image && (
                <div className="relative w-48 h-32 flex-shrink-0">
                  <Image
                    src={spec.image}
                    alt={`Specification image ${i + 1} for ${product.name}`}
                    width={spec.width || 250}
                    height={spec.height || 150}
                    className="object-contain rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)}






      {/* Frame Sizes */}
      {product.frames.length > 0 && (
  <section className="max-w-6xl mx-auto px-6 py-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
      {product.headings?.frame || "FRAME SIZES"}
    </h2>
    <div className="flex flex-wrap justify-center gap-1">
      {product.frames.map((frame, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
          style={{
            width: `${frame.width}px`,
            height: `${frame.height + 50}px`,
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              width: `${frame.width}px`,
              height: `${frame.height}px`,
            }}
          >
            <Image
              src={frame.src}
              alt={`Frame size ${frame.size}`}
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm font-semibold text-gray-800">
            {frame.size}
          </p>
        </div>
      ))}
    </div>
    </section>
      )}

      {/* Video Section */}
      {/* Media Section (Video or Image) */}
{(product.video || product.bottomImage) && (
  <section className="bg-gradient-to-b from-purple-900 to-indigo-900 py-12">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        {product.video ? (
          <video
            controls
            className="w-full h-full object-cover"
            poster={product.heroImage}
          >
            <source src={product.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={product.bottomImage || "/fallback-image.png"}
            alt={`${product.name} display`}
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  </section>
)}

    </main>
  );
}
