import React, { useState } from "react";
import NewTodo from "./NewTodo";
import style from './home.css';
import Todos from "./Todos";

const dummyTodos = [
    {
        id: 101,
        title: 'Maruf Akash',
        des: 'This is maruf akash from Bangladesh.'
    },
    {
        id: 102,
        title: 'Sumaya Islam',
        des: 'Thsi is sumaya islam from Gopalgang.'
    }
];

const Home = () => {
    const [todos,setTodos] = useState(dummyTodos);

    // add todo
    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    }

    // delete todo
    const handleDeleteTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    }

    return (
        <div className="home">
            <h1>Todo App Using useState</h1>
            <NewTodo onAddTodo={handleAddTodo} />
            <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
    )
}

export default Home;