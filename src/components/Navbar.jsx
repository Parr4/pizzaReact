import React, { useContext } from "react";
import pizzaimg from "../assets/pizza.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { totalCart } = useContext(CartContext);
  const { token, setToken, user, setUser } = useContext(UserContext);
  // const token = true

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <img src={pizzaimg} alt="" className="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className={({ isActive }) =>
                isActive ? "active nav-item" : "nav-item "
              } to="/">
              Inicio
            </NavLink>

            <NavLink to={"/profile"} className={({ isActive }) =>
                isActive ? "active nav-item" : "nav-item "
              }>
              Perfil
            </NavLink>
          </ul>
          <ul className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-item" : "nav-item "
              }
              to="/cart"
            >
              <h6 className="nav-link">
                Total: ${totalCart.toLocaleString()}
                <i className=" fa-solid fa-cart-shopping "></i>
              </h6>
            </NavLink>

            {token ? (
              <button
                className="btn-success btn nav-item"
                onClick={(e) => {
                  e.preventDefault;
                  setToken(false);
                  alert("Su cuenta se ha deslogueado");
                }}
              >
                Logout
              </button>
            ) : (
              <NavLink
                className="nav-item"
                to="/login"
              >
                <button className=" btn-success btn">Iniciar Sesion</button>
              </NavLink>
            )}

            <NavLink
              className="nav-item"
              to={"/register"}
            >
              {token ? undefined : (
                <button className="btn-success btn">Regristrarse</button>
              )}
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
