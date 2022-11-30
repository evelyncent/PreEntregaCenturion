import React from 'react'
import './NavBar.css'
import { Carrito } from '../Carrito/Carrito'

const NavBar = () => {
  return (
    <>
    <div className="nav">
      <ul className="menu">
        <li className="list">Peliculas</li>
        <li className="list">Entretenimiento</li>
        <li className="list">Deportes</li>
        <li className="list">Musica</li>
        <li className="list">Series</li>
        
        
      </ul>
      <p className='Numero'>1</p>
      <Carrito/>
      <ul
        style={{
          display: "flex",
          paddingBottom: "0.5em",
          margin: "0",
          paddingRight: "0",
        }}
      >
        

      </ul>
    </div>
  </>
  )
}

export default NavBar