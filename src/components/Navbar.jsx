import React, { useContext } from 'react'
import pizzaimg from '../assets/pizza.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';


export default function Navbar(props) {
  const {totalCart} = useContext(CartContext)

  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src={pizzaimg} alt="" className='logo' /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" to="/" aria-current="page" >Inicio</Link>
            </li>
            <li class="nav-item">
              <Link to="/profile" class="nav-link" href="#">Perfil</Link>
            </li>

          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className='nav-link' to="/cart">
                <i class=" fa-solid fa-cart-shopping " ></i>
              </Link>

            </li>
            <li class="nav-item">
              <Link to="/cart" className="nav-link" >Total: ${totalCart.toLocaleString()}</Link>
            </li>

            <li class="nav-item">
              {props.token ? <button className="btn-success btn" onClick={(e) => { e.preventDefault; props.setToken(false); alert('Su cuenta se ha deslogueado') }}>Logout</button> : <Link  to="/login"> <button className=" btn-success btn">Iniciar Sesion</button></Link>}
            </li>
            <li class="nav-item">
              {props.token ? undefined :<Link to="/register"> <button className=" btn-success btn">Regristrarse</button></Link>}
            </li>

          </ul>



        </div>
      </div>
    </nav>
  )
}
