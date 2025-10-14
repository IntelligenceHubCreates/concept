"use client";


import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

type Frame = { src: string; size?: string; width: number; height: number;  };

type Headings = {
  presenting?: string;
  technical?: string;
  technical2?: string;
  technical3?: string;
  frame?: string;
  available?: string;
};

type Spec = {
  text: string;
  image?: string; // optional image for some specs
  width?: number; 
  height?: number;
};

type Spec1 = {
  text: string;
  image?: string; // optional image for some specs
  width?: number; 
  height?: number;
};

type Spec2 = {
  text: string;
  image?: string; // optional image for some specs
  width?: number; 
  height?: number;
};

type Spec3 = {
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
  specs1?: Spec1[];
  specs2?: Spec2[];
  specs3?: Spec3[];
  pdf?: string;
  pdf2?: string;
  pdf3?: string;
  pdf4?: string;
  pdfImage2?: string;
  pdfImage?: string;
  gallery?: {
    id: string;
    image: string;
    pdf: string;
  }[];
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1], // ✅ Bezier curve (works on all versions)
    },
  },
}


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
    <main className="bg-gray-50 text-neutral-900">
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
    <a href="#" className="block px-4 py-2 hover:bg-purple-100">Ceiling Systems</a>
    <a href="#" className="block px-4 py-2 hover:bg-purple-100">Exterior Louvers</a>
    <a href="#" className="block px-4 py-2 hover:bg-purple-100">Fluted Panels</a>
    <a href="#" className="block px-4 py-2 hover:bg-purple-100">HDPC Doors & Frames</a>
    <a href="#" className="block px-4 py-2 hover:bg-purple-100">New Arrivals</a>
    <a href="#" className="block px-4 py-2 hover:bg-purple-100">Wall Panels</a>
    <a href="#" className="block px-4 py-2 hover:bg-purple-100">WPC Door & Frames</a>
  </div>
