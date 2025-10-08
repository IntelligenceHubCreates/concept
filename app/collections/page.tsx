"use client";

import Image from "next/image";
import Link from "next/link";

export default function CollectionPage() {
  const products = [
    { id: 1, name: "WPC FRAMES", img: "/WPCFRAME.jpg", desc: "Classic panel design" },
    { id: 2, name: "WPC WINDOWS", img: "/WPCWindows.png", desc: "Minimalist aesthetic" },
    { id: 3, name: "WPC DOOR", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 4, name: "HDPC DOOR", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 5, name: "35MM HDPC", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 6, name: "DIGITAL DOOR", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 7, name: "GROOVE DOOR", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 8, name: "ANTIQUE GROOV DOOR", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 9, name: "TEXTURED DOOR", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 10, name: "WPC DIGITAL DOOR", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 11, name: "POLYGRANITE SHEETS", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 12, name: "3D WPC BOARD", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 13, name: "EXTERIOR LOVABLE", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 14, name: "EXTERIOR PILLERS", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 15, name: "WPC DIGITAL LOUVERS", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 16, name: "HDPC SHEETS", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 17, name: "WPC SHEETS", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    { id: 18, name: "CEILING PANEL", img: "/images/chair1.jpg", desc: "Sleek and sturdy" },
    // add more products…
  ];

  const stories = [
    {
      id: 1,
      img: "/images/story1.jpg",
      title: "Quebec Restaurant Redesign",
      subtitle: "Warm walnut doors elevate the dining experience."
    },
    {
      id: 2,
      img: "/images/story2.jpg",
      title: "Cozy Mountain Cabin",
      subtitle: "Hand-crafted oak brings rustic charm."
    },
    {
      id: 3,
      img: "/images/story3.jpg",
      title: "Modern Tokyo Apartment",
      subtitle: "Minimalistic ashwood for a sleek look."
    },
    {
      id: 4,
      img: "/images/story4.jpg",
      title: "Boutique Hotel Entrance",
      subtitle: "Bespoke double doors make a statement."
    }
  ];

  return (
    <main className="bg-[#f5f4f0] text-neutral-900">
      {/* Hero */}
      <section className="relative flex flex-col items-center py-24">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">Our Collection</h1>
        <p className="mt-4 max-w-2xl text-center text-lg text-neutral-600">
          Bespoke doors and furniture crafted from premium wood and natural materials.
        </p>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-32 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(item => (
          <Link
            key={item.id}
            href={`/collections/${item.id}`}
            className="group block overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg transition"
          >
            <div className="relative h-96 w-full">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="mt-1 text-sm text-neutral-500">{item.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* 🌟 Featured Story Strip */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Featured Stories
          </h2>

          {/* Horizontal Scroll */}
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {stories.map(story => (
              <div
                key={story.id}
                className="snap-start flex-shrink-0 w-72 md:w-80 lg:w-96 rounded-2xl bg-neutral-100 shadow hover:shadow-lg transition"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={story.img}
                    alt={story.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{story.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{story.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-neutral-900 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need something truly unique?
        </h2>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-neutral-200"
        >
          Request a Bespoke Design
        </Link>
      </section>
    </main>
  );
}
