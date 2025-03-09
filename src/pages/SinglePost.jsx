import { useParams } from "react-router";
import useFetchPost from "../hooks/useFetchPost";

function SinglePost() {
  const { id } = useParams();
  const { data, isPending, isError, error } = useFetchPost(id);
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return <div>{data}</div>;
}

export default SinglePost;
