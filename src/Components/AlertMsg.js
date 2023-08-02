import React from "react";
import { Alert } from "react-bootstrap";

const AlertMsg = (props) => {
  return (
    <>
      <Alert variant="primary" dismissible>
        {props.message}
      </Alert>
    </>
  );
};

export default AlertMsg;
