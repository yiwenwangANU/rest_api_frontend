import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "./ModalContext";
import useSignup from "../hooks/useSignup";
import Button from "./Button";
import LoginForm from "./LoginForm";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const mutation = useSignup();
  const { handleCloseModal, handleOpenModal } = useContext(ModalContext);
  const [imagePreview, setImagePreview] = useState(null);

  const password = watch("password", "");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const onSubmit = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        handleCloseModal();
        handleOpenModal(<LoginForm />);
      },
    });
  };
  return (
    <form
      className="w-full h-full flex flex-col gap-2 p-6 bg-white shadow-lg rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex justify-center items-center text-center px-10 text-xl font-bold text-purple-950">
        Create your username and password
      </label>
      <div className="relative mx-auto pt-4 w-full">
        <input
          id="email"
          placeholder="Email or username"
          className="peer border border-gray-300 w-full rounded-lg p-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("email", {
            required: "Please enter your email",
            maxLength: {
              value: 40,
              message: "Email must be at most 40 characters long",
            },
          })}
        />
        <label
          htmlFor="email"
          className="absolute cursor-pointer left-4 top-4 text-xs text-gray-400 transition-all duration-300 
            peer-focus:top-4 peer-focus:text-xs peer-placeholder-shown:top-6 peer-placeholder-shown:text-base"
        >
          Email
        </label>
        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}
      </div>
      <div className="relative mx-auto w-full">
        <input
          id="password"
          placeholder="password"
          type="password"
          className="peer border border-gray-300 w-full rounded-lg p-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("password", {
            required: "Please enter your password",
            maxLength: {
              value: 20,
              message: "Password must be at most 20 characters long",
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        <label
          htmlFor="password"
          className="absolute cursor-pointer left-4 top-0 text-xs text-gray-400 transition-all duration-300 
            peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-base"
        >
          Password
        </label>
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}
      </div>
      <div className="relative mx-auto w-full">
        <input
          id="confirmpassword"
          placeholder="confirmpassword"
          type="password"
          className="peer border border-gray-300 w-full rounded-lg p-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("confirmpassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        <label
          htmlFor="confirmpassword"
          className="absolute cursor-pointer left-4 top-0 text-xs text-gray-400 transition-all duration-300 
            peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-base"
        >
          Confirm Password
        </label>
        {errors.confirmpassword && (
          <span className="text-red-600">{errors.confirmpassword.message}</span>
        )}
      </div>
      <div className="relative mx-auto w-full">
        <input
          id="name"
          placeholder="name"
          className="peer border border-gray-300 w-full rounded-lg p-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("name", {
            required: "Please enter your name",
            maxLength: {
              value: 40,
              message: "Name must be at most 40 characters long",
            },
          })}
        />
        <label
          htmlFor="name"
          className="absolute cursor-pointer left-4 top-0 text-xs text-gray-400 transition-all duration-300 
            peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-base"
        >
          Name
        </label>
        {errors.name && (
          <span className="text-red-600">{errors.name.message}</span>
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
