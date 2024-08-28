import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const RegistrerPage = (props) => {
  const actualizarFormulario = (event) => {
    props.setDatos({
      ...props.datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviarFormulario = (e) => {
    e.preventDefault();
    alert(
      `Se ha creado el usuario con el email: ${props.datos.email}
 `
    );
    props.setDatos({
      email: "",
      password: "",
      confirm_password: "",
    });
    props.setUser({
      ...props.datos,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
    {props.token ? 

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
          value={props.datos.email}
          placeholder="ingrese su email"
          onChange={actualizarFormulario}
        />
        <div className="passBox">
          <input
          minlength="6"
            className="inputPass"
            type="password"
            name="password"
            value={props.datos.password}
            placeholder="ingrese su constraseña"
            onChange={actualizarFormulario}
          />

          <input
          minlength="6"
            className="inputPass"
            type="password"
            name="confirm_password"
            value={props.datos.confirm_password}
            placeholder="Comfirme su contraseña"
            onChange={actualizarFormulario}
          />
        </div>

        <button
        className="buttonReg"
          type="submit"
          disabled={props.datos.password !== props.datos.confirm_password}
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
