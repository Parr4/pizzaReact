import React, { useContext } from 'react'
import CardPizza from './CardPizza'
import { PizzaContext } from '../context/PizzaContext'


export const Listado = () => {
  const {productos , setPizza} = useContext(PizzaContext)
  return (
    <div className='container  catalogDisplay'>
        {
          productos.map((producto ,key) => (
            <div className=''
            key={key}>
                <CardPizza pizza={producto} setPizza={setPizza}/>
            </div>
          ))  
        }

    </div>
  )
}
