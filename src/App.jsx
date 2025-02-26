import Button from "./ui/Button";
import NavBar from "./ui/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-5">
        <Button>NEW POST</Button>
      </div>
    </>
  );
}

export default App;
