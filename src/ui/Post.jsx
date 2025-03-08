import { format } from "date-fns";

function Post({ post }) {
  return (
    <div className="border-2 border-purple-900 flex flex-col gap-1 w-10/12 py-2 px-3">
      <div className="text-stone-600">
        Posted by {post.author} on{" "}
        {format(new Date(post.createdAt), "dd/MM/yyyy")}
      </div>
      <div className="font-bold text-purple-900 text-3xl">{post.title}</div>
      <div className="flex flex-row gap-2 justify-end text-stone-800">
        <div>VIEW</div>
        <div>EDIT</div>
        <div>DELETE</div>
      </div>
    </div>
  );
}

export default Post;
