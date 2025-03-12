import ModalButton from "../ui/ModalButton";
import ModalWindow from "../ui/ModalWindow";
import Posts from "../ui/Posts";

function Dashboard() {
  return (
    <>
      <Posts />
      <ModalButton>NEW POST</ModalButton>
      <ModalWindow />
    </>
  );
}

export default Dashboard;
