import react, { useLayoutEffect } from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, cambiarTareas }) => {

    const toggleCompletada = (id) => {
        console.log('el id es: ', id);
        cambiarTareas(tareas.map((tareas) => {
            if (tareas.id === id) {
                return { ...tareas, completada: !tareas.completada }
            }
            return tareas;
        }));
    };

    return (
        <ul className="lista-tareas">
            { tareas.length > 0
                ? tareas.map((tareas) => {
                    return <Tarea
                            tareas={tareas}
                            toggleCompletada={toggleCompletada}
                    />
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