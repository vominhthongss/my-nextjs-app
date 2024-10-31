// /components/ProductCard.js
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link href={`product/${product.id}`}>
      <div className="border p-4 rounded hover:shadow-lg cursor-pointer">
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </div>
    </Link>
  );
}

export default ProductCard;
