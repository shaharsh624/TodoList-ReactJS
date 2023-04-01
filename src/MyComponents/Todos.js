import "../index.css";
import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "40vh",
  };
  return (
    <div className="showContainer" style={myStyle}>
      <h3 className="" >Todos List</h3>
      {props.todos.length === 0
        ? "Congrats! Nothing to Do"
        : props.todos.map((todo) => {
            return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
            );
          })}
    </div>
  );
};
