import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    // console.log(todos)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
    }, [])
    return (
        // <div className='layout'>
        <div>
            <h1>Todos Container</h1>

            <div className='layout'>
                {
                    todos.map(todo => <Todo
                        todo={todo}
                        key={todo.id}></Todo>)
                }
            </div>
        </div>
    );
};

export default Todos;