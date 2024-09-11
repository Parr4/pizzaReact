import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
 
    const [token, setToken] = useState(true);
    const [datos, setDatos] = useState({
      email: "",
      password: "",
      confirm_password: "",
    });
    const [user, setUser] = useState({
      email: "desafio@latam.cl",
      password: "123456",
    });

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser ,datos, setDatos}}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;



