import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Concept",
  description:
    "Learn about Concept — our mission, innovation, and commitment to quality materials for modern architecture and design.",
};

export default function AboutPage() {
  return <AboutClient />;
}
