import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Body.css";
import Navigation from "./Navigation";
import EditInputFields from "./shared/EditInputFields";
import ModalAdd from "./shared/ModalAdd";
import Thankyou from "./shared/Thankyou";
import CkEditor from "./shared/CkEditor";
import { v4 as uuidv4 } from 'uuid';


function Body() {
 
  //console.log(uuidv4());
  const [formName, setFormName] = useState('');
  const [fields, setFields] = useState([
    {
      id:uuidv4(),
      page: 1,
      type: "button",
      placeholder: "Button Page 1",
      name:uuidv4()
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

  // Preview Modal State
  const [previewModal, setPreviewModal] = useState(false);
  const [previewFields, setPreviewFields] = useState([]);
  // Preview Modal ends

  //Set preview single steps fields
  const [previewFieldData,setPreviewFieldData]=useState();

  //preview Modal
  //Single Step Data
  const [previewData, setPreviewData] = useState([]);
  const preview = () => {
    setPreviewModal(true); //Modal
    let i=-1;
    let currentPage=1;
    const cloneAndModifyFields=fields.filter(dt=>dt.type!='button').map((dt,index)=>{
        if(dt.page>currentPage){
          currentPage=dt.page;
          i=-1;
        }
        i++;
        return {id:''+dt.page+i,placeholder:dt.placeholder,value:''};
    })
    setPreviewFieldData(cloneAndModifyFields);
    const filteredData = fields.filter((dt) => dt.page === 1); //Filter
    setPreviewData(filteredData && filteredData); //State Update
  };


  
  //For Next and Prev button
  const handleNextPreviewSteps = (step) => {
    console.log("previous step", step);
    let nextPage = fields.find((dt) => dt.page > step); //Next Page
    console.log("Next page", nextPage);
    if (nextPage) {
      console.log("Smart filter:", nextPage.page);
      let filteredData = fields.filter((dt) => dt.page === nextPage.page);
      setPreviewData(filteredData);
      console.log("Button", previewData);
    } else {
      setPreviewData("");
    }
  };

  
  //Haandle preview fields data [[[Final Data of preview]]]
  const handlePreviewField = (e,index,page) => {  
    const id=''+page+index;
    let oldData=[...previewFieldData];
    const objIndex=oldData.findIndex(dt=>dt.id===id);
    oldData[objIndex].value=e.target.value;
    setPreviewFieldData(oldData);
    console.log('##### Form Final Value :: ',oldData)
  };




  // Add New Page functionality
  const [totalPage, setTotalPage] = useState(1);
  const addNewPage = () => {
    let oldFields = [...fields];
    //Generating New Page Number
    const currentPage = fields[fields.length - 1].page + 1;
    const newPageBtn = {
      page: currentPage,
      type: "button",
      placeholder: "Next Page",
      value: "",
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
  const updatePlaceholder = (placeholder, index) => {
    console.log("changing field", placeholder, index);
    let oldFields = [...fields];
    oldFields[index].placeholder = placeholder;
    setFields(oldFields);
  };

  //Add New Input Field functionality
  const addInputField = (newFieldData) => {
    setShow(false); //modal hiding
    const { page, type, index, newFieldType } = newFieldData;
    let oldFields = [...fields];

    //New Field Object
    let newFieldObj = {
      id:uuidv4(),
      page: page,
      type: newFieldType,
      placeholder: "Add placeholder here",
      name:uuidv4(),
    };

    if (type === "button") {
      oldFields.splice(index, 0, newFieldObj);
    } else {
      oldFields.splice(index+1, 0, newFieldObj);
    }
    setFields(oldFields);
    console.log("all fields", oldFields);
  };

  //Showing All Fields from fields Array
  const showFields = () => {
    let i = 1; //Page counter
    return fields.map((dt, index) => {
      return (
        <div key={dt.id}>
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
        </div>
      );
    });
  };

  return (
    <>
      <Navigation addNewPage={addNewPage} preview={preview} />
      
      <Container>
        <div className="col-lg-8 mx-auto">
          {/* Form Title */}
         
            <CkEditor setFormName={setFormName}></CkEditor>
          
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

        {/* Preview Modal */}
        <Modal
          show={previewModal}
          onHide={() => setPreviewModal(false)}
          dialogClassName="modal-100w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title>Cover Image goes here</Modal.Title>
            <Button onClick={() => setPreviewModal(false)}>
              <FontAwesomeIcon icon={["fas", "edit"]} /> Back to Edit
            </Button>
          </Modal.Header>

          <Modal.Body className="preview-body">
            <Container>
              <div className="col-lg-8 mx-auto poreview-form-holder">
              
                {previewData && <div dangerouslySetInnerHTML={{__html: formName}} ></div>}
                <form>
                    {previewData ? (
                      previewData.map((dt, index) => {
                        if (dt.type === "button") {
                          return (
                            
                              <Button 
                                variant="dark"
                                name={dt.name}
                                key={dt.id}
                                onClick={() =>
                                  handleNextPreviewSteps(dt.page)
                                }
                              >
                                {dt.placeholder}
                              </Button>
                            
                          );
                        }
                        if (dt.type === "textarea") {
                          return (
                            <Form.Group className="mb-3" key={dt.id}>
                              <InputGroup>
                                <InputGroup.Text>
                                  <FontAwesomeIcon
                                    icon={["fas", "align-justify"]}
                                  />
                                </InputGroup.Text>
                                <Form.Control
                                  as="textarea"
                                  name={dt.name}
                                  rows={3}
                                  placeholder={dt.placeholder}
                                  controlId={dt.id}
                                  onBlur={(e) =>
                                    handlePreviewField(e,index,dt.page)
                                  }
                                />
                              </InputGroup>
                            </Form.Group>
                          );
                        } else {
                          return (
                            <Form.Group className="mb-3"  key={dt.id}>
                              <InputGroup>
                                <InputGroup.Text>
                                  {dt.type === "text" ? (
                                    <FontAwesomeIcon
                                      icon={["fas", "align-left"]}
                                    />
                                  ) : dt.type === "number" ? (
                                    <FontAwesomeIcon icon={["fas", "phone"]} />
                                  ):(
                                    <FontAwesomeIcon icon={["fas", "at"]} />
                                  )
                                }
                                </InputGroup.Text>
                                <Form.Control
                                  placeholder={dt.placeholder}
                                  controlId={dt.id}
                                  name={dt.id}
                                  onBlur={(e) =>
                                    handlePreviewField(e,index,dt.page)
                                  }
                                />
                              </InputGroup>
                            </Form.Group>
                          );
                        }
                      })
                    ) : (
                      <Thankyou />
                    )}
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
