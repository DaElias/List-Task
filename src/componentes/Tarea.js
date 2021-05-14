import react from 'react';
const Tareas = ({ tareas }) => {
    return (
        <li 
        className="lista-tareas__tarea" 
        key={tareas.id}>{tareas.texto}
        </li>
    );
}


export default Tareas;