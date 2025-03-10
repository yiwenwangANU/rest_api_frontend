import ModalButton from "../ui/ModalButton";
import { ModalProvider } from "../ui/ModalContext";
import ModalWindow from "../ui/ModalWindow";
import Posts from "../ui/Posts";

function Dashboard() {
  return (
    <ModalProvider>
      <Posts />
      <ModalButton>NEW POST</ModalButton>
      <ModalWindow />
    </ModalProvider>
  );
}

export default Dashboard;
