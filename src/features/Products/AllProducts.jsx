import ProductCard from "../../ui/Card";
import Spinner from "../../ui/Spinner";
import { StyledContainer } from "../../ui/StyledContainer";
import { useGetAllOrders } from "./useGetAllOrders";

function AllProducts() {
  const { products, isLoading } = useGetAllOrders();
  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <StyledContainer className="grid min-h-[40vh] grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </StyledContainer>
  );
}
export default AllProducts;
