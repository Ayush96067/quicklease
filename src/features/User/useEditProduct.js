import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct as editProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

export function useEditProduct() {
  const queryClient = useQueryClient();

  const { mutate: editProduct, isPending: isEditing } = useMutation({
    mutationFn: ({ newProduct, id }) => editProductApi(newProduct, id),
    onSuccess: () => {
      toast.success("Product successfully edited");
      queryClient.invalidateQueries({ queryKey: ["Products"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editProduct };
}
