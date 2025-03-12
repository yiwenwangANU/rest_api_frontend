import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "./ModalContext";
import Button from "./Button";
import SignupForm from "./SignupForm";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const mutation = useSignup();
  const { handleOpenModal, handleCloseModal } = useContext(ModalContext);
  const openSignupForm = () => {
    handleCloseModal();
    handleOpenModal(<SignupForm />);
  };
  //   const onSubmit = (data) => {
  //     mutation.mutate(data, { onSuccess: () => handleCloseModal() });
  //   };
  return (
    <form
      className="w-full h-full flex flex-col gap-2 p-6 bg-white shadow-lg rounded-lg"
      //   onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex justify-center items-center text-xl font-bold text-purple-950">
        Login
      </label>
      <div className="text-xs text-center px-4 text-gray-800">
        By continuing, you agree to our User Agreement and acknowledge that you
        understand the Privacy Policy.
      </div>
      <div className="relative mx-auto pt-4">
        <input
          id="email"
          className="peer border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
      <div className="relative mx-auto">
        <input
          id="password"
          className="peer border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
      <div className="text-xs px-4 pt-2 text-gray-600">
        New to MessageNode?{" "}
        <span
          onClick={openSignupForm}
          className="text-purple-800 cursor-pointer"
        >
          Sign Up
        </span>
      </div>
      <div className="flex justify-center py-2">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}

export default LoginForm;
