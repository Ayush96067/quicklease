import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { editProductColumn as editProductColumnApi } from "../../services/apiProduct";

export function useEditProductColumn() {
  const queryClient = useQueryClient();
  const { mutate: editProductColumn, isPending: isEditing } = useMutation({
    mutationFn: (data) => editProductColumnApi(data),
    onSuccess: () => {
      toast.success("Product updated");
      queryClient.invalidateQueries({ queryKey: ["Products"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editProductColumn };
}
