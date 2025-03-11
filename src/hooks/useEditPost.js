import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPost } from "../api/apiServices";
import { toast } from "react-toastify";

const useEditPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
      toast.success("Post created successfully!");
    },
    onError: (error) => {
      console.error("Error creating post:", error);
      toast.error("Error updating post: " + error.message);
    },
  });
};
export default useEditPost;
