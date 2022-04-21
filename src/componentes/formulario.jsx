import React, {useContext, useState} from "react";
import classes from "./formulario.module.scss";
import "reactjs-popup/dist/index.css";
//Usamos reactjs-popup para crear el lightbox de manera sencilla
import Popup from "reactjs-popup"; 
import Contexto from "../contexto";

const Formulario = () => {    

  const nombreSeleccionado = useContext(Contexto)
  const [lightbox, setLightbox] = useState(false)

  const activarPopup = ()=>{
    setLightbox(true)
    setTimeout(() => {setLightbox(false)}, 5000);}
   
  const [Info, setInfo] = useState({
    nombre: "",
    email: "",
    celular: "",
    edad:"",
  });

  const manejarCambio = (evento) => {
    setInfo({ ...Info, [evento.target.name]: evento.target.value });
        
  };

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    console.log(Info)
    activarPopup()
    setInfo({ 
      nombre: "",
      email: "", 
      celular: "", 
      edad:"" })  
  };


  return (
    <div  className={classes.contenedor}>
      <h3 className={classes.contenedor__bienvenida}>
        {`Hola, bienvenido, sabemos que quieres viajar con ${nombreSeleccionado.nombre}. Porfavor diligencia el siguiente formulario:`}
      </h3>
      <form  onSubmit={manejarSubmit}>
        <div>
          <input onChange={manejarCambio}
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={Info.nombre}
            title ="Nombre completo"
            pattern="[^()/><\][\\\x22,;|]+"
            required
          />
        </div>
        <div>
          <input onChange={manejarCambio}
            type="email"
            name="email"
            placeholder="Email"
            value={Info.email}
            pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
            title="No se permiten caracteres especiales"
            required
          />
        </div>
        <div>
          <input onChange={manejarCambio}
            type="tel"
            name="celular"
            placeholder="Celular"
            value={Info.celular}
            required
            pattern="[0-9]{10}"
            title= "Numero de 10 digitos"
          />
        </div>
        <div>
          <input onChange={manejarCambio}
            type="number"
            name="edad"
            placeholder="Edad"
            value={Info.edad}
            required
            min={18}
            max={100}
            title= "Solo se permiten personas mayores de edad"
          />
        </div>
        <div>
          <button className={classes.boton__subir}>Submit Contact</button>
        </div>
      </form>
      <Popup open={lightbox} 
        position="right center" >
        <h3>Tu información fue enviada con éxito, estaremos en contacto contigo</h3> 
      </Popup>
    </div>
  )
}

export default Formulario
