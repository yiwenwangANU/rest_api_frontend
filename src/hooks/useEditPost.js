import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPost } from "../api/apiServices";

const useEditPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
    },
    onError: (error) => {
      console.error("Error creating post:", error);
    },
  });
};
export default useEditPost;
