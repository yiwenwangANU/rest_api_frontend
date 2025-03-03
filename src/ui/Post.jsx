import useFetchPost from "../hooks/useFetchPost";

function Post() {
  const { data, isPending, isError, error } = useFetchPost();
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  const post = data?.posts[0];
  return (
    <>
      <div>{post.title}</div>
      <div>{post.content}</div>
    </>
  );
}

export default Post;
