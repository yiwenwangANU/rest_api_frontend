import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Button from "./Button";
import { ModalContext } from "../context/ModalContext";
import useCreatePost from "../hooks/useCreatePost";
import useEditPost from "../hooks/useEditPost";

function NewPostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { modalData, handleCloseModal } = useContext(ModalContext);

  const [imagePreview, setImagePreview] = useState(null);
  const post = modalData;
  const createMutation = useCreatePost();
  const editMutation = useEditPost();
  const mutation = post ? editMutation : createMutation;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const onSubmit = (data) => {
    mutation.mutate(data, { onSuccess: () => handleCloseModal() });
  };

  return (
    <form
      className="w-full h-full flex flex-col gap-2 p-6 bg-white shadow-lg rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex justify-center items-center text-xl font-bold text-purple-950 ">
        {post ? "Edit Post" : "New Post"}
      </label>
      {post ? (
        <input
          hidden
          value={post._id}
          {...register("postId", { required: true })}
        />
      ) : null}
      <label className="font-semibold text-gray-700">Title</label>
      <input
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue={post?.title}
        {...register("title", { required: true })}
      />
      {errors.title && (
        <span className="text-red-600">This field is required</span>
      )}

      <label className="block font-semibold text-gray-700">Upload Image</label>
      <input
        type="file"
        {...register("image")}
        className="border border-gray-300 rounded-lg w-full 
          focus:outline-none focus:ring-2 focus:ring-blue-500
        file:border-r-gray-300 file:border-r file:mr-5 file:py-1 file:px-3
        file:bg-purple-900 file:text-white file:font-bold
          hover:file:cursor-pointer hover:file:bg-white
        hover:file:text-purple-900"
        onChange={handleImageChange}
      />
      {imagePreview && (
        <div className="mt-2">
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-2 w-48 h-auto rounded-lg border border-gray-300"
          />
        </div>
      )}
      <p className="px-2 mt-1 text-xs text-black" id="file_input_help">
        JPG, JPEG or PNG (MAX. 800x400px).
      </p>

      <div className="flex flex-row gap-4 justify-end py-2">
        <Button type="submit" disabled={mutation.isLoading}>
          {post
            ? mutation.isPending
              ? "Updating..."
              : "Update"
            : mutation.isPending
            ? "Creating..."
            : "Create"}
        </Button>
        <Button type="button" variant="warning" onClick={handleCloseModal}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default NewPostForm;
