import './CreateTodoButton.css';

function TodoButtonCreate() {
    return (
        <button className="CreateTodoButton" onClick={(event) => {console.log('le diste click al boton'); console.log(event.target) }}>+</button>
    );
}

export { TodoButtonCreate };