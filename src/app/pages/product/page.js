import ProductList from "../../../components/ProductList";
import axios from "axios";

async function fetchProducts() {
  try {
    const response = await axios.get("https://api.restful-api.dev/objects");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi fetch sản phẩm:", error);
    return [];
  }
}

export default async function ProductListPage() {
  const products = await fetchProducts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <ProductList products={products} />
    </main>
  );
}
