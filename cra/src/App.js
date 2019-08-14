import React, {useState, useReducer} from 'react';
import { initialState, formReducer} from "./Reducers/formreducers.js";
import { makeStyles } from '@material-ui/styles';

import TodoList from "./Components/TodoList.js";
import TodoForm from "./Components/todoform.js"
import './App.css';


const useStyles = makeStyles(theme => ({
  div: {
    width: "400px",
    textAlign: "center",
    margin: "20px auto",
    border: "4px solid #8d0901",
    backgroundColor: "#e7ae0f",

  },
  title: {
    fontSize: "2rem",
    textDecoration: "underline"
    
}
 
}));

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const classes = useStyles();



  const handleAdd = newTask => {
    const taskSetup = {
      task: newTask, completed: false, id: Date.now()
    };
   {newTask !== "" && dispatch({ type: "ADD_TASK", payload: taskSetup }) }
  }

  const toggleTask = id => {
    console.log(id)
     dispatch({ type: "TOGGLE_TASKS", payload: id })
  }

  const clearTasks = () => {
    dispatch({type: "CLEAR_TASKS"})
  }

  return (
    <div className={classes.div}> 
      <h2 className={classes.title}>Todo List:</h2>
     <div className = "taskDiv">
     {state.item.map(item => ( <TodoList key = {item.id} item = {item} toggleTask = {toggleTask} />))}
     </div>
     <TodoForm handleAdd={handleAdd} clearTasks = {clearTasks}/>
    </div>
  );
}

export default App;
