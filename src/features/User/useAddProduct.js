import { useMutation } from "@tanstack/react-query";
import { createProduct as createProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

export function useAddProduct() {
  const { mutate: createProduct, isPending } = useMutation({
    mutationFn: createProductApi,
    onSuccess: () => toast.success("Product added"),
    onError: (err) => toast.error(err.message),
  });

  return { createProduct, isPending };
}
