import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../api/apiServices";

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
    },
    onError: (error) => {
      console.error("Error creating post:", error);
    },
  });
};
export default useCreatePost;
