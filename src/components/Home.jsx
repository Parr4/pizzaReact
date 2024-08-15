import React from 'react'
import Header from './Header'
import { Listado } from './Listado'

export const Home = ({productos , add, subtract}) => {
  return (
    <div>
            <Header></Header>
            <Listado productos={productos} add={add} subtract={subtract}></Listado>
    </div>
  )
}
