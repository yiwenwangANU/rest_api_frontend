import useFetchPost from "../hooks/useFetchPost";

function Post() {
  const { data, isPending, isError, error } = useFetchPost();
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;
  return (
    <div>
      <h2>Fetched Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Post;
