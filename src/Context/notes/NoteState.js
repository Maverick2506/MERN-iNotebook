import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:8000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    econtent: "",
    etag: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (currentNote) => {
    setShow(true);
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      econtent: currentNote.content,
      etag: currentNote.tag,
    });
  };

  // Get all notes
  const getNotes = async () => {
    try {
      // API CALL
      const response = await fetch(`${host}/api/notes/fetchnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNDAxODgyZWNlZDdjY2E3NWJlYzQ0In0sImlhdCI6MTY5MDU3MDkyNH0.9FkwfNW5TZsDMo_LFpM5UZVgTWcgV8aEA5TdyriFPt4",
        },
      });
      const json = await response.json();
      // console.log(json);
      setNotes(json);
    } catch (error) {
      console.log(error);
    }
  };

  // Add a Note
  const addNote = async (title, content, tag) => {
    try {
      // API CALL
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNDAxODgyZWNlZDdjY2E3NWJlYzQ0In0sImlhdCI6MTY5MDU3MDkyNH0.9FkwfNW5TZsDMo_LFpM5UZVgTWcgV8aEA5TdyriFPt4",
        },
        body: JSON.stringify({ title, content, tag }),
      });

      console.log("Adding a new Note");
      const json = await response.json();
      setNotes(notes.concat(json));
    } catch (error) {
      console.log(error);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      // API CALL
      // eslint-disable-next-line
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNDAxODgyZWNlZDdjY2E3NWJlYzQ0In0sImlhdCI6MTY5MDU3MDkyNH0.9FkwfNW5TZsDMo_LFpM5UZVgTWcgV8aEA5TdyriFPt4",
        },
      });
      // const json = response.json();
      // console.log(json);

      console.log("Deleting The Note With ID: " + id);
      const newNotes = notes.filter((note) => {
        return note._id !== id;
      });
      setNotes(newNotes);
    } catch (error) {
      console.log(error);
    }
  };

  // Edit a Note
  const editNote = async (id, title, content, tag) => {
    try {
      // API CALL
      // eslint-disable-next-line
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNDAxODgyZWNlZDdjY2E3NWJlYzQ0In0sImlhdCI6MTY5MDU3MDkyNH0.9FkwfNW5TZsDMo_LFpM5UZVgTWcgV8aEA5TdyriFPt4",
        },
        body: JSON.stringify({ title, content, tag }),
      });
      // const json = await response.json();
      // console.log(json);

      // Logic for client-side
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id) {
          element.title = title;
          element.content = content;
          element.tag = tag;
        }
      }
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        note,
        notes,
        show,
        setShow,
        setNote,
        addNote,
        deleteNote,
        editNote,
        getNotes,
        handleClose,
        handleShow,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
