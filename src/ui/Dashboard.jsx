import ModalButton from "./ModalButton";
import { ModalProvider } from "./ModalContext";
import ModalWindow from "./ModalWindow";
import NavBar from "./NavBar";
import NewPostForm from "./NewPostForm";

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
