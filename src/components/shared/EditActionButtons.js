import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

function EditActionButtons({
  allInfo,
  addInputField,
  handleModal,
  isButton,
  removeFieldItem,
}) {
  return (
    <div className="col-lg-2 action-buttons">
      {!isButton && (
        <Button variant="light" onClick={() => removeFieldItem(allInfo.index)}>
          <FontAwesomeIcon icon={["far", "trash-alt"]} />
        </Button>
      )}

      <Button variant="light" onClick={() => handleModal(allInfo)}>
        <FontAwesomeIcon icon={["fas", "plus"]} />
      </Button>
      <Button variant="light">
        <FontAwesomeIcon icon={["fas", "grip-vertical"]} />
      </Button>
    </div>
  );
}

export default EditActionButtons;
