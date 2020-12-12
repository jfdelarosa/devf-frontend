import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  const logIn = (token) => {
    localStorage.setItem("instababy-token", token);
    const decoded = decode(token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setToken(token);
    setUser(decoded);
    setIsAuth(true);
  };

  const logOut = () => {
    localStorage.removeItem("instababy-token");
    setUser({});
    setIsAuth(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("instababy-token");
    if (token) logIn(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuth,
        user,
        logIn,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
