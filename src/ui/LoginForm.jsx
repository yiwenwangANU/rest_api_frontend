import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "./ModalContext";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const mutation = useSignup();
  const { modalData, handleCloseModal } = useContext(ModalContext);
  //   const onSubmit = (data) => {
  //     mutation.mutate(data, { onSuccess: () => handleCloseModal() });
  //   };
  return (
    <form
      className="w-full h-full flex flex-col gap-2 p-6 bg-white shadow-lg rounded-lg"
      //   onSubmit={handleSubmit(onSubmit)}
    >
      <label className="py-2 mb-5 text-3xl font-bold text-purple-950 border-b-4 border-purple-950">
        Login
      </label>
    </form>
  );
}

export default LoginForm;
