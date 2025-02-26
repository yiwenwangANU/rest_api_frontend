import Button from "./Button";

function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between bg-purple-950 px-8 py-3">
      <Button variant="secondary">MessageNode</Button>
      <div className="flex flex-row items-center gap-16">
        <div className="text-yellow-600 font-semibold text-xl">Feed</div>
        <div className="text-white font-semibold text-xl">Logout</div>
      </div>
    </div>
  );
}

export default NavBar;