</div>

        <a href="#" className="hover:text-purple-300 py-2">Gallery</a>
        <Link href="/faqs" className="hover:text-purple-300 py-2">FAQs</Link>
        <Link href="/contact" className="hover:text-purple-300 py-2">Contact</Link>
        <Link href="#" className="hover:text-purple-300 py-2">Catalogue</Link>
      </div>
    </header>
      {/* Hero Section */}
       <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn} 
        className="relative w-full h-[500px] flex items-center justify-center mt-6 bg-gray-50">
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          className="max-w-full max-h-full object-contain"
        />
       {/*} <div className="absolute z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            {product.name}
          </h1>
        </div>*/}
      </motion.section>

      {/* Presenting Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp} className="max-w-6xl mx-auto px-6 mt-6">
  <h2 className="text-xl font-semibold text-gray-700 mb-2 text-center">
    {product.headings?.presenting || "PRESENTING"}
  </h2>
  <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-2 text-center">
     {product.name.toUpperCase()}
  </h3>
  {product.description.map((para, i) => (
    <p key={i} className="text-gray-700 leading-relaxed mb-6">
      {para}
    </p>
  ))}
</motion.section>

      {/* Technical Specs */}
{/* Technical Specifications */}
{product.specs && product.specs.length > 0 && (
  <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp} className="bg-gray-50 py-2 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
        {product.headings?.technical || "Technical Specifications:"}
      </h2>

      <ul className=" text-gray-800">
        {product.specs.map((spec, i) => (
          <li
            key={i}
            className="flex items-start gap-4 pb-1 last:border-none"
          >
            {/* Custom bullet */}
            <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></span>

            {/* Text + optional image container */}
            <div className="flex flex-col md:flex-row md:items-center gap-1 w-full">
              {/* Text */}
              <p className="flex-1 text-lg leading-relaxed">{spec.text}</p>

              {/* Conditional Image */}
              {spec.image && (
                <div className="relative flex-shrink-0">
                  <Image
                    src={spec.image}
                    alt={`Specification image ${i + 1} for ${product.name}`}
                    width={spec.width || 250}
                    height={spec.height || 150}
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </motion.section>
)}





{/* Available Specifications */}
{product.specs1 && product.specs1.length > 0 && (
   <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp} 
          className="bg-gray-50 py-6 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
        {product.headings?.available || "Technical Specifications"}
      </h2>

      <ul className=" text-gray-800">
        {product.specs1.map((spec, i) => (
          <li
            key={i}
            className="flex items-start gap-4 pb-1 last:border-none"
          >
            {/* Custom bullet */}
            <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></span>

            {/* Text + optional image container */}
            <div className="flex flex-col md:flex-row md:items-center w-full">
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
  </motion.section>
)}

<div className="flex flex-row w-full justify-center items-start overflow-hidden">
  {product.specs2 && product.specs2.length > 0 && (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="bg-gray-50 py-2 px-4 ml-6 w-full sm:w-[48%] md:w-[48%] mb-4 rounded-lg"
    >
      <div className="max-w-full mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-purple-900 ">
          {product.headings?.technical2}
        </h2>

        <ul className="text-gray-800">
          {product.specs2.map((spec, i) => (
            <li key={i} className="flex items-start gap-4 pb-1 last:border-none">
              {/*<span className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></span>*/}
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <p className="flex-1 text-base leading-snug">{spec.text}</p>
                {spec.image && (
                  <div className="relative flex-shrink-0">
                    <Image
                      src={spec.image}
                      alt={`Specification image ${i + 1} for ${product.name}`}
                      width={spec.width || 200}
                      height={spec.height || 120}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )}

  {product.specs3 && product.specs3.length > 0 && (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="bg-gray-50 py-2 px-4 w-full sm:w-[48%] md:w-[48%] mb-4 rounded-lg"
    >
      <div className="max-w-full mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-purple-900 mb-4">
          {product.headings?.technical3}
        </h2>

        <ul className="text-gray-800">
          {product.specs3.map((spec, i) => (
            <li key={i} className="flex items-start gap-4 pb-1 last:border-none">
              <span className="w-1 h-1 bg-gray-800 rounded-full mt-2 flex-shrink-0"></span>
              <div className="flex flex-col md:flex-row md:items-center w-full">
                <p className="flex-1 text-xs leading-snug">{spec.text}</p>
                {spec.image && (
                  <div className="relative flex-shrink-0">
                    <Image
                      src={spec.image}
                      alt={`Specification image ${i + 1} for ${product.name}`}
                      width={spec.width || 200}
                      height={spec.height || 120}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )}
</div>


      {/* Frame Sizes */}
      {product.frames.length > 0 && (
  <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp} className="max-w-6xl mx-auto px-4 py-2">
    <h2 className="text-2xl md:text-3xl font-bold text-purple-900 ">
      {product.headings?.frame}
    </h2>
    <div className="flex flex-wrap justify-center">
      {product.frames.map((frame, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
          style={{
            width: `${frame.width}px`,
            height: `${frame.height }px`,
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
              className="object-contain mt-2"
            />
          </div>
          <p className="mt-3 text-sm font-semibold text-gray-800">
            {frame.size}
          </p>
        </div>
      ))}
    </div>
    </motion.section>
      )}

      {/* PDF Download Section */}
      <div className="flex flex-row">
{product.pdf && (
  <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }} className="px-4 py-8">
    <a
      href={product.pdf}
      download
      className="inline-flex flex-col items-center gap-1 group"
    >
      {/* PDF Icon */}
      <div className="relative w-16 h-20 border-2 border-red-500 rounded-md flex flex-col items-center justify-center">
        {/* Folded corner effect */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 clip-path-triangle"></div>

        {/* PDF Label */}
        <span className="absolute top-2 left-2 text-[10px] font-bold text-red-500 bg-white px-1 rounded">
          PDF
        </span>

        {/* Download Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500 group-hover:text-red-600 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 16l4-5h-3V4h-2v7H8l4 5z" />
          <path d="M20 18H4v2h16v-2z" />
        </svg>
      </div>

      <span className="mt-2 text-red-600 font-semibold text-sm">
        Download PDF
      </span>
    </a>

    {/* Custom folded-corner style */}
    <style jsx>{`
      .clip-path-triangle {
        clip-path: polygon(100% 0, 0 0, 100% 100%);
      }
    `}</style>
  </motion.section>
)}
{product.pdf2 && (
  <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }} className="py-8">
    <a
      href={product.pdf2}
      download
      className="inline-flex flex-col items-center gap-1 group"
    >
      {/* PDF Icon */}
      <div className="relative w-16 h-20 border-2 border-red-500 rounded-md flex flex-col items-center justify-center">
        {/* Folded corner effect */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 clip-path-triangle"></div>

        {/* PDF Label */}
        <span className="absolute top-2 left-2 text-[10px] font-bold text-red-500 bg-white px-1 rounded">
          PDF
        </span>

        {/* Download Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500 group-hover:text-red-600 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 16l4-5h-3V4h-2v7H8l4 5z" />
          <path d="M20 18H4v2h16v-2z" />
        </svg>
      </div>

      <span className="mt-2 text-red-600 font-semibold text-sm">
        Download PDF
      </span>
    </a>

    {/* Custom folded-corner style */}
    <style jsx>{`
      .clip-path-triangle {
        clip-path: polygon(100% 0, 0 0, 100% 100%);
      }
    `}</style>
  </motion.section>
)}
</div>

{/* 🔹 Product Gallery Section */}
{product.gallery && product.gallery.length > 0 && (
  <div className="w-full py-10 px-4 flex flex-col items-center">
    {/* Row 1 */}
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      {product.gallery.slice(0, 3).map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <a
            href={item.pdf}
            download
            className={`group relative w-40 h-40 md:w-48 md:h-48 overflow-hidden  hover:scale-105 transition-transform
              ${index % 2 === 0 ? "rounded-l-[30px]" : "rounded-r-[30px]"}`}
          >
            <Image
              src={item.image}
              alt={item.id}
              fill
              className="object-cover bg-gray-50"
            />
          </a>
          <p className="mt-2 text-gray-700 font-semibold font-serif italic text-lg">
            {item.id.toUpperCase()}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Row 2 (slightly staggered / offset look) */}
    <div className="flex flex-wrap justify-center gap-6 md:mt-[-20px]">
      {product.gallery.slice(3, 6).map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <a
            href={item.pdf}
            download
            className={`group relative w-40 h-40 md:w-48 md:h-48 overflow-hidden hover:scale-105 transition-transform
              ${index % 2 === 0 ? "rounded-r-[30px]" : "rounded-l-[30px]"}`}
          >
            <Image
              src={item.image}
              alt={item.id}
              fill
              className="object-cover bg-gray-50"
            />
          </a>
          <p className="mt-2 text-gray-700 font-semibold font-serif italic text-lg">
            {item.id.toUpperCase()}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
)}




      {/* Video Section */}
      {/* Media Section (Video or Image) */}
{(product.video || product.bottomImage) && (
  <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }} className="bg-gradient-to-b from-purple-900 to-indigo-900 py-6">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
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
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>
    </div>
  </motion.section>

  
)}





    </main>
  );
}
