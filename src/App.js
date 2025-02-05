import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoButtonCreate } from './TodoButtonCreate';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'LAAKAKAKAKAK', completed: true},

];

function App() {
  
  return (
    <>

      <TodoCounter completed={16} total={25}/>
      <TodoCounter completed={2} total={10}/>
      <TodoCounter completed={1} total={4}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <TodoButtonCreate/>
      
    </>
  );
}

export default App;
