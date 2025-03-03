import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../api/apiServices";

const useFetchPost = () => {
  return useQuery({
    queryKey: ["getPosts"],
    queryFn: fetchPost,
  });
};

export default useFetchPost;
