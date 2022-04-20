import React, { useContext} from "react";
import classes from "./menu.module.scss";
import aerolineasJSON from "../nombres";
import Contexto from "../contexto";

const Menu = () => {

  let nombreSeleccionado = useContext(Contexto)
    
  const nombres = JSON.parse(aerolineasJSON)
    
  // actualiza el state para el nombre del formulario
  const conseguirNombre = evento=>{
    const nuevoNombre = evento.target.innerText
    nombreSeleccionado.cambiarNombre(nuevoNombre) 
  }

  return (
    <header className={classes.menu}>
      <div>
        <h2 className={classes.menu__titulo}>Bon Voyage</h2>
      </div>
      <nav className={classes.menu__contenido}>
        <ul>
          {/*Usamos map para generar los elementos li de manera dinamica */}
          {nombres.aerolineas.map(li =>{ 
            return <li key={li.id}  onClick ={conseguirNombre}>
              {li.name}
            </li>
          })}
        </ul>
      </nav>
    </header>
  )   
}

export default Menu;