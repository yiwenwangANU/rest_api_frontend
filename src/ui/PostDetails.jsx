import { format } from "date-fns";
import Button from "./Button";
import { PlusIcon } from "@heroicons/react/16/solid";

function PostDetails({ post }) {
  return (
    <div className="flex flex-col gap-0 md:w-3/4">
      <div className="rounded py-2 px-3">
        <div className="text-stone-400 text-xs flex flex-row gap-1 items-center">
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
                className="h-full max-h-[100vw] object-contain mb-0 relative"
                src={post.imageUrl}
              />
            </figure>
          </div>
        </div>

        <Button variant="rounded">
          <div className="flex flex-row gap-1">
            <PlusIcon className="w-5" />
            <span>Add a comment</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default PostDetails;
