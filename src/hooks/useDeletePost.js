import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../api/apiServices";

function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
    },
    onError: (error) => {
      console.error("Error creating post:", error);
    },
  });
}

export default useDeletePost;
