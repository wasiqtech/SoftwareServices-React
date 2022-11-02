import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (

    <div>
    <h3>{todo.sno}-{todo.title}</h3>
    <p>{todo.desc}</p>
    <button type="button" className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>
    Delete</button>


   </div>
    
  )
}
