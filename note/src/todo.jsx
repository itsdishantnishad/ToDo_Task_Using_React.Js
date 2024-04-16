import { useState } from "react";

import { v4 as uuidv4} from "uuid";
function ToDo() {
  let [todo, setTodo] = useState([{task:"sample-task", id:uuidv4()}]);
  let [newTodo, setNewTodo] = useState("");

  let updateTodoValue = (event)=>{
    setNewTodo(event.target.value);
  }

  let addNewTask = () => {
    setTodo((prevtask)=>{
      return [...prevtask,{task:newTodo,id:uuidv4()}];
    });
  };

  let deleteToDo = (id)=>{
     setTodo(todo.filter((todo)=> todo.id !=id))
  }
 let upperCase = ()=>{
    setTodo(todo.map((todo)=>{
       return {
          ...todo, task: todo.task.toUpperCase(),
       }
    })
    )
 }
 
  return (
    <div>
      <h1> Add Your Notes </h1>
      <input type="text" placeholder="enter Your Notes" onChange={updateTodoValue} value = {newTodo}></input>
      <br></br><br></br><br></br>
      <button onClick={addNewTask}> SaveNote </button>
      <h4>Task Todo</h4>
      <ul>
      {
        todo.map((todo)=>{
            return(
                <li key = {todo.id}>
                <span>{todo.task}</span>
                &nbsp; &nbsp; &nbsp;
                <button onClick = {()=> deleteToDo(todo.id)} >Delete</button>
                </li>
            )
        })
      }
      </ul>
      <button onClick={upperCase}>UpperCaseAll</button>
    </div>
  );
}

export default ToDo;
