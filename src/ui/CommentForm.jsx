import { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { PlusIcon } from "@heroicons/react/16/solid";
import { ModalContext } from "../context/ModalContext";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import LoginForm from "./LoginForm";

function CommentForm() {
  const [open, setOpen] = useState();
  const { handleOpenModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const textareaRef = useRef(null);

  const handleAddComment = () => {
    navigate("/");
    handleOpenModal(<LoginForm />);
  };

  const handleOpenComment = () => {
    setOpen(true);
  };
  const handleCloseComment = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [open]);

  return (
    <>
      {userId ? (
        open ? (
          <div className="border-1 border-white rounded-2xl text-white mt-4">
            <textarea
              ref={textareaRef}
              className="w-full border-0 focus:outline-none p-3"
            />
            <div className="flex flex-row gap-5 justify-end pb-2 pr-2">
              <Button onClick={handleCloseComment} variant="secondary">
                cancel
              </Button>
              <Button variant="rounded">comment</Button>
            </div>
          </div>
        ) : (
          <div
            onClick={handleOpenComment}
            className="border-1 border-white rounded-2xl text-white mt-4 p-3"
          >
            Add a comment
          </div>
        )
      ) : (
        <Button onClick={handleAddComment} variant="rounded">
          <div className="flex flex-row gap-1">
            <PlusIcon className="w-5" />
            <span>Add a comment</span>
          </div>
        </Button>
      )}
    </>
  );
}

export default CommentForm;
