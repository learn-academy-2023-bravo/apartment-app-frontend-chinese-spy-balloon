import { useNavigate, useParams } from "react-router-dom"
import { Button, Col, Form, FormGroup, Input, Row, Label } from "reactstrap"
import { useState } from "react"

const ApartmentEdit = ({ apartments, updateApartment }) => {
  const { id } = useParams()
  console.log(id)
  console.log(typeof apartments)
  let currentApartment = apartments?.find((apartment) => apartment.id === +id)

  const [editApartment, setEditApartment] = useState({
    street: currentApartment.street,
    unit: currentApartment.unit,
    city: currentApartment.city,
    state: currentApartment.state,
    square_footage: currentApartment.square_footage,
    price: currentApartment.price,
    bedrooms: currentApartment.bedrooms,
    bathrooms: currentApartment.bathrooms,
    pets: currentApartment.pets,
    image: currentApartment.image,
    description: currentApartment.description,
  })

  const handleChange = (e) => {
    setEditApartment({ ...editApartment, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
    updateApartment(editApartment, currentApartment.id)
    navigate("/apartmentindex")
  }

  return (
    <>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="apartment-street">Street</Label>
              <Input
                id="apartment-street"
                name="street"
                placeholder="Enter Street Name"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="apartment-unit">Unit</Label>
              <Input
                id="apartment-unit"
                name="unit"
                placeholder="Enter Unit Number"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="apartment-city">City</Label>
          <Input
            id="apartment-city"
            name="city"
            placeholder="city"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-state">State</Label>
          <Input
            id="apartment-state"
            name="state"
            placeholder="state"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="apartment-square_footage">Square Footage</Label>
              <Input
                id="apartment-square_footage"
                name="square footage"
                placeholder="square footage"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Label for="apartment-price">Price</Label>
              <Input
                id="apartment-price"
                name="price"
                placeholder="price"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Label for="apartment-bedrooms">Bedroom</Label>
              <Input
                id="apartment-bedrooms"
                name="bedrooms"
                placeholder="bedrooms"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Label for="apartment-bathrooms">Bathrooms</Label>
              <Input
                id="apartment-bathrooms"
                name="bathrooms"
                placeholder="bathrooms"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Label for="apartment-pets">Pets</Label>
              <Input
                id="apartment-pets"
                name="pets"
                placeholder="pets"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="apartment-image">Image</Label>
              <Input
                id="apartment-image"
                name="image"
                placeholder="Enter Image URL"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="apartment-description">Description</Label>
              <Input
                id="apartment-description"
                name="description"
                placeholder="Enter description URL"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
}

export default ApartmentEdit
