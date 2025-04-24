import { useParams } from "react-router-dom";
import { useGetOrder } from "../User/useGetOrder";
import { StyledContainer } from "../../ui/StyledContainer";
import PageSpinner from "../../ui/PageSpinner";
import ProductCard from "../../ui/Card";

function ProductsPage() {
  const { category } = useParams();
  // const { product, isLoading } = useGetOrder({ column: "id", value: id });
  const { product, isLoading } = useGetOrder({
    column: "category",
    value: category,
  });

  if (isLoading) return <PageSpinner />;

  if (product.length == 0)
    return (
      <div className="flex min-h-[100vh] items-center justify-center p-3 text-xl md:text-6xl lg:text-6xl">
        <h1 className="p-4 text-center shadow-sm shadow-white lg:p-10">
          Sorry 😥, currently no product availble in this category
        </h1>
      </div>
    );

  return (
    <div className="grid min-h-[100vh] grid-rows-[15%_auto] gap-10">
      <div className="flex flex-col gap-4 self-end border-b border-b-white p-3 lg:p-6">
        <h1 className="text-4xl lg:text-8xl">
          Category - <span className="capitalize">{category}</span>{" "}
        </h1>
      </div>
      <StyledContainer className="grid min-h-[40vh] grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-4">
        {product.map((prod) => (
          <ProductCard product={prod} key={prod.id} />
        ))}
      </StyledContainer>
    </div>
  );
}
export default ProductsPage;
