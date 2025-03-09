import { useParams } from "react-router";
import useFetchPost from "../hooks/useFetchPost";
import PostDetails from "../ui/PostDetails";

function SinglePost() {
  const { id } = useParams();
  const { data, isPending, isError, error } = useFetchPost(id);
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;
  const post = data.post;
  return <PostDetails post={post} />;
}

export default SinglePost;
