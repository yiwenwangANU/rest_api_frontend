import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [thumbNail, setThumbNail] = useState(null);

  const clearThumbNail = () => {
    setThumbNail(null);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const thumbNail = localStorage.getItem("thumbNail");

    // if has thumbNail but no token, remove thumbNail and userId
    if (thumbNail && !token) {
      localStorage.removeItem("userId");
      localStorage.removeItem("thumbNail");
      setThumbNail(null);
    }

    if (token) {
      try {
        const decoded = jwtDecode(token);
        // if token not expired
        if (decoded.exp > Date.now() / 1000) {
          setThumbNail(thumbNail);
        } else {
          // if expired
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          localStorage.removeItem("thumbNail");
          setThumbNail(null);
        }
      } catch (error) {
        console.log(error);
        setThumbNail(null);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ thumbNail, clearThumbNail }}>
      {children}
    </AuthContext.Provider>
  );
};
