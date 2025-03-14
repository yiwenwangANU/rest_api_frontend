import useFetchComments from "../hooks/useFetchComments";

function Comments({ post }) {
  const { data, isPending, isError, error } = useFetchComments(post);
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;
  const comment = data?.content;
  const createdAt = data?.createdAt;
  return <div>{comment}</div>;
}

export default Comments;
