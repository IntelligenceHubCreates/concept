"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is a WPC Door Frame?",
    answer:
      "WPC (Wood Polymer Composite) door frames are made from a blend of wood fibers and HDPE polymers, offering durability, water resistance, and termite protection.",
  },
  {
    question: "Are your products waterproof and termite-proof?",
    answer:
      "Yes! All our WPC door frames and doors are 100% waterproof, termite-proof, and resistant to warping or cracking — ideal for humid or coastal regions.",
  },
  {
    question: "Can WPC door frames be painted or laminated?",
    answer:
      "Absolutely. Our WPC frames can be painted, laminated, or finished with wood textures to match your interior or architectural theme.",
  },
  {
    question: "Do you provide installation support?",
    answer:
      "Yes, we offer installation guidance and can connect you with certified professionals for seamless fitting and finishing.",
  },
  {
    question: "Are WPC doors suitable for outdoor use?",
    answer:
      "Yes, our WPC doors are UV-stable and weatherproof, suitable for both indoor and outdoor applications.",
  },
  {
    question: "Can I request a custom size or design?",
    answer:
      "Of course! We support customizations in size, thickness, design, and finish for your specific project requirements.",
  },
  {
    question: "Where can I buy your products?",
    answer:
      "You can reach out via our contact page or connect with authorized distributors and dealers in your region.",
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Find quick answers to the most common questions about our WPC doors and frames.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Still Have Questions?
        </h2>
        <p className="text-lg mb-8">
          Get in touch with our specialists for personalized support and expert guidance.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Contact Our Team
        </a>
      </section>
    </main>
  );
}
