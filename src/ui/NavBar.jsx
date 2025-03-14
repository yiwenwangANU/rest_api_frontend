import { Link } from "react-router";
import Button from "./Button";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import LoginForm from "./LoginForm";

function NavBar() {
  const { handleOpenModal } = useContext(ModalContext);
  const openLoginForm = () => {
    handleOpenModal(<LoginForm />);
  };

  return (
    <div className="w-full flex flex-row items-center justify-between bg-purple-950 px-8 py-3 fixed z-50">
      <Link to={"/"}>
        <Button variant="logo">MessageNode</Button>
      </Link>
      <div className="flex flex-row items-center gap-16">
        <Button variant="rounded" onClick={openLoginForm}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
