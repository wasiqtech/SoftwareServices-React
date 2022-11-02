import React from 'react'
import { AddToDO } from "../MyComponent/AddToDO";
import { Todos } from "../MyComponent/Todos";

export const Home = (prop) => {
  return ( 
    <>
     <AddToDO addTodo={prop.addTodo}></AddToDO>
    <Todos todos={prop.todos} onDelete={prop.onDelete}></Todos>
    </>
  )
}
