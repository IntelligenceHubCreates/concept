// app/page.tsx (Next.js 13+ with App Router)
// Or pages/index.tsx if using Pages Router
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
import QRMessage from "./qr/page";



export default function Home() {
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



// 🧱 Sample Data (replace with your real product array or fetch dynamically)
const productsss: Product[] = [
  { id: 4, name: "WPC Windows", image: "/WPC-WINDOW-homepage.png" },
  { id: 1, name: "WPC Frame", image: "/WPC-FRAME.png" },
  { id: 10, name: "Antique Grooving Door", image: "/WPC-ANTIQ-DOOR.png" },
  { id: 15, name: "Digital Louvers", image: "/WPC-DIGITAL-LOUVERS.png" },
  { id: 11, name: "UV Texture Door", image: "/UV-TEXTURE-DOOR.jpg" },
  { id: 6, name: "POLYGRANITE SHEETS", image: "/POLYGRANITE-SHEETS.png" },
  { id: 3, name: "WPC 3D Boards", image: "/WPC-3D-BOARD.png" },
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
  { id:19 ,name: "INTERIOR LOUVERS", image: "/homepage-icons/WPC-RAFTERS.png" },
  { id:20 ,name: "BAFFLES", image: "/homepage-icons/BAFFLES.png" }, 
];

     const testimonials = [
    {
      text: "We installed Concept HDPC boards in our kitchen. Even after months of water exposure, they look brand new. 100% waterproof and maintenance-free.",
      author: "– Anjali R., Hyderabad",
    },
    {
      text: "The WPC collection is a lifesaver. Waterproof, stylish, and long-lasting. Exactly what we needed.",
      author: "– Karan S., Mumbai",
    },
    {
      text: "Excellent durability and premium look. Concept boards made our interiors stand out effortlessly.",
      author: "– Priya M., Bangalore",
    },
  ];
  const images = [
    "/ANTIQGROOVINGDOOR.png",
    "/WPC-RAFTERS.PNG",
    "/WPC-WINDOW-HOME.PNG",
  ];
const sections = [
  {
      image: "/machinery/3.JPG",
      title: "",
      subtitle: "",
      description: "",
      align: "right",
    },
    {
      image: "/machinery/1.png",
      title: "",
      subtitle: "",
      align: "left",
    },
    {
      image: "/machinery/2.png",
      title: "",
      subtitle: "",
      align: "right",
    },
    {
      image: "/machinery/4.JPG",
      title: "",
      subtitle: "",
      align: "left",
    },
    {
      image: "/machinery/5.JPG",
      title: "",
      subtitle: "",
      align: "right",
    },
    
  ];

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
    <><QRMessage />
    <main className="bg-gray-50 text-gray-900">
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
          <Link href="/catalog" className="hover:text-purple-300 py-2">Catalogue</Link>
        </div>
      </header>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`WPC Door ${index + 1}`}
                width={600}
                height={200}
                className="w-full h-350px object-cover"
                priority={index === 0} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
      {/* Hero Banner */}
      {/*<motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <Image
        src="/ANTIQGROOVINGDOOR.png"
        alt="WPC Grooving Door"
        width={600}
        height={300}
        className="w-full"
      />
    </motion.section> */}

      {/* Promo Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-4 py-8 text-center"
      >
        <h3 className="text-2xl font-bold">
          <span className="text-[#6b658d]">Store.</span> Gift your home timeless
          beauty this season.
        </h3>

        <div className="mt-4 flex justify-center items-center gap-2 text-sm text-gray-600">
          <Image
            src="/specialist.png"
            alt="Specialist"
            width={30}
            height={30}
            className="rounded-full" />
          <span>
            Need shopping help?{" "}
            <a
              href="mailto:conceptdoorswindows@gmail.com?subject=Product%20Inquiry%20from%20Website"
              className="font-semibold text-[#6b658d] hover:underline"
            >
              Ask a Specialist
            </a>
          </span>
        </div>


        {/* Swiper Product Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <Swiper
            spaceBetween={16}
            slidesPerView={3.5}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="px-2"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  href={`/collections/${item.id}`}
                  className="group block overflow-hidden rounded-2xl bg-gray-50 hover:shadow-lg transition"
                >
                  <div className="flex flex-col items-center py-4">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={75}
                        height={75}
                        className="max-w-full max-h-full rounded-full object-contain" />
                    </div>
                    <p className="mt-2 text-sm font-semibold text-center">
                      {item.name}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.section>

      {/* Latest Section */}

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4">
        <h3 className="text-lg font-bold">
          <span className="text-[#6b658d]">The latest.</span> Discover what’s fresh and timeless
        </h3>
        <Swiper
          spaceBetween={16}
          slidesPerView={1.5}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
          }}
          className="mt-4"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {productsss.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                href={`/collections/${product.id}`}
                className="block bg-gray-100 rounded-xl overflow-hidden relative h-96 group"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Customer Voice */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-6 bg-gray-50 transition-fade"
      >
        <h3 className="text-lg font-bold text-[#6b658d]">Customer Voice</h3>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="border border-dashed p-6 mt-4 rounded-lg text-sm bg-white shadow-sm h-full flex flex-col justify-between">
                <p>{t.text}</p>
                <p className="mt-2 font-semibold">{t.author}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </motion.section>

      {/* Product Grid */}
      {/*}
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.15 }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-10"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
    
      
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.12,
              delayChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href={`/collections/${product.id}`}
              className="flex flex-col items-center text-center transition-transform duration-300"
            >
              <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-semibold">{product.name}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section> */}

      {/* Machinery Section */}
      <section className="bg-gradient-to-b from-[#6b658d] via-[#2f2852] to-[#080c18] text-white transition-fade-top">
        {sections.map((sec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row items-center justify-center py-12"
          >
            {/* Image container */}
            <div className={`relative w-full md:w-4/5 overflow-hidden shadow-lg ${sec.align === "right"
                ? "rounded-l-full" // round left side only
                : "rounded-r-full" // round right side only
              }`}
            >
              <Image
                src={sec.image}
                alt={sec.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover" />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Text overlay */}
              <div
                className={`absolute bottom-8 ${sec.align === "right" ? "right-8 text-right" : "left-8 text-left"}`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                  {sec.title}{" "}
                  <span className="text-yellow-400 font-bold">{sec.subtitle}</span>
                </h2>
                {sec.description && (
                  <p className="text-sm text-gray-200 mt-2">{sec.description}</p>
                )}
              </div>
            </div>

            {/* Decorative connectors between sections */}
            {index < sections.length - 1 && (
              <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-blue-400 to-transparent mx-auto"></div>
            )}
          </motion.div>
        ))}
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
              <li><span className="font-semibold">Address:</span> Gujrat, India</li>
            </ul>
          </div>
      
        </div>
      
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Concept Doors & Windows. All rights reserved. <br className="sm:hidden" />
          <span className="text-gray-400"> Developed by <span className="text-[#080c18] font-semibold">Intelligence Hub</span></span>
        </div>
      </footer>

    </main></>
  );
}
