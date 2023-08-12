import React from "react";
import { Alert } from "react-bootstrap";

const AlertMsg = (props) => {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <>
      <div style={{ height: "50px" }}>
        {props.alert && (
          <Alert variant={`${props.alert.type}`}>
            <center>
              <strong>{capitalize(props.alert.type)}</strong>:{" "}
              {props.alert.message}
            </center>
          </Alert>
        )}
      </div>
    </>
  );
};

export default AlertMsg;
