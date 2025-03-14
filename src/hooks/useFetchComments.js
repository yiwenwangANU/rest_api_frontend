import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../api/apiServices";

const useFetchComments = (postId) => {
  return useQuery({
    queryKey: ["getComments"],
    queryFn: () => fetchComments(postId),
  });
};

export default useFetchComments;
