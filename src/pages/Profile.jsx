import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const Profile = () => {
  const {token, setToken, user, setUser} = useContext(UserContext)
  return (
    <>
    {
        token ? 
        <div className="divRegister">
            <h2>Bienvenido </h2>
            <h3>Tu email registrado es {user.email}!</h3>
            <button className="btn-success btn" onClick={(e) => { e.preventDefault; setToken(false); alert('Su cuenta se ha deslogueado') }}>Logout</button>
        </div>
        :
        <div className="divRegister">
            <h2>Aun no has iniciado sesion!</h2>
            <div className='buttons'>
            <button class="btn btn-success"><Link to="/register">Regristrarse</Link></button>
            <button class="btn btn-success"><Link  to="/login">Iniciar Sesion</Link></button>
            </div>
        </div>
    }
    </>
  )
}
