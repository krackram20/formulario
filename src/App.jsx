
import Menu from "./componentes/menu";
import Formulario from "./componentes/formulario";
import Contexto from "./contexto";
import { useState } from "react";



function App() {

  const [nombre, setNombre] = useState("Avianca")
  const cambiarNombre = nuevo =>{
    setNombre(nuevo)
  }

  return (
    <div className="App">
      <Contexto.Provider value={{nombre, cambiarNombre }}>
        <Menu />
        <Formulario />
      </ Contexto.Provider>
    </div>
  );
}

export default App;
