import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componentes/header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTarea';




const App = () => {
  //* estoy llamando de desde el local storage a las tareas previamente guardadas
  const tareasGuardadas = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  //***  se ejecuta cada vez que el hook que en el hook de tareas se realize un cambio
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tareas));
    //console.log(JSON.stringify(tareas));  // * comvertir la los datos de la lista de tareas en texto, apra guardarlos en Json
  }, [tareas]);
  //console.log(tareas);



  let mostrarCompletadas;
  if (localStorage.getItem("mostrarCompletadas") === null) {
    mostrarCompletadas = true;
  } else {
    mostrarCompletadas = localStorage.getItem("mostrarCompletadas") === 'true' ? mostrarCompletadas = true : mostrarCompletadas = false;
  }
  const [mostrarTareasCompletadas, cambiarMostrarTareasCompletadas] = useState(mostrarCompletadas);
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarTareasCompletadas.toString());
  }, [mostrarTareasCompletadas]);

  return (
    <div className="contenedor">
      <Header
        mostrarTareasCompletadas={mostrarTareasCompletadas}
        cambiarMostrarTareasCompletadas={cambiarMostrarTareasCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarTareasCompletadas={mostrarTareasCompletadas}
      />
    </div>
  );
}


export default App;


