import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import noteContext from "../Context/notes/noteContext";

const NoteItem = (props) => {
  const { note } = props;
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { deleteNote, handleShow } = context;

  return (
    <>
      <div className="col-md-3">
        <Card className="my-3">
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.content}</Card.Text>
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => handleShow(note)}
            >
              <i className="fa-solid fa-pen mx-2"></i>
            </Button>

            <Button
              variant="danger"
              className="mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            >
              <i className="fa-solid fa-trash-can mx-2"></i>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default NoteItem;
