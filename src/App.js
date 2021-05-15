import React, { useState } from 'react';
import './App.css';
import Header from './componentes/header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTarea';


const App = () => {

  const [tareas, cambiarTareas] = useState(
    [
      {
        id:1,
        texto: 'Lavar',
        completada:false
      },
      {
        id:2,
        texto: 'dormir',
        completada:true
      }
    ]);


  console.log(tareas);

  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </div>
  );
}


export default App;
