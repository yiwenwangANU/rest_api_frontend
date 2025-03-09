import ModalButton from "../ui/ModalButton";
import { ModalProvider } from "../ui/ModalContext";
import ModalWindow from "../ui/ModalWindow";
import NewPostForm from "../ui/NewPostForm";
import Posts from "../ui/Posts";

function Dashboard() {
  return (
    <ModalProvider>
      <Posts />
      <ModalButton>NEW POST</ModalButton>
      <ModalWindow>
        <NewPostForm />
      </ModalWindow>
    </ModalProvider>
  );
}

export default Dashboard;
