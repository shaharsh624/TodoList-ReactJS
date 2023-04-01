import "../index.css";
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

  return (
    <div className="addContainer">
      <h3>Add a Todo</h3>
      <form onSubmit={submit} className="">
        <div className= "my-3 box2">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"  
          />
        </div>

        <div className=" mb-3 box2">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};
