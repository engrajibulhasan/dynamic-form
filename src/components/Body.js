import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Body.css";
import Navigation from "./Navigation";
import EditInputFields from "./shared/EditInputFields";
import ModalAdd from "./shared/ModalAdd";

function Body() {
  //Field Data
  const [formName, setFormName] = useState("Form Title");
  const [fields, setFields] = useState([
    {
      page: 1,
      type: "button",
      placeholder: "Button Page 1",
    },
  ]);

  // Modal Code
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalData, setModalData] = useState({
    currentPage: "",
    prevIndex: "",
    prevFieldType: "",
    newFieldType: "",
  });
  //End Modal related code

  // Preview Modal
  const [fullscreen, setFullscreen] = useState(true);
  const [previewModal, setPreviewModal] = useState(false);
  const [previewFields,setPreviewFields]=useState([])
  // Preview Modal ends

  useEffect(()=>{
    // const initialFormPreview=fields.filter(dt=>dt.page===1);
    // setPreviewFields(initialFormPreview);
    console.log('UseEffectHitted');
  },[])

  //preview
  const preview = () => {
    setFullscreen('lg-down');
    setPreviewModal(true);
  };

  // Add New Page functionality
  const [totalPage, setTotalPage] = useState(1);
  const addNewPage = () => {
    let oldFields = [...fields];
    const currentPage = totalPage + 1;
    const newPageBtn = {
      page: currentPage,
      type: "button",
      placeholder: "Next Page",
    };
    oldFields.push(newPageBtn);
    setFields(oldFields);
    setTotalPage(currentPage);
  };

  // Page Remove functionality
  const removePage = (pageNumber) => {
    //setTotalPage(totalPage-1);
    console.log("Remove page number", pageNumber);
    const keepFields = fields.filter((dt) => dt.page != pageNumber);
    setFields(keepFields);
    setTotalPage(totalPage - 1);
    console.log("after removal", fields);
  };

  //Single field removal functionality
  const removeFieldItem = (index) => {
    console.log("remove index number", index);
    let oldFields = [...fields];
    oldFields.splice(index, 1);
    setFields(oldFields);
  };

  //Open Modal and Passing Current (clicked) Field object
  const handleModal = (allInfo) => {
    setModalData(allInfo);
    setShow(true);
  };

  //Update Placeholder and Button Name
  const updatePlaceholder=(placeholder,index)=>{
    console.log('changing field',placeholder,index);
    let oldFields = [...fields];
    oldFields[index].placeholder=placeholder;
    setFields(oldFields);
  }

  //Add New Input Field functionality
  const addInputField = (newFieldData) => {
    setShow(false);

    const { page, type, index, newFieldType } = newFieldData;
    let oldFields = [...fields];

    //New Field Object
    const newFieldObj = {
      page: page,
      type: newFieldType,
      placeholder: "Add placeholder here",
    };

    if (type === "button") {
      let newField = oldFields.splice(index, 0, newFieldObj);
    } else {
      let newField = oldFields.splice(index + 1, 0, newFieldObj);
    }

    setFields(oldFields);
    console.log("all fields", fields);
  };

  //Showing All Fields from fields Array
  const showFields = () => {
    let i = 1; //Page counter
    return fields.map((dt, index) => {
      return (
        <>
          <EditInputFields
            allInfo={{ ...dt, index: index }}
            handleModal={handleModal}
            addInputField={addInputField}
            removeFieldItem={removeFieldItem}
            updatePlaceholder={updatePlaceholder}
          />
          {dt.type === "button" && totalPage > i && (
            <div className="page-devider">
              <Button
                variant="dark"
                onClick={() => removePage(fields[index + 1].page)}
              >
                <FontAwesomeIcon icon={["far", "trash-alt"]} />
              </Button>
              <div className="horizontal-line-area">
                <div></div>
                <div>Page {++i}</div>
                <div></div>
              </div>
            </div>
          )}
        </>
      );
    });
  };

  console.log("All Fields ====", fields);
  return (
    <>
      <Navigation addNewPage={addNewPage} preview={preview} />
      <Container>
        <div className="col-lg-8 mx-auto">
          {/* Form Title */}
          <div className="form-group ">
            <input
              type="text"
              className="form-input form-title"
              name="formTitle"
              id="formTitle"
              placeholder="Form Title"
            />
          </div>
          {showFields()}
        </div>

        {/* Modal */}
        <ModalAdd
          show={show}
          onHide={() => setShow(false)}
          handleClose={handleClose}
          modalData={modalData}
          addInputField={addInputField}
        />

        <Modal
          show={previewModal}
         
          onHide={() => setPreviewModal(false)}
          dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body className="preview-body">
            <Container>
              <div className="col-lg-8 mx-auto poreview-form-holder">
                <h1>Form Headline</h1>
                <form>
                  
                </form>
              </div>
            </Container>         
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default Body;
