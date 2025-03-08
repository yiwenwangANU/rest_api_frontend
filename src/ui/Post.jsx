import { format } from "date-fns";

function Post({ post }) {
  return (
    <div className="border-b border-purple-900 flex flex-col gap-0 w-1/2 py-2 px-3">
      <div className="text-stone-600 text-xs">
        XXX - {format(new Date(post.createdAt), "dd/MM/yyyy")}
      </div>
      <div className="font-bold text-purple-900 text-xl">{post.title}</div>
      <img src={post.imageUrl} />
    </div>
  );
}

export default Post;
