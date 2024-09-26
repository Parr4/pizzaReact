import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const RegistrerPage = () => {
  const {token, handleRegister, password, setEmail, setPassword, email} = useContext(UserContext)

  const [passConfirm, passReload] = useState('')
  const enviarFormulario = (e) => {
    e.preventDefault();
//     alert(
//       `Se ha creado el usuario con el email: ${datos.email}
//  `
//     );
    // setDatos({
    //   email: "",
    //   password: "",
    //   confirm_password: "",
    // });
    // setUser({
    //   ...datos,
    //   [event.target.name]: event.target.value,
    // });
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
      <form onSubmit={handleRegister} className="formRegister">
        <input
        minlength="10"
          className="inputMail"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ingrese su email"
        />
        <div className="passBox">
          <input
          minlength="6"
            className="inputPass"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="ingrese su constraseña"
          />

          <input
          minlength="6"
            className="inputPass"
            type="password"
            name="confirm_password"
            value={passConfirm}
            placeholder="Comfirme su contraseña"
            onChange={(e) => passReload(e.target.value)}
          />
        </div>

        <button
        className="buttonReg"
          type="submit"
          disabled={password !== passConfirm}
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
