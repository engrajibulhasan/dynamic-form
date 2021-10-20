import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Body.css";
import EditActionButtons from "./shared/EditActionButtons";
import EditInputFields from "./shared/EditInputFields";
import EditPageSubmitButton from "./shared/EditPageSubmitButton";

function Body() {
  const [formName, setFormName] = useState("Form Title");
  const [fields, setFields] = useState([
    {
      page: 1,
      type: "button",
      placeholder: "Button Name",
    },
  ]);

  const addInputField=(currentPage,prevFieldIndex,prevFieldType,newFieldType)=>{
    console.log(currentPage,prevFieldIndex,prevFieldType,newFieldType);
    if(!prevFieldIndex && !prevFieldIndex){
        setFields(fields.unshift({page:1,type:newFieldType,placeholder:'Add placeholder'}));
        console.log(fields);
    }
  }

  const showFields = fields.length === 1 ? (
    <>
      <Row className="single-input-area mb-3">
        <EditActionButtons  allInfo={{currentPage:fields[0].page,prevFieldType:null,prevIndex:null}} addInputField={addInputField}/>
      </Row>
      <EditPageSubmitButton />
    </>
  ):(
    fields.map(dt=>dt.page)

  );

  //showFields();

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

        {showFields}
      </div>
    </Container>
  );
}

export default Body;
