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

  const pages = data?.pages;
  return (
    <>
      {pages.map((page) =>
        page?.posts.map((post) => <Post post={post} key={post?._id} />)
      )}
      {/* if this div inView, fetch more posts */}
      <div ref={ref}></div>
    </>
  );
}

export default Posts;
