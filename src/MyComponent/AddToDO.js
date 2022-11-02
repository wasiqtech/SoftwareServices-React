import React, { useState } from "react";

export const AddToDO = (addTodo) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Empty is not allowed");
      return;
    }
    addTodo.addTodo(title, desc);
  };

  return (
    
    <div className="container my-4">
      <h5 className="txt-center">Ask Question About Services</h5>
      <hr></hr>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          />
          <button className="btn btn-success btn-sm my-2">Submit</button>
        </div>
      </form>
    </div>
  );
};
