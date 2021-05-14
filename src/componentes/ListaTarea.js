import react, { useLayoutEffect } from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas }) => {
    return (
        <ul className="lista-tareas">
            { tareas.length > 0
                ? tareas.map((tareas) => {
                    return <Tarea tareas={tareas} />
                })
                :
                <div className='lista-tareas__tarea'>
                    ~No hay tareas Agregadas~
                </div>
            }
        </ul>
    )
}

export default ListaTareas;