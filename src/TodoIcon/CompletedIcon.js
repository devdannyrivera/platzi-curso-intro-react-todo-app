import React from "react";
import { TodoIcon } from ".";

function CompletedIcon({completed, onComplete}){
    return (
        <TodoIcon
            type="check"
            color={completed ? '#00d5ff': 'gray'}
            onClick={onComplete}
        />
    )
}

export { CompletedIcon };