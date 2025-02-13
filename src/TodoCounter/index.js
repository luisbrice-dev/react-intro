import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
        totalTodos: total,
        completedTodos: completed
    } = React.useContext(TodoContext);

    return (
        <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
    );
}

export { TodoCounter };