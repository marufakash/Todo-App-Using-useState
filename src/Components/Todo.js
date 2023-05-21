import React from "react";
import style from './todo.css';
import { FaTrashAlt } from "react-icons/fa";

const Todo = (props) => {
    const {id, title, des} = props.todo;

    const handleDelete = (id) => {
        props.onDeleteTodo(id);
    }

    return (
        <div className="todo">
            <div>
                <h3>{title}</h3>
                <p>{des}</p>
            </div>
            <div>
                <button onClick={() => handleDelete(id)}><FaTrashAlt /></button>
            </div>
        </div>
    )
}

export default Todo;