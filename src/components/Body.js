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
      type: "text",
      placeholder: "First Name",
    },
    {
      page: 1,
      type: "button",
      placeholder: "Button Name",
    },
  ]);


  const handleModal=(currentPage,prevIndex,prevFieldType)=>{
    setModalData({currentPage:currentPage,prevIndex:prevIndex,prevFieldType:prevFieldType})
    setShow(true);
  }

  const addInputField = (
    currentPage,
    prevFieldIndex,
    prevFieldType,
    newFieldType
  ) => {
    //Modal Close
    setShow(false);

    console.log('££££££££££ field detail',currentPage, prevFieldIndex, prevFieldType, newFieldType);
    let oldFields = [...fields];
    console.log("old fields:", oldFields);
    const newFieldObj = {
      page: currentPage,
      type: newFieldType,
      placeholder: "Add placeholder here",
    };
    console.log("New Fields", newFieldObj);
    const newField = oldFields.unshift(newFieldObj);
    console.log("brand new field", oldFields);
    setFields(oldFields);
    console.log(fields);
    

    // if(!prevFieldIndex && !prevFieldIndex){
    //     setFields(fields.unshift({page:1,type:newFieldType,placeholder:'Add placeholder'}));
    //     console.log(fields);
    // }
  };

  // const showFields = fields.length === 1 ? (
  //   <>
  //     <Row className="single-input-area mb-3">
  //       <EditActionButtons  allInfo={{currentPage:fields[0].page,prevFieldType:null,prevIndex:null}} addInputField={addInputField}/>
  //     </Row>
  //     <EditPageSubmitButton />
  //   </>
  // ):(
  //   fields.map((dt,index)=>{
  //       return (
  //           <Row className="single-input-area mb-3">
  //               <EditActionButtons  allInfo={{currentPage:dt.page,prevFieldType:dt.type,prevIndex:index-1}} addInputField={addInputField}/>
  //               <EditInputFields allInfo={dt}/>
  //           </Row>
  //       )
  //   })
  // );

  const showFields = () => {
    let returnData = "";

    return fields.length === 1 ? (
      <div>
        <Row className="single-input-area mb-3">
          <EditActionButtons
            allInfo={{
              currentPage: fields[0].page,
              prevFieldType: null,
              prevIndex: null,
            }}
            handleModal={handleModal}
            addInputField={addInputField}
          />
        </Row>
        <EditPageSubmitButton />
      </div>
    ) : (
      fields.map((dt, index) => {
        return (
          dt.type==='button'?(
            <EditInputFields allInfo={dt} />
          ):(
            <Row className="single-input-area mb-3">
            <EditActionButtons
              allInfo={{
                currentPage: dt.page,
                prevFieldType: dt.type,
                prevIndex: index - 1,
              }}
              handleModal={handleModal}
              addInputField={addInputField}
            />
            <EditInputFields allInfo={dt} />
          </Row>
          )
        );
      })
    );
  };

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
