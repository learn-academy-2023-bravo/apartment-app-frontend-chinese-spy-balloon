import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Col, Form, FormGroup, Input, Row, Label } from "reactstrap"

const SignIn = () => {
  return (
    <>
      <Form className="sign-in-form">
        <Col md={4}>
          <div className="form-group-container">
            <FormGroup>
              <Label for="apartment-street"></Label>
              <Input
                id="apartment-street"
                name="street"
                placeholder="login email"
                type="text"
                // onChange={handleChange}
                // value={newApartment.street}
              />
            </FormGroup>
          </div>
          <div className="form-group-container">
            <FormGroup>
              <Label for="apartment-street"></Label>
              <Input
                id="apartment-street"
                name="street"
                placeholder="please enter password"
                type="text"
                // onChange={handleChange}
                // value={newApartment.street}
              />
            </FormGroup>
          </div>
          <div className="form-group-container">
            <Button>sign in</Button>
          </div>
        </Col>
      </Form>
    </>
  )
}

export default SignIn
