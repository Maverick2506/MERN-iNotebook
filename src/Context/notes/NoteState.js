import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64c94b4cc4adcb4dae0caa2d",
      user: "64c401882eced7cca75bec44",
      title: "New Title",
      content: "Content",
      tag: "tag",
      date: "2023-08-01T18:13:32.426Z",
      __v: 0,
    },
    {
      _id: "64c94b50c4adcb4dae0caa2f",
      user: "64c401882eced7cca75bec44",
      title: "New Title 2",
      content: "Content",
      tag: "tag",
      date: "2023-08-01T18:13:36.495Z",
      __v: 0,
    },
    {
      _id: "64c94b50c4adcb4dfe0caa2f",
      user: "64c401882eced7cca75bec44",
      title: "New Title 3",
      content: "Content",
      tag: "tag",
      date: "2023-08-01T18:13:36.495Z",
      __v: 0,
    },
    {
      _id: "64c94b50c4adcb4dad0caa2f",
      user: "64c401882eced7cca75bec44",
      title: "New Title 4",
      content: "Content",
      tag: "tag",
      date: "2023-08-01T18:13:36.495Z",
      __v: 0,
    },
    {
      _id: "64c94b50c4adcb4dae0caa3f",
      user: "64c401882eced7cca75bec44",
      title: "New Title 5",
      content: "Content",
      tag: "tag",
      date: "2023-08-01T18:13:36.495Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
