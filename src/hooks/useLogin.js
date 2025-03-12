import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/apiServices";
import { toast } from "react-toastify";

const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("User login successfully!");
    },
    onError: (error) => {
      console.error("Error logining in:", error);
      const message =
        error.response?.data?.message || error.message || "Error logining in";
      toast.error("Error logining in: " + message);
    },
  });
};
export default useLogin;
