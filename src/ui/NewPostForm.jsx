import { useForm } from "react-hook-form";
import Button from "./Button";
import { useContext } from "react";
import { ModalContext } from "./ModalContext";

function NewPostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { handleCloseModal } = useContext(ModalContext);

  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="w-full h-full flex flex-col gap-2 p-6 bg-white shadow-lg rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="py-4 mb-8 text-4xl font-bold text-purple-950 border-b-4 border-purple-950">
        New Post
      </label>
      <label className="text-lg font-semibold">Title</label>
      <input
        className="font-bold text-xl border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("title", { required: true })}
      />
      {errors.title && (
        <span className="text-red-600">This field is required</span>
      )}

      <label className="block text-lg font-semibold mb-2">Upload File</label>
      <input
        type="file"
        {...register("image", { required: "File is required" })}
        className="border border-gray-300 rounded-lg w-full 
          focus:outline-none focus:ring-2 focus:ring-blue-500
        file:border-r-gray-300 file:border-r file:mr-5 file:py-1 file:px-3
        file:bg-purple-900 file:text-white file:font-bold
          hover:file:cursor-pointer hover:file:bg-white
        hover:file:text-purple-900"
      />
      <p className="px-2 mt-1 text-sm text-black" id="file_input_help">
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
      {errors.image && (
        <span className="text-red-600">This field is required</span>
      )}

      <label className="text-lg font-semibold">Content</label>
      <textarea
        className="font-bold text-xl border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("content", { required: true })}
      />

      {errors.content && (
        <span className="text-red-600">This field is required</span>
      )}
      <div className="flex flex-row gap-4 justify-end py-5">
        <Button type="submit">Create</Button>
        <Button type="button" variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default NewPostForm;
