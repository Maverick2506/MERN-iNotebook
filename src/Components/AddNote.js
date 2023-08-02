import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", content: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.content, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add A Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter a Title for your <strong>Note</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Enter Content for your <strong>Note</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            name="content"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Enter Tag for your <strong>Note</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
