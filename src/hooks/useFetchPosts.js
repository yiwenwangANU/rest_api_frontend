import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/apiServices";

const useFetchPosts = () => {
  return useQuery({
    queryKey: ["getPosts"],
    queryFn: fetchPosts,
  });
};

export default useFetchPosts;
