import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiProduct";

export function useGetOrders(userid) {
  const { data: product, isPending: isLoading } = useQuery({
    queryKey: ["Products", userid], // Include userid here
    queryFn: () => getOrders(userid), // Use userid directly here
  });

  return { product, isLoading };
}
