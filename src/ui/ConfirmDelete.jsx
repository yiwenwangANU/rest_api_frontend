import { useContext } from "react";
import Button from "./Button";
import { ModalContext } from "../context/ModalContext";
import useDeletePost from "../hooks/useDeletePost";

function ConfirmDelete({ postId }) {
  const { handleCloseModal } = useContext(ModalContext);
  const mutation = useDeletePost();
  const handleDelete = () => {
    mutation.mutate(postId, {
      onSuccess: () => {
        handleCloseModal();
      },
    });
  };
  return (
    <div className="w-full h-full flex flex-col gap-2 px-6 py-6 pb-4 bg-white shadow-lg rounded-lg">
      <label className="flex justify-center items-center text-xl font-bold text-purple-950">
        Confirm Delete
      </label>
      <p className="font-semibold text-gray-700 px-6">
        Are you sure you want to delete this post permanently? This action
        cannot be <span className="text-red-500">undone</span>.
      </p>
      <div className="flex justify-end gap-4 pt-4">
        <Button onClick={handleDelete} variant="warning">
          Delete
        </Button>
        <Button onClick={handleCloseModal}>Cancel</Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
