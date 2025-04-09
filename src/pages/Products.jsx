import AllProducts from "../features/Products/AllProducts";
import Category from "../features/Products/Category";
import LandingDisplay from "../features/Products/LandingDisplay";
import ProductNav from "../features/Products/ProductNav";
// import Product from "../features/Products/Product";

function Products() {
  return (
    <div className="w-full p-6">
      <LandingDisplay />
      <Category />
      <ProductNav />
      <AllProducts />
    </div>
  );
}
export default Products;
