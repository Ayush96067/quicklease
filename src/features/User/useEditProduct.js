import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editProduct as editProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

export function useEditProduct() {
  const queryClient = useQueryClient();
  const { mutate: editProduct, isPending: isEditing } = useMutation({
    mutationFn: (data) => editProductApi(data),
    onSuccess: () => {
      toast.success("Product updated");
      queryClient.invalidateQueries({ queryKey: ["Products"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editProduct };
}
