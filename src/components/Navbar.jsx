import React from 'react'
import pizzaimg from '../assets/pizza.webp'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(props) {
  const total = 25500;

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
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Perfil</a>
            </li>

          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" >Total: ${total.toLocaleString()}</a>
            </li>

            <li class="nav-item">
              <a class="nav-link">{props.token ? <button onClick={(e)=> {e.preventDefault; props.setToken(false); alert('Su cuenta se ha deslogueado')}}>Logout</button> : <button>Iniciar Sesion</button>}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{props.token ? undefined : <button>Regristrarse</button>}</a>
            </li>

          </ul>



        </div>
      </div>
    </nav>
  )
}
