import useFetchPosts from "../hooks/useFetchPosts";
import Post from "./Post";

function Posts() {
  const { data, isPending, isError, error } = useFetchPosts();
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  const posts = data?.posts;
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post?._id} />
      ))}
    </>
  );
}

export default Posts;
