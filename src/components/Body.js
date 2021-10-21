import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Body.css";
import Navigation from "./Navigation";
import EditActionButtons from "./shared/EditActionButtons";
import EditInputFields from "./shared/EditInputFields";
import EditPageSubmitButton from "./shared/EditPageSubmitButton";
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


  // Handle New Page
  const [totalPage, setTotalPage] = useState(1);
  const addNewPage = () => {
    let oldFields = [...fields];
    const currentPage = totalPage + 1;
    const newPageBtn = {
      page: currentPage,
      type: "button",
      placeholder: "Button Page " + currentPage,
    };
    oldFields.push(newPageBtn);
    setFields(oldFields);
    setTotalPage(currentPage);
  };


  const removePage=(pageNumber)=>{
    setTotalPage(totalPage-1);
    console.log('Remove page number',pageNumber);
  }

  //Open Modal and Passing Current (clicked) Field object
  const handleModal = (allInfo) => {
    //console.log("inside handle modal", allInfo);
    setModalData(allInfo);
    setShow(true);
  };

  const addInputField = (newFieldData) => {
    //Modal Close
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

    //Fields state updating with new data
    setFields(oldFields);
    console.log('all fields',fields);
  };

  //Showing All Fields
  const showFields = () => {
    return fields.map((dt, index) => {
      
      return (
        <>
          <EditInputFields
            allInfo={{ ...dt, index: index }}
            handleModal={handleModal}
            addInputField={addInputField}
          />
          {dt.type === "button" && totalPage > 1 && totalPage > dt.page && (
            
            <div className="page-devider">
              <Button variant="dark" onClick={()=>removePage(dt.page+1)}>
                <FontAwesomeIcon icon={["far", "trash-alt"]} />
              </Button>
              <div className="horizontal-line-area">
                 <div></div>
                <div>Page {dt.page+1}</div>
                <div></div>`
              </div>
            </div>
            
          )}
        </>
      );
    });
  };

  return (
    <>
      <Navigation addNewPage={addNewPage} />
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
      </Container>
    </>
  );
}

export default Body;
