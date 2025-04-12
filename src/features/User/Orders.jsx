import ProductRow from "../../ui/ProductRow";
import Spinner from "../../ui/Spinner";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { useGetOrder } from "./useGetOrder";

function Orders() {
  const { user } = useCurrentUser();

  const { product, isLoading } = useGetOrder({
    column: "userid",
    value: user.id,
  });

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    );

  if (product.length == 0)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <h1>You haven't order anything yet! 😅</h1>
      </div>
    );

  return (
    <div className="flex flex-col gap-10 p-1 text-2xl md:text-3xl lg:text-4xl">
      <h1 className="text-center">Your Products</h1>
      <div className="p-1">
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto bg-[#eeffcc] text-black">
            <thead className="bg-[#bbff44] text-base font-medium uppercase md:text-lg lg:text-xl">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="text-left font-semibold">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="text-left font-semibold">Company</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="text-left font-semibold">Price</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="text-center font-semibold">Category</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="text-center font-semibold">Booked</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-gray-100 text-xs md:text-lg lg:text-xl">
              {product.map((prod) => (
                <ProductRow product={prod} key={prod.name} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Orders;
