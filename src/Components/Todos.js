import React from "react";
import Todo from "./Todo";
import style from './todos.css';

const Todos = (props) => {
    return (
        <div className="todos">
            {props.todos.map((todo) => <Todo onDeleteTodo={props.onDeleteTodo} key={todo.id} todo={todo} />)}
        </div>
    )
}

export default Todos;