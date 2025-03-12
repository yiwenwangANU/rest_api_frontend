import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../api/apiServices";
import { toast } from "react-toastify";

const useSignup = () => {
  //   const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      // Invalidate and refetch
      //   queryClient.invalidateQueries({ queryKey: ["getInfinityPosts"] });
      toast.success("User created successfully!");
    },
    onError: (error) => {
      console.error("Error signing up:", error);
      const message =
        error.response?.data?.message || error.message || "Error signing up";
      toast.error("Error signing up: " + message);
    },
  });
};
export default useSignup;
