import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Row } from 'react-bootstrap'

function EditActionButtons({allInfo,addInputField}) {
    const {currentPage,prevFieldType,prevIndex}=allInfo;
    return (
        <div className="col-lg-2 action-buttons">
            <Button variant="light"><FontAwesomeIcon icon={["far", "trash-alt"]} /></Button>
            <Button variant="light" onClick={()=>addInputField(currentPage,prevIndex,prevFieldType,'text')}><FontAwesomeIcon icon={["fas", "plus"]} /></Button>
            <Button variant="light"><FontAwesomeIcon icon={["fas", "grip-vertical"]} /></Button>
        </div>
    )
}

export default EditActionButtons
