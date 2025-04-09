import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending: isSigningup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        `Account created successfully. Please verify your email on ${user.user.email}`,
        { duration: 4000 },
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signup, isSigningup };
}
