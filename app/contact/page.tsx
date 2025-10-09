// app/contact/page.tsx
import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Concept",
  description:
    "Get in touch with Concept for product inquiries, support, or collaboration opportunities.",
};

export default function ContactPage() {
  return <ContactClient />;
}
