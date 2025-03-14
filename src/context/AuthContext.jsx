import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [thumbNail, setThumbNail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const thumbNail = localStorage.getItem("thumbNail");

    if (token) {
      try {
        const decoded = jwtDecode(token);

        if (decoded.exp > Date.now() / 1000) {
          setThumbNail(thumbNail);
        } else {
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
    <AuthContext.Provider value={{ thumbNail }}>
      {children}
    </AuthContext.Provider>
  );
};
