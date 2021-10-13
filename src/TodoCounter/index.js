import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">
            {(completedTodos < totalTodos)
                ? 
                    (totalTodos > 1 
                        ? `Has completado ${completedTodos} ${completedTodos != 1 ? 'tareas' : 'tarea'} de las ${totalTodos} tareas registradas`
                        : 'Tienes una tarea pendiente'
                    )
                : 'No tienes tareas pendientes'
            }
        </h2>
    );
}

export { TodoCounter };