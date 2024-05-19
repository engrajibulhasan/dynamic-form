import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faGripVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

function EditActionButtons({
  allInfo,
  handleModal,
  isButton,
  removeFieldItem,
}) {
  return (
    <div className="col-lg-2 action-buttons">
      {!isButton && (
        <Button variant="light" onClick={() => removeFieldItem(allInfo.index)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      )}

      <Button variant="light" onClick={() => handleModal(allInfo)}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <Button variant="light">
        <FontAwesomeIcon icon={faGripVertical} />
      </Button>
    </div>
  );
}

export default EditActionButtons;
