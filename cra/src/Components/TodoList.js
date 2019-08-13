import React from "react";

function TodoList({item, toggleTask}) {

    return (
        <div onClick = {() => toggleTask(item.id)}>
            <p>{item.item}</p>
        </div>
    )
}

export default TodoList;