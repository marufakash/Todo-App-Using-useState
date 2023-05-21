import React, { useState } from "react";
import style from './newtodo.css';
import { v4 as uuidv4 } from 'uuid';

const NewTodo = (props) => {
    const [todos, setTodos] = useState({title: '', des: ''});
    const {title, des} = todos;

    const handleChange = (e) => {
        setTodos((prevTodos) => {
            return {...prevTodos, [e.target.name]: e.target.value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {id: uuidv4(), title: todos.title, des: todos.des};
        props.onAddTodo(newTodo);
        setTodos({title: '', des: ''});
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title : </label>
                    <input type="text" onChange={handleChange} value={title} name="title" required />
                </div>
                <div>
                    <label htmlFor="des">Description : </label>
                    <textarea name="des" onChange={handleChange} value={des} cols="30" rows="5" required></textarea>
                </div>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodo;