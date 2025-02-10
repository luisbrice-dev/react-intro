import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUi';

/*
const defaultTodos = [
   {text: 'Cortar cebolla', completed: true},
   {text: 'Tomar el curso de intro a React', completed: false},
   {text: 'Llorar con la llorona', completed: false},
   {text: 'LAAKAKAKAKAK', completed: true},

];
*/

function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);	
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
