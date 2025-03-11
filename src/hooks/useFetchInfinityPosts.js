import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchInfinityPosts } from "../api/apiServices";

const useFetchInfinityPosts = () => {
  return useInfiniteQuery({
    queryKey: ["getInfinityPosts"],
    queryFn: fetchInfinityPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage || null,
  });
};

export default useFetchInfinityPosts;
