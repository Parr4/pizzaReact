import React, { useContext } from 'react'
import CardPizza from './CardPizza'
import { PizzaContext } from '../context/PizzaContext'


export const Listado = () => {
  const {productos , setPizza} = useContext(PizzaContext)
  return (
    <div className='container-fluid  row listado'>
        {
          productos.map((producto ,key) => (
            <div className='col-md-3'
            key={key}>
                <CardPizza pizza={producto} setPizza={setPizza}/>
            </div>
          ))  
        }

    </div>
  )
}
