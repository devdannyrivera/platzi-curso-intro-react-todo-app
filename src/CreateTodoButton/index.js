import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    //props.setShowModal(prevState => !prevState);
    props.setShowModal(!props.showModal);
  };

  return (
    <button className={`CreateTodoButton ${props.showModal && 'Background-red' }`} onClick={onClickButton} >+</button>
  )
}

export { CreateTodoButton }