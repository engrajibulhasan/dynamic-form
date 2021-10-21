import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Body.css";
import EditActionButtons from "./shared/EditActionButtons";
import EditInputFields from "./shared/EditInputFields";
import EditPageSubmitButton from "./shared/EditPageSubmitButton";
import ModalAdd from "./shared/ModalAdd";

function Body() {
  // Modal Code
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalData,setModalData]=useState({currentPage:'',prevIndex:'',prevFieldType:'',newFieldType:''});
  const [formName, setFormName] = useState("Form Title");
  const [fields, setFields] = useState([
    
    {
      page: 1,
      type: "button",
      placeholder: "Button Name",
    },
  ]);

  //Open Modal and Passing Current (clicked) Field object
  const handleModal=(allInfo)=>{
    console.log('inside handle modal',allInfo);
    setModalData(allInfo)
    setShow(true);
  }

  const addInputField = (newFieldData) => {
    //Modal Close
    setShow(false);

    const {page,type,index,newFieldType}=newFieldData;    
    let oldFields = [...fields];
    //New Field Object
    const newFieldObj = {
      page: page,
      type: newFieldType,
      placeholder: "Add placeholder here",
    };
    
    if(type==='button'){
      let newField = oldFields.splice(index,0,newFieldObj);
    }else{
      let newField = oldFields.splice(index+1,0,newFieldObj);
    }

    //Fields state updating with new data
    setFields(oldFields);
  };

  //Showing All Fields
  const showFields = () => {
      return fields.map((dt, index) => {
        return (
              <EditInputFields 
                allInfo={{...dt,index:index}} 
                handleModal={handleModal}
                addInputField={addInputField}
              />
        );
      })
    
  };


  return (
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
  );
}

export default Body;
