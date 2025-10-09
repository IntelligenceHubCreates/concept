import Image from "next/image";

export const metadata = {
  title: "About Us | Concept",
  description:
    "Learn more about Concept — our vision, values, and commitment to delivering innovative and sustainable door solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Option-2.jpg"
            alt="About Concept"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Redefining durability and design with eco-friendly door and frame solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
          At <strong>Concept</strong>, we are driven by innovation and craftsmanship.
          We specialize in designing high-density polymer composite doors and frames
          that combine elegance with strength. Our mission is to provide
          <span className="font-semibold"> sustainable, termite-proof, and waterproof </span>
          solutions for modern construction needs — ensuring style, durability,
          and long-term value for every space.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To revolutionize architectural design through sustainable materials
              that protect the environment while enhancing aesthetics and performance.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              We aim to deliver innovative, long-lasting, and eco-conscious door
              systems that redefine standards in quality and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Innovation", desc: "Constantly evolving with modern materials and design." },
              { title: "Sustainability", desc: "Committed to eco-friendly production and processes." },
              { title: "Quality", desc: "Ensuring superior durability and finish in every product." },
              { title: "Customer Focus", desc: "Delivering personalized solutions and long-term value." },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-xl mb-2 text-gray-900">
                  {value.title}
                </h4>
                <p className="text-gray-700 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let`&apos;`s Build Something Beautiful Together
        </h2>
        <p className="text-lg mb-8">
          Get in touch with our specialists to discuss your next project.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
