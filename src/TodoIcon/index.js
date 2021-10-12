import React from "react";
import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";
import './TodoIcon.css';

const iconTypes = {
    "check": (
        <AiOutlineCheck className="Icon-svg Icon-svg--check"/>
    ),
    "delete": (
        <AiOutlineDelete className="Icon-svg Icon-svg--delete"/>
    ),
}

function TodoIcon ({type, color, onClick}) {
    return (
        <span
            className = {`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            <IconContext.Provider
                value={{color}}
            >
                {iconTypes[type]}
            </IconContext.Provider>
        </span>
    )
}

export { TodoIcon }