import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const RegistrerPage = () => {
  const {token, setToken, datos, setDatos, user, setUser} = useContext(UserContext)
  const actualizarFormulario = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviarFormulario = (e) => {
    e.preventDefault();
    alert(
      `Se ha creado el usuario con el email: ${datos.email}
 `
    );
    setDatos({
      email: "",
      password: "",
      confirm_password: "",
    });
    setUser({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
    {token ? 

      <div className="divRegister">
        <h2>Parece que ya tienes cuenta!</h2>
        <button
        className="buttonReg">
        <Link to="/">
        Ir a pedir
        </Link>
          
        </button>

      </div>

    : 
      <div className="divRegister">
      <h2>Primera vez? Crea tu cuenta!</h2>
      <form onSubmit={enviarFormulario} className="formRegister">
        <input
        minlength="10"
          className="inputMail"
          type="email"
          name="email"
          value={datos.email}
          placeholder="ingrese su email"
          onChange={actualizarFormulario}
        />
        <div className="passBox">
          <input
          minlength="6"
            className="inputPass"
            type="password"
            name="password"
            value={datos.password}
            placeholder="ingrese su constraseña"
            onChange={actualizarFormulario}
          />

          <input
          minlength="6"
            className="inputPass"
            type="password"
            name="confirm_password"
            value={datos.confirm_password}
            placeholder="Comfirme su contraseña"
            onChange={actualizarFormulario}
          />
        </div>

        <button
        className="buttonReg"
          type="submit"
          disabled={datos.password !== datos.confirm_password}
        >
        Registrarme
          
        </button>
      </form>
      </div>
    }
    
    
      
    </>
  );
};
export default RegistrerPage;
