import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import LogicalDemoContent from "./LogicalDemoContent";
import "./ModalAdd.css";

function ModalAdd({ show, handleClose, addInputField, modalData }) {
  const [rigthContent, setRigthContent] = useState();

  //After clicking on input field type
  const handleButtonType = (newFieldType) => {
    setRigthContent(
      <LogicalDemoContent
        newFieldData={{ ...modalData, newFieldType }}
        addInputField={addInputField}
      />
    );
  };

  //Initial Data
  useEffect(() => {
    const initialData = (
      <div className="initial-content text-center">
        <FontAwesomeIcon icon={["fas", "plus"]} />
        <h5>Insert Anything</h5>
        <p>Choose input field type from the left side.</p>
      </div>
    );
    setRigthContent(initialData);
  }, [show]);
  console.log("modalData", modalData);
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body className="modal-body-area">
          <Row>
            <div className="col-lg-3 ul-area">
              <ul>
                <li onClick={() => handleButtonType("text")}>
                  <FontAwesomeIcon icon={["fas", "align-left"]} /> Short Field
                </li>
                <li onClick={() => handleButtonType("textarea")}>
                  <FontAwesomeIcon icon={["fas", "align-justify"]} /> Long Field
                </li>
                <li onClick={() => handleButtonType("email")}>
                  <FontAwesomeIcon icon={["fas", "at"]} /> Email Field
                </li>
                <li onClick={() => handleButtonType("number")}>
                  <FontAwesomeIcon icon={["fas", "hashtag"]} /> Number Field
                </li>
              </ul>
            </div>

            <div className="col-lg-9 example-area">
              {rigthContent && rigthContent}
            </div>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;
