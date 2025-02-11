import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUi';

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//    {text: 'Cortar cebolla', completed: true},
//    {text: 'Tomar el curso de intro a React', completed: false},
//    {text: 'Llorar con la llorona', completed: false},
//    {text: 'LAAKAKAKAKAK', completed: true},

// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);	
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('log 1');

  
  //React.useEffect(() => {
  //  console.log('loooooog 2');
  //});

  // React.useEffect(() => {
  //   console.log('loooooog 2');
  // }, []);

  // React.useEffect(() => {
  //   console.log('loooooog 2');
  // }, [totalTodos]);

  // console.log('log 3');

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
      loading={loading}
      error={error}
    />
  )
}

export default App;
