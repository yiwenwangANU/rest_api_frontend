import ModalButton from "../ui/ModalButton";
import { ModalProvider } from "../ui/ModalContext";
import ModalWindow from "../ui/ModalWindow";
import NavBar from "../ui/NavBar";
import NewPostForm from "../ui/NewPostForm";

function Dashboard() {
  return (
    <ModalProvider>
      <NavBar />
      <div className="flex items-center justify-center mt-5">
        <ModalButton>NEW POST</ModalButton>
        <ModalWindow>
          <NewPostForm />
        </ModalWindow>
      </div>
    </ModalProvider>
  );
}

export default Dashboard;
