// app/page.tsx (Next.js 13+ App Router)
// If using Pages Router, put inside pages/index.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      {/* Gifts Banner */}
      <section className="bg-white text-center py-10 relative">
        <div className="flex justify-center">
          <Image src="/apple-festival.png" alt="Apple Festival" width={80} height={80} />
        </div>
        <h1 className="text-3xl font-bold mt-4">Gifts full of joy.</h1>
        <p className="mt-2 text-gray-600">
          Enjoy up to ₹10000 instant cashback on your favourite products with eligible cards.
          Plus up to 12 months of No Cost EMI.*
        </p>
        <Link
          href="#shop"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm"
        >
          Shop
        </Link>
      </section>

      {/* iPhone 17 Pro */}
      <section className="bg-black text-white text-center py-16">
        <h2 className="text-4xl font-semibold">iPhone 17 Pro</h2>
        <p className="mt-2">All out Pro.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="#" className="text-blue-400">Learn more</Link>
          <Link href="#" className="text-blue-400">Buy</Link>
        </div>
        <div className="mt-10 flex justify-center">
          <Image src="/iphone17pro.png" alt="iPhone 17 Pro" width={500} height={300} />
        </div>
      </section>

      {/* iPhone Air */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-semibold">iPhone Air</h2>
        <p className="mt-2">The thinnest iPhone ever. With the power of pro inside.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="#" className="text-blue-600">Learn more</Link>
          <Link href="#" className="text-blue-600">Buy</Link>
        </div>
        <div className="mt-10 flex justify-center">
          <Image src="/iphone-air.png" alt="iPhone Air" width={500} height={150} />
        </div>
      </section>

      {/* Grid of Products */}
      <section className="grid md:grid-cols-2 gap-6 p-6">
        {/* iPhone 17 */}
        <div className="bg-gray-50 p-6 text-center rounded-xl">
          <h3 className="text-2xl font-semibold">iPhone 17</h3>
          <p className="text-gray-600">Megalithomatic.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="#" className="text-blue-600">Learn more</Link>
            <Link href="#" className="text-blue-600">Buy</Link>
          </div>
          <Image src="/iphone17.png" alt="iPhone 17" width={200} height={400} className="mx-auto mt-6" />
        </div>

        {/* AirPods Pro 3 */}
        <div className="bg-gray-50 p-6 text-center rounded-xl">
          <h3 className="text-2xl font-semibold">AirPods Pro 3</h3>
          <p className="text-gray-600">The worlds best in-ear Active Noise Cancellation.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="#" className="text-blue-600">Learn more</Link>
            <Link href="#" className="text-blue-600">Buy</Link>
          </div>
          <Image src="/airpodspro3.png" alt="AirPods Pro 3" width={250} height={250} className="mx-auto mt-6" />
        </div>

        {/* Watch Series 11 */}
        <div className="bg-gray-50 p-6 text-center rounded-xl">
          <h3 className="text-2xl font-semibold">Watch Series 11</h3>
          <p className="text-gray-600">The ultimate fitness & health ally.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="#" className="text-blue-600">Learn more</Link>
            <Link href="#" className="text-blue-600">Buy</Link>
          </div>
          <Image src="/watch11.png" alt="Watch Series 11" width={250} height={250} className="mx-auto mt-6" />
        </div>

        {/* Watch SE 3 */}
        <div className="bg-gray-50 p-6 text-center rounded-xl">
          <h3 className="text-2xl font-semibold">Watch SE 3</h3>
          <p className="text-gray-600">Walk it. Talk it. Track it. Love it.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="#" className="text-blue-600">Learn more</Link>
            <Link href="#" className="text-blue-600">Buy</Link>
          </div>
          <Image src="/watchse3.png" alt="Watch SE 3" width={250} height={250} className="mx-auto mt-6" />
        </div>
      </section>

      {/* Watch Ultra 3 & Trade In */}
      <section className="grid md:grid-cols-2 gap-6 p-6">
        <div className="bg-black text-white p-6 text-center rounded-xl">
          <h3 className="text-2xl font-semibold">Watch Ultra 3</h3>
          <p className="text-gray-300">Personal beast.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="#" className="text-blue-400">Learn more</Link>
            <Link href="#" className="text-blue-400">Buy</Link>
          </div>
          <Image src="/watchultra3.png" alt="Watch Ultra 3" width={250} height={250} className="mx-auto mt-6" />
        </div>

        <div className="bg-gray-50 p-6 text-center rounded-xl">
          <h3 className="text-2xl font-semibold">Trade In</h3>
          <p className="text-gray-600">Upgrade and save. It’s that easy.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="#" className="text-blue-600">Get your estimate</Link>
          </div>
          <Image src="/tradein.png" alt="Trade In" width={300} height={200} className="mx-auto mt-6" />
        </div>
      </section>

      {/* TV+ Banner */}
      <section className="bg-gray-100 py-10 text-center">
        <div className="flex justify-center">
          <Image src="/tvplus-banner.png" alt="Apple TV+" width={600} height={300} />
        </div>
        <p className="mt-4 text-gray-600">Comedy · Winner of 13 Emmy® Awards</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-sm text-gray-500 py-8 px-6">
        <p>*Includes instant cashback and No Cost EMI.</p>
        <p className="mt-4">
          Copyright © 2025 Apple Inc. All rights reserved.
        </p>
      </footer>
    </main>
  );
}