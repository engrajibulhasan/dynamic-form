import React from 'react'
import { Button, Form } from 'react-bootstrap'
import EditPageSubmitButton from './EditPageSubmitButton';

function EditInputFields({allInfo}) {
    const {type,placeholder}=allInfo;
    const filedFilter=()=>{
        if(type==='textarea'){
            return (
                <div className="col-lg-10">
                <Form.Control as="textarea" rows={3}  placeholder={placeholder}/>
                </div>
            );
        }
        else if(type==='button'){
            return <EditPageSubmitButton btnInfo={allInfo}/>
        }else{
            return (
                <div className="col-lg-10">
                    <Form.Control type={type} placeholder={placeholder} />
                </div>

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
