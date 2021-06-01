import { useLayoutEffect } from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, cambiarTareas, mostrarTareasCompletadas }) => {

    const toggleCompletada = (id) => {
        //console.log('el id es: ', id);
        cambiarTareas(tareas.map((tareas) => {
            if (tareas.id === id) {
                return { ...tareas, completada: !tareas.completada }
            }
            return tareas;
        }));
    };

    const editarTarea = (id, nuevaTarea) => {
        cambiarTareas(tareas.map((tareas) => {
            if (tareas.id === id) {
                return { ...tareas, texto: nuevaTarea }
            }
            return tareas;
        }));
    };

    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter((tareas) => {
            if (tareas.id !== id) {
                return { tareas }
            }
            return;
        }));
    };

    return (
        <ul className="lista-tareas">
            { tareas.length > 0
                ? tareas.map((tareas) => {
                    if (mostrarTareasCompletadas) {
                        return <Tarea
                            tareas={tareas}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />
                        // * si la tarea no esta completada
                    } else if (!tareas.completada) {
                        return <Tarea
                            tareas={tareas}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />
                    }// * si ya esta completada no la devolvemos
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