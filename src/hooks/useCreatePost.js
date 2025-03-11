import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../api/apiServices";
import { toast } from "react-toastify";

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getInfinityPosts"] });
      toast.success("Post created successfully!");
    },
    onError: (error) => {
      console.error("Error creating post:", error);
      const message =
        error.response?.data?.message || error.message || "Error creating post";
      toast.error("Error creating post: " + message);
    },
  });
};
export default useCreatePost;
