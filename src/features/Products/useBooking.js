import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Booking } from "../../services/apiProduct";
import toast from "react-hot-toast";
import { duration } from "@mui/material";

export function useBooking() {
  const queryClient = useQueryClient();
  const { mutate: booking, isPending: isBooking } = useMutation({
    mutationFn: Booking,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Products"],
      });
      toast.success(
        "Booking successfull. Your query has been received. Expect to hear from us shortly ",
        { duration: 4000 },
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return { booking, isBooking };
}
