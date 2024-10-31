// /components/ProductDetail.js
function ProductDetail({ product }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <div className="space-x-2 ">
        <span>{product.data?.color}</span>
        <span>{product.data?.capacity}</span>
      </div>
    </div>
  );
}

export default ProductDetail;
