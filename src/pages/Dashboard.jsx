import ModalButton from "../ui/ModalButton";
import { ModalProvider } from "../ui/ModalContext";
import ModalWindow from "../ui/ModalWindow";
import NavBar from "../ui/NavBar";
import NewPostForm from "../ui/NewPostForm";
import Posts from "../ui/Posts";

function Dashboard() {
  return (
    <ModalProvider>
      <NavBar />
      <div className="flex flex-col gap-3.5 items-center justify-center pt-5 bg-black">
        <Posts />
        <ModalButton>NEW POST</ModalButton>
        <ModalWindow>
          <NewPostForm />
        </ModalWindow>
      </div>
    </ModalProvider>
  );
}

export default Dashboard;
