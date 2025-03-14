import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useLogout() {
  const { clearThumbNail } = useContext(AuthContext);

  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("thumbNail");

    // Update auth context
    clearThumbNail();
  };

  return logout;
}

export default useLogout;
