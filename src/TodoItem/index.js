import React from "react";
import './TodoItem.css';
import { CompletedIcon } from "../TodoIcon/CompletedIcon";
import { DeletedIcon } from "../TodoIcon/DeletedIcon";

function TodoItem({ completed, text, onComplete, onDelete}) {
    return (
        <li className="TodoItem">
            <CompletedIcon 
                completed={completed}
                onComplete={onComplete} 
            />
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`} >{text}</p>
            <DeletedIcon 
                onDelete={onDelete}
            />
        </li>
    );
}

export { TodoItem };