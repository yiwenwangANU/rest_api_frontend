import { Link } from "react-router";
import Button from "./Button";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import LoginForm from "./LoginForm";
import { AuthContext } from "../context/AuthContext";
import { PlusIcon } from "@heroicons/react/16/solid";
import NewPostForm from "./NewPostForm";

function NavBar() {
  const { handleOpenModal } = useContext(ModalContext);
  const openLoginForm = () => {
    handleOpenModal(<LoginForm />);
  };
  const openCreatePost = () => {
    handleOpenModal(<NewPostForm />);
  };
  const { thumbNail } = useContext(AuthContext);
  return (
    <div className="w-full flex flex-row items-center justify-between bg-purple-950 px-8 py-3 fixed z-50">
      <Link to={"/"}>
        <Button variant="logo">MessageNode</Button>
      </Link>
      {thumbNail ? (
        <div className="flex flex-row items-center gap-4">
          <Button variant="rounded" onClick={openCreatePost}>
            <div className="flex flex-row gap-1">
              <PlusIcon className="w-5" />
              <span>Create</span>
            </div>
          </Button>
          <img src={thumbNail} className="w-10 rounded-full p-1" />
        </div>
      ) : (
        <div className="flex flex-row items-center gap-16">
          <Button variant="rounded" onClick={openLoginForm}>
            Login
          </Button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
