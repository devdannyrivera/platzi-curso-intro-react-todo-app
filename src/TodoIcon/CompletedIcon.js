import React from "react";
import { TodoIcon } from ".";

function CompletedIcon({completed, onComplete}){
    return (
        <TodoIcon
            type="check"
            color={completed ? '#4caf50': 'gray'}
            onClick={onComplete}
        />
    )
}

export { CompletedIcon };