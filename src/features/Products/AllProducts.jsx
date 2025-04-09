import ProductCard from "../../ui/Card";
import { StyledContainer } from "../../ui/StyledContainer";

function AllProducts() {
  return (
    <StyledContainer className="grid min-h-[40vh] grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </StyledContainer>
  );
}
export default AllProducts;
