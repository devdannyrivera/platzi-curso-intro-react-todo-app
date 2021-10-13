import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosLoading } from "../TodosLoading";
import { TodosEmpty } from "../TodosEmpty";
import { TodosError } from "../TodosError";

function AppUI() {
    const {
        error,
        loading,
        todos,
        completeTodo,
        deleteTodo,
        searchValue,
        showModal,
        setShowModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !todos.length && !error) && <TodosEmpty />}
                {todos
                    .filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((todo, index) => (
                        <TodoItem key={index} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(index)} onDelete={() => deleteTodo(index)} />
                    ))}
            </TodoList>

            {showModal && (
                <Modal>
                    <TodoForm /> 
                </Modal>
            )}
            <CreateTodoButton
                setShowModal={setShowModal}
                showModal={showModal}
            />
        </React.Fragment>
    );
}

export { AppUI };