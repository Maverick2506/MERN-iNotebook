import React, { useContext, useEffect } from "react";
import noteContext from "../Context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Notes = () => {
  const context = useContext(noteContext);
  const {
    note,
    notes,
    getNotes,
    handleClose,
    show,
    setNote,
    setShow,
    editNote,
  } = context;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.econtent, note.etag);
    setShow(false);
    console.log("Updating Note...", note);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <form className="my-3">
          <Modal.Header closeButton>
            <Modal.Title>Edit Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="etitle" className="form-label">
                Enter a Title for your <strong>Note</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="etitle"
                name="etitle"
                value={note.etitle}
                onChange={onChange}
                minLength={3}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="econtent" className="form-label">
                Enter Content for your <strong>Note</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="econtent"
                name="econtent"
                value={note.econtent}
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="etag" className="form-label">
                Enter Tag for your <strong>Note</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="etag"
                name="etag"
                value={note.etag}
                onChange={onChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              disabled={note.etitle.length < 3 || note.econtent.length < 5}
              variant="primary"
              onClick={handleClick}
            >
              Update Note
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container mx-3">
          {notes.length === 0 && "No Notes to display"}
        </div>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
