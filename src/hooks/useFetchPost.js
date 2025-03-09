import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../api/apiServices";

const useFetchPost = (postId) => {
  return useQuery({
    queryKey: ["getPost", postId],
    queryFn: fetchPost(postId),
  });
};

export default useFetchPost;
