import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Row } from 'react-bootstrap'

function EditPageSubmitButton({btnInfo}) {
    
    return (
        <Row className="single-input-area mb-3">
            <div className="col-lg-2 action-buttons">
                <Button variant="light"><FontAwesomeIcon icon={["fas", "cog"]} /></Button>
            </div>
            <div className="col-lg-10">
                <Button variant="dark"><span>{btnInfo.placeholder} </span> <FontAwesomeIcon icon={["fas", "angle-right"]} /></Button>
            </div>
        </Row>
    )
}

export default EditPageSubmitButton
