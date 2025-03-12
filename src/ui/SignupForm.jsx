import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "./ModalContext";
import Button from "./Button";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const mutation = useSignup();
  const { modalData, handleCloseModal } = useContext(ModalContext);
  const [imagePreview, setImagePreview] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  //   const onSubmit = (data) => {
  //     mutation.mutate(data, { onSuccess: () => handleCloseModal() });
  //   };
  return (
    <form
      className="w-full h-full flex flex-col gap-2 p-6 bg-white shadow-lg rounded-lg"
      //   onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex justify-center items-center text-center px-10 text-xl font-bold text-purple-950">
        Create your username and password
      </label>
      <div className="relative mx-auto pt-4 w-full">
        <input
          id="email"
          className="peer border border-gray-300 w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("email", { required: true })}
        />
        <label
          htmlFor="email"
          className="absolute cursor-pointer left-4 top-6 text-gray-400 transition-all duration-300 
            peer-focus:top-4 peer-focus:text-xs"
        >
          Email
        </label>
        {errors.email && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>
      <div className="relative mx-auto w-full">
        <input
          id="password"
          className="peer border border-gray-300 w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("password", { required: true })}
        />
        <label
          htmlFor="password"
          className="absolute cursor-pointer left-4 top-2 text-gray-400 transition-all duration-300 
            peer-focus:-top-0 peer-focus:text-xs"
        >
          Password
        </label>
        {errors.email && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>
      <label className="block font-semibold text-gray-700">Profile Image</label>
      <input
        type="file"
        {...register("image")}
        className="border border-gray-300 rounded-lg w-full 
          focus:outline-none focus:ring-2 focus:ring-purple-500
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
            className="mt-2 w-24 h-24 rounded-full border border-gray-300"
          />
        </div>
      )}
      <p className="px-2 mt-1 text-xs text-black" id="file_input_help">
        JPG, JPEG or PNG (MAX. 800x400px).
      </p>
      <div className="flex justify-center py-2">
        <Button type="submit">Create the account</Button>
      </div>
    </form>
  );
}

export default SignupForm;
