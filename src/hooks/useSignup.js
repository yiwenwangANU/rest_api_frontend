import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/apiServices";
import { toast } from "react-toastify";

const useSignup = () => {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
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
