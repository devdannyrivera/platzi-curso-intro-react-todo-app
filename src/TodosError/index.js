import React from "react";
import './TodosError.css';

function TodosError ({error}) {
    return (
        <div className="TodosError">
            <p>{error}</p>
        </div>
    )
}

export { TodosError };