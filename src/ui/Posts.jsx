import useFetchPost from "../hooks/useFetchPost";
import Post from "./Post";

function Posts() {
  const { data, isPending, isError, error } = useFetchPost();
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  const posts = data?.posts;
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post} />
      ))}
    </>
  );
}

export default Posts;
