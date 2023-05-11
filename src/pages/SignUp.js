import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

const SignUp = () => {
  return (
    <Form className='sign_up'>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="sign_up_name"></Label>
            <Input id="sign_up_name" name="name" placeholder="Name" type="text" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail"></Label>
            <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword"></Label>
            <Input id="examplePassword" name="password" placeholder="password" type="password" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="confirmPassword"></Label>
            <Input id="confirmPassword" name="password" placeholder="confirm password" type="password" />
          </FormGroup>
        </Col>
      </Row>
      <div>
 

  <Button>
    Normal
  </Button>
  {' '}

</div>
    </Form>
  );
};

export default SignUp;
