import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';

const FormularioTareas = ({ tareas, cambiarTareas }) => {
    const [inputTarea, cambiarImputTareas] = useState('');
    const handelInput = (e) => {
        cambiarImputTareas(e.target.value);
    };

    const handeleSubmit = (e) => {
        // * no se refresca la pagina...
        e.preventDefault();

        if (inputTarea !== "") {
            cambiarTareas([
                ...tareas,
                {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false,
                },
            ]);
        }
        cambiarImputTareas("");

    };

    return (
        <form action="" className="formulario-tareas" onSubmit={handeleSubmit}>
            <input
                value={inputTarea}
                type="text"
                className="formulario-tareas__input"
                placeholder="Escribe Una tarea"
                onChange={(e) => handelInput(e)}
            />
            <button type="submit" className="formulario-tareas__btn">
                <FontAwesomeIcon
                    icon={faPlusSquare}
                    className="formulario-tareas__icono-btn"
                />
            </button>
        </form>
    );
};

export default FormularioTareas;
