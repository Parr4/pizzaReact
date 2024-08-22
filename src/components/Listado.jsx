import React from 'react'
import CardPizza from './CardPizza'


export const Listado = ({productos , add, subtract, setPizza}) => {
  return (
    <div className='container-fluid  row listado'>
        {
          productos.map((producto ,key) => (
            <div className='col-md-3'
            key={key}>
                <CardPizza pizza={producto} add={add} subtract={subtract} setPizza={setPizza}/>
            </div>
          ))  
        }

    </div>
  )
}
