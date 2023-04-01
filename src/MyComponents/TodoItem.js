import "../index.css";
import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
    <div className="todoItem box">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Remove
      </button>
    </div>
    </>
  );
};
