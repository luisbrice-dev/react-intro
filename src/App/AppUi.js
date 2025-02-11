import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';

function AppUI({loading, error, totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }) {
    return (
        <>

            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                { loading && <p>loading...</p> }
                { error && <p>error...</p> }
                { (!loading && !searchedTodos.length) && <p>There are no todos</p> }

                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>

            <CreateTodoButton />

        </>
    );
}

export { AppUI };