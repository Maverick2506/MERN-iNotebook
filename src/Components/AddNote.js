import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
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
            minLength={3}
            required
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
            minLength={5}
            required
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
        <button
          disabled={note.title.length < 3 || note.content.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add the Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
