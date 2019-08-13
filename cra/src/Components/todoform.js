import React, {useState} from "react";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    div: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px",

    },
    button: {
      width: "120px",
      padding: "5px 10px",
      borderRadius: "25px",
      backgroundColor: "#e7ae0f",
      border: "2px solid #8d0901",
      color: "#8d0901",
      cursor: "pointer",
      "&:hover": {
          backgroundColor: "#8d0901",
          border: "2px solid black",
          color: "#e7ae0f"
      }
     
    },
    input: {
      border: "none", 
      borderBottom: "2px solid #8d0901",
      margin: "20px",
      width: "140px"
      
    }
  }));
  

function TodoForm({handleAdd, clearTasks}) {
    const classes = useStyles();

    const [task, setTask] = useState("");

    const handleChange = event => {
        setTask(event.target.value);
        console.log(task)
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleAdd(task)
    }

    const handleRemove = event => {
        event.preventDefault()
        clearTasks()
    }


    return (
        <div className = {classes.div}>
        <form onSubmit = {handleSubmit} className = {classes.div}>
            <input className = {classes.input} name ="item" placeholder = "New Task" value = {task}  onChange = {handleChange}/>
            <button className = {classes.button} onClick = {handleSubmit} type = "submit">Add Task</button>
        </form>
        <button className = {classes.button} onClick = {handleRemove}>Clear Completed</button>
        </div >
    )
}

export default TodoForm;