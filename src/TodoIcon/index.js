import React from "react";
import { MdClose, MdCheck } from 'react-icons/md';
import { IconContext } from "react-icons/lib";
import './TodoIcon.css';

const iconTypes = {
    "check": (
        <MdCheck/>
    ),
    "delete": (
        <MdClose/>
    ),
}

function TodoIcon ({type, color, onClick}) {
    return (
        <span
            className = {`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            <IconContext.Provider
                value={{
                    color,
                    className: `Icon-svg Icon-svg--${type}`
                }}
            >
                {iconTypes[type]}
            </IconContext.Provider>
        </span>
    )
}

export { TodoIcon }