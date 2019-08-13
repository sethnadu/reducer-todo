import React, {useState, useReducer} from 'react';
import { initialState, formReducer} from "./Reducers/formreducers.js";

import TodoList from "./Components/TodoList.js";
import TodoForm from "./Components/todoform.js"
import './App.css';


// const testTodo = [{
//   item: "test",
//   completed: false,
//   id: Date.now()
// }]


function App() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  console.log(state)


  const handleAdd = newTask => {
    const taskSetup = {
      task: newTask, completed: false, id: Date.now()
    };
   dispatch({ type: "ADD_TASK", payload: taskSetup })
  }

  const toggleTask = id => {
    console.log(id)
     dispatch({ type: "TOGGLE_TASKS", payload: id })
  
    // setAddItem(addItem.map(item => {
    //   if(item.id === id) {
    //     return {
    //       ...item,
    //       completed: !item.completed
    //     }
    //   } else {
    //     return item
    //   }
    // }))
  }

  const clearTasks = () => {
    dispatch({type: "CLEAR_TASKS"})
  }

  return (
    <div className="App"> 
      <h2>Todo List:</h2>
     <div className = "taskDiv">
     {state.item.map(item => ( <TodoList key = {item.id} item = {item} toggleTask = {toggleTask} />))}
     </div>
     <TodoForm handleAdd={handleAdd} clearTasks = {clearTasks}/>
    </div>
  );
}

export default App;
