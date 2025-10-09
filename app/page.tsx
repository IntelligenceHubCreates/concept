// app/page.tsx (Next.js 13+ with App Router)
// Or pages/index.tsx if using Pages Router
"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";


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

  const productss = [
  {
    id: "1",
    name: "WPC FRAMES",
    image: "/WPCFrame.png",
  },
  {
    id: "2",
    name: "HDPC SHEETS",
    image: "/HDPCBOARD.png",
  },
  {
    id: "3",
    name: "3D WPC BOARD",
    image: "/3dWPCBOARD.png",
  },
  {
    id: "4",
    name: "WPC WINDOWS",
    image: "/BAF.png",
  },
  {
    id: "5",
    name: "WPC DOOR",
    image: "/WPCDOOR_transparent.png",
  },
  {
    id: "6",
    name: "POLYGRANET SHEET",
    image: "/polygranet-SHEET.png",
  },
  {
    id: "7",
    name: "GROOVE DOOR",
    image: "/Groove-door.png",
  },
  {
    id: "8",
    name: "EXTERIOR LOUVERS",
    image: "/Exterior-louvers.png",
  },
  {
    id: "9",
    name: "EXTERIOR PILLERS",
    image: "/Pillar.png",
  },
  {
    id: "10",
    name: "ANTIQUE GROOVING DOOR",
    image: "/AGD.jpg",
  },
  {
    id: "11",
    name: "TEXTURED DOOR",
    image: "/GREEKKEY.jpg",
  },
];
    

type Product = {
  name: string;
  image: string;
  id: number
};

const products: Product[] = [
  { id:1 ,name: "WPC FRAMES", image: "/WPCFrame.png" },
  { id:4 ,name: "WPC WINDOWS", image: "/BAF.png" },
  { id:5 ,name: "WPC DOOR", image: "/WPCDOOR.png" },
  { id:16 ,name: "HDPC DOOR", image: "/HDPCDOOR.PNG" },
  { id:12 ,name: "35MM HDPC", image: "/35MMHDPC.png" },
  { id:14 ,name: "DIGITAL DOOR", image: "/Wpc-digital-door.png" },
  { id:7 ,name: "GROOVE DOOR", image: "/Groove-door.png" },
  { id:10 ,name: "ANTIQUE GROOVE DOOR", image: "/AGD.jpg" },
  { id:11 ,name: "TEXTURED DOOR", image: "/GREEKKEY.jpg" },
  { id:13 ,name: "WPC DIGITAL SHUTTRE", image: "/DIGITAL-SHUTTERS.png" },
  { id:6 ,name: "POLYGRANITE SHEETS", image: "/polygranet-SHEET.png" },
  { id:3 ,name: "3D WPC BOARD", image: "/3dWPCBOARD.png" },
  { id:8 ,name: "EXTERIOR LOUVERS", image: "/Exterior-louvers.png" },
  { id:9 ,name: "EXTERIOR PILLERS", image: "/Pillar.png" },
  { id:15 ,name: "WPC DIGITAL LOUVERS", image: "/Digital-louvers.png" },
  { id:2 ,name: "HDPC SHEETS", image: "/HDPCBOARD.png" },
  { id:17 ,name: "WPC SHEETS", image: "/WPCDIGITALLOUVERS.png" },
  { id:18 ,name: "CELING PANEL", image: "/R8.PNG" },
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
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
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
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">WPC Frames</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">WPC Doors</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">Digital Doors</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">3D WPC Boards</a>
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
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">WPC Frames</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">WPC Doors</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">Digital Doors</a>
            <a href="#" className="block px-4 py-2 hover:bg-purple-100">3D WPC Boards</a>
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

      {/* Hero Banner */}
      <section className="relative">
        <Image
          src="/ANTIQGROOVINGDOOR.png"
          alt="WPC Grooving Door"
          width={600}
          height={300}
          className="w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <h2 className="text-2xl font-bold"></h2>
          <p className="text-sm"></p>
        </div>
      </section>

      {/* Promo Section */}
      <section className="px-4 py-8 text-center">
      <h3 className="text-2xl font-bold">
        <span className="text-purple-600">Store.</span> Gift your home timeless
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
          Need shopping help? <b>Ask a Specialist</b>
        </span>
      </div>

      {/* Swiper Product Slider */}
      <div className="mt-4">
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
          className="px-4"
        >
          {productss.map((item) => (
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
                      width={60}
                      height={60}
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
      </div>
    </section>

      {/* Latest Section */}
      <section className="px-4">
      <h3 className="text-lg font-bold">
        <span className="text-purple-700">The latest.</span> Discover what’s fresh and timeless
      </h3>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        className="mt-4"
        breakpoints={{
          640: { slidesPerView: 2 }, // 2 cards on tablet+
          1024: { slidesPerView: 3 }, // 3 cards on desktop
        }}
      >
        <SwiperSlide>
          <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center h-95">
            <Image
              src="/WPCWindows.PNG"
              alt="Window with Octopus"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center h-95">
            <Image
              src="/WPCFRAME.jpg"
              alt="WPC Splash"
               fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center h-95">
            <Image
              src="/WPCFRAME.jpg"
              alt="WPC Splash"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify- h-95">
            <Image
              src="/WPCFRAME.jpg"
              alt="WPC Splash"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center h-95">
            <Image
              src="/WPCFRAME.jpg"
              alt="WPC Splash"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center h-95">
            <Image
              src="/WPCFRAME.jpg"
              alt="WPC Splash"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

        {/* ➕ You can add more SwiperSlide items here */}
      </Swiper>
    </section>

      {/* Customer Voice */}
      <section className="px-4 py-6 bg-gray-50">
      <h3 className="text-lg font-bold text-purple-700">Customer Voice</h3>
      <div className="mt-6">
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
              <div className="border border-dashed p-6 rounded-lg text-sm bg-white shadow-sm h-full flex flex-col justify-between">
                <p>{t.text}</p>
                <p className="mt-2 font-semibold">{t.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link
            key={index}
            href={`/collections/${product.id}`}
            className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
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
        ))}
      </div>
    </section>
    </main>
  );
}
