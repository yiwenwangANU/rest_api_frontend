import useFetchComments from "../hooks/useFetchComments";
import Comment from "./Comment";
function Comments({ post }) {
  const { data, isPending, isError, error } = useFetchComments(post._id);
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;
  const comments = data?.comments;
  return (
    <>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment._id} />
      ))}
      ;
    </>
  );
}

export default Comments;
