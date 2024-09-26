import { createContext, useState, useEffect } from "react";
import useInput from "../hooks/useInput";
// import axios from "axios"

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    alert("Su cuenta se ha deslogueado");
  };
  // const [datos, setDatos] = useState({
  //   email: "",
  //   password: "",
  //   confirm_password: "",
  // });
  // const [user, setUser] = useState({
  //   email: "desafio@latam.cl",
  //   password: "123456",
  // });

  // const email= useInput("");
  // const password = useInput("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    alert(data?.error || "Authentication successful!");

    localStorage.setItem("token", data.token);

    setToken(response.ok);
    console.log(e.target);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    alert(data?.error || "Usuario Registrado");
  };

  const [user, setUser] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);
    if (token) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => setToken(response.ok));
    }
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        // .then((response) => console.log(response.ok))
        .then((data) => setUser(data));
    }
  }, []);

  return (
    // // <UserContext.Provider value={{ token, setToken, user, setUser ,datos, setDatos}}>
    <UserContext.Provider
      value={{
        token,
        logout,
        user,
        handleRegister,
        handleSubmit,
        email,
        password,
        setEmail,
        setPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
