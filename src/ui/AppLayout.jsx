import { Outlet } from "react-router";
import NavBar from "./NavBar";
import { ModalProvider } from "./ModalContext";

function AppLayout() {
  return (
    <ModalProvider>
      <div className="w-full min-h-screen bg-black flex justify-center">
        <div className="w-full flex flex-col gap-3.5 items-center">
          <NavBar />
          <div className="pt-16"></div>
          <Outlet />
        </div>
      </div>
    </ModalProvider>
  );
}

export default AppLayout;
