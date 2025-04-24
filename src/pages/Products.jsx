import AllProducts from "../features/Products/AllProducts";
import Category from "../features/Products/Category";
import LandingDisplay from "../features/Products/LandingDisplay";

function Products() {
  return (
    <div className="w-full p-6">
      <LandingDisplay />
      <Category />
      <AllProducts />
    </div>
  );
}
export default Products;
