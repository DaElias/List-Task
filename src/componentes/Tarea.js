import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faEdit, faTimes, faSquare } from "@fortawesome/free-solid-svg-icons";


const Tareas = ({ tareas, toggleCompletada, editarTarea,borrarTarea }) => {
    const [editarTareas, editarTareasCambiar] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tareas.texto);

    const handleSubmit = (e) => {
        e.preventDefault();

        editarTarea(tareas.id, nuevaTarea);
        editarTareasCambiar(false);
    }
    
    return (
        <li
            className="lista-tareas__tarea"
            key={tareas.id}
        >
            <FontAwesomeIcon icon={tareas.completada ? faCheckSquare : faSquare}
                className="lista-tareas__icono lista-tareas__icono-check"
                onClick={() => toggleCompletada(tareas.id)}
            />
            <div className='lista-tareas__texto'>
                {editarTareas ?
                    <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                        <input
                            type='text'
                            className='formulario-editar-tarea__input'
                            value={nuevaTarea}
                            onChange={(e) => cambiarNuevaTarea(e.target.value)}
                        >
                        </input>
                        <button
                            type='submit'
                            className='formulario-editar-tarea__btn'
                        >Actualizar</button>
                    </form>
                    :
                    tareas.texto
                }
            </div>
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon icon={faEdit}
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => editarTareasCambiar(!editarTareas)}
                />
                <FontAwesomeIcon icon={faTimes}
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={()=>borrarTarea(tareas.id)}
                />
            </div>
        </li>
    );
}


export default Tareas;
