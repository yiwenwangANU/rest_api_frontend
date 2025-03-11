import useFetchInfinityPosts from "../hooks/useFetchInfinityPosts";
import { useInView } from "react-intersection-observer";
import Post from "./Post";
import { useEffect } from "react";

function Posts() {
  // const { data, isPending, isError, error } = useFetchPosts();
  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchInfinityPosts();

  const { ref, inView } = useInView();

  // When the last element is in view and there is another page, fetch next page.
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  const posts = data?.posts;
  const currentPage = data?.currentPage;
  const nextPage = data?.nextPage;
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post?._id} />
      ))}
      <p ref={ref}>{nextPage ? "Loading more posts..." : "No more data"}</p>
    </>
  );
}

export default Posts;
