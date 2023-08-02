import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <Card className="my-3">
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.content}</Card.Text>
          <Button variant="primary" className="mx-2">
            <i className="fa-solid fa-pen"></i> Edit
          </Button>
          <Button variant="danger">
            <i className="fa-solid fa-trash-can"></i> Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteItem;
