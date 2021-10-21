import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModalAdd.css";
import LogicalDemoContent from "./LogicalDemoContent";

function ModalAdd(props) {
  const{show,onHide,handleClose,addInputField,modalData}=props;
  console.log('Current field information in ModalAdd.js:',modalData);
  const {currentPage,prevIndex,prevFieldType}=modalData;
  
  const [rigthContent, setRigthContent] = useState();
  

  //After clicking on input field type
  const handleButtonType = (newFieldType) => {
    console.log(newFieldType);
    setRigthContent(<LogicalDemoContent allInfo={{...modalData,newFieldType:newFieldType}} addInputField={addInputField}/>);
  };

  //Initial Data
  useEffect(() => {
    const initialData = (
      <>
        <div className="initial-content text-center">
          <FontAwesomeIcon icon={["fas", "plus"]} />
          <h5>Insert Anything</h5>
          <p>Choose input field type from the left side.</p>
        </div>
      </>
    );
    setRigthContent(initialData);
  }, []);

  return (
    <>
     

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body className="modal-body-area">
          <Row>
            <div className="col-lg-3 ul-area">
              <ul>
                <li onClick={() => handleButtonType("text")}>
                  <FontAwesomeIcon icon={["fas", "align-left"]} /> Short Answer
                </li>
                <li onClick={() => handleButtonType("textarea")}>
                  <FontAwesomeIcon icon={["fas", "align-justify"]} /> Long
                  Answer
                </li>
                <li onClick={() => handleButtonType("email")}>
                  <FontAwesomeIcon icon={["fas", "at"]} /> Email
                </li>
                <li onClick={() => handleButtonType("number")}>
                  <FontAwesomeIcon icon={["fas", "hashtag"]} /> Number
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
