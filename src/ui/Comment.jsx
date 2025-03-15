import { format } from "date-fns";

function Comment({ comment }) {
  return (
    <div className="p-3">
      <div className="text-stone-200 text-xs flex flex-row gap-1 items-center">
        <img src={comment.author.thumbnailUrl} className="w-7" />
        <div>{comment.author.name}</div>-{" "}
        {format(new Date(comment.createdAt), "dd/MM/yyyy")}
      </div>
      <div className="text-white px-8">{comment.content}</div>
    </div>
  );
}

export default Comment;
