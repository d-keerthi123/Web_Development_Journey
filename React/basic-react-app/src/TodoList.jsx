import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todos,setTodos]=useState([{task:"code",id:uuidv4() , isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task: newTodo, id: uuidv4()}]
        });
        setNewTodo("");
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id !=id));
    }

    let upperCaseAll=()=>{
        setTodos((prevTodo)=>{
            return prevTodo.map((todo)=>{
            return{
                ...todo,task:todo.task.toUpperCase()
            };
        })});
    };

    let lowerCaseAll=()=>{
        setTodos((prevTodo)=>{
            return prevTodo.map((todo)=>{
            return{
                ...todo,task:todo.task.toLowerCase()
            };
        })});
    };

    let upperCaseOne=(id)=>{
        setTodos((prevTodo)=>{
            return prevTodo.map((todo)=>{
            if(todo.id==id){
                return{
                ...todo,task:todo.task.toUpperCase()
            }
        }else{
                return todo;
            }
        })
    });
    };

    let mark=(id)=>{
        setTodos((prevTodo)=>{
            return prevTodo.map((todo)=>{
            if(todo.id==id){
                return{
                ...todo,isDone:true
            }
        }else{
                return todo;
            }
        })
    });
    }
    return(
        <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>&nbsp;&nbsp;
            <button onClick={addNewTask}>Add</button>
            <br></br>
            <br></br>
            <h3>Todo List</h3>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                    <span style={{textDecoration: todo.isDone ? "line-through": "none"}}>{todo.task}</span>&nbsp;&nbsp;
                    
                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>&nbsp;&nbsp;
                    {/* <button onClick={()=>upperCaseOne(todo.id)}>UpperCase One</button> */}
                    <button onClick={()=>mark(todo.id)}>Mark as Done</button>
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCase All</button>&nbsp;&nbsp;
            <button onClick={lowerCaseAll}>LowerCase All</button>
        </div>
    )
}