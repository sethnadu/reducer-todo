import React from "react";

function TodoList({item, toggleTask}) {

    return (
        <div className = {`task${item.completed ?  'completed'  : ''}`}
         onClick = {() => toggleTask(item.id)}>
            <p>{item.task}</p>
        </div>
    )
}

export default TodoList;