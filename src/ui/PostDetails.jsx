import { format } from "date-fns";

function PostDetails({ post }) {
  return (
    <div className="flex flex-col gap-0 w-3/4">
      <div className="rounded py-2 px-3">
        <div className="text-stone-400 text-xs">
          XXX - {format(new Date(post.createdAt), "dd/MM/yyyy")}
        </div>
        <div className="font-bold text-white text-2xl pb-2">{post.title}</div>
        <div className="relative overflow-hidden">
          <div className="relative flex justify-center mt-0 bg-black/20">
            <img
              className="absolute top-0 left-0 w-full h-full opacity-30 blur-md object-cover scale-[1.2] z-0"
              src={post.imageUrl}
            />
            <figure className="h-full w-full m-0 z-10 flex justify-center">
              <img
                className="h-full max-h-[100vw] object-contain mb-0 relative"
                src={post.imageUrl}
              />
            </figure>
          </div>
        </div>
        <div className="text-white text-xl">{post.content}</div>
      </div>
    </div>
  );
}

export default PostDetails;
