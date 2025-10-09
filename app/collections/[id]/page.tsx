import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductClientPage from "./ProductClientPage";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id.toString() }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ Await params here

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return notFound();

  // ✅ Pass product data to the client component
  return <ProductClientPage product={product} />;
}
