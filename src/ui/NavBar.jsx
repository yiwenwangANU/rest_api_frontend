import { Link } from "react-router";
import Button from "./Button";

function NavBar() {
  return (
    <div className="w-full flex flex-row items-center justify-between bg-purple-950 px-8 py-3 fixed z-50">
      <Link to={"/"}>
        <Button variant="logo">MessageNode</Button>
      </Link>
      <div className="flex flex-row items-center gap-16">
        <div className="text-yellow-600 font-semibold text-xl">Feed</div>
        <div className="text-white font-semibold text-xl">Logout</div>
      </div>
    </div>
  );
}

export default NavBar;
