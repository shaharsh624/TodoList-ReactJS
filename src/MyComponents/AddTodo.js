import "../App.css";
import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  let submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Descrition can's be blank");
    }
    else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  let myStyle= {
    "padding-left": "100px",
    "padding-right": "100px",
  }

  return (
    <div className="container my-3" style={myStyle}>
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control input"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-success btn-sm">
          Add
        </button>
      </form>
    </div>
  );
};
