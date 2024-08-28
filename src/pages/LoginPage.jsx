import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = (props) => {
  const loginAction = (e) => {
    e.preventDefault();
    if (loginData.email === props.user.email) {
      if (loginData.password === props.user.password) {
        props.setToken(true);
        setLoginData({
          email: "",
          password: "",
        });
        alert("Sesion correctamente iniciada");
      } else {
        alert("Contraseña Incorrecta");
      }
    } else {
      alert("Este correo no esta regristrado");
    }
  };
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const loginForm = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
    {props.token ? 

      <div className="divRegister">
        <h2>Sesion iniciada correctamente!</h2>
        <button
        className="buttonReg">
        <Link to="/">
        Ir a pedir
        </Link>
          
        </button>

      </div>

    : 
    <div className="divRegister">
      <h2>Tienes cuenta? inicia sesion aqui!</h2>
      <form className="formRegister" onSubmit={loginAction}>
        <div className="passBox">
          <input
            className="inputPass"
            type="email"
            name="email"
            value={loginData.email}
            placeholder="ingrese su email"
            onChange={loginForm}
          />
          <input
            className="inputPass"
            type="password"
            name="password"
            value={loginData.password}
            placeholder="ingrese su constraseña"
            onChange={loginForm}
          />
        </div>

        <button className="buttonReg" type="submit">
          Enviar{" "}
        </button>
      </form>
    </div>}
    </>
  );

};
export default LoginPage;
