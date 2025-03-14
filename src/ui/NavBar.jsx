import { Link, useNavigate } from "react-router";
import Button from "./Button";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import LoginForm from "./LoginForm";
import { AuthContext } from "../context/AuthContext";
import {
  ArrowLeftStartOnRectangleIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import NewPostForm from "./NewPostForm";
import useLogout from "../hooks/useLogout";

function NavBar() {
  const navigate = useNavigate();
  const { handleOpenModal } = useContext(ModalContext);
  const logout = useLogout();
  const openLoginForm = () => {
    handleOpenModal(<LoginForm />);
  };
  const openCreatePost = () => {
    navigate("/");
    handleOpenModal(<NewPostForm />);
  };
  const { thumbNail } = useContext(AuthContext);
  return (
    <div className="w-full flex flex-row items-center justify-between bg-purple-950 px-8 py-3 fixed z-50">
      <Link to={"/"}>
        <Button variant="logo">MessageNode</Button>
      </Link>
      {thumbNail ? (
        <div className="flex flex-row items-center gap-3">
          <Button variant="rounded" onClick={openCreatePost}>
            <div className="flex flex-row gap-1">
              <PlusIcon className="w-5" />
              <span>Create</span>
            </div>
          </Button>
          <ArrowLeftStartOnRectangleIcon
            onClick={logout}
            className="w-10 text-white rounded-full p-2.5 cursor-pointer hover:bg-purple-800 duration-300"
          />
          <img
            src={thumbNail}
            className="w-10 rounded-full p-1 cursor-pointer hover:bg-purple-800 duration-300"
          />
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
