import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../api/apiServices";
import { toast } from "react-toastify";

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
      toast.success("Post created successfully!");
    },
    onError: (error) => {
      console.error("Error creating post:", error);
      toast.error("Error creating post: " + error.message);
    },
  });
};
export default useCreatePost;
