import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp =
  ({ createUser }) => {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
      name: "",
      email: "",
      password: "",
    })

    const handleChange = (e) => {
      setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
      createUser(newUser)
      navigate("/signin")
    }
    return (
      <Form className="sign_up">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="sign_up_name"></Label>
              <Input
                id="sign_up_name"
                name="name"
                placeholder="Name"
                type="text"
                onChange={handleChange}
                value={newUser.name}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail"></Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                onChange={handleChange}
                value={newUser.email}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword"></Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password"
                type="password"
                onChange={handleChange}
                value={newUser.password}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="confirmPassword"></Label>
              <Input
                id="confirmPassword"
                name="confirPassword"
                placeholder="confirm password"
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>
        <div>
          <Button onClick={handleClick}>Submit</Button>
        </div>
      </Form>
    )
  }

export default SignUp
