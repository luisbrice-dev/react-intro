import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const { 
        setOpenModal,
        addTodo,   
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);     
    }

    const onCancel = (event) => {
        setOpenModal(false);     
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={ onSubmit }>
            <label >Escribe tu nuevo Todo</label>
            <textarea placeholder="Cortar la cebolla" value={newTodoValue} onChange={onChange} ></textarea>

            <div className='TodoForm-buttonContainer'>
                <button type='button' className="TodoForm-button TodoForm-button--cancel" onClick={ onCancel }>Cancelar</button>
                <button type='submit' className="TodoForm-button TodoForm-button--add" >añadir</button>
            </div>

        </form>
    );

}

export { TodoForm };