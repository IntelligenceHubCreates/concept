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
import { motion } from "framer-motion";



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
  { id: 4, name: "WPC Windows", image: "/WPCWindows.PNG" },
  { id: 1, name: "WPC Frame", image: "/WPCFRAME.PNG" },
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
  { id:19 ,name: "INTERIOR lOUVERS", image: "/homepage-icons/WPC-RAFTERS.png" },
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


  return (
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
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
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
<motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <Swiper
        modules={[ Autoplay]}
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
              priority={index === 0}
            />
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
    className="rounded-full"
  />
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
          modules={[ Autoplay]}
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
                      className="max-w-full max-h-full rounded-full object-contain"
                    />
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
                className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
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
          <div className={`relative w-full md:w-4/5 overflow-hidden shadow-lg ${
              sec.align === "right"
                ? "rounded-l-full" // round left side only
                : "rounded-r-full" // round right side only
            }`}
            >
            <Image
              src={sec.image}
              alt={sec.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Text overlay */}
            <div
              className={`absolute bottom-8 ${
                sec.align === "right" ? "right-8 text-right" : "left-8 text-left"
              }`}
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

    </main>
  );
}
