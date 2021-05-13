import React,{useState} from 'react';
import './App.css';
import Header from './componentes/header';
import FormularioTareas from './componentes/FormularioTareas';

const App = () => {

  const [tareas, cambiarTareas]=useState(
    [
      {
        id:1,
        text: 'Lavar',
        completada:false
      },{
        id:2,
        text: 'comprar armario',
        completada:false
      }
    ]);


    console.log(tareas);

  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  );
}


export default App;
