import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState({});

  //signup
  const signUp = async (formData) => {
    setSubmitting(true);
    try {
      const res = await fetch(`${baseUrl}/auth/signup`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await res.json
      if (res.ok) {
        toast.success(data.message);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const login = async (formData) => {
    setSubmitting(true);
    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      console.log(data);

      if (res.ok) {
        toast.success(data.message);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const value = {
    signUp,
    login,
    user,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
