import React from 'react'
import { Form } from 'react-bootstrap'

function EditInputFields(props) {
    return (
        <>
            <div className="col-lg-10">
                <Form.Control type="text" placeholder="Type Placeholder Text" />
            </div>
        </>
    )
}

export default EditInputFields
