import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const { title, completed, id } = props.todo;
    // console.log(completed)
    return (
        <div className='todo-styles'>
            <h3>User ID: {id}</h3>
            <h4>Title: {title}</h4>
            {/* <h5>Completion Status: {completed + ''}</h5> */}
            <h5>Completion Status: {completed.toString()}</h5>
        </div>
    );
};

export default Todo;