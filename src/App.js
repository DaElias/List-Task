import React, { useState } from 'react';
import './App.css';
import Header from './componentes/header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTarea';




const App = () => {

  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar',
        completada: false
      }
    ]);

  const [mostrarTareasCompletadas, cambiarMostrarTareasCompletadas] = useState(false);


  //console.log(tareas);

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


