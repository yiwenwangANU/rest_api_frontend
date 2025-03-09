import {
  EllipsisHorizontalIcon,
  PencilIcon,
  StopIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";

function PostOptions() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleMenu = (e) => {
    // Prevent the click from bubbling to the parent
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
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
          <button className="w-full px-4 py-2 flex flex-row gap-3 hover:text-gray-300">
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
