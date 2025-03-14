import {
  EllipsisHorizontalIcon,
  FlagIcon,
  PencilIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import NewPostForm from "./NewPostForm";
import ConfirmDelete from "./ConfirmDelete";
import { AuthContext } from "../context/AuthContext";

function PostOptions({ post }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  const ref = useRef(null);
  const { handleOpenModal } = useContext(ModalContext);
  const { userId } = useContext(AuthContext);

  const toggleMenu = (e) => {
    // Prevent the click from bubbling to the parent
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleOpenModal(<NewPostForm />, post);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleOpenModal(<ConfirmDelete postId={post._id} />);
  };

  const handleReport = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  // check if is the post creator, if yes render edit/delete option
  useEffect(() => {
    if (post.creator?._id.toString() === userId) {
      setIsCreator(true);
    }
  }, [setIsCreator, post.creator, userId]);

  // Close the popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <>
      <div className="absolute right-2 top-2" ref={ref}>
        <EllipsisHorizontalIcon
          onClick={toggleMenu}
          className="w-7 text-stone-400 
       hover:bg-violet-600 hover:rounded-3xl p-1"
        />
        {isOpen && (
          <div className="absolute flex flex-col right-0 top-9 mt-2 w-25 bg-gray-950 text-sm text-white rounded-md shadow-lg z-20">
            {isCreator ? (
              <>
                <button
                  onClick={handleEdit}
                  className="w-full px-4 py-2 flex flex-row gap-3 hover:text-gray-300 cursor-pointer"
                >
                  <PencilIcon className="w-3" />
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full px-4 py-2 flex flex-row gap-3 hover:text-gray-300 cursor-pointer"
                >
                  <XMarkIcon className="w-3" />
                  Delete
                </button>
              </>
            ) : null}
            <button
              onClick={handleReport}
              className="w-full px-4 py-2 flex flex-row gap-3 hover:text-gray-300 cursor-pointer"
            >
              <FlagIcon className="w-3" />
              Report
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default PostOptions;
