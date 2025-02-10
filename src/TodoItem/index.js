import './TodoItem.css';
import { FaCheck } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import '../TodoIcon/TodoIcon.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <FaCheck className={`Icon Icon-container-check ${props.completed && "Icon-container-check--active"} Icon-svg`} onClick={props.onComplete}/>
        
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <TiDelete className="Icon Icon-container-delete  Icon-svg" onClick={props.onDelete}/> 
        </li>//
    );
}

export { TodoItem };