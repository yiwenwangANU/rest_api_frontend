import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../api/apiServices";
import { toast } from "react-toastify";

const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getComments"] });
      toast.success("Comment created successfully!");
    },
    onError: (error) => {
      console.error("Error creating comment:", error);
      const message =
        error.response?.data?.message ||
        error.message ||
        "Error creating comment";
      toast.error("Error creating comment: " + message);
    },
  });
};
export default useCreateComment;
