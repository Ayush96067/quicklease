import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiProduct";

export function useGetOrder(userid) {
  const { data: product, isPending: isLoading } = useQuery({
    queryKey: ["Products", userid], // Include userid here
    queryFn: (data) => getOrder(data), // Use userid directly here
  });

  return { product, isLoading };
}
