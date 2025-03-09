import { format } from "date-fns";

function Post({ post }) {
  return (
    <div className="border-b border-purple-900 flex flex-col gap-0 w-1/2 cursor-pointer">
      <div className="rounded hover:bg-purple-50 py-2 px-3">
        <div className="text-stone-600 text-xs">
          XXX - {format(new Date(post.createdAt), "dd/MM/yyyy")}
        </div>
        <div className="font-bold text-purple-900 text-xl">{post.title}</div>
        <div className="relative overflow-hidden">
          <div className="relative flex justify-center mt-0 bg-black/20">
            <img
              className="absolute top-0 left-0 w-full h-full opacity-30 object-cover scale-[1.2] z-0"
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
      </div>
    </div>
  );
}

export default Post;
