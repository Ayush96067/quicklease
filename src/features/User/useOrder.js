import { useQuery } from "@tanstack/react-query";
import { getOrderHistory } from "../../services/apiProduct";

export function useOrder(userid) {
  const { data: orders, isPending: isFetching } = useQuery({
    queryFn: (data) => getOrderHistory(data),
    queryKey: ["Booking", userid],
  });

  return { orders, isFetching };
}
