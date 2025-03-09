import { Outlet } from "react-router";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center">
      <div className="w-full flex flex-col gap-3.5 items-center">
        <NavBar />

        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
