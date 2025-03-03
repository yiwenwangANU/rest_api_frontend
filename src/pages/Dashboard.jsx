import ModalButton from "../ui/ModalButton";
import { ModalProvider } from "../ui/ModalContext";
import ModalWindow from "../ui/ModalWindow";
import NavBar from "../ui/NavBar";
import NewPostForm from "../ui/NewPostForm";
import Post from "../ui/Post";

function Dashboard() {
  return (
    <ModalProvider>
      <NavBar />
      <div className="flex flex-col gap-3.5 items-center justify-center mt-5">
        <Post />
        <ModalButton>NEW POST</ModalButton>
        <ModalWindow>
          <NewPostForm />
        </ModalWindow>
      </div>
    </ModalProvider>
  );
}

export default Dashboard;
