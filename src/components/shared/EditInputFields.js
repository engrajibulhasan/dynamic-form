import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import EditActionButtons from './EditActionButtons';
import EditPageSubmitButton from './EditPageSubmitButton';

function EditInputFields({allInfo,handleModal,addInputField}) {
    const {page,type,placeholder,index}=allInfo;
    console.log("EDitIF,",allInfo);
    const filedFilter=()=>{
        if(type==='textarea'){
            console.log('text atrea:',allInfo);
            return (
                <>
                    <EditActionButtons
                        allInfo={allInfo}
                        handleModal={handleModal}
                        addInputField={addInputField}
                    />
                    <div className="col-lg-10">
                    <Form.Control as="textarea" rows={3}  placeholder={placeholder}/>
                    </div>
                </>
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
                />
                </Row>
                <EditPageSubmitButton btnInfo={allInfo}/>
                </>
                )
        }else{
            return (
                <>
                    <EditActionButtons
                        allInfo={allInfo}
                        handleModal={handleModal}
                        addInputField={addInputField}
                    />
                    <div className="col-lg-10">
                        <Form.Control type={type} placeholder={placeholder} />
                    </div>
                </>
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
