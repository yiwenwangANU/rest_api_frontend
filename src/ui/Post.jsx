import { format } from "date-fns";
import { Link } from "react-router";
import PostOptions from "./PostOptions";
import Button from "./Button";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";
import LoginForm from "./LoginForm";

function Post({ post }) {
  const { userId } = useContext(AuthContext);
  const { handleOpenModal } = useContext(ModalContext);
  const handleJoin = (e) => {
    if (!userId) {
      e.preventDefault();
      e.stopPropagation();
      handleOpenModal(<LoginForm />);
    }
  };
  return (
    <Link
      to={`/post/${post._id}`}
      className="border-b border-purple-900 flex flex-col gap-0 lg:w-1/2 md:w-2/3"
    >
      <div className="rounded hover:bg-purple-950 py-2 px-3 relative">
        <div className="text-slate-400 text-xs flex flex-row gap-1 items-center">
          <img src={post.creator?.thumbnailUrl} className="w-7" />
          <div>{post.creator?.name}</div>-{" "}
          {format(new Date(post.createdAt), "dd/MM/yyyy")}
        </div>
        <div className="absolute right-12 top-2">
          <Button onClick={handleJoin} variant="rounded_sm">
            Join
          </Button>
        </div>

        <PostOptions post={post} />
        <div className="font-bold text-white text-xl pt-3 pb-1">
          {post.title}
        </div>
        <div className="relative overflow-hidden">
          <div className="relative flex justify-center mt-0 bg-black/20">
            <img
              className="absolute top-0 left-0 w-full h-full opacity-30 blur-md object-cover scale-[1.2] z-0"
              src={post.imageUrl}
            />
            <figure className="h-full w-full m-0 z-10 flex justify-center">
              <img
                className="h-full max-h-90 object-contain mb-0 relative"
                src={post.imageUrl}
              />
            </figure>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
