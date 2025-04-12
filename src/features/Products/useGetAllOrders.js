import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../services/apiProduct";

export function useGetAllOrders() {
  const { data: products, isPending: isLoading } = useQuery({
    queryKey: ["Products"],
    queryFn: getAllOrders,
  });

  return { products, isLoading };
}
