import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="divRegister">
        <h2>Lo sentimos, la pagina que estabas buscando, no se encuentra disponible</h2>
        <h3>o cometimos un error nosotros (? </h3>
        <h4>Tambien es posible que seas el tutor corrector testeando</h4>
        <h6>Si, debe ser eso...</h6>
        <br />
        <br />
        <h3>Anyways, aqui tienes un boton para volver al inicio ;)</h3>
        <Link to='/'><button className='btn btn-success '>Volver al incio</button></Link>
    </div>
  )
}
