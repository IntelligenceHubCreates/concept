import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductClientPage from "./ProductClientPage";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id.toString() }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return notFound();

  // pass data to the client component
  return <ProductClientPage product={product} />;
}
