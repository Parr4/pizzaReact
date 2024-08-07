import React from "react";
import { useState } from "react";
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
    <div className="divRegister">
      <h2>Tienes cuenta? inicia sesion aqui!</h2>
      <form onSubmit={loginAction}>
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
    </div>
  );
};
export default LoginPage;
