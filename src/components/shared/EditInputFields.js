import React from "react";
import { Form, Row } from "react-bootstrap";
import EditActionButtons from "./EditActionButtons";
import EditPageSubmitButton from "./EditPageSubmitButton";

function EditInputFields({
  allInfo,
  handleModal,
  addInputField,
  removeFieldItem,
  updatePlaceholder,
}) {
  const { type, placeholder, index } = allInfo;

  const filedFilter = () => {
    if (type === "textarea") {
      return (
        <Row className="single-input-area mb-3">
          <EditActionButtons
            allInfo={allInfo}
            handleModal={handleModal}
            addInputField={addInputField}
            removeFieldItem={removeFieldItem}
          />
          <div className="col-lg-10">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={placeholder}
              onChange={(e) => updatePlaceholder(e.target.value, index)}
            />
          </div>
        </Row>
      );
    } else if (type === "button") {
      return (
        <>
          <Row className="single-input-area mb-3">
            <EditActionButtons
              allInfo={allInfo}
              handleModal={handleModal}
              addInputField={addInputField}
              isButton
            />
          </Row>
          <EditPageSubmitButton
            btnInfo={allInfo}
            updatePlaceholder={updatePlaceholder}
          />
        </>
      );
    } else {
      let newType = "text";
      return (
        <Row className="single-input-area mb-3">
          <EditActionButtons
            allInfo={allInfo}
            handleModal={handleModal}
            addInputField={addInputField}
            removeFieldItem={removeFieldItem}
          />
          <div className="col-lg-10">
            <Form.Control
              type={newType}
              placeholder={placeholder}
              onChange={(e) => updatePlaceholder(e.target.value, index)}
            />
          </div>
        </Row>
      );
    }
  };
  return <>{filedFilter()}</>;
}

export default EditInputFields;
