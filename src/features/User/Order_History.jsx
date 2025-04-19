import Menus from "../../ui/Menus";
import PageSpinner from "../../ui/PageSpinner";
import { useGetOrder } from "./useGetOrder";
import { useOrder } from "./useOrder";
import OrderRow from "./OrderRow";

function Order_History({ userId }) {
  const { orders } = useOrder({ column: "buyerID", value: userId });

  let product_id = "";
  if (orders) product_id = orders[0].product_id;

  const { product, isLoading } = useGetOrder({
    column: "id",
    value: product_id,
  });

  if (isLoading) return <PageSpinner />;

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
          <Menus>
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
                  <OrderRow product={prod} key={prod.name} />
                ))}
              </tbody>
            </table>
          </Menus>
        </div>
      </div>
    </div>
  );
}

export default Order_History;
