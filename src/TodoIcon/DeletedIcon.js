import React from "react";
import { TodoIcon } from ".";

function DeletedIcon({ onDelete }){
    return (
        <TodoIcon
            type="delete"
            onClick={onDelete}
        />
    )
}

export { DeletedIcon };