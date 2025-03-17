import { createContext, useState } from "react";


export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const signUp = () => {
    alert();
  };

  const login = () => {
    alert("Logging in...");
  };

  const value = {
    signUp,
    login,
    user,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
