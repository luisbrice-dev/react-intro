import React from 'react';
import { TodoIcon } from './TodoIcon';
function DeleteIcon(){
    return (
       <TodoIcon type="delete" color="red">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> */}
                {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                {/* <path fill="red" d="M19 6h-2V4h-2v2H7V4H5v2H3v16h18V6h-2zm-8 14H5v-2h6v2zm0-4H5v-2h6v2zm0-4H5V8h6v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z"/> */}
            {/* </TodoIcon></svg> */}
       </TodoIcon> 
    );
}

export { DeleteIcon }