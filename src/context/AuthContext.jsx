import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [thumbNail, setThumbNail] = useState(null);
  const [userId, setUserId] = useState(null);

  const clearLoginInfo = () => {
    setUserId(null);
    setThumbNail(null);
  };

  const updateAuth = () => {
    const token = localStorage.getItem("token");
    const thumbNail = localStorage.getItem("thumbNail");
    const userId = localStorage.getItem("userId");

    // if has thumbNail or userid but no token, remove thumbNail and userId
    if ((userId || thumbNail) && !token) {
      localStorage.removeItem("userId");
      localStorage.removeItem("thumbNail");
      setUserId(null);
      setThumbNail(null);
    }

    if (token) {
      try {
        const decoded = jwtDecode(token);
        // if token not expired
        if (decoded.exp > Date.now() / 1000) {
          setThumbNail(thumbNail);
          setUserId(userId);
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
  };
  useEffect(() => {
    updateAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ userId, thumbNail, clearLoginInfo, updateAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
