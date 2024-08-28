import React from 'react'
import Header from '../components/Header'
import { Listado } from '../components/Listado'

export const Home = ({productos , add, subtract, setPizza}) => {
  return (
    <div>
            <Header></Header>
            <Listado productos={productos} add={add} subtract={subtract} setPizza={setPizza}></Listado>
    </div>
  )
}
