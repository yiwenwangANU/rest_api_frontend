import { format } from "date-fns";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

function PostDetails({ post }) {
  return (
    <div className="flex flex-col gap-0 md:w-3/4">
      <div className="rounded py-2 px-3">
        <div className="text-slate-400 text-xs flex flex-row gap-1 items-center">
          <img src={post.creator?.thumbnailUrl} className="w-7" />
          <div>{post.creator?.name}</div>-{" "}
          {format(new Date(post.createdAt), "dd/MM/yyyy")}
        </div>
        <div className="font-bold text-white text-2xl pb-2">{post.title}</div>
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative flex justify-center mt-0 bg-black/20">
            <img
              className="absolute top-0 left-0 w-full h-full opacity-30 blur-md object-cover scale-[1.2] z-0"
              src={post.imageUrl}
            />
            <figure className="h-full w-full m-0 z-10 flex justify-center">
              <img
                className="h-full max-h-120 object-contain mb-0 relative"
                src={post.imageUrl}
              />
            </figure>
          </div>
        </div>
        <div className="py-5">
          <CommentForm post={post} />
        </div>
        <div>
          <Comments post={post} />
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
