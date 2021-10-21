import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import EditActionButtons from './EditActionButtons';
import EditPageSubmitButton from './EditPageSubmitButton';

function EditInputFields({allInfo,handleModal,addInputField,removeFieldItem}) {
    const {page,type,placeholder,index}=allInfo;
   
    const filedFilter=()=>{
        if(type==='textarea'){
            return (
                <Row className="single-input-area mb-3">
                    <EditActionButtons
                        allInfo={allInfo}
                        handleModal={handleModal}
                        addInputField={addInputField}
                        removeFieldItem={removeFieldItem}
                    />
                    <div className="col-lg-10">
                    <Form.Control as="textarea" rows={3}  placeholder={placeholder}/>
                    </div>
                </Row>
            );
        }
        else if(type==='button'){
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
                <EditPageSubmitButton btnInfo={allInfo}/>
                </>
                )
        }else{
            return (
                <Row className="single-input-area mb-3">
                    <EditActionButtons
                        allInfo={allInfo}
                        handleModal={handleModal}
                        addInputField={addInputField}
                        removeFieldItem={removeFieldItem}
                    />
                    <div className="col-lg-10">
                        <Form.Control type={type} placeholder={placeholder} />
                    </div>
                </Row>
            )
        }
    }
    return (
       
                <>
                    {filedFilter()}
                </>
                
            
       
        
        
    )
}

export default EditInputFields
