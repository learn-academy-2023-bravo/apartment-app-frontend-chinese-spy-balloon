import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, FormGroup, Input, Row, Label } from "reactstrap"

const ApartmentNew = ({ createApartment }) => {
  const navigate = useNavigate();
  const [newApartment, setNewApartment] = useState({
    street: "",
    unit: "",
    city: "",
    state: "",
    square_footage: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    description: "",
  });
  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    createApartment(newApartment);
    navigate("/apartmentindex");
  };

  return (
    <>
    <Container className='form-container-new'>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="apartment-street"></Label>
              <Input
                id="apartment-street"
                name="street"
                placeholder="enter street name"
                type="text"
                onChange={handleChange}
                value={newApartment.street}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="apartment-unit"></Label>
              <Input
                id="apartment-unit"
                name="unit"
                placeholder="enter unit number"
                type="text"
                onChange={handleChange}
                value={newApartment.unit}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="apartment-city"></Label>
          <Input
            id="apartment-city"
            name="city"
            placeholder="city"
            type="text"
            onChange={handleChange}
            value={newApartment.city}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-state"></Label>
          <Input
            id="apartment-state"
            name="state"
            placeholder="state"
            type="text"
            onChange={handleChange}
            value={newApartment.state}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="apartment-square_footage"></Label>
              <Input
                id="apartment-square_footage"
                name="square footage"
                placeholder="square footage"
                type="text"
                onChange={handleChange}
                value={newApartment.square_footage}
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Label for="apartment-price"></Label>
              <Input
                id="apartment-price"
                name="price"
                placeholder="price"
                type="text"
                onChange={handleChange}
                value={newApartment.price}
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Label for="apartment-bedrooms"></Label>
              <Input
                id="apartment-bedrooms"
                name="bedrooms"
                placeholder="bedrooms"
                type="text"
                onChange={handleChange}
                value={newApartment.bedrooms}
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Label for="apartment-bathrooms"></Label>
              <Input
                id="apartment-bathrooms"
                name="bathrooms"
                placeholder="bathrooms"
                type="text"
                onChange={handleChange}
                value={newApartment.bathrooms}
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Label for="apartment-pets"></Label>
              <Input
                id="apartment-pets"
                name="pets"
                placeholder="pets"
                type="text"
                onChange={handleChange}
                value={newApartment.pets}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="apartment-image"></Label>
              <Input
                id="apartment-image"
                name="image"
                placeholder="enter image URL"
                type="text"
                onChange={handleChange}
                value={newApartment.image}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="apartment-description"></Label>
              <Input
                id="apartment-description"
                name="description"
                placeholder="enter description"
                type="text"
                onChange={handleChange}
                value={newApartment.description}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={handleClick}>Submit</Button>
      </Form>
      </Container>
    </>
  );
};

export default ApartmentNew;
