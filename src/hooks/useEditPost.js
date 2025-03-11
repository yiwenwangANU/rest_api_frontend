import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPost } from "../api/apiServices";
import { toast } from "react-toastify";

const useEditPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getInfinityPosts"] });
      toast.success("Post updated successfully!");
    },
    onError: (error) => {
      console.error("Error updating post:", error);
      const message =
        error.response?.data?.message || error.message || "Error updating post";
      toast.error("Error updating post: " + message);
    },
  });
};
export default useEditPost;
