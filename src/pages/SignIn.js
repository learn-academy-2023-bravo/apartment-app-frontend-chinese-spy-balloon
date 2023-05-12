import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Col, Form, FormGroup, Input, Row, Label } from "reactstrap"

const SignIn = ({ signin, currentUser }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  // const handleChange = (e) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    signin(email)
    currentUser ? navigate("/apartmentprotectedindex") : navigate("/signin")
  }
  return (
    <>
      <Form className="sign-in-form" onSubmit={handleSubmit}>
        <Col md={4}>
          <div className="form-group-container">
            <FormGroup>
              <Label for="apartment-street"></Label>
              <Input
                id="email"
                name="email"
                placeholder="login email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                // value={currentUser.email}
              />
            </FormGroup>
          </div>
          <div className="form-group-container">
            <Button type="submit">sign in</Button>
          </div>
        </Col>
      </Form>
    </>
  )
}

export default SignIn
