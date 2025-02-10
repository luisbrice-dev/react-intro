import RectComponent  from './check.svg';
import { RectComponent as DeleteSVG } from './delete.svg';

function TodoIcon({ type, color }) {
    return (
        <span 
            className={`Icon Icon-svg Icon-${type}`}
        >
            <RectComponent/>
        </span>
    )
}

export { TodoIcon }