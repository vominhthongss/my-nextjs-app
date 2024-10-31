import ProductDetail from "../../../../components/ProductDetail";
import axios from "axios";

async function fetchProductById(id) {
  try {
    const response = await axios.get(
      `https://api.restful-api.dev/objects?id=${id}`
    );
    return response.data[0];
  } catch (error) {
    console.error("Lỗi khi fetch sản phẩm:", error);
    return [];
  }
}

export default async function ProductDetailPage({ params }) {
  const product = await fetchProductById(params.id);
  if (!product) {
    return <p>Không tìm thấy sản phẩm</p>;
  }
  return <ProductDetail product={product} />;
}
