import {
  EllipsisHorizontalIcon,
  PencilIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "./ModalContext";

function PostOptions({ post }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { handleOpenModal } = useContext(ModalContext);

  const toggleMenu = (e) => {
    // Prevent the click from bubbling to the parent
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleOpenModal(post);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

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
    <div className="absolute right-2 top-2" ref={ref}>
      <EllipsisHorizontalIcon
        onClick={toggleMenu}
        className="w-7 text-stone-400 
       hover:bg-violet-600 hover:rounded-3xl p-1"
      />
      {isOpen && (
        <div className="absolute flex flex-col right-0 mt-2 w-25 bg-gray-950 text-sm text-white rounded-md shadow-lg z-20">
          <button
            onClick={handleEdit}
            className="w-full px-4 py-2 flex flex-row gap-3 hover:text-gray-300"
          >
            <PencilIcon className="w-3" />
            Edit
          </button>
          <button className="w-full px-4 py-2 flex flex-row gap-3 hover:text-gray-300">
            <XMarkIcon />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default PostOptions;
