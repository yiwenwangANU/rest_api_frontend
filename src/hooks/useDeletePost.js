import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../api/apiServices";
import { toast } from "react-toastify";

function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
      toast.success("Post deleted successfully!");
    },
    onError: (error) => {
      console.error("Error creating post:", error);
      toast.error("Error deleting post: " + error.message);
    },
  });
}

export default useDeletePost;
