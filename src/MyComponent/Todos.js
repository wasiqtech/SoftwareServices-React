import React from "react";
import { TodoItem } from "../MyComponent/TodoItem";

export const Todos = (props) => {
  return (
    
    <div className="container">
      <h3 className="text-left my-2">These are the Question...</h3>
      <hr></hr>
      {props.todos.length == 0 ? (
        <div className="alert alert-danger" role="alert">
          There is no List
        </div>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} onDelete={props.onDelete} key={todo.sno} />
          );
        })
      )}

 {/* {props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} onDelete={props.onDelete} key={todo.sno} />
          );
        })} */}
    </div>
  )
};
